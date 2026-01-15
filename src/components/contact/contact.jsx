import React from "react";
import ContactForm from "./ContactFrom";
import Icons from "../opening page/Icons";
import "./contact.css";
function Contact() {
    return (
        <div>
            <div className="contact-top">Let's Connect</div>
            <div className="contact-div">
                <div className="contact-left"><ContactForm /></div>
                <div className="contact-right">
                    <h2 className="contact-heading">Get in touch</h2>

                    <div className="contact-item-wrapper">
                        <span className="contact-label">Email</span>
                        <a  className="contact-item">
                            Samarthkhandelwal880@gmail.com
                        </a>
                    </div>

                    <div className="contact-item-wrapper">
                        <span className="contact-label">Phone</span>
                        <a href="tel:+919773959744" className="contact-item">
                            +91 97739 59744
                        </a>
                    </div>

                    <div className="contact-item-wrapper">
                        <span className="contact-label">Location</span>
                        <div className="contact-item">
                            Delhi, India
                        </div>
                    </div>


                    <div className="formaticons">
                        <Icons />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Contact;