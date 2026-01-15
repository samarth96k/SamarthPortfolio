import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    enquiryType: "General_Enquiry",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formatMessage = () => {
    return `
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Enquiry Type: ${formData.enquiryType}

Message:
${formData.message}
    `;
  };
  const sendMail = () => {
    const to = "samarthkhandelwal880@gmail.com";
    const subject = encodeURIComponent("New Portfolio Enquiry");
    const body = encodeURIComponent(formatMessage());

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  const sendWhatsApp = () => {
    const text = encodeURIComponent(formatMessage());

    window.open(
      `https://wa.me/919773959744?text=${text}`,
      "_blank"
    );
  };

  return (
    <div className="contact-form">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
        >
          <option value="General_Enquiry">General Enquiry</option>
          <option value="Collaboration_Request">Collaboration Request</option>
          <option value="Feedback">Feedback</option>
          <option value="Bug_Report">Bug Report</option>
        </select>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <div className="contact-buttons">
          <button type="button" onClick={sendMail}>
            Send via Gmail
          </button>

          <button type="button" onClick={sendWhatsApp}>
            Send via WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
