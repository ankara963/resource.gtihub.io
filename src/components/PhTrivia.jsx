import React, { useState } from "react";
import "./PhTrivia.css";

const triviaData = [
  {
    title: "𝗖𝗲𝗯𝘂 𝗖𝗶𝘁𝘆",
    content: "Oldest City in the Philippines",
  },
  {
    title: "𝗗𝗮𝘃𝗮𝗼 𝗖𝗶𝘁𝘆",
    content: "Largest City in the Philippines",
  },
  {
    title: "𝗧𝗮𝗴𝘂𝗺",
    content: "Music Capital of the South",
  },
  {
    title: "𝗦𝗮𝗺𝗮𝗹",
    content: "Philippine Island Garden City",
  },
  {
    title: "𝗗𝗮𝘃𝗮𝗼 𝗱𝗲𝗹 𝗡𝗼𝗿𝘁𝗲",
    content: "Banana Capital",
  },
  {
    title: "𝗠𝗮𝘁𝗶",
    content: "Coconut City of the South",
  },
  {
    title: "𝗗𝗶𝗴𝗼𝘀",
    content: "Clay Capital of Mindanao",
  },
  {
    title: "𝗠𝗮𝗹𝗶𝘁𝗮",
    content: "Banana Capital of Davao",
  },
  {
    title: "𝗞𝗶𝗱𝗮𝗽𝗮𝘄𝗮𝗻",
    content: "City at the foot of Mt Apo",
  },
  {
    title: "𝗗𝗮𝘃𝗮𝗼 𝗖𝗶𝘁𝘆",
    content: "Durian Capital, Cacao Capital",
  },
  {
    title: "𝗞𝗼𝗿𝗼𝗻𝗮𝗱𝗮𝗹",
    content: "Ilonggo City of the South",
  },
  {
    title: "𝗚𝗲𝗻𝗦𝗮𝗻 𝗖𝗶𝘁𝘆",
    content: "Tuna Capital",
  },
  {
    title: "B𝘂𝗸𝗶𝗱𝗻𝗼𝗻",
    content: "Pineapple Capital",
  },
  {
    title: "𝗠𝗮𝗹𝗮𝘆𝗯𝗮𝗹𝗮𝘆",
    content: "Summer Capital of the South",
  },
  {
    title: "𝗗𝗮𝘃𝗮𝗼",
    content: "Fruit Basket and King City of the South",
  },
  {
    title: "𝗖𝗮𝗴𝗮𝘆𝗮𝗻 𝗱𝗲 𝗢𝗿𝗼",
    content: "City of Golden Friendship",
  },
  {
    title: "𝗜𝘀𝘂𝗹𝗮𝗻",
    content: "Oil Palm Capital of the Philippines",
  },
  {
    title: "𝗖𝗮𝗺𝗶𝗴𝘂𝗶𝗻",
    content: "Island Born of Fire",
  },
  {
    title: "𝗦𝗶𝘁𝗮𝗻𝗴𝗸𝗮𝗶, 𝗧𝗮𝘄𝗶 𝗧𝗮𝘄𝗶",
    content: "Venice of the South",
  },
  {
    title: "𝗖𝗼𝘁𝗮𝗯𝗮𝘁𝗼",
    content: "Land of Mightiest Mountain",
  },
  {
    title: "𝗟𝗮𝗻𝗮𝗼 𝗱𝗲𝗹 𝗦𝘂𝗿",
    content: "Cradle of Muslim Art",
  },
  {
    title: "𝗦𝗼𝘂𝘁𝗵 𝗖𝗼𝘁𝗮𝗯𝗮𝘁𝗼",
    content: "Conference Capital of Mindanao",
  },
  {
    title: "𝗗𝗶𝗻𝗮𝗴𝗮𝘁 𝗜𝘀𝗹𝗮𝗻𝗱",
    content: "Mystical Province of Love",
  },
  {
    title: "𝗦𝘂𝗿𝗶𝗴𝗮𝗼 𝗱𝗲𝗹 𝗡𝗼𝗿𝘁𝗲",
    content: "Surfing Capital",
  },
  {
    title: "𝗟𝗮𝗻𝗮𝗼 𝗱𝗲𝗹 𝗡𝗼𝗿𝘁𝗲",
    content: "Land of Beauty and Bounty",
  },
  {
    title: "𝗢𝗿𝗼𝗾𝘂𝗶𝗲𝘁𝗮 ",
    content: "City of Good Life",
  },
  {
    title: "𝗭𝗮𝗺𝗯𝗼𝗮𝗻𝗴𝗮 𝗱𝗲𝗹 𝗡𝗼𝗿𝘁𝗲",
    content: "Province of South's Twin City",
  },
  {
    title: "𝗠𝗮𝗴𝘂𝗶𝗻𝗱𝗮𝗻𝗮𝗼 ",
    content: "Seat of Muslim Mindanao",
  },
  {
    title: "𝗠𝗶𝘀𝗮𝗺𝗶𝘀 𝗢𝗰𝗰idental",
    content: "Christmas Capital of Mindanao",
  },
  {
    title: "𝗔𝗴𝘂𝘀𝗮𝗻 𝗱𝗲𝗹 𝗡𝗼𝗿𝘁𝗲",
    content: "Land of Antiquated Finds",
  },
  {
    title: "𝗕𝘂𝘁𝘂𝗮𝗻 ",
    content: "Timber City of the South",
  },
  {
    title: "𝗚𝗶𝗻𝗴𝗼𝗼𝗴 ",
    content: "City of Good Luck",
  },
  {
    title: "𝗗𝗮𝗽𝗶𝘁𝗮𝗻 ",
    content: "Larg",
  },
  {
    title: "𝗗𝗮",
    content: "Shrine and Historic City of the South",
  },
  {
    title: "𝗣𝗮𝗴𝗮𝗱𝗶𝗮𝗻",
    content: "Little Hong Kong of the South",
  },
  {
    title: "𝗭𝗮𝗺𝗯𝗼𝗮𝗻𝗴𝗮 𝗖𝗶𝘁𝘆",
    content: "Asias Latin City, Sardines Capital, City of Flowers",
  },
  {
    title: "𝗦𝘂𝗹𝘂 ",
    content: "Land of Exotic Fruits",
  },
  {
    title: "𝗜𝗹𝗶𝗴𝗮𝗻 ",
    content: "Industrial City of the South",
  },
  {
    title: "𝗗𝗶𝗽𝗼𝗹𝗼𝗴 ",
    content: "The Phil. Orchid City",
  },
  {
    title: "𝗟𝗮𝗻𝘁𝗮𝗽𝗮𝗻, 𝗕𝘂𝗸𝗶𝗱𝗻𝗼𝗻",
    content: "Vegetable Basket of Mindanao",
  },
  {
    title: "𝗔𝗸𝗹𝗮𝗻 ",
    content: "Oldest province in the Philippines",
  },
  {
    title: "𝗔𝗻𝘁𝗶𝗾𝘂𝗲 ",
    content: "Province where the mountain meets the sea",
  },
  {
    title: "𝗔𝗻𝘁𝗶𝗽𝗼𝗹𝗼",
    content: "City in the Sky",
  },
  {
    title: "𝗔𝘂𝗿𝗼𝗿𝗮 ",
    content: "Land of Golden Sunrise",
  },
  {
    title: "𝗔𝗹𝗶𝗺𝗼𝗱𝗶𝗮𝗻, 𝗜𝗹𝗼𝗶𝗹𝗼",
    content: "Banana Capital of Panay",
  },
  {
    title: "𝗕𝗮𝗰𝗼𝗼𝗿 ",
    content: "Band Capital of the Philippines",
  },
  {
    title: "𝗕𝗮𝗴𝘂𝗶𝗼 𝗖𝗶𝘁𝘆",
    content: "Summer Capital/ City of Pines",
  },
  {
    title: "𝗕𝗮𝘁𝗮𝗮𝗻 ",
    content: "History Hub of Central Luzon",
  },
  {
    title: "𝗕𝗮𝘁𝗮𝗻𝗴𝗮𝘀 ",
    content: "Diving and Shipping Capital",
  },
  {
    title: "𝗕𝗮𝘁𝗮𝗻𝗲𝘀 ",
    content: "Land of True Insulars",
  },
  {
    title: "𝗕𝗮𝗰𝗼𝗹𝗼𝗱 ",
    content: "City of Smiles",
  },
  {
    title: "𝗕𝗶𝗹𝗶𝗿𝗮𝗻 ",
    content: "Shipyard of Antiquity",
  },
  {
    title: "𝗕𝗲𝗻𝗴𝘂𝗲𝘁 ",
    content: "Salad Bowl of the Philippines",
  },
  {
    title: "𝗕𝗼𝗿𝗼𝗻𝗴𝗮𝗻 ",
    content: "King City of the East",
  },
  {
    title: "𝗕𝗼𝗵𝗼𝗹",
    content: "Calamay Capital of the Philippines",
  },
  {
    title: "𝗕𝘂𝗹𝗮𝗰𝗮𝗻",
    content: "Manila's Gateway to the North",
  },
  {
    title: "𝗖𝗮𝗹𝗯𝗮𝘆𝗼𝗴 ",
    content: "City of Waterfalls",
  },
  {
    title: "𝗖𝗮𝗶𝗻𝘁𝗮, 𝗥𝗶𝘇𝗮𝗹 ",
    content: "Bibingka Capital",
  },
  {
    title: "𝗖𝗮𝗹𝗮𝗺𝗯𝗮",
    content: "Hot Spring Capital",
  },
  {
    title: "𝗖𝗮𝗺 𝗦𝘂𝗿",
    content: "Wakeboarding Capital",
  },
  {
    title: "𝗖𝗮𝘃𝗶𝘁𝗲 ",
    content: "Cradle of Philippine Revolution",
  },
  {
    title: "𝗖𝗮𝘁𝗯𝗮𝗹𝗼𝗴𝗮𝗻 ",
    content: "City of Captivating Contrast",
  },
  {
    title: "𝗖𝗮𝘁𝗮𝗻𝗱𝘂𝗮𝗻𝗲𝘀 ",
    content: "Land of the Howling Wind",
  },
  {
    title: "𝗖𝗮𝘂𝗮𝘆𝗮𝗻, 𝗜𝘀𝗮𝗯𝗲𝗹𝗮",
    content: "Mushroom City of the North",
  },
];

function PhTrivia() {
  const [showTrivia, setShowTrivia] = useState(false);
  const [triviaTitle, setTriviaTitle] = useState("");
  const [triviaContent, setTriviaContent] = useState("");

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * triviaData.length);
    const randomTrivia = triviaData[randomIndex];
    setTriviaTitle(randomTrivia.title);
    setTriviaContent(randomTrivia.content);
    setShowTrivia(true);
  };

  return (
    <div className="trivia-container">
      <h1>Trivias about Philippines</h1>
      <button className="trivia-btn" onClick={handleButtonClick}>
        Did you know?
      </button>
      {showTrivia && (
        <div className="trivia-pop-up">
          <h2>{triviaTitle}</h2>
          <p>{triviaContent}</p>
          <button className="close-btn" onClick={() => setShowTrivia(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default PhTrivia;
