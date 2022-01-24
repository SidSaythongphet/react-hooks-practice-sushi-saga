import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, handleEatenSushi, eaten}) {
  const [beltPosition, setBeltPosition] = useState(0)
  const displayFourSushis = () => {
    const displayFour = sushis.slice(beltPosition, beltPosition + 4)
    return displayFour
  }
  const displaySushi = displayFourSushis().map(sushi => <Sushi key={ sushi.id } sushi={sushi} handleEatenSushi={ handleEatenSushi } eaten={ eaten }/>)


  const handleMoreButton = () => {
    beltPosition < (sushis.length - 4) ? setBeltPosition(beltPosition + 4) : setBeltPosition(0)
  }

  return (
    <div className="belt">
      { displaySushi }
      <MoreButton handleMoreButton={ handleMoreButton }/>
    </div>
  );
}

export default SushiContainer;
