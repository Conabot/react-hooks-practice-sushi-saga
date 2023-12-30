import React from "react";

function Sushi({sushi, onEatSushi}) {
  const {name, img_url, price, isEaten} = sushi

  function handleClickSushi () {
    if (!isEaten) {
      return onEatSushi(sushi)
    } else {
      alert ("They must be the sushis on the plate!")
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClickSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
