import React, { useState } from "react";
import CardWithModal from "./CardWithModal";
import { Card, Row, Col } from "react-bootstrap";
import "./MyCards.css";
import "./CardsComp.css";
import { Link } from "react-router-dom";

function SearchBar({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChanges = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data) {
      const results = data.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(results);
    }
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleSubmit}>
        <input
          id="txt-box"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchInputChanges}
          onKeyUp={disphold}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((item) => (
          <div className="searchResult">
            <li className="searchLi" key={item}>
              <a href={`${item}`} rel="noopener noreferrer">
                {item}
              </a>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

const data = ["Destination", "Home", "TravelInspiration"];

function CardsComp() {
  return (
    <>
      <div className="shss">
      <SearchBar data={data} />;
      <div className="toHide1">
        <div className="div-head">
          <h1 className="text-center">BAGUIO CITY </h1>
        </div>
        <div className="body-main-cont">
          <div className="body-cont">
            <Row xs={2} md={2} lg={2} className="g-5">
              <Col>
                <CardWithModal
                  className="body-content"
                  imgSrc="/images/bag4.png"
                  title="Baguio City"
                  imgSrcModal="/images/bag4.png"
                  text="Also called City of Pines"
                  modalText="Baguio City is a highly urbanized city located in the Cordillera Administrative Region in the northern part of the Philippines. It is situated in the province of Benguet, approximately 250 kilometers north of Manila, the capital of the Philippines.
                  Baguio City is known as the City of Pines because of its location in the mountainous region of the Cordillera. It is situated at an altitude of 1,500 meters above sea level and is known for its cool climate, scenic views, and rich culture.
                  Baguio City is a popular tourist destination and is known for its many attractions, including Burnham Park, Session Road, the Tam-Awan Village, and the Baguio Night Market. It is also home to a number of educational institutions, including the University of the Philippines Baguio, the University of Baguio, and the Saint Louis University.
                  The city is known for its vibrant arts and culture scene, and is home to many festivals and events throughout the year, including the Baguio Flower Festival (Panagbenga Festival) and the Baguio Arts Festival.
                  Baguio City is easily accessible by bus or car from Manila, with the journey taking approximately six hours by road. It is also accessible by air, with the nearest airport located in the city of La Union, about an hour's drive away."
                />
              </Col>
              <Col>
                <CardWithModal
                  className="body-content"
                  imgSrc="/images/bag2.png"
                  title="Baguio City"
                  imgSrcModal="/images/bag2.png"
                  text="Baguio Lion's Head"
                  modalText="The Baguio Lion's Head is a landmark located along Kennon Road, just outside of Baguio City in the Philippines. It is a large concrete statue of a lion's head, which is considered as one of the most recognizable and iconic landmarks in the area.
                  The Baguio Lion's Head was built in the 1960s by the Lions Club International as a symbol of their organization and as a tribute to the courage and strength of the Filipino people. It stands about 40 feet tall and can be seen from a distance as one travels along Kennon Road towards Baguio City.
                  The Lion's Head serves as a popular photo spot for tourists and travelers passing through the area. Visitors can climb up a set of stairs behind the lion's head to take photos and admire the scenic view of the surrounding mountains and valleys.
                  In recent years, the Baguio Lion's Head has undergone some renovations to improve its appearance and ensure its structural integrity. It remains a popular tourist attraction and a symbol of the strength and resilience of the people of Baguio City."
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {/* ///////////////////// */}
      <div className="toHide2">
        <div className="div-head">
          <h1 className="text-center"></h1>
        </div>
        <div className="body-main-cont">
          <div className="body-cont">
            <Row xs={2} md={2} lg={2} className="g-5">
              <Col>
                <CardWithModal
                  className="body-content"
                  imgSrc="/images/bag3.png"
                  title="Baguio City"
                  imgSrcModal="/images/bag3.png"
                  text="Also called City of Pines"
                  modalText="The Baguio Strawberry Farm is a popular tourist destination located in the Benguet province, about 30 minutes away from Baguio City in the Philippines. It is situated in the municipality of La Trinidad, which is known for its vast strawberry fields.
                  The Baguio Strawberry Farm offers visitors the opportunity to pick their own strawberries and experience farming first-hand. Visitors can stroll through the fields and pick their own strawberries, which can then be purchased by weight. There are also a number of stores and stalls selling strawberry products such as jam, ice cream, and other sweet treats.
                  Aside from strawberries, the farm also grows other produce such as lettuce, broccoli, and other vegetables. Visitors can also take part in other activities such as horseback riding, boating, and zip-lining.
                  The Baguio Strawberry Farm is open all year round, but the best time to visit is during the strawberry season, which runs from November to May. During this time, the fields are in full bloom and visitors can enjoy the fresh, sweet strawberries that La Trinidad is famous for.
                  Overall, the Baguio Strawberry Farm is a great destination for visitors looking to experience the beauty of the Benguet province and enjoy some fresh, locally-grown produce."
                />
              </Col>
              <Col>
                <CardWithModal
                  className="body-content"
                  imgSrc="/images/bag1.png"
                  title="Baguio City"
                  imgSrcModal="/images/bag1.png"
                  text="Botanical Garden"
                  modalText="The Baguio Botanical Garden is a popular tourist destination located in Baguio City, Philippines. It is situated along Leonard Wood Road, near Teachers Camp and the Philippine Military Academy.
                  The garden spans over 11 hectares and features a wide variety of flora, including native and exotic plants. Visitors can stroll through different sections of the garden, which includes an arboretum, Japanese garden, and a collection of medicinal plants.
                  Aside from its beautiful natural surroundings, the Baguio Botanical Garden is also known for its cultural attractions. It is home to several traditional Igorot huts, which showcase the indigenous culture of the Cordillera region. Visitors can also watch cultural performances or purchase locally-made handicrafts from the stalls in the garden.
                  Overall, the Baguio Botanical Garden is a great place to relax and enjoy nature while learning about the rich culture of the Philippines."
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {/* ///////////////////// */}
      <div className="div-head">
        <h1 className="text-center">
          Explore the World - Discover Your Next Adventure with Us!
        </h1>
      </div>
      <div className="body-main-cont">
        <div className="body-cont">
          <Row xs={2} md={2} lg={2} className="g-5">
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
      <div className="div-head">
        <h1 className="text-center">
          Explore the World - Discover Your Next Adventure with Us!
        </h1>
      </div>
      <div className="body-main-cont">
        <div className="body-cont">
          <Row xs={2} md={2} lg={2} className="g-5">
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
      </div>
    </>
  );
}

export default CardsComp;
function disphold(){
  if(document.getElementById("txt-box").value === ""){
    document.getElementsByClassName("shss").style.height = "2px"
  }else{
    document.getElementsByClassName("shss").style.display = "initial"
  }
  
}
