import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis"; 

function App() {

  const [sushis, setSushis] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect (() => {
    fetch(API)
    .then(r=>r.json())
    .then(sushis => {
      const modifiedSushi = sushis.map(sushi =>{
        return {...sushi, isEaten : false}
      })
      setSushis(modifiedSushi)
    })
  }, [])

  function handleEatSuhis(eatenSushi) { 
    const remainder = wallet - eatenSushi.price
    if (remainder >=0) {
      const updatedSushis = sushis.map(sushi => {
        if (sushi.id === eatenSushi.id){
          return {...sushi, isEaten: true}
        } else {
          return sushi
        }
      })
      setWallet(remainder)
      setSushis(updatedSushis)
    }else{
      alert("You don't have enough money to buy this Sushi!")
    }
  }

  const emptyPlates = sushis.filter(sushi => sushi.isEaten)

  function handleAddMoney(amount) {
    setWallet(wallet=> wallet + amount)
  }

  console.log(sushis)
  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSuhis} />
      <Table plates={emptyPlates} wallet={wallet} onAddMoney={handleAddMoney}/>
    </div>
  );
}

export default App;
