import React, { useState } from 'react';
import './ProductList.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "$12" },
                { name: "Areca Palm", image: "https://cdn.pixabay.com/photo/2021/02/19/07/46/areca-plant-6023704_1280.jpg", cost: "$25" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2020/06/19/06/50/peace-lily-5323556_1280.jpg", cost: "$18" }
            ]
        },
        {
            category: "Indoor Plants",
            plants: [
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2017/05/10/16/47/aloe-vera-2303279_1280.jpg", cost: "$10" },
                { name: "ZZ Plant", image: "https://cdn.pixabay.com/photo/2019/05/30/18/17/zz-plant-4254231_1280.jpg", cost: "$20" },
                { name: "Fiddle Leaf Fig", image: "https://cdn.pixabay.com/photo/2020/05/16/10/14/fiddle-leaf-plant-5176655_1280.jpg", cost: "$30" },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2018/06/05/07/48/ficus-elastica-3458092_1280.jpg", cost: "$22" }
            ]
        },
        {
            category: "Succulents",
            plants: [
                { name: "Echeveria", image: "https://cdn.pixabay.com/photo/2018/05/23/22/56/echeveria-3429123_1280.jpg", cost: "$8" },
                { name: "Jade Plant", image: "https://cdn.pixabay.com/photo/2018/05/18/15/00/jade-3401621_1280.jpg", cost: "$12" },
                { name: "Cactus", image: "https://cdn.pixabay.com/photo/2017/10/05/13/56/cactus-2825857_1280.jpg", cost: "$6" },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2017/05/10/16/47/aloe-vera-2303279_1280.jpg", cost: "$10" }
            ]
        },
        {
            category: "Hanging Plants",
            plants: [
                { name: "String of Pearls", image: "https://cdn.pixabay.com/photo/2018/06/25/06/17/string-of-pearls-3515302_1280.jpg", cost: "$15" },
                { name: "English Ivy", image: "https://cdn.pixabay.com/photo/2020/06/22/20/34/ivy-5337117_1280.jpg", cost: "$12" },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2016/04/05/01/46/boston-fern-1304693_1280.jpg", cost: "$20" },
                { name: "Wandering Jew", image: "https://cdn.pixabay.com/photo/2020/06/29/22/43/wandering-jew-5357637_1280.jpg", cost: "$18" }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
      };
    
      const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
      };
    
      const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
      };
    
      return (
        <div>
          <div className="navbar">
            {/* Barra de navegación */}
          </div>
    
          {!showCart ? (
            <div className="product-grid">
              {plantsArray.map((category, idx) => (
                <div key={idx} className="category">
                  <h3>{category.category}</h3>
                  <div className="plants">
                    {category.plants.map((plant, idx) => (
                      <div key={idx} className="plant">
                        <img src={plant.image} alt={plant.name} />
                        <h4>{plant.name}</h4>
                        <p>{plant.cost}</p>
                        <button onClick={() => handleAddToCart(plant)}>
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <CartItem onContinueShopping={handleContinueShopping} />
          )}
        </div>
      );
    }
    
    export default ProductList;