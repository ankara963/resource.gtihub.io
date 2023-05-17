import React from "react";
import Button from "../Button";
import CardWithModal from "../CardWithModal";
import { Card, Row, Col } from "react-bootstrap";
import "../MyCards.css";
import { Link } from "react-router-dom";

function TravelInfo() {
  return (
    <>
      <div className="hero-container">
        <img className="hero-image" src="./images/3.jpg" alt="hero-image" />
        <h1>Discover paradise in the Philippines</h1>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            LETS GO
          </Button>
        </div>
      </div>

      <div className="div-head">
        <h1 className="text-center">BAGUIO CITY </h1>
      </div>
      <div className="body-main-cont">
        <div className="body-cont">
          <Row xs={2} md={2} lg={2} className="g-2">
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/bag1.png"
                title="Baguio City"
                text="Also called City of Pines"
                modalText="More detailed information about my card"
              />
            </Col>
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/bag2.png"
                title="My Card Title"
                text="Some text about my card"
                modalText="More detailed information about my card"
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="div-head">
        <h1 className="text-center"></h1>
      </div>
      <div className="body-main-cont">
        <div className="body-cont">
          <Row xs={2} md={2} lg={2} className="g-2">
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/bag3.png"
                title="Baguio City"
                text="Also called City of Pines"
                modalText="More detailed information about my card"
              />
            </Col>
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/bag4.png"
                title="My Card Title"
                text="Some text about my card"
                modalText="More detailed information about my card"
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="div-head">
        <h1 className="text-center">
          Explore the World - Discover Your Next Adventure with Us!
        </h1>
      </div>
      <div className="body-main-cont">
        <div className="body-cont">
          <Row xs={2} md={2} lg={2} className="g-2">
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="Baguio City"
                text="Also called City of Pines"
                modalText="More detailed information about my card"
              />
            </Col>
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="My Card Title"
                text="Some text about my card"
                modalText="More detailed information about my card"
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="div-head">
        <h1 className="text-center">
          Explore the World - Discover Your Next Adventure with Us!
        </h1>
      </div>
      <div className="body-main-cont">
        <div className="body-cont">
          <Row xs={2} md={2} lg={2} className="g-2">
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="Baguio City"
                text="Also called City of Pines"
                modalText="More detailed information about my card"
              />
            </Col>
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="My Card Title"
                text="Some text about my card"
                modalText="More detailed information about my card"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default TravelInfo;
