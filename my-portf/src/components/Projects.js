import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import projImg7 from "../assets/img/project-img7.jpg";
import projImg8 from "../assets/img/project-img8.jpg";
import projImg10 from "../assets/img/project-img10.jpg";
import projImg11 from "../assets/img/project-img11.jpg";
import projImg14 from "../assets/img/project-img14.jpg";
import projImg13 from "../assets/img/project-img13.jpg";
import projImg15 from "../assets/img/project-img15.jpg";
import projImg16 from "../assets/img/project-img16.jpg";
import projImg17 from "../assets/img/project-img17.jpg";
import projImg18 from "../assets/img/project-img18.jpg";
import projImg19 from "../assets/img/project-img19.jpg";
import projImg20 from "../assets/img/project-img20.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      
      title: "AutoX",
      description: "Learns your voice to research, draft, review, and schedule posts for X, LinkedIn, and Farcaster.",
      imgUrl: projImg14,
      href: "https://autox.dihesi8.workers.dev/",
    },
    {
      title: "MARS Compute Network",
      description: "Agent compute network concept for workload routing, node matching, result verification, and on-chain settlement.",
      imgUrl: projImg18,
      href: "https://mars-nu-ruddy.vercel.app/",
    },
    {
      title: "Savanna Fi",
      description: "Algorithmic gold protocol concept on Robinhood Chain, with SVN, MSHARE, MBOND, and tokenized-stock staking pools.",
      imgUrl: projImg17,
      href: "https://savanna-fi.vercel.app/",
    },
    {
      title: "Bountify",
      description: "Arc bounty marketplace concept with upfront USDC escrow, contributor applications, review, and on-chain payouts.",
      imgUrl: projImg13,
      href: "https://bountify-chi.vercel.app/",
    },
    {
      title: "CookiePredict",
      description: "YES/NO prediction markets on Cookie Chain with on-chain trade settlement through Nightly.",
      imgUrl: projImg16,
      href: "https://cookiepredict.vercel.app/",
    },
    {
      title: "Solpay",
      description: "Solana pay links for digital products with on-chain USDC verification and gated file delivery.",
      imgUrl: projImg15,
      href: "https://solpay-one-zeta.vercel.app/",
    },
  ];

const projects1 = [
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
      title: "ZK ballot",
      description: "ZK Proof of Concept",
      imgUrl: projImg20,
      href: "https://zk-ballot-ten.vercel.app/",
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
      title: "Deaptrace AI",
      description: "LIquidity Tracker",
      imgUrl: projImg19,
      href: "https://deeptraceai-zeta.vercel.app/",
    },
  ];

  const projects2 = [
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
                <h2>Selected Projects</h2>
                <p>A selection of blockchain, AI, and full-stack products I’ve built. Open a demo to explore each project.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">AI &amp; Web3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Blockchain Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web &amp; UI</Nav.Link>
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
                          projects2.map((project, index) => {
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
      <img className="background-image-right" src={colorSharp2} alt="" loading="lazy" decoding="async" />
    </section>
  )
}
