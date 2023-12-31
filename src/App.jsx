import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards'
import Categories from './components/Categories'

import baroque from './images/baroque-bm.jpeg';
import blueagate from './images/blueagate.jpeg';
import faux from './images/faux-pn-1.jpeg'
import greenjasper from './images/greenjasper.jpeg';

function App() {
  const cardData = [
  {
    imageSrc: baroque,
    Item: "Baroque",
    Category: "Beads",
    Cost: 10,
    
  },
  {
    imageSrc: blueagate,
    Item: "Blue Agate",
    Category: "Beads",
    Cost: 20,
   
  },
  {
    imageSrc: faux,
    Item: " Faux Pearl Necklace",
    Category: "Necklace",
    Cost: 30,
  
  },
  {
    imageSrc: greenjasper,
    Item: " Red Japsar",
    Category: "Rings",
    Cost: 30,
    
  },
];
  const [count, setCount] = useState(0)

 const [categoryFilter, setCategoryFilter] = useState(null);
  const [filteredCardData, setFilteredCardData] = useState(cardData);

  // Function to filter the card data based on the selected category
  const filterCardsByCategory = (category) => {
    setCategoryFilter(category);
  };


   useEffect(() => {
    if (categoryFilter) {
      const filteredData = cardData.filter((card) => card.Category === categoryFilter);
      setFilteredCardData(filteredData);
    } else {
      setFilteredCardData(cardData);
    }
  }, [categoryFilter]);




  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Ayushi Semi-Precious Jewellery
    </h1>
    <Categories filterCards={filterCardsByCategory} />
    <Cards cardData={filteredCardData}/>
    </>
  )
}

export default App
