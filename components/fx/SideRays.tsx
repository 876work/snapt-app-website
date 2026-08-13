'use client';

/**
 * Adapted from React Bits <SideRays /> (project/SideRays.jsx).
 * Ported to TypeScript; `ogl` is an npm dependency here rather than a CDN import.
 *
 * Renders a full-bleed WebGL canvas of light rays fanning from one corner.
 * The canvas is `pointer-events: none` and only animates while on screen.
 */

import { useEffect, useRef, useState } from 'react';

export type RayOrigin = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface SideRaysProps {
  speed?: number;
  rayColor1?: string;
  rayColor2?: string;
  intensity?: number;
  spread?: number;
  origin?: RayOrigin;
  tilt?: number;
  saturation?: number;
  blend?: number;
  falloff?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(String(hex || ''));
  return m
    ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255]
    : [1, 1, 1];
};

const originToFlip = (origin: RayOrigin): [number, number] => {
  switch (origin) {
    case 'top-left':
      return [1, 0];
    case 'bottom-right':
      return [0, 1];
    case 'bottom-left':
      return [1, 1];
    default:
      return [0, 0];
  }
};

const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAG = `precision highp float;

uniform float iTime;
uniform vec2 iResolution;
uniform float iSpeed;
uniform vec3 iRayColor1;
uniform vec3 iRayColor2;
uniform float iIntensity;
uniform float iSpread;
uniform float iFlipX;
uniform float iFlipY;
uniform float iTilt;
uniform float iSaturation;
uniform float iBlend;
uniform float iFalloff;
uniform float iOpacity;

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);
  return clamp(
    (0.45 + 0.15 * sin(cosAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-cosAngle * seedB + iTime * speed)),
    0.0, 1.0) *
    clamp((iResolution.x - length(sourceToCoord)) / iResolution.x, 0.5, 1.0);
}

void main() {
  vec2 fragCoord = gl_FragCoord.xy;
  if (iFlipX > 0.5) fragCoord.x = iResolution.x - fragCoord.x;
  if (iFlipY > 0.5) fragCoord.y = iResolution.y - fragCoord.y;

  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);
  vec2 rayPos = vec2(iResolution.x * 1.1, -0.5 * iResolution.y);

  float tiltRad = iTilt * 3.14159265 / 180.0;
  float cs = cos(tiltRad);
  float sn = sin(tiltRad);
  vec2 rel = coord - rayPos;
  vec2 tiltedCoord = vec2(rel.x * cs - rel.y * sn, rel.x * sn + rel.y * cs) + rayPos;

  float halfSpread = iSpread * 0.275;
  vec2 rayRefDir1 = normalize(vec2(cos(0.785398 + halfSpread), sin(0.785398 + halfSpread)));
  vec2 rayRefDir2 = normalize(vec2(cos(0.785398 - halfSpread), sin(0.785398 - halfSpread)));

  vec4 rays1 = vec4(iRayColor1, 1.0) * rayStrength(rayPos, rayRefDir1, tiltedCoord, 36.2214, 21.11349, iSpeed);
  vec4 rays2 = vec4(iRayColor2, 1.0) * rayStrength(rayPos, rayRefDir2, tiltedCoord, 22.3991, 18.0234, iSpeed * 0.2);

  vec4 color = rays1 * (1.0 - iBlend) * 0.9 + rays2 * iBlend * 0.9;

  float distanceToLight = length(fragCoord.xy - vec2(rayPos.x, iResolution.y - rayPos.y)) / iResolution.y;
  float brightness = iIntensity * 0.4 / pow(max(distanceToLight, 0.001), iFalloff);
  color.rgb *= brightness;

  float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  color.rgb = mix(vec3(gray), color.rgb, iSaturation);

  color.a = max(color.r, max(color.g, color.b)) * iOpacity;
  gl_FragColor = color;
}`;

export default function SideRays({
  speed = 1.0,
  rayColor1 = '#ffaa6e',
  rayColor2 = '#96c8ff',
  intensity = 1.0,
  spread = 1.0,
  origin = 'top-right',
  tilt = 0,
  saturation = 1.0,
  blend = 0.78,
  falloff = 2.0,
  opacity = 1.0,
  className,
  style,
}: SideRaysProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniformsRef = useRef<Record<string, { value: unknown }> | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    let disposed = false;

    (async () => {
      let ogl: typeof import('ogl');
      try {
        ogl = await import('ogl');
      } catch (e) {
        console.warn('SideRays: ogl failed to load', e);
        return;
      }
      const container = containerRef.current;
      if (disposed || !container) return;
      const { Renderer, Program, Triangle, Mesh } = ogl;

      const renderer = new Renderer({
        dpr: Math.min(window.devicePixelRatio || 1, 2),
        alpha: true,
      });
      const gl = renderer.gl;
      gl.canvas.style.width = '100%';
      gl.canvas.style.height = '100%';
      gl.canvas.style.display = 'block';
      while (container.firstChild) container.removeChild(container.firstChild);
      container.appendChild(gl.canvas);

      const [flipX, flipY] = originToFlip(origin);
      const uniforms = {
        iTime: { value: 0 },
        iResolution: { value: [1, 1] },
        iSpeed: { value: speed },
        iRayColor1: { value: hexToRgb(rayColor1) },
        iRayColor2: { value: hexToRgb(rayColor2) },
        iIntensity: { value: intensity },
        iSpread: { value: spread },
        iFlipX: { value: flipX },
        iFlipY: { value: flipY },
        iTilt: { value: tilt },
        iSaturation: { value: saturation },
        iBlend: { value: blend },
        iFalloff: { value: falloff },
        iOpacity: { value: opacity },
      };
      uniformsRef.current = uniforms as unknown as Record<string, { value: unknown }>;

      const mesh = new Mesh(gl, {
        geometry: new Triangle(gl),
        program: new Program(gl, { vertex: VERT, fragment: FRAG, uniforms }),
      });

      let frameId = 0;
      const updateSize = () => {
        if (!containerRef.current) return;
        renderer.dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        renderer.setSize(w, h);
        uniforms.iResolution.value = [w * renderer.dpr, h * renderer.dpr];
      };
      const loop = (t: number) => {
        uniforms.iTime.value = t * 0.001;
        try {
          renderer.render({ scene: mesh });
          frameId = requestAnimationFrame(loop);
        } catch {
          /* context lost — stop the loop */
        }
      };
      window.addEventListener('resize', updateSize);
      updateSize();
      frameId = requestAnimationFrame(loop);

      cleanupRef.current = () => {
        if (frameId) cancelAnimationFrame(frameId);
        window.removeEventListener('resize', updateSize);
        try {
          const lose = renderer.gl.getExtension('WEBGL_lose_context');
          if (lose) lose.loseContext();
          const canvas = renderer.gl.canvas;
          if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
        } catch {
          /* already torn down */
        }
        uniformsRef.current = null;
      };
    })();

    return () => {
      disposed = true;
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [
    isVisible,
    speed,
    rayColor1,
    rayColor2,
    intensity,
    spread,
    origin,
    tilt,
    saturation,
    blend,
    falloff,
    opacity,
  ]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
}
