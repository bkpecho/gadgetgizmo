import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to PinoyTechShop!',
  description: 'We sell the best tech products online.',
  keywords: 'pinoy, technology, electronics, buy gadgets'
};

export default Meta;
