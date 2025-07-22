// "use client"
// import React from 'react';

// const ContactForm = () => {
//   return (
//     <div id='contact'
//       className="min-h-[150vh] bg-cover bg-center flex flex-col items-center  pt-42 text-white"
//       style={{ backgroundImage: 'url(https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
//     >
//       <button className="mb-6 px-4 py-2 bg-white text-black rounded-full shadow">
//         Get in Touch
//       </button>

//       <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight">
//         LET’S MAKE YOUR PROPERTY JOURNEY <br /> EFFORTLESS
//       </h1>

//       <p className="mt-4 max-w-xl text-center text-lg font-light">
//         Have questions or ready to take the next step? Whether you're looking to buy, rent, or invest, our team is here to guide you every step of the way. Let's turn your property goals into reality.
//       </p>

//       <form className="bg-black/80 text-white rounded-2xl p-8 mt-8 w-full max-w-3xl shadow-lg">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             placeholder="First Name"
//             className="border border-gray-300 rounded px-4 py-2"
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="border border-gray-300 rounded px-4 py-2"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="border border-gray-300 rounded px-4 py-2"
//           />
//           <input
//             type="tel"
//             placeholder="Phone"
//             className="border border-gray-300 rounded px-4 py-2"
//           />
//         </div>
//         <textarea
//           placeholder="What Can We Help You ?"
//           className="w-full mt-4 border border-gray-300 rounded px-4 py-2"
//         ></textarea>
//         <button
//           type="submit"
//           className="w-full mt-4 border border-gray-200 hover:bg-gray-800 hover:text-gray-100 text-white py-3 rounded-full transition-bg "
//         >
//           Book a Call
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

"use client";
import React, { useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contacts"), formData);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setShowPopup(true);

      // Auto-close popup after 4 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id='contact'
      className="min-h-[150vh] bg-cover bg-center flex flex-col items-center pt-42 text-white relative"
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
    >
      {/* ✅ Popup */}
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          📞 Your call is scheduled! We will get back to you soon.
        </div>
      )}

      <button className="mb-6 px-4 py-2 bg-white text-black rounded-full shadow">
        Get in Touch
      </button>

      <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight">
        LET’S MAKE YOUR PROPERTY JOURNEY <br /> EFFORTLESS
      </h1>

      <p className="mt-4 max-w-xl text-center text-lg font-light">
        Have questions or ready to take the next step? Whether you're looking to buy, rent, or invest, our team is here to guide you every step of the way. Let's turn your property goals into reality.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-black/80 text-white rounded-2xl p-8 mt-8 w-full max-w-3xl shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <textarea
          name="message"
          placeholder="What Can We Help You ?"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-4 border border-gray-300 rounded px-4 py-2"
        ></textarea>
        <button
          type="submit"
          className="w-full mt-4 border border-gray-200 hover:bg-gray-800 hover:text-gray-100 text-white py-3 rounded-full transition-bg"
        >
          Book a Call
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
