import { useState } from "react";
import emailjs from "@emailjs/browser";

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

  const sendEmailJS = () => {
    const serviceID = "service_uxottht";       // Your Service ID
    const templateID = "template_x4fbtgh";     // Your Template ID
    const publicKey = "E3TN8dbhMocOktNw5";    // Your Public Key

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        alert("Message sent successfully! ✅");
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          enquiryType: "General_Enquiry",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Failed to send message. ❌ Try again later.");
        console.error(error);
      });
  };

  const sendWhatsApp = () => {
    const text = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEnquiry Type: ${formData.enquiryType}\n\nMessage:\n${formData.message}`
    );
    window.open(`https://wa.me/919773959744?text=${text}`, "_blank");
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
          <button type="button" onClick={sendEmailJS}>
            Send via Email
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
