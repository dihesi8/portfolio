import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} loading="lazy" decoding="async" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
         
          <div className="proj-link">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} project (opens in a new tab)`}
            >
              View Project
            </a>
          </div>

        </div>
      </div>
    </Col>
  );
};
