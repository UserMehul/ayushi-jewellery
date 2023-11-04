import React, { useEffect, useState } from "react";
import sub from '../images/sub.png';
import add from '../images/add.png'

const Cards = ({ cardData }) => {
  const [cart, setCart] = useState({});
  const [totalCost, setTotalCost] = useState(0);

  const addToCart = (itemId) => {
    if (cart[itemId]) {
      setCart({ ...cart, [itemId]: cart[itemId] + 1 });
    } else {
      setCart({ ...cart, [itemId]: 1 });
    }
  };

  const removeFromCart = (itemId) => {
    if (cart[itemId] > 1) {
      setCart({ ...cart, [itemId]: cart[itemId] - 1 });
    } else {
      const newCart = { ...cart };
      delete newCart[itemId];
      setCart(newCart);
    }
  };

 const calculateTotalCost = () => {
    let cost = 0;
    for (const itemId in cart) {
      cost += Number(cart[itemId]) * Number(cardData[itemId].Cost);
    }
    console.log("cost: ", Number(cost))
    return cost;
  };

  useEffect(() => {
    setTotalCost(calculateTotalCost());
  }, [cart, cardData]);



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
              src={card.imageSrc}
              alt=""
            />
            <div className="p-2">
              {/* Item */}
              <h2 className="font-bold text-lg mb-2">{card.Item}</h2>

              {/* Description */}
              <div className="flex-col">
                <p className="text-sm text-gray-600">{card.Description}</p>
                <h3>Cost ${card.Cost}</h3>
                <div>{card.Category}</div>
              </div>
            </div>

            {/* Quantity Controls */}
            {cart[index] && (
              <div className="flex flex-row p-2 justify-center items-center">
                <div className="flex">
                  <button onClick={() => removeFromCart(index)}>
                    <img src={sub} alt="Subtract" style={{width: '20px', height:'20px', marginRight: '10px'}}/>
                  </button>
                </div>
                <h1>{cart[index]}</h1>
                <button onClick={() => addToCart(index)}>  
                                  <img src={add} alt="Add" style={{width: '20px', height:'20px', marginLeft: '10px'}} />
</button>
              </div>
            )}

            {/* Add to Cart */}
            <div className="m-2">
              <button
                onClick={() => addToCart(index)}
                className="text-white bg-red-300 px-3 py-1 rounded-md hover:bg-purple-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Display the total cost */}
      <div className="text-xl font-bold">Total Cost: ${totalCost}</div>
    </div>
  );
};

export default Cards;
