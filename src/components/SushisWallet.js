
import React, { useState } from 'react'

function SushisWallet({onAddMoney}) {
    const[amount, setAmount]=useState(0)

    function handleAmountChange(e) {
        const amt = e.target.value
        if (amt === "" || isNaN(amt)){
            setAmount("")
        }else{
            setAmount(parseInt(amt))
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        onAddMoney(amount)
        setAmount(0)
    }
    return (
         <form onSubmit={handleSubmit}>
            <input type="number" value={amount} onChange={handleAmountChange}/>
            <input type="submit" value="Add $$ to the wallet" />
        </form>
    )
}
export default SushisWallet;