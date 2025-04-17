import React from "react";
import WeekendModeToggle from "./home/WeekendModeToggle";
import { Link } from "react-router-dom";

const Footer = () =>
{
    return (
      <>
        <footer
          className="salv-footer-content salv-dark-footer"
          id="slv-footer"
        >
          <div className="salv-footer-wrap">
            <p className="salv-copyright-content mb-0 sm-font inter-font-400 w-text">
              Copyright © 2025 ❤{" "}
              <Link
                to="https://santy.in"
                className="w-text"
                target="_blank"
              >
                Santy
              </Link>
            </p>
            {/* <WeekendModeToggle /> */}
          </div>
        </footer>
      </>
    );
};
export default Footer;