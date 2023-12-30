import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onEatSushi}) {
  const [currentSushiIndex, setCurrentSushiIndex] = useState(0)
  
  const suShisMenu=sushis
  .slice(currentSushiIndex, currentSushiIndex + 4)
  .map(sushi => <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} />)

function handleMoreSushi() {
    setCurrentSushiIndex (currentSushiIndex => (currentSushiIndex + 4) % sushis.length) 
  }
  return (
    <div className="belt">
      {suShisMenu} 
      <MoreButton onMoreButtonClick={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
