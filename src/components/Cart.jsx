import React from "react";
import { toast } from 'react-toastify';

// ✅ assets থেকে সব image load করো
const images = import.meta.glob('../assets/*.png', { eager: true });

const getIcon = (iconPath) => {
  const fileName = iconPath.split('/').pop();
  const key = Object.keys(images).find(k => k.includes(fileName));
  return key ? images[key].default : '';
};

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (item) => {
    onRemove(item.id);
    toast.error(`❌ "${item.name}" removed from cart.`, { position: 'top-right', autoClose: 2000 });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    onCheckout();
    toast.info('✅ Checkout successful! Cart cleared.', { position: 'top-right', autoClose: 3000 });
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-7xl mb-4">🛒</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
        <p className="text-gray-400 text-sm">Browse products and click Buy Now to add items.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-bold text-gray-800 text-lg">Your Cart</h3>
        </div>

        <div className="divide-y divide-gray-50">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  {/* ✅ getIcon দিয়ে assets থেকে load */}
                  <img src={getIcon(item.icon)} alt={item.name} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                  <p className="text-gray-400 text-sm">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item)}
                className="text-red-400 hover:text-red-600 text-sm font-medium transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-gray-500 text-sm">Total</span>
          <span className="text-2xl font-extrabold text-gray-900">${total}</span>
        </div>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-2xl transition-colors text-base"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;