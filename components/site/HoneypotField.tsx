/**
 * Netlify Forms honeypot.
 *
 * Hidden from real users, so anything that arrives with it filled in came from
 * a bot and Netlify discards the submission. Paired with
 * `data-netlify-honeypot="bot-field"` on the form and a matching `bot-field`
 * input in `public/__forms.html`.
 *
 * `hidden` keeps it out of the layout and the accessibility tree; `tabIndex=-1`
 * keeps it out of the keyboard order for anyone who overrides that.
 */
export default function HoneypotField() {
  return (
    <p hidden aria-hidden="true">
      <label>
        Don&rsquo;t fill this out if you&rsquo;re human:
        <input name="bot-field" tabIndex={-1} autoComplete="off" />
      </label>
    </p>
  );
}
