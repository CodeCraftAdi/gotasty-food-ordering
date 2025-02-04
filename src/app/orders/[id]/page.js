'use client'
import AddressInputs from "@/app/components/layout/AddressInputs";
import { CartContext, cartProductPrice } from "@/app/components/layout/AppContext";
import CartProduct from "@/app/components/layout/menu/CartProduct";
import SectionHeaders from "@/app/components/layout/SectionHeaders";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function OrderPage() {
  const { clearCart } = useContext(CartContext);
  const [order, setOrder] = useState();
  const [loadingOrder, setLoadingOrders] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    if (typeof window.console !== "undefined") {
      if (window.location.href.includes('clear-cart=1')) {
        clearCart();
      }
    }
    if (id) {
      setLoadingOrders(true);
      fetch('/api/orders?_id=' + id).then(res => {
        res.json().then(orderData => {
          setOrder(orderData);
          setLoadingOrders(false);
        });
      })
    }
  }, []);

  let subtotal = 0;
  if (order?.cartProducts) {
    for (const product of order?.cartProducts) {
      subtotal += cartProductPrice(product);
    }
  }
  
  return (
    <section className="max-w-2xl mx-auto text-center mt-8">
      <div className="text-center">
        <SectionHeaders mainHeader="Your order" />
        <div className="mt-4 mb-8">
          <p>Thanks for you order.</p>
          <p>We will call you when your order will be on the way.</p>
        </div>
      </div>
      {loadingOrder && (
        <div>Loading your orders...</div>
      )}
      {order && (
        <div className="grid md:grid-cols-2 md:gap-16">
          <div>
            {order.cartProducts.map((product, index) => (
              <CartProduct key={product._id || index} product={product} />
            ))}
            <div className="text-right py-2 text-gray-500">
              Subtotal:
              <span className="text-black font-bold inline-block w-8">${subtotal}</span>
              <br />
              Delivery:
              <span className="text-black font-bold inline-block w-8">$5</span>
              <br />
              Total:
              <span className="text-black font-bold inline-block w-8">
                ${subtotal + 5}
              </span>
              <br />
            </div>
          </div>
          <div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <AddressInputs disabled={true} addressProps={{ ...order }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}