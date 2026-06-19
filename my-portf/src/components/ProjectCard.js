import { Col } from "react-bootstrap";

// 1. Add 'href' to the destructured props here
export const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
         
          {/* 2. Add the anchor tag below your description */}
          <div className="proj-link" style={{ marginTop: "15px" }}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              View Project
            </a>
          </div>

        </div>
      </div>
    </Col>
  );
};