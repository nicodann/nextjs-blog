import Stripe from 'stripe'

const stripe = new Stripe(process.env.STIPE_SECRET_KEY_TEST)

// const params = {
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

export default async function handler() {
  const checkoutSession = await stripe.checkout.sessions.create({})
}