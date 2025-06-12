import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#222",
        color: "#fff",
        padding: "2rem 0",
        textAlign: "center",
        borderTop: "1px solid #333",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p style={{ margin: 0, fontSize: "1.1rem" }}>
          &copy; {new Date().getFullYear()} Ven Major Project. All rights
          reserved.
        </p>
        <div style={{ marginTop: "0.5rem" }}>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              margin: "0 0.5rem",
              textDecoration: "none",
            }}
          >
            GitHub
          </a>
          <a
            href="mailto:contact@venmajor.com"
            style={{
              color: "#fff",
              margin: "0 0.5rem",
              textDecoration: "none",
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
