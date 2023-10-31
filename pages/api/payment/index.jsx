import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const handler = async (req, res) => {
  const stripe = new Stripe('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')
  let data = await req.body
  // console.log("requestData:",data)
  // //request.body?
  let priceId = data.priceId
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000',
    cancel_url:'http://localhost:3000'
    //custom_fields: 
  })

  res.status(200).json(session.url)
  // return NextResponse.json(session.url)
}

export default handler;
