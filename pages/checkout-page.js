import Layout from '../components/layout';

import CheckoutForm from '../components/CheckoutForm';

export default function CheckoutPage() {
  return (
    <Layout title="Checkout with Checkout | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>Donate with Checkout</h1>
        <p>Donate to our project 💖</p>
        <CheckoutForm />
      </div>
    </Layout>
  );
};