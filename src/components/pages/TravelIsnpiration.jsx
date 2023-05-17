import React from "react";
import Button from "../Button";
import CardWithModal from "../CardWithModal";
import { Card, Row, Col } from "react-bootstrap";
import CardItem from "../CardItem";
import { Link } from "react-router-dom";
import "./TravelIsnpiration.css";
import TestimonialSection from "../trials/TestimonialSection";

function TravelIsnpiration() {
  return (
    <>
      <div className="hero-container">
        <img className="hero-image" src="./images/3.jpg" alt="hero-image" />
        <h1 className="h1-1">Where Memories are Made, Adventures Begin!</h1>
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
      {/* /////////////////// */}
      <div className="Ti-body-main-cont">
        <h1 className="my-2">
          Indulge in the Art of Travel, Paint Your Life with Unforgettable
          Adventures!
        </h1>
        <div className="Ti-body-cont">
          <Row xs={1} md={2} lg={2} className="g-5">
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="Baguio City"
                imgSrcModal="/images/bag1.png"
                text="Also called City of Pines"
                modalText="More detailed information about my card"
              />
            </Col>
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="My Card Title"
                imgSrcModal="/images/siargao.png"
                text="Some text about my card"
                modalText="More detailed information about my card"
              />
            </Col>
          </Row>
        </div>
      </div>
      {/* /////////////////// */}
      <div className="Ti-body-main-cont">
        <h1 className="my-2">
          Indulge in the Art of Travel, Paint Your Life with Unforgettable
          Adventures!
        </h1>
        <div className="Ti-body-cont">
          <Row xs={1} md={2} lg={2} className="g-5">
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="Baguio City"
                imgSrcModal="/images/bag1.png"
                text="Also called City of Pines"
                modalText="More detailed information about my card"
              />
            </Col>
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="My Card Title"
                imgSrcModal="/images/bag1.png"
                text="Some text about my card"
                modalText="More detailed information about my card"
              />
            </Col>
          </Row>
        </div>
      </div>
      {/* /////////////////// */}
      <div className="Ti-body-main-cont">
        <h1 className="my-2">
          Indulge in the Art of Travel, Paint Your Life with Unforgettable
          Adventures!
        </h1>
        <div className="Ti-body-cont">
          <Row xs={1} md={2} lg={2} className="g-5">
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="Baguio City"
                imgSrcModal="/images/bag1.png"
                text="Also called City of Pines"
                modalText="More detailed information about my card"
              />
            </Col>
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="My Card Title"
                imgSrcModal="/images/bag1.png"
                text="Some text about my card"
                modalText="More detailed information about my card"
              />
            </Col>
          </Row>
        </div>
      </div>
      <TestimonialSection />
      {/* /////////////////////////////////////////// */}
      <div className="Ti-body-main-cont">
        <h1 className="my-2">
          Indulge in the Art of Travel, Paint Your Life with Unforgettable
          Adventures!
        </h1>
        <div className="Ti-body-cont">
          <Row xs={1} md={2} lg={2} className="g-5">
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="Baguio City"
                imgSrcModal="/images/bag1.png"
                text="Also called City of Pines"
                modalText="More detailed information about my card"
              />
            </Col>
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="My Card Title"
                imgSrcModal="/images/siargao.png"
                text="Some text about my card"
                modalText="More detailed information about my card"
              />
            </Col>
          </Row>
        </div>
      </div>
      {/* /////////////////// */}
      <div className="Ti-body-main-cont">
        <h1 className="my-2">
          Indulge in the Art of Travel, Paint Your Life with Unforgettable
          Adventures!
        </h1>
        <div className="Ti-body-cont">
          <Row xs={1} md={2} lg={2} className="g-5">
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="Baguio City"
                imgSrcModal="/images/bag1.png"
                text="Also called City of Pines"
                modalText="More detailed information about my card"
              />
            </Col>
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="My Card Title"
                imgSrcModal="/images/bag1.png"
                text="Some text about my card"
                modalText="More detailed information about my card"
              />
            </Col>
          </Row>
        </div>
      </div>
      {/* /////////////////// */}
      <div className="Ti-body-main-cont">
        <h1 className="my-2">
          Indulge in the Art of Travel, Paint Your Life with Unforgettable
          Adventures!
        </h1>
        <div className="Ti-body-cont">
          <Row xs={1} md={2} lg={2} className="g-5">
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="Baguio City"
                imgSrcModal="/images/bag1.png"
                text="Also called City of Pines"
                modalText="More detailed information about my card"
              />
            </Col>
            <Col>
              <CardWithModal
                className="body-content"
                imgSrc="/images/c3.png"
                title="My Card Title"
                imgSrcModal="/images/bag1.png"
                text="Some text about my card"
                modalText="More detailed information about my card"
              />
            </Col>
          </Row>
        </div>
      </div>
      <TestimonialSection />
    </>
  );
}

export default TravelIsnpiration;
