import React from "react";

function About({ bio, ido, years, image, video, resumedownload }) {
  return (
    <>
      <section
        id="about"
        className="section pp-scrollable d-flex align-items-center position-absolute">
        <div className="intro">
          <div className="scroll-wrap">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 pr-md-5 pr-lg-0">
                  <div className="mb-4 text-dark">My specialization</div>
                  <h2 dangerouslySetInnerHTML={{ __html: bio }}></h2>
                  <div
                    className="mt-5 pt-2"
                    dangerouslySetInnerHTML={{ __html: ido }}
                  />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={resumedownload}
                    className="btn">
                    Download Resume
                  </a>
                </div>

                <div className="mt-5 mt-md-0 col-md-6 col-lg-5 offset-lg-1">
                  <div className="position-relative">
                    <img alt="" className="border-radius w-100" src={image} />
                    {video && (
                      <a href={video} className="icon-play popup-youtube">
                        <span></span>
                      </a>
                    )}
                    <div className="experience-info">
                      <div className="experience-number">{years}</div>
                      <div className="experience-text">
                        YEARS
                        <br /> EXPERIENCE
                        <br /> WORKING
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 row align-items-start">
                <div className="mt-5 col-md-6 pr-md-5 pr-lg-0">
                  <h2>About Me</h2>
                  <p>
                    Hi, I’m Rashadul Islam, a passionate Full-Stack Web & Mobile
                    App Developer with expertise in the MERN stack. I love
                    building things that matter—turning ideas into functional,
                    user-friendly applications. My journey into programming
                    started with curiosity and a deep fascination for how
                    technology can solve real-world problems. Over time, I honed
                    my skills in JavaScript, TypeScript, React.js, Node.js,
                    Express, and MongoDB, and I never stop learning!
                  </p>
                </div>
                <div className="mt-48 col-md-6 col-lg-5 offset-lg-1">
                  <h2>My Programming Journey</h2>
                  <p>
                    I started my journey with front-end development, where I
                    mastered HTML5, CSS3, Bootstrap, Tailwind CSS, and Material
                    UI to create visually appealing and responsive user
                    interfaces. As I grew more comfortable, I transitioned into
                    backend development, learning Node.js, Express, and MongoDB
                    to handle databases, authentication, and API development.
                    Recently, I completed Programming Hero's Level 1 course,
                    which helped me solidify my foundations in full-stack
                    development. Now, I’m focused on sharpening my skills,
                    building real-world projects, and contributing to innovative
                    tech solutions.
                  </p>
                </div>

                <div className="mt-5 col-md-6 pr-md-5 pr-lg-0">
                  <h2>The Type of Work I Enjoy</h2>
                  <p>
                    I thrive on challenges that push me to think critically and
                    improve my problem-solving skills. Some of my favorite
                    projects involve:
                  </p>
                  <ul className="list-group mt-2">
                    <li className="list-group-item">
                      Converting{" "}
                      <span className="font-weight-bold">
                        Figma and PSD designs
                      </span>{" "}
                      into fully functional web apps.
                    </li>
                    <li className="list-group-item">
                      Creating scalable and efficient full-stack architectures.
                    </li>
                    <li className="list-group-item">
                      Building interactive and dynamic UI/UX experiences.
                    </li>
                    <li className="list-group-item">
                      Working with teams to design cross-platform applications.
                    </li>
                    <li className="list-group-item">
                      Debugging and optimizing applications for performance and
                      security.
                    </li>
                  </ul>
                </div>
                <div className="mt-48 col-md-6 col-lg-5 offset-lg-1">
                  <h2>A Little About My Personality</h2>
                  <p>
                    I’m a problem solver, team player, and lifelong learner. I
                    love taking on new challenges, figuring things out, and
                    continuously growing. Whether it's debugging an issue or
                    brainstorming a fresh app idea, I enjoy every part of the
                    process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
