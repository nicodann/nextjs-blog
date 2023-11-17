import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'


const handler =  async (req, res) => {
  // res.status(200).json({ test: 'Hello'})
  // const stripe = new Stripe('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')
  
  const params: Stripe.Checkout.SessionCreateParams = {
    submit_type: 'donate',
    payment_method_types: ['card'],
    line_items: [
      {
        // name: 'Custom amount donation',
        // amount: formatAmountForStripe(amount, CURRENCY),
        // amount: 1,
        // currency: CURRENCY,
        // currency: 'CAD',
        quantity: 1,
      },
    ],
    success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  }
  // const checkoutSession = await stripe.checkout.sessions.create(params)

  // res.status(200).send(checkoutSession)
}

export default handler;