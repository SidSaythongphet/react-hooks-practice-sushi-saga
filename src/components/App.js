import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [eaten, setEaten] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushisData => setSushis(sushisData))
  }, [])

  const handleEatenSushi = (sushiId) => {
    if (!eaten.includes(sushiId) && wallet - sushis.find(sushi => sushi.id === sushiId).price > 0) {
      setEaten((prevArr) => [...prevArr, sushiId])
      setWallet(prevWallet => prevWallet - sushis.find(sushi => sushi.id === sushiId).price)
    } else {
      alert("Sold Out or Insufficient Funds")
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={ sushis } handleEatenSushi={ handleEatenSushi } eaten={ eaten }/>
      <Table eaten={ eaten } wallet={ wallet } setWallet={ setWallet }/>
    </div>
  );
}

export default App;
