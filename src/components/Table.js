import React, { useState } from "react";

function Table({ eaten, wallet, setWallet }) {
  const [addFunds, setAddFunds] = useState(0)
  const emptyPlates = eaten.map((index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  const handleAddFunds = (e) => {
    e.preventDefault()
    setWallet(wallet => parseFloat(wallet) + parseFloat(addFunds))
    e.target.reset()
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${ wallet } remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
        <form onSubmit={ handleAddFunds }>
          <button className="button">Add funds</button>
          <input type="number" placeholder="$$$" onChange={ (e) => setAddFunds(e.target.value) }></input>
        </form>
      </div>
    </>
  );
}

export default Table;
