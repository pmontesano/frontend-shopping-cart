import React from 'react';
import MainLayout from './components/mainLayout';
import ShoppingCart from './pages/shoppingCart';

interface AppProps {
  shoppingCart: any;
  loading: boolean;
}

const App = ({ shoppingCart, loading }: AppProps) => {
  return (
    <MainLayout>
      <ShoppingCart {...shoppingCart} loading={loading} />
    </MainLayout>
  );
};

export default App;
