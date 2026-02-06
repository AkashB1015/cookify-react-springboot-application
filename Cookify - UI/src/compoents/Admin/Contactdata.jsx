import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Spinner, Alert, Button } from "react-bootstrap";

export default function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchContacts = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/contact-form/list"
            );
            setContacts(response.data);
        } catch (err) {
            setError("Failed to load contact data!");
        } finally {
            setLoading(false);
        }
    };

    const deleteContact = async (id) => {
        if (!window.confirm("Are you sure you want to delete this contact?")) return;
       
        try {
            await axios.delete(
                `http://localhost:8080/contact-form/delete/${id}`
            );
            setContacts(contacts.filter(c => c.id !== id));
        } catch (err) {
            alert("Failed to delete contact!");
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Contact Form Submissions</h2>

            {loading && <Spinner animation="border" className="d-block mx-auto" />}

            {error && <Alert variant="danger">{error}</Alert>}

            {!loading && !error && (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    No contact messages found.
                                </td>
                            </tr>
                        ) : (
                            contacts.map((c, index) => (
                                <tr key={c.id}>
                                    <td>{index + 1}</td>
                                    <td>{c.name}</td>
                                    <td>{c.email}</td>
                                    <td>{c.phone}</td>
                                    <td>{c.message}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => deleteContact(c.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            )}
        </Container>
    );
}
