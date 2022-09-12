import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/4a14f963-36f8-4dbe-a826-94282d03345d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="sm:text-left pb-8 pl-4">
          <br></br>
          <br></br>
          <br></br>

          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or <br></br>
            shoot me an email - saksham.gupta2@publicissapient.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          style={{ borderRadius: "5px" }}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          style={{ borderRadius: "5px" }}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="5"
          placeholder="Message"
          style={{ borderRadius: "5px" }}
        ></textarea>
        <button
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          style={{ borderRadius: "5px" }}
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
