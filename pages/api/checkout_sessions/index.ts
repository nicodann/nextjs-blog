import Stripe from 'stripe'


export default async function handler() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  
  const params: Stripe.Checkout.SessionCreateParams = {}
  //   submit_type: 'donate',
  //   payment_method_types: ['card'],
  //   line_items: [
  //     {
  //       name: 'Custom amount donation',
  //       // amount: formatAmountForStripe(amount, CURRENCY),
  //       amount: 1,
  //       // currency: CURRENCY,
  //       currency: 'CAD',
  //       quantity: 1,
  //     },
  //   ],
  //   success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  //   cancel_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
  // }
  const checkoutSession = await stripe.checkout.sessions.create(params)
}