import React from "react";

const Programming = () =>
{
    return (
      <>
        <div className="row salv-about-skills about-animation">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6 salv-about-programming">
            <h4 className="salv-about-personla-title about-heading-animation dark-about-personal-title mb-0 w-text sm-md-font inter-font-700 mb-0">
              programming
            </h4>
            <div className="salv-progra-progressbar">
              <div className="salv-progress-inner" data-value="75">
                <span className="salv-prog-bar-text">
                  <span className="salv-label sm-md-font inter-font-500 w-text">
                    Development
                  </span>
                  <span className="salv-prog-number sm-md-font inter-font-500 dark-sec-color">
                    85%
                  </span>
                </span>
                <div className="salv-back-color">
                  <div className="bar open">
                    <div className="salv-bar-in wordpress-bar-in"></div>
                  </div>
                </div>
              </div>
              <div
                className="salv-progress-inner progress-top html-progress"
                data-value="40"
              >
                <span className="salv-prog-bar-text">
                  <span className="salv-label sm-md-font inter-font-500 w-text">
                    Cloud
                  </span>
                  <span className="salv-prog-number sm-md-font inter-font-500 dark-sec-color">
                    40%
                  </span>
                </span>
                <div className="salv-back-color">
                  <div className="bar open">
                    <div className="salv-bar-in html-bar-in"></div>
                  </div>
                </div>
              </div>
              <div
                className="salv-progress-inner progress-top figma-progress"
                data-value="70"
              >
                <span className="salv-prog-bar-text">
                  <span className="salv-label sm-md-font inter-font-500 w-text">
                    Design
                  </span>
                  <span className="salv-prog-number sm-md-font inter-font-500 dark-sec-color">
                    70%
                  </span>
                </span>
                <div className="salv-back-color">
                  <div className="bar open">
                    <div className="salv-bar-in figma-bar-in"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6 salv-language-programming">
            <h4 className="salv-about-personla-title about-heading-animation-two dark-about-personal-title mb-0 w-text sm-md-font inter-font-700 mb-0">
              language
            </h4>
            <div className="row salv-circle-progress">
              <div className="col-4 col-sm-3 col-md-4 col-lg-4">
                <div className="salva-circle-progress" data-percentage="95">
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">
                    <div className="salv-circle-prog-value w-text inter-font-900">
                      95%
                    </div>
                  </div>
                </div>
                <p className="mb-0 salv-circle-prog-title inter-font-500 sm-md-font w-text text-center">
                  English
                </p>
              </div>
              <div className="col-4 col-sm-3 col-md-4 col-lg-4">
                <div
                  className="salva-circle-progress franch-circle-progress"
                  data-percentage="85"
                >
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">
                    <div className="salv-circle-prog-value w-text inter-font-900">
                      85%
                    </div>
                  </div>
                </div>
                <p className="mb-0 salv-circle-prog-title inter-font-500 sm-md-font text-center w-text">
                  Hindi
                </p>
              </div>
              <div className="col-4 col-sm-3 col-md-4 col-lg-4">
                <div
                  className="salva-circle-progress arabic-circle-progress"
                  data-percentage="80"
                >
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">
                    <div className="salv-circle-prog-value w-text inter-font-900">
                      80%
                    </div>
                  </div>
                </div>
                <p className="mb-0 salv-circle-prog-title inter-font-500 sm-md-font text-center w-text">
                  Telugu
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
export default Programming;