import React from 'react'
import axios from "axios"
import Link from 'next/link'
import {AiFillCheckCircle} from "react-icons/ai"

export default function PricingCard({priceData}) {
  const dynamicDescription = (data) => {
    if (data.nickname === 'Hamster') {
        return ['chubby', 'cheeky', 'fuzzy']
      }
      return []
    }

    const handleSubscription = async (e) => {

      e.preventDefault();
      const { data } = await axios.post('api/payment', 
        {
          priceId: priceData.id
        }, {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      console.log("data",data)
      window.location.assign(data)
    }
  return (
    <div style={{
      background:"tomato", 
      display:"flex", 
      flexDirection:"column", 
      alignItems:"center",
      padding:8, 
      justifyContent:"space-between",
      minWidth:200
    }}>
      <div>
        <h2 style={{color:"aqua"}}>{priceData.nickname}</h2>
        {/* <p>{data.nickname}</p> */}
        <h1>
          {(priceData.unit_amount / 100).toLocaleString('en-CA', {
            style: 'currency',
            currency: 'CAD'
          })}
        </h1>
        <ul style={{listStyle: "none"}} >
          {dynamicDescription(priceData).map((bulletPoint, i) => (
            <li key={i}>
              <div style={{display:"flex", gap:8}}>
                <span style={{color:"green"}}>

                  <AiFillCheckCircle/>
                </span>
                {bulletPoint}

              </div>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleSubscription}>
        Buy
      </button>
    </div>
  )
}
