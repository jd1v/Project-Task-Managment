import React, { type JSX } from "react";
import "./Home.css";

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="body-wrap">
      <header className="site-header">
        <div className="container">
          <div className="site-header-inner">
            <div className="brand header-brand">
              <h1 className="m-0">
                <a href="#">
                  <img
                    className="header-logo-image"
                    src="/public/images/logo.svg"
                    alt="Logo"
                  />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-copy">
                <h1 className="hero-title mt-0">Project & TODO List Pro</h1>
                <p className="hero-paragraph">
                  On this website, you can easily manage your tasks and those of
                  your team.
                </p>
                <div className="hero-cta">
                  <a className="button button-primary" href="#">
                    Login
                  </a>
                  <a className="button" href="#">
                    Sign Up
                  </a>
                </div>
              </div>
              <div className="hero-figure anime-element">
                <svg
                  className="placeholder"
                  width="528"
                  height="396"
                  viewBox="0 0 528 396"
                >
                  <rect
                    width="528"
                    height="396"
                    style={{ fill: "transparent" }}
                  />
                </svg>
                {[
                  { cls: "hero-figure-box-01", rot: "45deg" },
                  { cls: "hero-figure-box-02", rot: "-45deg" },
                  { cls: "hero-figure-box-03", rot: "0deg" },
                  { cls: "hero-figure-box-04", rot: "-135deg" },
                  { cls: "hero-figure-box-05" },
                  { cls: "hero-figure-box-06" },
                  { cls: "hero-figure-box-07" },
                  { cls: "hero-figure-box-08", rot: "-22deg" },
                  { cls: "hero-figure-box-09", rot: "-52deg" },
                  { cls: "hero-figure-box-10", rot: "-50deg" },
                ].map((box, i) => (
                  <div
                    key={i}
                    className={`hero-figure-box ${box.cls}`}
                    style={box.rot ? { transform: `rotate(${box.rot})` } : {}}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="features section">
          <div className="container">
            <div className="features-inner section-inner has-bottom-divider">
              <div className="features-wrap">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} className="feature text-center is-revealing">
                    <div className="feature-inner">
                      <div className="feature-icon">
                        <img
                          src={`/public/images/feature-icon-0${num}.svg`}
                          alt={`Feature 0${num}`}
                          width={48}
                          height={48}
                        />
                      </div>
                      <h4 className="feature-title mt-24">
                        {getFeatureTitle(num)}
                      </h4>
                      <p className="text-sm mb-0">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quod dicta natus ex, voluptate dolore optio maxime
                        aliquid quis quos esse.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
const getFeatureTitle = (num: number): string => {
  switch (num) {
    case 1:
      return "CRUD Project";
    case 2:
      return "CRUD Task";
    case 3:
      return "JWT Auth";
    case 4:
      return "Drag-Drop & Notification";
    case 5:
      return "Advanced Filtering";
    case 6:
      return "Admin | Member Role";
    default:
      return "Activity Log";
  }
};

export default Home;
