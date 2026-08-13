# FAQ Contact Form

_Started 2026-08-13 05:36 UTC_

---

## User

Continuing from "Animation and navigation redesign".

## Assistant

We've been building the Snapt Carib website — a booking platform for photographers and videographers across Saint Lucia. The site needed animations, a redesigned top nav and footer, a hero phone that "pops" with particle effects, and a new "Explore the App" page showcasing the platform's features.

Key decisions made:
- Used the design-system components (VerifiedBadge, StatusTag) to keep the UI consistent across pages.
- Built an "Explore the App" page with alternating left-right screenshot layouts and pop-out cards, inspired by the MagicUI mobile showcase pattern.
- Added a cursor-tracking particle swarm behind the hero phone, set to 0.55 opacity and non-interactive so the phone stays droppable.
- Implemented the "Shot on Snapt" accordion gallery (five expandable panels) with your uploaded photos as placeholders; real work goes into the `portfolioItems` list in AccordionGallery.jsx.
- Added warm pale-gold rays fanning down-left in the hero's top-right corner at 0.5 opacity.
- Wired in real copy: 68% creator earnings, 7-day payouts, all 19 Saint Lucia areas, GA4 analytics, and snaptcarib.app domain.
- Hero badges now use design-system chips, keeping brand consistency.

Current state: The homepage has a fully animated hero (masked headline, particle swarm, rays, badges, pop-out cards), a working accordion gallery, and the footer is fleshed out. The "Explore the App" page is live with alternating screenshots and pop-out descriptions, ready for you to swap in real app screenshots.

Next: Drop your app screenshots (mobile phone frames) into the Explore page placeholder slots and your portfolio work into AccordionGallery.jsx. Store links remain `#` until live.

Files involved: Snapt Website.dc.html, Explore the App.dc.html, SwarmCursor.jsx, SideRays.jsx, AccordionGallery.jsx, MaskedHeading.jsx.

## User

Create a contact form under FAQ section. Use this form type. Ensure you use the current color scheme and ensure to collect, First name, Last name, email address body of the message. All of those must be mandatory. 

import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <StyledWrapper>
      <form className="form">
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input className="input" type="text" placeholder required />
            <span>Firstname</span>
          </label>
          <label>
            <input className="input" type="text" placeholder required />
            <span>Lastname</span>
          </label>
        </div>  
        <label>
          <input className="input" type="email" placeholder required />
          <span>Email</span>
        </label> 
        <label>
          <input className="input" type="password" placeholder required />
          <span>Password</span>
        </label>
        <label>
          <input className="input" type="password" placeholder required />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #00bfff;
  }

  .message, 
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
    color: #00bfff;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: 100%;
    padding: 20px 05px 05px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    background-color: #00bfff;
  }

  .submit:hover {
    background-color: #00bfff96;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;

export default Form;

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Added a **Contact** section directly under the FAQ — floating-label form on the ink card (`#1A1A1A`/`#333`) with yellow `#FFB800` labels, focus rings, pulsing title dot, and the yellow-glow submit button. First name, last name, email, and message are all `required`; submit swaps to a green confirmation with a "Send another" reset.

Submission is a placeholder state only — no email is sent until it's wired to your inbox.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Fixed — all four contact fields (plus the download-section email input) now use `required="{{ true }}"`, so empty submits are blocked by native validation instead of jumping to the success state.

## User

At the bottom of the footer, add this form asking users to subscribe to our newsletter

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Newsletter subscribe pill added at the bottom of the footer, above the copyright line — ink `#1A1A1A` pill with a yellow inbox icon, yellow Subscribe button, and the arrow sliding in with the jello animation on hover. Email is required; submit swaps to a green "You're on the list." confirmation.

Not wired to a mailing provider yet.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Newsletter pill now shrinks with its container — `width:100%; max-width:338px; box-sizing:border-box` (same 55px outer height as before), input flexes down to zero, button pinned at 104px. No horizontal overflow at 320px.

