import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      
      title: "Faucet & Staking Platform",
      description: "Solidity + React.js + Ethers",
      imgUrl: projImg1,
      href: "https://sample-staking.vercel.app/",
    },
    {
      title: "dApp tnx with message",
      description: "Send crypto transaction with message and GIF",
      imgUrl: projImg2,
      href: "https://dapp-msg.vercel.app/",
    },
    {
      title: "Waitlist Dashboard",
      description: "Supabased Backend",
      imgUrl: projImg3,
      href: "https://sample-waitlist.vercel.app/",
    },
    {
      title: "Sol Scout",
      description: "Filter out noise and find real projects token on solana",
      imgUrl: projImg7,
      href: "https://sol-scout.vercel.app/",
    },
    {
      title: "Echonode",
      description: "Listing and pull trending memes on farcaster",
      imgUrl: projImg8,
      href: "https://agent-be.vercel.app/",
    },
    {
      title: "Blink and buy",
      description: "Create solana link to sell your e-product",
      imgUrl: projImg9,
      href: "https://blink-and-buy.vercel.app/",
    },
  ];

const projects1 = [
    {
      
      title: "landing page",
      description: "React.js + Scroll animation",
      imgUrl: projImg10,
      href: "https://new-site-tau-lyart.vercel.app/",
    },
    {
      title: "landing page",
      description: "website landing page",
      imgUrl: projImg11,
      href: "https://samplesite-zeta.vercel.app/",
    },
    {
      title: "Waitlist Dashboard",
      description: "Supabased Backend",
      imgUrl: projImg3,
      href: "https://sample-waitlist.vercel.app/",
    },
    {
      title: "Meme-coin site",
      description: "Dexscreener api + Next.js",
      imgUrl: projImg4,
      href: "https://meme-page-beta.vercel.app/",
    },
    {
      title: "Meme-coin site",
      description: "Design & Development",
      imgUrl: projImg5,
      href: "https://memepage-2.vercel.app/",
    },
    {
      title: "Meme Scanner",
      description: "Memecoin checker tool with birdeye api",
      imgUrl: projImg6,
      href: "https://dmeme.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Demo Projects</h2>
                <p>Below are some projects and design systems i’ve built.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                       <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                       <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
