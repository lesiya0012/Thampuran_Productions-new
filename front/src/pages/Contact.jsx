import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      const data = await res.json();
      alert(data.message); // show success message
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="bg-black text-white py-12 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-amber-600 mb-4">Get In Touch</h2>
       
        <p className="text-lg mb-10 text-gray-300"> Ready to bring your vision to life? Let's start a conversation. </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
      <div>
        <h4 className="text-orange-400 font-semibold">Email</h4>
        <p className="text-gray-300">contact@thampuranproductions.com</p>
      </div>
      <div>
        <h4 className="text-orange-400 font-semibold">Phone</h4>
        <p className="text-gray-300">+91 98765 43210</p>
      </div>
      <div>
        <h4 className="text-orange-400 font-semibold">Location</h4>
        <p className="text-gray-300">Kochi, Kerala, India</p>
      </div>
      <div className="mt-6">
  <iframe
  
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.899002355396!2d76.30448757450883!3d10.025192772601802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080de881ff5087%3A0x22f72a360f6988f3!2sSUGAR%20SIP!5e0!3m2!1sen!2sin!4v1764081672777!5m2!1sen!2sin"
    width="60%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

    </div>


   
    
      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
        />
        <textarea
          rows="4"
          name="message"
          placeholder="Tell us about your project"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded"
        >
          Send Message
        </button>
      </form>
      </div>
    </div>
  );
};

export default Contact;