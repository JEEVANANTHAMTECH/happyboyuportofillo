import React from "react";
import "./App.css";
import profile from "./assets/jeeva.jpeg";

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <img src={profile} alt="profile" className="profile-img" />
          <h2>Jeevanantham S</h2>
        </div>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>Hello, I'm Jeevanantham 👋</h1>
        <h3>Frontend Developer (React.js)</h3>
        <p>
          Passionate about building responsive and user-friendly web applications.
        </p>
       <button
  className="btn"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Jeevanantham-Resume.pdf";
    link.click();
  }}
>
  Download Resume
</button>
      </section>

      {/* About */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          MCA graduate with strong skills in React.js, JavaScript, HTML, and CSS.
          Experienced in building modern web applications.
        </p>
      </section>

      {/* Skills */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>Git</span>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
       <div
  className="card"
  onClick={() =>
    window.open(
      "https://weather-chi-one-vtnm3osil8.vercel.app/",
      "_blank"
    )
  }
  style={{ cursor: "pointer" }}
>
  <h3>WeatherIQ</h3>
  <p>React-based weather application.</p>
</div>

          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio showcasing projects.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <h2>Contact</h2>
        <p>Email: jeevananthamtech@gmail.com</p>
        <p>Phone: +91 9585490553</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Jeevanantham S</p>
      </footer>
    </div>
  );
}

export default App;