import React from 'react';
import MainLayout from './components/mainLayout';
import ShoppingCart from './pages/shoppingCart';

const App = ({ shoppingCart, loading }) => {
  return (
    <MainLayout>
      <ShoppingCart {...shoppingCart} />
    </MainLayout>
  );
};

export default App;
