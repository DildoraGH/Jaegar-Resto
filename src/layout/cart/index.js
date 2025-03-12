import React, { useContext, useState, useEffect } from 'react';
import EmptyCart from './components/empty-cart';
import { contextData } from '../../services/context-store';
import FullCart from './components/full-cart';
import PaymentCart from './components/payment-cart';
import Toggle from '../../components/toggle';

const Cart = () => {
  const [paymentCart, setPaymentCart] = useState(false);
  const { activeTab, orderList } = useContext(contextData);

  useEffect(() => {
    setPaymentCart(false);
  }, [activeTab])

  return (
    <>
      <Toggle active={(activeTab === 7 && !paymentCart) ? true : false}>
        {orderList?.length ? <FullCart handleClick={() => setPaymentCart(true)} /> : <EmptyCart />}
      </Toggle>
      <Toggle active={(activeTab === 7 && paymentCart) ? true : false}>
        <PaymentCart />
      </Toggle>
    </>
  )
}

export default Cart;