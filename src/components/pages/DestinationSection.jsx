import React from "react";
import DestinationCard from "./DestinationCard";
import "./DestinationSection.css";

const destinations = [
  {
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHBhcmlzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description:
      "Explore the Eiffel Tower, the Louvre Museum, and many other cultural landmarks in the city of lights!",
  },
  {
    name: "Bali",
    image:
      "https://images.unsplash.com/photo-1554553122-1b5b157b5c47?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGJhbGklMjBwYXJpc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description:
      "Relax on the beaches, hike through the rice paddies, and immerse yourself in the unique culture of Bali!",
  },
  {
    name: "New York City",
    image:
      "https://images.unsplash.com/photo-1526718075328-3a7d2aef68fe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG5ldyUyMG15c3RlcnklMjBjaXR5JTIwbGVhZGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    description:
      "Experience the energy of the city that never sleeps with its iconic landmarks, cultural diversity, and endless attractions!",
  },
];

const DestinationSection = () => {
  return (
    <section className="destination-section">
      <h2>Popular Destinations</h2>
      <div className="destination-cards">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            name={destination.name}
            image={destination.image}
            description={destination.description}
          />
        ))}
      </div>
    </section>
  );
};

export default DestinationSection;
