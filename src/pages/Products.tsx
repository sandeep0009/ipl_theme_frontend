import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Products: React.FC = () => {
  const theme = useSelector((state: RootState) => state.userToken.theme);
  const products = [
    { id: 1, name: 'Jersey', price: 799, image: 'https://images.unsplash.com/photo-1512408529119-bcbb5bc2d58f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjAyOXwwfDF8c2VhcmNofDh8fGplcnNleXxlbnwwfDF8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 2, name: 'Cap', price: 499, image: 'https://images.unsplash.com/photo-1595267363790-990f3f67e8b2?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OXwwfDF8c2VhcmNofDd8fGNhcHxlbnwwfDF8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 3, name: 'Mug', price: 299, image: 'https://images.unsplash.com/photo-1600795481888-2157ccedcb9e?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OXwwfDF8c2VhcmNofDJ8fG11Z3xlbnwwfDF8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 4, name: 'Keychain', price: 199, image: 'https://images.unsplash.com/photo-1582388017557-c4f9b68b6d9f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OXwwfDF8c2VhcmNofDJ8fGtleWNhaGluZ3xlbnwwfDF8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 5, name: 'T-Shirt', price: 899, image: 'https://images.unsplash.com/photo-1565774609-6b0b4b21558b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OXwwfDF8c2VhcmNofDN8fHRzaGlydHxlbnwwfDF8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 6, name: 'Hoodie', price: 1499, image: 'https://images.unsplash.com/photo-1603659245295-72a8d9536e31?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OXwwfDF8c2VhcmNofDJ8fGhvb2RpZXxlbnwwfDF8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 7, name: 'Poster', price: 99, image: 'https://images.unsplash.com/photo-1561948955-b86ba024b76d?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OXwwfDF8c2VhcmNofDJ8fGxvZ28gfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 8, name: 'Shoes', price: 2499, image: 'https://images.unsplash.com/photo-1583951753462-2f88cf202c7b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OXwwfDF8c2VhcmNofDJ8fHNob2VzfGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 9, name: 'Bag', price: 999, image: 'https://images.unsplash.com/photo-1573600796283-24e2cbec2d0f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OXwwfDF8c2VhcmNofDJ8fGJhZ3xlbnwwfDF8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
    { id: 10, name: 'Wristband', price: 149, image: 'https://images.unsplash.com/photo-1575085169307-7b8d25e9a2d3?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg2OXwwfDF8c2VhcmNofDJ8fG1yaXN0YmFuZHN8ZW58MHx8fHx8&ixlib=rb-1.2.1&q=80&w=400' },
  ];
  if (!theme) return <p className="text-center font-bold h-screen flex items-center justify-center">Please log in to view products.</p>;

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center"
      style={{
        backgroundImage: `url(${theme.logo})`, // Use the team logo as the background
        backgroundColor: theme.colors.primary,
        color: theme.colors.secondary,
      }}
    >
      <h1 className="text-4xl font-bold my-6">Team Merchandise</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">₹{product.price}</p>
              <button
                className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                style={{
                  backgroundColor: theme.colors.secondary,
                  color: theme.colors.primary,
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
