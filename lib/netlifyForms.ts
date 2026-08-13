/**
 * Netlify Forms submission helper.
 *
 * Netlify accepts a form submission as a urlencoded POST to any path on the
 * site, provided the body carries a `form-name` matching a form the build bot
 * registered. Because the Next.js runtime serves pages rather than leaving
 * parseable HTML in the publish directory, the forms are registered by the
 * static `public/__forms.html` file — which is also what we post to.
 *
 * Keep the form names and field names here in sync with `public/__forms.html`.
 */

export const NETLIFY_FORMS_ENDPOINT = '/__forms.html';

export const NETLIFY_FORM_NAMES = {
  contact: 'contact',
  newsletter: 'newsletter',
  appLink: 'app-link',
} as const;

export type NetlifyFormName = (typeof NETLIFY_FORM_NAMES)[keyof typeof NETLIFY_FORM_NAMES];

/**
 * Posts a form's fields to Netlify. Throws when the submission does not land,
 * so callers can surface a failure rather than showing a false confirmation.
 */
export async function submitNetlifyForm(formName: NetlifyFormName, form: HTMLFormElement) {
  const body = new URLSearchParams();
  // `form-name` must win even if the form also carries a hidden field for it.
  body.set('form-name', formName);
  for (const [key, value] of new FormData(form).entries()) {
    if (key === 'form-name' || typeof value !== 'string') continue;
    body.append(key, value);
  }

  const response = await fetch(NETLIFY_FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error(`Netlify form "${formName}" failed with ${response.status}`);
  }
}
