import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import "./Home.css"
import PhTrivia from "../PhTrivia";
function Home() {
  return (
    
    <>
      <div>
        <HeroSection />
      </div>
      
      <div className="maincontainer">
  <div className="container-md">
    <PhTrivia />
  </div>
  <div className="container-md">
  <h1>Check out some of the most visited places here at the Philippines!</h1>
  <h2 className="rr" >Rizal Park</h2>
    <div className="row">
      <div className="col-md first">
        <img className="img colimg1" src="/images/rizal.webp" />
      </div>
      <div className="col-md">
        <h3>
        Exploring Rizal Park offers a glimpse into Philippine history,
        a chance to appreciate its natural beauty, and an opportunity to immerse
        yourself in the vibrant culture of the country. Enjoy your visit to Rizal Park
        and have a wonderful time exploring the Philippines!
        </h3>
      </div>
    </div>
    <h1>  </h1>
    <hr/>
    <h2 className="rrrr">Philippine Arena</h2>
    <div className="row">
      <div className="col">
        <img src="./images/pharena.jpeg"/>
      </div>
    </div>
    <div className="row">
      <div className="col">
      <h1>  </h1>
      <h3>Philippine Arena, a remarkable architectural and entertainment marvel in the Philippines
      The Philippine Arena stands as a testament to the country's passion for sports,
       entertainment, and cultural gatherings. Whether you attend a thrilling sports event or enjoy a world-class concert,
       the Philippine Arena offers a memorable experience in an awe-inspiring architectural setting.
       The Philippine Arena is a grand architectural masterpiece. Designed by Populous,
        a renowned architectural firm, its design draws inspiration from Filipino elements such as the sarimanok a mythical bird and the bahay kubo traditional Filipino house. 
       The facade features intricate patterns and textures, creating a visually stunning exterior.
       </h3>
      
      </div>
    </div>
    <h1>  </h1>
    <hr/>
    <h2 className="rrr">El Nido</h2>
    <div className="row">
      <div className="col-md second">
        <h3>
        El Nido is a destination that offers a perfect blend of natural beauty,
        adventure, and relaxation. Whether you're seeking outdoor adventures, underwater
        exploration, or simply a peaceful escape in paradise, El Nido will surely captivate
        your heart and leave you with unforgettable memories.
        </h3>
      </div>
      <div className="col-md">
        <img className="img colimg" src="./images/elnido.jpg" />
      </div>
      <h1>  </h1>
      <hr/>
    <div className="row"><h1>Go to Destination page to explore more exciting places!</h1></div>
    </div>
  </div>
</div>

    </>

   
    
  );
}

export default Home;
