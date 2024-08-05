import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart,setIncart]=useState(false);

  const handleCart = ()=>{
    setIncart(!inCart);
  };

  const liClass = inCart ? "in-cart":"";
  const buttonText = inCart? "Remove From Cart":"Add to Cart"

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
