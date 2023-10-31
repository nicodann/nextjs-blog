'use client'
import axios from "axios"
import { useState, useEffect } from 'react'
import PricingCard from "../../components/PricingCard";

export default function Pricing() {
  const [prices, setPrices] = useState([])

  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data} = await axios.get('/api/getproducts')
    setPrices(data.data)
    console.log(data.data)
  }
  return (
    <section style={{display:"flex", direction:"column",justifyContent:"center", alignItems:"center"}}>
      <div>
        <h2>Pricing</h2>
        <p>Choose the right price!</p>

        <p>Check out all the information below</p>
      </div>

      <div style={{display:"flex", flexWrap:"wrap"}}>
        {prices && prices.map((priceObject, i) => (

          <PricingCard data={priceObject} key={i} />
        )
        )}
      </div>

    </section>
  )
}
