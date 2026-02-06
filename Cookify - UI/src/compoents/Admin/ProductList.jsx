import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button, Form, Modal } from "react-bootstrap";
import { COOKIE_API } from "../../constants/APIConstant";
import "../../assets/Admin.css";  

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const [editId, setEditId] = useState(null);
  const [editCategoryId, setEditCategoryId] = useState(null);

  const getProducts = async () => {
    const response = await axios.get(COOKIE_API.LIST);
    return response.data;
  };

  const updateProduct = async (id, dto) => {
    return await axios.put(`${COOKIE_API.UPDATE}/${id}`, dto);
  };

  const deleteProduct = async (id) => {
    return await axios.delete(`${COOKIE_API.DELETE}/${id}`);
  };

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (p) => {
    setEditData({
      name: p.name,
      price: p.price,
      description: p.description,
      quantityAvailable: p.quantityAvailable,
    });
    setEditId(p.id);
    setEditCategoryId(p.categoryId);
    setShowEdit(true);
  };

  const handleSave = async () => {
    try {
      const dto = {
        id: editId,
        categoryId: editCategoryId,
        name: editData.name,
        price: editData.price,
        description: editData.description,
        quantityAvailable: editData.quantityAvailable,
      };

      await updateProduct(editId, dto);
      alert("Cookie updated successfully!");
      setShowEdit(false);
      fetchProducts();
    } catch (error) {
      console.error("Error updating cookie:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      alert("Cookie deleted successfully!");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting cookie:", error);
    }
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    setShowEdit(false);
    setEditData({});
    setEditId(null);
  };

  return (
    <div className="admin-bg">
      <Container className="pt-4">

        {/* Heading */}
        <h2 className="admin-heading text-center mb-4">
          🍪 Welcome to Cookify Admin Dashboard
        </h2>

        {/* Table */}
        {products.length === 0 ? (
          <h4 className="text-center mt-4">No Cookies Found</h4>
        ) : (
          <Table
            striped
            bordered
            hover
            responsive
            className="mt-4 text-center shadow-sm admin-table"
          >
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price (₹)</th>
                {/* <th>Description</th> */}
                <th>Quantity Available</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  {/* <td>{p.description}</td> */}
                  <td>{p.quantityAvailable}</td>
                  <td>{p.categoryName}</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(p)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(p.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {/* Edit Modal */}
        <Modal show={showEdit} onHide={handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Cookie</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={editData.name || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={editData.price || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  rows={3}
                  value={editData.description || ""}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Quantity Available</Form.Label>
                <Form.Control
                  type="number"
                  name="quantityAvailable"
                  value={editData.quantityAvailable || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="success" onClick={handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}
