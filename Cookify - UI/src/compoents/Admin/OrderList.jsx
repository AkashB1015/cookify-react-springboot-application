import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Form } from "react-bootstrap";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch orders
  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:8080/orders/list");
      setOrders(response.data);
      setFiltered(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Search filter
  const handleSearch = (text) => {
    setSearch(text);

    const result = orders.filter((o) =>
      o.customerId.toString().includes(text) ||
      o.status.toLowerCase().includes(text.toLowerCase()) ||
      o.totalAmount.toString().includes(text)
    );

    setFiltered(result);
  };

  return (
    <Container className="mt-4">
      <h3 className="text-center mb-3"> Order History</h3>

      {/* SEARCH BAR */}
      <Form.Control
        type="text"
        placeholder="Search by Customer ID, Amount, or Status..."
        className="mb-3 shadow-sm"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {/* TABLE */}
      <Table striped bordered hover responsive className="shadow-lg text-center">
        <thead className="table-dark">
          <tr>
            <th>Order ID</th>
            <th>Created On</th>
            <th>Total Amount (₹)</th>
            <th>Customer ID</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filtered.length > 0 ? (
            filtered.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.createdOn}</td>
                <td><strong>₹{o.totalAmount}</strong></td>
                <td>{o.customerId}</td>
                <td>
                  <span className="badge bg-success">
                    {o.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
