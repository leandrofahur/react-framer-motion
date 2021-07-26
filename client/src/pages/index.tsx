import { GetServerSideProps, GetStaticProps } from 'next';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

import { FiAlertCircle } from 'react-icons/fi';
import { stripe } from '../services/stripe';

// Client-Side-Rendering
// Server-Side-Rendering
// Static Site Generation (SO)

// Blog post: Content => SSG, however, the comments for the post can be SSR.

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <h1>Product price: {product.amount}</h1>
      <div style={{ width: '50%' }}>
        <Input type="text" placeholder="Name">
          <FiAlertCircle />
        </Input>
        <Button background="#de5753" priceId={product.priceId}>
          <FiAlertCircle />
          Subscribe now!
        </Button>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JHIZbG9fNhdD1BsxMhUAIVs', {
    expand: ['product'],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'CAD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24hours ... seg * min * hours
  };
};
