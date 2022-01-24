import React from "react";

function Sushi({ sushi, handleEatenSushi, eaten }) {
  const { id, name, img_url, price} = sushi

  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleEatenSushi(id) }>
        {eaten.includes(id) ? null : (
          <img
            src={ img_url }
            alt={ name }
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        { name } - ${ price }
      </h4>
    </div>
  );
}

export default Sushi;
