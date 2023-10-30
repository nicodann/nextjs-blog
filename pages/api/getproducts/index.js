import Stripe from "stripe";
import { NextResponse } from "next/server";

// export const config = {
//   api: {
//     externalResolver: true,
//   }
// }

const handler =  async (req, res) => {
  // res.status(200).json({ test: 'Hello'})
  // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const stripe = new Stripe('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')
  const prices = await stripe.prices.list({
    limit: 4
  })
  const products = await stripe.products.list()
  // return stripe
  // return NextResponse.json(prices.data.reverse())
  // return res.status(200).json(prices)
  res.status(200).json(products)
}

export default handler;
