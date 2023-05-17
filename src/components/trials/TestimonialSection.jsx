import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./TestimonialSection.css"; // Import custom CSS file

const testimonials = [
  {
    id: 1,
    name: "Rodrigo Doterte",
    testimonial:
      "Mindanao's allure is undeniable. From the towering Mount Apo to the tranquil waters of Lake Sebu, its beauty knows no bounds. The warmth of its people and the vibrant markets of Davao City leave a lasting impression. Mindanao, a land of vibrant colors and captivating wonders, holds a special place in my heart.",
    image: "/images/duterte.png",
  },
  {
    id: 2,
    name: "Julia Baretto",
    testimonial:
      "Visayas, a tapestry of beauty, holds a special place in my heart. From the enchanting Chocolate Hills in Bohol to the pristine beaches of Boracay, the wonders of Visayas never cease to amaze. The rich cultural heritage of Iloilo and the warm smiles of the people make every visit memorable.",
    image: "/images/Julia.png",
  },
  {
    id: 3,
    name: "Manny Pacquiao",
    testimonial:
      "Luzon exceeded all my expectations. From its mesmerizing landscapes to the warm hospitality of its people, every moment was a delight. Exploring the iconic rice terraces in Banaue and immersing myself in the vibrant city life of Manila were highlights of my journey.",
    image: "/images/Manny.png",
  },
  {
    id: 4,
    name: "Ding-Dong Dantes",
    testimonial:
      "I'm truly drawn to the seas. Standing on the shores, the breeze on my face, and the vast ocean before me, it's pure tranquility. Exploring Siargao's pristine beaches in Visayas was a cherished experience. The turquoise waters invited me to dive in, revealing vibrant coral reefs and a mesmerizing array of fish. It was simply breathtaking.",
    image: "/images/ding.png",
  },
];

const TestimonialSection = () => {
  return (
    <Container>
      <h2>Testimonials</h2>
      <Row>
        {testimonials.map((testimonial) => (
          <Col key={testimonial.id} sm={12} md={6} lg={3}>
            <Card className="testimonial-card">
              <div className="circle">
                <Card.Img
                  variant="top"
                  src={testimonial.image}
                  className="rounded-circle"
                />
              </div>
              <Card.Body>
                <Card.Text>{testimonial.testimonial}</Card.Text>
                <Card.Title>{testimonial.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TestimonialSection;
