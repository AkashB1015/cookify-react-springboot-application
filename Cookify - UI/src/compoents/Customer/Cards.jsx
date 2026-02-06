import { useEffect, useState } from "react";
import { getRandomImage } from "../Customer/RandomImage.jsx";
import "../../assets/Customer.css";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState({});
  const [error, setError] = useState({});

  const CUSTOMER_ID = 9007199254740991; // example, replace by real customer

  useEffect(() => {
    fetch("http://localhost:8080/cookie/list")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((item) => ({
          ...item,
          image: getRandomImage(),
        }));
        setProducts(updated);
      });
  }, []);

  const incQty = (p) => {
    const newValue = (qty[p.id] || 0) + 1;

    if (newValue > p.quantityAvailable) {
      setError((prev) => ({
        ...prev,
        [p.id]: `Only ${p.quantityAvailable} available`,
      }));
      return;
    }

    setError((prev) => ({ ...prev, [p.id]: "" }));
    setQty((prev) => ({ ...prev, [p.id]: newValue }));
  };

  const decQty = (id) => {
    setError((prev) => ({ ...prev, [id]: "" }));

    setQty((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const addToCart = async (p) => {
    const quantity = qty[p.id] || 1;

    if (quantity > p.quantityAvailable) {
      alert("Selected quantity exceeds available stock!");
      return;
    }

    const orderBody = {
      customerId: CUSTOMER_ID,
      items: [
        {
          cookieId: p.id,
          quantity: quantity,
        },
      ],
    };
console.log(orderBody);
    const response = await fetch("http://localhost:8080/orders/place", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderBody),
    });

    if (response.ok) {
      alert("Order placed successfully!");
    } else {
      alert("Order failed!");
    }
  };

  return (
    <div className="container py-5">
      <div className="row g-4 justify-content-center">
        {products.map((p) => (
          <div
            className="col-lg-4 col-md-6 d-flex justify-content-center"
            key={p.id}
          >
            <div className="card cookie-card shadow">
              <img
                src={p.image}
                alt={p.name}
                onError={(e) => (e.target.src = "/store/default.png")}
              />

              <div className="card-body text-center">
                <h5 className="fw-bold">{p.name}</h5>

                <p className="text-muted">{p.description}</p>

                <h5 className="fw-bold">₹{p.price}</h5>

                <p className="text-muted">Available: {p.quantityAvailable}</p>

                {/* QUANTITY BOX */}
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <button className="qty-btn" onClick={() => decQty(p.id)}>
                    -
                  </button>

                  <span className="qty-value">{qty[p.id] || 1}</span>

                  <button className="qty-btn" onClick={() => incQty(p)}>
                    +
                  </button>
                </div>

                {error[p.id] && (
                  <p className="error-text">{error[p.id]}</p>
                )}

                <button
                  className="btn btn-primary w-100 fw-bold mt-2"
                  onClick={() => addToCart(p)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
