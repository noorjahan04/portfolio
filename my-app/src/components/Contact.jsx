import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification(null);

    try {
      const serviceId = 'service_5oq2fuu'; 
      const templateId = 'template_62za4aq'; 
      const userId = 'fTK52UoRosSDJU9BE'; 

      const templateParams = {
        name: formData.name,
        email: formData.email,
        telephone: formData.number,
        message: formData.message
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      setNotification({ type: 'success', message: " Thankyou For Messaging ! I'll get back to you soon." });
      setFormData({ name: '', email: '', number: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setNotification({ type: 'error', message: "Failed to send message. Please try again or email me directly." });
    } finally {
      setIsLoading(false);
      setTimeout(() => setNotification(null), 4000); 
    }
  };

  return (
    <section id="contact" className="contact">
      {/* Notification Popup */}
      {notification && (
        <div
          style={{
            position: 'fixed',
            top: '15px',
            right: '15px',
            padding: '12px 20px',
            borderRadius: '8px',
            backgroundColor: notification.type === 'success' ? '#4caf50' : '#f44336',
            color: 'white',
            fontWeight: '500',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)',
            zIndex: 1000,
          }}
        >
          {notification.message}
        </div>
      )}

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>CONTACT INFO</h2>
            
            <div className="contact-item">
              <div className="contact-icon email-icon">
                <Mail />
              </div>
              <div>
                <h4>Email Me</h4>
                <p>noorifms@gmail.com</p>
                <p>example@email.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon phone-icon">
                <Phone />
              </div>
              <div>
                <h4>Contact Me</h4>
                <p>+91-9353090921</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon location-icon">
                <MapPin />
              </div>
              <div>
                <h4>My Location</h4>
                <p>Bengaluru-560067</p>
                <p>India</p>
              </div>
            </div>

            <div className="social-info">
              <h3>SOCIAL INFO</h3>
              <div className="social-icons">
                <a href="https://github.com/noorjahan04" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/noor-jahan-915987280/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="mailto:noorifms@gmail.com">
                  <Mail />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2><span className="highlight">Let's</span> connect me</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
              <input
                type="tel"
                name="number"
                placeholder="Number*"
                value={formData.number}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
              <textarea
                name="message"
                placeholder="Your Message*"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                required
                disabled={isLoading}
              ></textarea>
              <button type="submit" className="send-btn" disabled={isLoading}>
                <Send /> {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
