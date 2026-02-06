import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col, Toast, ToastContainer } from "react-bootstrap";
import "../../assets/Customer.css";

export function CookieCardList() {
  const [cookies, setCookies] = useState([]);
  const [cart, setCart] = useState({});
  const [toast, setToast] = useState({ show: false, message: "", bg: "success" });

  // Get logged-in customer from localStorage
  const customer = JSON.parse(localStorage.getItem("customer"));
  const customerId = customer?.id;

  const showToast = (message, bg = "success") => {
    setToast({ show: true, message, bg });
  };

  // Fetch all cookies
  const fetchCookies = async () => {
    const response = await axios.get("http://localhost:8080/cookie/list");
    setCookies(response.data);
  };

  // Increase quantity
  const increaseQty = (cookie) => {
    const id = cookie.id;
    const max = cookie.quantityAvailable;
    const newQty = (cart[id] || 0) + 1;

    if (newQty > max) {
      showToast(`Only ${max} items available!`, "danger");
      return;
    }

    setCart((prev) => ({ ...prev, [id]: newQty }));
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  // 🟢 Add to Cart (ONLY UPDATES CART, DOES NOT PLACE ORDER)
  const handleAddToCart = (cookie) => {
    if ((cart[cookie.id] || 0) === 0) {
      showToast("Select quantity first!", "warning");
      return;
    }

    showToast("Added to cart!", "success");
  };

  // 🟣 Place Order (POST to backend)
  const handlePlaceOrder = async () => {
    if (!customerId) {
      showToast("Please login first!", "danger");
      return;
    }

    const items = Object.entries(cart)
      .filter(([_, qty]) => qty > 0)
      .map(([cookieId, quantity]) => ({
        cookieId: Number(cookieId),
        quantity,
      }));

    if (items.length === 0) {
      showToast("Your cart is empty!", "warning");
      return;
    }

    const orderData = { customerId, items };

    try {
      await axios.post("http://localhost:8080/orders/place", orderData);
      showToast("Order placed successfully!");

      setTimeout(async () => {
        await fetchCookies();
        setCart({});
      }, 2500);
    } catch (err) {
      console.error(err);
      showToast("Order failed!", "danger");
    }
  };

  useEffect(() => {
    fetchCookies();
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4 fancy-heading">🍪 Choose Your Cookies</h2>

      <Row>
        {cookies.map((c) => {
          const isOutOfStock = c.quantityAvailable === 0;

          return (
            <Col md={4} key={c.id} className="mb-4">
              <Card className="cookie-card shadow-lg">
                <Card.Body>
                  <Card.Title className="cookie-title">{c.name}</Card.Title>
                  <Card.Subtitle className="text-muted mb-2">₹{c.price}</Card.Subtitle>
                  <Card.Text className="cookie-desc">{c.description}</Card.Text>

                  <p className="cookie-stock">
                    <strong>Stock:</strong> {c.quantityAvailable}
                  </p>

                  {/* Quantity Controls */}
                  {!isOutOfStock && (
                    <div className="qty-box">
                      <Button
                        className="qty-btn"
                        variant="outline-danger"
                        onClick={() => decreaseQty(c.id)}
                      >
                        –
                      </Button>

                      <span className="qty-value">{cart[c.id] || 0}</span>

                      <Button
                        className="qty-btn"
                        variant="outline-success"
                        onClick={() => increaseQty(c)}
                        disabled={(cart[c.id] || 0) >= c.quantityAvailable}
                      >
                        +
                      </Button>
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  {isOutOfStock ? (
                    <Button className="place-order-btn mt-3 w-100" disabled>
                      ❌ Out of Stock
                    </Button>
                  ) : (
                    <Button
                      className="place-order-btn mt-3 w-100"
                      onClick={() => handleAddToCart(c)}
                    >
                      🛒 Add to Cart
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Place Order Button */}
      <div className="text-center mt-4">
        <Button className="place-order-btn px-5 py-2" onClick={handlePlaceOrder}>
          🧾 Place Order
        </Button>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          bg={toast.bg}
          show={toast.show}
          onClose={() => setToast({ ...toast, show: false })}
          delay={2500}
          autohide
        >
          <Toast.Body className="text-white">{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}
