import { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function Projects({ projects, github }) {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setModalIsOpen(true);
    console.log(project);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section
        id="projects"
        className="navbar-is-white text-white section pp-scrollable position-absolute"
        style={{ backgroundImage: "url('img/bg/projects.jpg')" }}>
        <div className="project-wrap">
          <div className="bg-changer">
            <div className="section-bg active"></div>
          </div>
          <div className="intro">
            <div className="scroll-wrap">
              <div className="container">
                <h2 className="text-white mb-0">Latest projects</h2>
                <div className="mt-5 pt-2">
                  <div className="row-project-box row">
                    {projects?.map((project, idx) => (
                      <div
                        key={idx}
                        className="col-project-box col-md-6 col-lg-4 col-xl-3">
                        <div
                          style={{
                            backgroundImage: `${
                              "url('img/bg/portfolio/" + project.image + "')"
                            }`,
                          }}
                          target="_blank"
                          rel="noreferrer"
                          className="project-box"
                        />
                        <div>
                          <h4
                            style={{
                              color: "#fff",
                            }}>
                            {project.title}
                          </h4>
                          <button
                            className="btn btn-outline-light"
                            onClick={() => openModal(project)}>
                            Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={github}
                  className="btn mt-5 mx-auto d-block"
                  style={{ width: "fit-content" }}>
                  Visit my GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <Modal
          open={modalIsOpen}
          onClose={closeModal}
          contentLabel="Project Details"
          className="modal-content"
          overlayClassName="modal-overlay">
          <h2>{selectedProject.title}</h2>
          <img
            src={`img/bg/portfolio/${selectedProject.image}`}
            alt={selectedProject.title}
            className="img-fluid"
          />
          <p>{selectedProject.category}</p>
          <p>
            <strong>Main technology stack used:</strong>{" "}
            {selectedProject.technologyStack}
          </p>
          <p>
            <strong>Brief description:</strong> {selectedProject.description}
          </p>
          <p>
            <strong>Live project link:</strong>{" "}
            <a href={selectedProject.liveLink} target="_blank" rel="noreferrer">
              {selectedProject.liveLink}
            </a>
          </p>
          <p>
            <strong>GitHub repository link (only client):</strong>{" "}
            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noreferrer">
              {selectedProject.githubLink}
            </a>
          </p>
          <p>
            <strong>Challenges faced while developing the project:</strong>{" "}
            {selectedProject.challenges}
          </p>
          <p>
            <strong>
              Potential improvements and future plans for the project:
            </strong>{" "}
            {selectedProject.futurePlans}
          </p>
        </Modal>
      )}
    </>
  );
}

export default Projects;
