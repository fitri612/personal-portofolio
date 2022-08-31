import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleray] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Web Developer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();

    },delta)
    
    return () => { clearInterval(ticker) };
  }, {text});

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portofolio</span>
            <h1>
                {`Hi I'm webdevcode`}
                <span className="wrap">Web Developer</span>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptatum, vero illum odio quam iste enim voluptatibus iusto incidunt, rem harum maiores sapiente quae cupiditate. Accusamus, numquam. Commodi, iste amet.
                </p>
                <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          
          </Col>
        </Row>
      </Container>
    </section>
  );
};
