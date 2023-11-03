import React from "react";
import mehul from "../images/mehul.jpg";
import prangana from "../images/prangana.jpg";
import malti from "../images/malti.jpg";
import anshuman from "../images/anshuman.jpg";
import necklace from "../images/rednecklace.jpeg";
const cardData = [
  {
    imageSrc: anshuman,
    heading: "Red Japsar",
    description: "Drawing and Design Faculty",
    passout: "NIFT(B.Des.)",
  },
  {
    imageSrc: prangana,
    heading: "Red Japsar",
    description: "History & English Faculty",
    passout: "NID (M.Des.), NIFT (B.Des)",
  },
  {
    imageSrc: malti,
    heading: " Red Japsar",
    description: "Fine Arts Faculty",
    passout: "JJ School of Arts(B.A.)",
  },
  {
    imageSrc: mehul,
    heading: " Red Japsar",
    description: "Aptitude Faculty",
    passout: "MNNIT, ALLAHABAD",
  },
  // Add more card data as needed
];

const Cards = () => {
  return (
    <div>
      <div className="text-4xl m-4 p-2">Our Collection</div>
      <div className="w-full min-h-fit gap-4 flex-wrap flex justify-center items-center mb-16">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl"
          >
            {/* Image */}
            <img
              className="h-60 w-full object-cover rounded-xl justify-center"
              src={necklace}
              alt=""
            />
            <div className="p-2">
              {/* Heading */}
              <h2 className="font-bold text-lg mb-2">{card.heading}</h2>
              {/* Description */}
           <div className="flex-col">   <p className="text-sm text-gray-600"></p>  <h3>Cost $10</h3> </div>
            </div>
            {/* CTA */}
            <div className="m-2">
              <a
                href="#"
                className="text-white bg-red-300 px-3 py-1 rounded-md hover:bg-purple-700"
              >
                Purchase
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
