import getStripe from "../lib/get-stripe";

export default function CheckoutForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a Checkout Session.
    const checkoutSession = await fetch(
      '/api/checkout_sessions',
      // { amount: input.customDonation },
      {},
    );
  
    if ((checkoutSession).statusCode === 500) {
      console.error((checkoutSession).message);
      return;
    }
  
    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      // Make the id field from the Checkout Session creation API response
      // available to this file, so you can provide it as parameter here
      // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
      sessionId: checkoutSession.id,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    console.warn(error.message);
  };
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Checkout</button>
    </form>
  )
}
