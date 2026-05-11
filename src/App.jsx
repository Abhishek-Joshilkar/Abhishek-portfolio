import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Abhishek from "./assets/Abhishek.png"

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Scroll Function
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">

        <div className="container">

          <a className="navbar-brand" href="#">
            Abhishek Joshilkar
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#resume">
                  Resume
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>

        </div>

      </nav>

      {/* Hero */}
      <section className="hero">

        <div className="container">

          <h1>
            Hi, I'm <span>Abhishek</span>
          </h1>

          <p>
            Full Stack Java Developer | React Developer
          </p>

          <button onClick={() => scrollToSection("projects")}>
            View Projects
          </button>

        </div>

      </section>

      {/* About */}
      <section id="about">

        <div className="container">

          <h2 className="section-title">
            About Me
          </h2>

          <div className="row align-items-center">

            <div className="col-md-6 text-center">

              <img
                src={Abhishek}
                className="img-fluid rounded"
                alt="profile"
                loading="lazy"
              />

            </div>

            <div className="col-md-6">

              <p className="about-text">
                I am a passionate Full Stack Java Developer skilled in
                HTML, CSS, Bootstrap, JavaScript, React JS, Java, and MySQL.
                I enjoy building responsive and modern web applications.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Projects */}
      <section id="projects">

        <div className="container">

          <h2 className="section-title">
            Projects
          </h2>

          <div className="row g-4">

            <div className="col-md-4">

              <div className="project-card">

                <img
                  src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1000"
                  alt="project"
                  loading="lazy"
                />

                <div className="project-content">

                  <h4>AnimeVerse</h4>

                  <p>
                    AnimeVerse is a website that allows users to watch anime online.
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-4">

              <div className="project-card">

                <img
                  src="https://images.reallygooddesigns.com/2022/05/ecommerce-home-page-design-examples.png"
                  alt="project"
                  loading="lazy"
                />

                <div className="project-content">

                  <h4>E-Commerce Website</h4>

                  <p>
                    Shopping website with cart and product pages.
                  </p>

                </div>

              </div>

            </div>

            <div className="col-md-4">

              <div className="project-card">

                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000"
                  alt="project"
                  loading="lazy"
                />

                <div className="project-content">

                  <h4>Theme Park website</h4>

                  <p>
                    Theme Park website using HTML, CSS, Bootstrap, JavaScript, React JS, Java, and MySQL.
                  </p>
                  <a href="https://parkpage.netlify.app/">
                    <button className="btn btn-primary" >To Visit it</button>
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Skills */}
      <section id="skills">

        <div className="container">

          <h2 className="section-title">
            Skills
          </h2>

          <div className="row g-4">

            {[
              "HTML",
              "CSS",
              "Bootstrap",
              "JavaScript",
              "React JS",
            ].map((skill, index) => (

              <div className="col-md-3 col-6" key={index}>

                <div className="skill-box">
                  {skill}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Resume */}
      <section id="resume">

        <div className="container">

          <h2 className="section-title">
            Resume
          </h2>

          <div className="resume-box">

            <a href="./assets/Resume.pdf" className="resume-btn">
              Download Resume
            </a>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact">

        <div className="container">

          <h2 className="section-title">
            Contact
          </h2>

          <div className="row justify-content-center">

            <div className="col-md-7">

              <div className="contact-form">

                <form onSubmit={handleSubmit}>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    className="form-control"
                    rows="5"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                  <button className="btn-contact" type="submit">
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer>

        <p>
          © 2026 Abhishek Portfolio | All Rights Reserved
        </p>

      </footer>

    </>
  );
}

export default App;