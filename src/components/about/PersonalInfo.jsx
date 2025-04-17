import React from "react";
import { Link } from "react-router-dom";

const PersonalInfo = () =>
{
    return (
      <>
        <div className="salv-about-personal">
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
                  Vidyanagar, Hyderabad
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Age:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  34 Years
                </span>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 personal-second-col">
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Study:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  Nexus College of Engineering
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  Degree:
                </span>
                <span className="pers-info-title dark-sec-color sm-md-font inter-font-400 m-2">
                  {" "}
                  B-Tech(E.C.E)
                </span>
              </div>
              <div className="pers-info-wrap">
                <span className="pers-info-title w-text sm-md-font inter-font-400">
                  E-Mail:
                </span>
                <span className="pers-info-title">
                  <Link
                    to="mailto:hello@salva.com"
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
                    to="tel:+918142546693"
                    className="dark-sec-color sm-md-font inter-font-400 links m-2"
                  >
                    +91 814 254 6693
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
