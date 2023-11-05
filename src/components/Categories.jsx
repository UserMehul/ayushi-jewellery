import React from 'react';

const Categories = ({filterCards}) => {
  const categoryNames = ['Beads', 'Necklace', 'Rings'];

  return (
    <>
    {/* <div><h1> Our Categories</h1></div> */}
    <div className="flex flex-wrap justify-center items-center space-x-2 m-2">
        {categoryNames.map((category, index) => (
          <ol className='flex flex-wrap'>
    <li 
        type="button" 
        id="index"
        className="w-16 text-sm  bg-blue-400 p-2 rounded-md justify-center text-white outline-none focus:ring-4 shadow-lg transform active:scale-y-75 transition-transform flex"
   onClick={() => filterCards(category)}  >
    
            {category}
          </li>
          </ol>
        ))}
    </div>
    </>
  );
};

export default Categories;
