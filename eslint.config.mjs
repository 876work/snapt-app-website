import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

const config = [
  // The design bundle is reference material exported from Claude Design.
  { ignores: ['.next/**', 'node_modules/**', 'project/**', 'chats/**'] },
  ...coreWebVitals,
  ...typescript,
];

export default config;
