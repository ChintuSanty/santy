import React from "react";
import { Link } from "react-router-dom";

const PersonalInfo = () =>
{
    return (
      <>
        <div className="salva-about-personal">
          <h3 className="salv-about-personla-title dark-about-personal-title mb-0 w-text sm-md-font inter-font-700">
            Personal Informations
          </h3>
          <div className="row personal-info-row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 personal-first-col">
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  First Name:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  Santhosh Prabakar
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Last Name:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  Badhri
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Address:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  Hyderabad, India
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Website:
                </span>
                <span className="pers-info-title">
                  <Link
                    to="https://santy.in"
                    target="_blank"
                    className="dark-sec-color sm-md-font inter-font-400 links m-2"
                  >
                    santy.in
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 personal-second-col">
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Study:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  Nexus College of Science &amp; Technology
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Degree:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  {" "}
                  B.Tech (2012)
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  E-Mail:
                </span>
                <span className="pers-info-title">
                  <Link
                    to="mailto:hello@santy.in"
                    className="dark-sec-color sm-md-font inter-font-400 links m-2"
                  >
                    hello@santy.in
                  </Link>
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Phone:
                </span>
                <span className="pers-info-title">
                  <Link
                    to="tel:+916302029873"
                    className="dark-sec-color sm-md-font inter-font-400 links m-2"
                  >
                    +91 63020 29873
                  </Link>
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  GitHub:
                </span>
                <span className="pers-info-title">
                  <Link
                    to="https://github.com/ChintuSanty"
                    target="_blank"
                    className="dark-sec-color sm-md-font inter-font-400 links m-2"
                  >
                    github.com/ChintuSanty
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default PersonalInfo;
