import { useState, useEffect } from "react";
import "../styles/juiceSlider.css";

const fruits = [
  {
    name: "Orange",
    color: "#f97316",
    price: 500,
    fruitImg:
      "https://tse3.mm.bing.net/th/id/OIP.hOr6_I_hlrEyTS_vK4_ccgHaEK?pid=Api&P=0&h=220",
    bottle:
      "https://i5.walmartimages.com/asr/08eaff70-4d70-4ba8-86a3-06733515354d.5aa8f93b68958914267f292fe4e2b5fa.png",
  },
  {
    name: "Apple",
    color: "#ef4444",
    price: 300,
    fruitImg:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    bottle:
      "https://png.pngtree.com/png-vector/20240129/ourmid/pngtree-bottle-of-juice-apple-isolated-png-ai-generative-png-image_11565393.png",
  },
  {
    name: "Mango",
    color: "#f59e0b",
    price: 230,
    fruitImg:
      "https://images.unsplash.com/photo-1553279768-865429fa0078",
    bottle:
      "https://c8.alamy.com/comp/WWGXR5/bottle-and-glass-of-tasty-mango-juice-on-white-background-WWGXR5.jpg",
  },
  {
    name: "Grape",
    color: "#7c3aed",
    price: 280,
    fruitImg:
      "https://images.unsplash.com/photo-1596363505729-4190a9506133",
    bottle:
      "https://tse3.mm.bing.net/th/id/OIP.JTaD2Mpc4aXyoNxHwvaL5gHaHa?pid=Api&P=0&h=220",
  },
  {
    name: "Strawberry",
    color: "#e11d48",
    price: 290,
    fruitImg:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
    bottle:
      "https://img.freepik.com/premium-photo/pink-bottle-with-strawberry-ai-generated_1112329-59239.jpg",
  },
];

export default function FritSlider() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(1);
  const [loaded, setLoaded] = useState(false);

  const current = fruits[index];
  const nextFruit = fruits[(index + 1) % fruits.length];

  useEffect(() => {
    fruits.forEach((fruit) => {
      const img1 = new Image();
      img1.src = fruit.fruitImg;

      const img2 = new Image();
      img2.src = fruit.bottle;
    });
  }, []);

  useEffect(() => {
    setLoaded(false);
  }, [index]);

  const next = () => {
    setIndex((prev) => (prev + 1) % fruits.length);
    setCount(1);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + fruits.length) % fruits.length);
    setCount(1);
  };

  // 🛍️ Add to cart function
  const addToCart = () => {
    alert(`${current.name} added to cart 🛍️`);
  };

  return (
    <div className="container" style={{ background: current.color }}>
      <div className="wrapper">

        {/* LEFT */}
        <div className="left">
          <div className="fruit-circle">
            <img src={current.fruitImg} alt={current.name} />
          </div>

          <h1>Fresh {current.name}</h1>
          <p>Enjoy natural {current.name} juice with freshness.</p>

          <div className="counter">
            <button onClick={() => setCount((c) => Math.max(1, c - 1))}>
              -
            </button>
            <span>{count}</span>
            <button onClick={() => setCount((c) => c + 1)}>
              +
            </button>
          </div>

          <h2>Rs: {current.price * count}</h2>

          <div className="buttons">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>

          {/* 🛍️ ADD TO CART BUTTON */}
          <button className="cart-btn" onClick={addToCart}>
            🛍️ Add to Cart
          </button>
        </div>

        {/* CENTER */}
        <div className="center">
          <img
            src={current.bottle}
            alt={current.name}
            className="main-bottle"
            onLoad={() => setLoaded(true)}
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        </div>

        {/* RIGHT */}
        <div className="right">
          <img src={nextFruit.bottle} alt="" className="next-bottle" />
        </div>

      </div>
    </div>
  );
}
