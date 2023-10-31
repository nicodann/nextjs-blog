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
    <section style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", gap:12}}>
      <div>
        <h2>Pricing</h2>
        <p>Choose the right price!</p>

        <p>Check out all the information below</p>
      </div>

      <div style={{display:"flex", flexWrap:"wrap", gap:20}}>
        {prices && prices.map((priceObject, i) => (

          <PricingCard priceData={priceObject} key={i} />
        )
        )}
      </div>

    </section>
  )
}
