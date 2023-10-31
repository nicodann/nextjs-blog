import React from 'react'
import axios from "axios"
import Link from 'next/link'
import {AiFillCheckCircle} from "react-icons/ai"

export default function PricingCard({data}) {
  const dynamicDescription = (data) => {
    if (data.nickname === 'Hamster') {
      return ['chubby', 'cheeky', 'fuzzy']
    }
  return []
}
  return (
    <div style={{background:"tomato", display:"flex", flexDirection:"column", alignItems:"center",padding:8, justifyContent:"space-between"}}>
      <div>
        <div>PricingCard</div>
        <p>{data.price}</p>
        <h1>
          {(data.unit_amount / 100).toLocaleString('en-CA', {
            style: 'currency',
            currency: 'CAD'
          })}
        </h1>
        <ul style={{listStyle: "none"}} >
          {dynamicDescription(data).map((bulletPoint, i) => (
            <li key={i}>
              <AiFillCheckCircle/>
              {bulletPoint}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => {}}>
        Buy
      </button>
    </div>
  )
}
