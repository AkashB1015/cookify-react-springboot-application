import Accordion from "react-bootstrap/Accordion";
import "../../../App.css";

export default function FAQSection() {
  const faqs = [
    {
      q: "Where can I get freshly baked cookies right now?",
      a: "You can order fresh cookies anytime from our Cookify online store. We deliver warm and delicious cookies instantly!",
    },
    {
      q: "How late is Cookify open today?",
      a: "Cookify stores are usually open until 11 PM. Hours may vary based on your location.",
    },
    {
      q: "Does Cookify deliver cookies near me?",
      a: "Yes! Cookify provides superfast delivery in most areas. Just enter your pincode to check availability.",
    },
    {
      q: "Can I order Cookify cookies online?",
      a: "Yes! You can order online and choose home delivery or pickup from your nearest Cookify store.",
    },
    {
      q: "Are Cookify cookies baked fresh daily?",
      a: "Absolutely! All Cookify cookies are baked fresh every single day using premium ingredients.",
    },
  ];

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: "900px" }}>

        <h2 className="text-center fw-bold mb-4">FAQs</h2>

        <Accordion alwaysOpen>
          {faqs.map((item, index) => (
            <Accordion.Item
              eventKey={index}
              key={index}
              className="mb-2 shadow-sm"
            >
              <Accordion.Header className="fw-semibold">
                {item.q}
              </Accordion.Header>

              <Accordion.Body className="bg-light">
                {item.a}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

      </div>
    </div>
  );
}
