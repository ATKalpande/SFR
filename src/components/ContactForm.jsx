import React, { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      alert("Please fill all fields!");
      return;
    }
    const mailtoLink = `mailto:sahyadriformularacers@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name} Email: ${email} Subject: ${subject} Message: ${message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <form className="md:ml-4 md:mt-5" onSubmit={handleSubmit}>
      <div className="my-4">
        <label
          htmlFor="name"
          className="text-gray-500 block font-bold text-xl md:text-2xl mb-3"
        > 
          Name
        </label>
        <input
          className="w-full text-gray-200 font-bold bg-transparent border-b-2 border-gray-300 py-2 px-0 placeholder:text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
          type="text"
          id="name"
          placeholder="Enter Your name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label
          htmlFor="subject"
          className="text-gray-500 block font-bold text-xl md:text-2xl mb-3"
        >
          Subject
        </label>
        <input
          className="w-full text-gray-200 font-bold bg-transparent border-b-2 border-gray-300 py-2 px-0 placeholder:text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
          type="text"
          id="subject"
          placeholder="Subject"
          autoComplete="off"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label
          htmlFor="email"
          className="text-gray-500 block font-bold text-xl md:text-2xl mb-3"
        >
          Email
        </label>
        <input
          className="w-full text-gray-200 font-bold bg-transparent border-b-2 border-gray-300 py-2 px-0 placeholder:text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
          id="email"
          type="text"
          placeholder="ak@gmail.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label
          htmlFor="message"
          className="text-gray-500 block font-bold text-xl md:text-2xl mb-3"
        >
          Your Message
        </label>
        <textarea
          className="w-full text-gray-200 font-bold bg-transparent border-b-2 border-gray-300 py-2 px-0 placeholder:text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
          id="message"
          name="message"
          placeholder="Enter your message."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="mt-8 md:text-start text-center">
        <button
          className="py-2 px-4 rounded bg-red-500 text-gray-50 animate-pulse hover:bg-red-700 focus:outline-none focus:bg-red-700"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
