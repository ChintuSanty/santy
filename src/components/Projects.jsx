import React, { useState } from "react";
import WeekendModeContent from "./common/WeekendModeContent";
import SocialIcon from "./common/SocialIcon";
import Footer from "./Footer";
import SalvaLogo from "../assets/images/logo/dark-logo.png";
import ProfileImg from "../assets/images/homepage/profile-image.png";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "PE Insights",
    category: "AI / Conversational",
    tags: ["Snowflake Cortex", "RAG", "LLM", "Databricks"],
    description:
      "Conversational AI chatbot for private equity analytics built on Snowflake Cortex Analyst. Features LLM-based natural language query rewriting (prompt engineering) to generate accurate SQL from plain English inputs. Designed a dual semantic view architecture (portfolio and fund level) with a dynamic RAG pipeline ingesting PDF reports on Databricks for context-aware answers over unstructured financial documents.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 6C14.5 6 6 14.5 6 25s8.5 19 19 19 19-8.5 19-19S35.5 6 25 6zm0 4c8.3 0 15 6.7 15 15s-6.7 15-15 15S10 33.3 10 25 16.7 10 25 10zm-2 6v10l8 5 1.5-2.5-6.5-4V16H23z" fill="#ffffff"/>
      </svg>
    ),
    url: null,
    highlight: "Snowflake Cortex + RAG + LLM Prompt Engineering",
  },
  {
    id: 2,
    title: "Local AI Assistant",
    category: "AI / Automation",
    tags: ["Ollama", "n8n", "Local LLM", "Automation"],
    description:
      "A production local LLM deployment serving real small-business use cases. Built using Ollama for local AI model serving combined with n8n workflow automation, creating a fully offline AI marketing assistant that operates without cloud dependency.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="34" height="34" rx="4" stroke="#ffffff" strokeWidth="2.5"/>
        <path d="M17 25h16M25 17v16" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="25" cy="25" r="4" fill="#ffffff"/>
      </svg>
    ),
    url: null,
    highlight: "Ollama + n8n Workflow Automation",
  },
  {
    id: 3,
    title: "SantyCSS",
    category: "Open Source / Framework",
    tags: ["CSS Framework", "npm", "VS Code Extension", "Figma Plugin"],
    description:
      "Open-source utility-first CSS framework designed to simplify modern web development through human-readable class names and reusable design patterns. Architected and developed the framework, documentation platform, component ecosystem, and npm package distribution. Includes a VS Code IntelliSense extension, Figma plugin, and PostCSS/Vite integrations.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 14.25H39V32.25H43.5V13.125C43.5 11.2969 41.9531 9.75 40.125 9.75H10.875C8.97656 9.75 7.5 11.2969 7.5 13.125V32.25H12V14.25ZM46.875 34.5H4.125C3.49219 34.5 3 35.0625 3 35.625V36.75C3 39.2812 4.96875 41.25 7.5 41.25H43.5C45.9609 41.25 48 39.2812 48 36.75V35.625C48 35.0625 47.4375 34.5 46.875 34.5ZM28.6641 27.6797C28.9453 27.9609 29.2969 28.0312 29.7188 28.0312C30.0703 28.0312 30.4219 27.9609 30.7031 27.6797L34.0781 24.3047C34.5703 23.7422 34.5703 22.8281 34.0781 22.2656L30.7031 18.8906C30.1406 18.3984 29.2266 18.3984 28.6641 18.8906C28.1719 19.4531 28.1719 20.3672 28.6641 20.9297L31.0547 23.25L28.6641 25.6406C28.1719 26.2031 28.1719 27.1172 28.6641 27.6797ZM22.2656 18.8906C21.7031 18.3984 20.7891 18.3984 20.2266 18.8906L16.8516 22.2656C16.3594 22.8281 16.3594 23.7422 16.8516 24.3047L20.2266 27.6797C20.5078 27.9609 20.8594 28.0312 21.2812 28.0312C21.6328 28.0312 21.9844 27.9609 22.2656 27.6797C22.7578 27.1172 22.7578 26.2031 22.2656 25.6406L19.875 23.25L22.2656 20.9297C22.7578 20.3672 22.7578 19.4531 22.2656 18.8906Z" fill="#ffffff"/>
      </svg>
    ),
    url: "https://santycss.santy.in",
    highlight: "Available on npm · santycss.santy.in",
  },
  {
    id: 4,
    title: "UNO No Mercy",
    category: "Game / Real-time",
    tags: ["Multiplayer", "Real-time", "Game Logic", "WebSockets"],
    description:
      "Real-time multiplayer card game with a custom game logic engine. Implements the UNO No Mercy variant with custom rules, real-time synchronization, and a fully interactive card game experience playable in the browser.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.5 12H16.5C8.97656 12 3 18.0469 3 25.5C3 33.0234 8.97656 39 16.5 39H34.5C41.9531 39 48 33.0234 48 25.5C48 18.0469 41.9531 12 34.5 12ZM20.3672 27.1875H18.1172V29.4375C18.1172 30.4219 17.3438 31.125 16.4297 31.125C15.4453 31.125 14.7422 30.4219 14.7422 29.4375V27.1875H12.5625C11.5781 27.1875 10.8047 26.4844 10.8047 25.5C10.8047 24.5859 11.5078 23.8125 12.4922 23.8125H14.7422V21.5625C14.7422 20.6484 15.4453 19.875 16.4297 19.875C17.3438 19.875 18.1172 20.6484 18.1172 21.5625V23.8125H20.3672C21.2812 23.8125 22.0547 24.5859 22.0547 25.5C22.0547 26.4844 21.3516 27.1875 20.3672 27.1875ZM33.3047 31.6875C31.6875 31.6875 30.5625 30.4922 30.5625 28.9453C30.5625 27.4688 31.7578 26.1328 33.3047 26.1328C34.7812 26.1328 36.0469 27.3984 36.0469 28.9453C36.0469 30.5625 34.9219 31.6875 33.3047 31.6875ZM37.8047 24.9375C36.1875 24.9375 35.0625 23.7422 35.0625 22.1953C35.0625 20.7188 36.2578 19.3828 37.8047 19.3828C39.3516 19.3828 40.5469 20.6484 40.5469 22.1953C40.5469 23.8125 39.4219 24.9375 37.8047 24.9375Z" fill="#ffffff"/>
      </svg>
    ),
    url: "https://uno.santy.in",
    highlight: "Live at uno.santy.in",
  },
];

const Projects = () => {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerClicked((prevClicked) => !prevClicked);
  };

  return (
    <>
      <div className="salva-page-wrap">
        <section className="salva-fixed-content salvadark-section" id="projects">
          <div className="container-fluid">
            <div className="row home-content-row">
              <div className="col-12 col-md-5 col-lg-4 col-xxl-5 salva-left-fixed-image p-0">
                <h1 className="d-none">projects</h1>
                <div className="salva-home-image dark-salva-home-image"></div>
                <div className="salva-weekend-image dark-weekend-image"></div>
              </div>
              <div className="col-12 col-md-12 col-lg-8 col-xxl-7 salva-home-content salv-about-dark-content dark-home-content p-0">
                <div className={`salva-about-wrap ${isBurgerClicked ? "border-none" : ""}`}>
                  <header className="salva-header salv-home-header salv-dark-header">
                    <div className="container-fluid p-0">
                      <div className="row">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-4">
                          <a className="salva-logo" href="/">
                            <img src={SalvaLogo} alt="logo" />
                          </a>
                        </div>
                        <div className="col-6 col-sm-6 col-md-8 col-lg-8">
                          <nav className="navbar salva-header-nav dark-salv-header">
                            <div className="d-flex">
                              <input type="checkbox" id="navcheck" className="navcheck" role="button" title="menu" aria-pressed="true" />
                              <label htmlFor="navcheck" aria-hidden="true" title="menu">
                                <span className={`salv-burger dark-salv-burger ${isBurgerClicked ? "click" : ""}`} onClick={handleBurgerClick}>
                                  <span className="bar dark-bar"><span className="visuallyhidden">Menu</span></span>
                                </span>
                              </label>
                              <ul id="menu" className="sal-menu-list dark-sal-menu-list">
                                <li className="salv-menu-item">
                                  <Link to="/" target="_self" className="salv-menu-link dark-color">Home</Link>
                                </li>
                                <li className="salv-menu-item">
                                  <Link to="/about" target="_self" className="salv-menu-link dark-color">About</Link>
                                </li>
                                <li className="salv-menu-item">
                                  <Link to="/projects" target="_self" className="w-text salv-menu-link dark-menu-link active">Projects</Link>
                                </li>
                                <li className="salv-menu-item">
                                  <Link to="/contact" target="_self" className="salv-menu-link dark-color">Contact</Link>
                                </li>
                              </ul>
                              <div className="salv-menu-design-two">
                                <div className="menu-design-wrap">
                                  <div className="salv-menu-profile">
                                    <img src={ProfileImg} alt="profile" />
                                  </div>
                                  <div className="salv-menu-list">
                                    <ul className="salv-sec-menu-item">
                                      <li className="salv-sec-menu-link">
                                        <Link to="/" className="slav-tb-menu-name" target="_self">home</Link>
                                      </li>
                                      <li className="salv-sec-menu-link">
                                        <Link to="/about" target="_self" className="slav-tb-menu-name">about</Link>
                                      </li>
                                      <li className="salv-sec-menu-link">
                                        <Link to="/projects" target="_self" className="slav-tb-menu-name active">projects</Link>
                                      </li>
                                      <li className="salv-sec-menu-link">
                                        <Link to="/contact" target="_self" className="slav-tb-menu-name">contact</Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="salv-mob-copyright">
                                    <p className="salv-copyright-content mb-0 sm-font inter-font-400 b-text light-copyright">
                                      Copyright © 2025 ❤{" "}
                                      <Link to="https://santy.in" className="w-text" target="_blank">Santy</Link>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </header>

                  <div className="salva-about-content dark-about-content weekend-mode-hide">
                    <div className="salv-inrto-content">
                      <h2
                        className="salv-about-title salv-home-title md-font w-text inter-font-900 mb-0"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        Projects
                      </h2>
                      <div className="sec-text text-anim">
                        <p className="salv-about-desc mb-0 dark-sec-color inter-font-400" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                          A selection of projects spanning AI engineering, open-source frameworks, and real-time applications — built from concept to production.
                        </p>
                      </div>
                    </div>

                    <div className="salv-about-service" style={{ paddingTop: "40px" }}>
                      <div className="row salv-service-card">
                        {projects.map((project) => (
                          <div key={project.id} className="col-12 col-md-6 col-lg-6 service-card-col salv-project-card-col" style={{ marginBottom: "24px" }}>
                            <div className="card1 service-card-wrap dark-service-card salv-project-card">
                              <div className="salv-project-card-header">
                                <div className="service-icon salv-project-icon">{project.icon}</div>
                                <span className="salv-project-category dark-sec-color inter-font-400">{project.category}</span>
                              </div>
                              <h6 className="service-title sm-md-font w-text inter-font-500 mb-0">{project.title}</h6>
                              <p className="small service-desc dark-sec-color inter-font-400 mb-0">{project.description}</p>
                              <div className="salv-project-tags">
                                {project.tags.map((tag) => (
                                  <span key={tag} className="salv-tag inter-font-400">{tag}</span>
                                ))}
                              </div>
                              {project.url && (
                                <div className="salv-project-link-wrap">
                                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="salv-project-link dark-sec-color inter-font-400">
                                    {project.highlight} →
                                  </a>
                                </div>
                              )}
                              {!project.url && (
                                <div className="salv-project-link-wrap">
                                  <span className="salv-project-highlight dark-sec-color inter-font-400">{project.highlight}</span>
                                </div>
                              )}
                              <div className="go-corner"><div className="go-arrow"></div></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <WeekendModeContent />
                  <SocialIcon />
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
