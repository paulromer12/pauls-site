import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className="about-me-letter"> {/* Added a class for styling */}
      <h2>About Me</h2>
      <p>This is the About Me page. More content will be added here soon.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Sincerely,
      </p>
      <img src="/LogoWhite.png" alt="Paul Romer Signature" className="signature-image" />
    </div>
  );
}