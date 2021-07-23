import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div>
        <div className="container">
          <div className="footer-text">
            <p>&#169; alexandra kudriashova</p>
            <p>
              email:{" "}
              <a href="mailto: alexa.curlie@gmail.com">
                alexa.curlie@gmail.com
              </a>
            </p>
            <p>
              phone:{" "}
              <a href="tel:+79650159015" className="tel">
                +7 965 015-9-015
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
