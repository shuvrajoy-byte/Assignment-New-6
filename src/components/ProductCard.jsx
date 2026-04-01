import React from "react";
import { toast } from 'react-toastify';
import cartIcon from "../assets/shopping-cart.png";
const images = import.meta.glob('../assets/*.png', { eager: true });

const getIcon = (iconPath) => {
  const fileName = iconPath.split('/').pop();
  const key = Object.keys(images).find(k => k.includes(fileName));
  return key ? images[key].default : '';
};

const tagStyles = {
  popular: 'bg-purple-100 text-purple-700',
  new: 'bg-green-100 text-green-700',
  'best seller': 'bg-yellow-100 text-yellow-700',
};

const ProductCard = ({ product, onAddToCart, cartItems }) => {
  const { name, description, price, period, tag, tagType, features, icon } = product;
  const isInCart = cartItems.some(item => item.id === product.id);

  const handleBuyNow = () => {
    if (isInCart) return;
    onAddToCart(product);
    toast.success(
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={cartIcon} alt="cart" style={{ width: '20px', height: '20px' }} />
        <span>"{name}" added to cart!</span>
      </div>,
      { position: 'top-right', autoClose: 2500 }
    );
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col relative">
      {tag && (
        <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[tagType] || 'bg-gray-100 text-gray-600'}`}>
          {tag}
        </span>
      )}
      <div className="mb-4">
        <img src={getIcon(icon)} alt={name} className="w-12 h-12 object-contain" />
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2 pr-24">{name}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>

      <div className="mb-5">
        <span className="text-3xl font-extrabold text-gray-900">${price}</span>
        <span className="text-gray-400 text-sm ml-1">/{period}</span>
      </div>

      <ul className="mb-6 flex flex-col gap-2 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={handleBuyNow}
        className={`w-full font-semibold py-3 rounded-xl transition-all duration-300 mt-auto flex items-center justify-center gap-2
          ${isInCart
            ? 'bg-green-500 text-white cursor-default'
            : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
      >
        {isInCart ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Added to Cart
          </>
        ) : 'Buy Now'}
      </button>
    </div>
  );
};

export default ProductCard;