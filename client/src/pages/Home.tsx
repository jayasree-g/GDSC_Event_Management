import React, { useState, useEffect } from "react";
import Popup from "./Popup";
import Signup from "./SignIn";
import { createUser } from "../Apis/users";
import Login from "./Login";

const cards = [
  {
    title: "Conduct Events",
    description:
      "EventHub allows you to easily create and manage events. Whether you're a user looking to attend events or an admin organizing them, EventHub has you covered.",
  },
  {
    title: "Register for Events",
    description:
      "As a user, you can explore a variety of events and register for the ones that interest you. Stay updated with event details and manage your registrations hassle-free.",
  },
  {
    title: "Admin Portal",
    description:
      "Admins have access to a powerful portal for event management. Create, edit, or delete events with ease. EventHub simplifies event organization for administrators.",
  },
];

interface props {
  darkMode: boolean;
}

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    createUser({
      username: "admin",
      email: "admin@gmail.com",
      password: "adminpassword",
      isAdmin: 1,
    });
  } catch (error) {
    console.log(error);
  }
};

const createAdminUser = async () => {
  try {
    await createUser({
      username: "admin",
      email: "admin@gmail.com",
      password: "adminpassword",
      isAdmin: 1,
    });
  } catch (error) {
    console.log(error);
  }
};

function Home({ darkMode }: props) {
  const [showPopup, setShowPopup] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    createAdminUser();
  }, []);

  return (
    <div className="p-4 mt-10">
      {showPopup && <Popup onClose={handleClosePopup} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="shadow-lg max-w-sm hover:scale-105 duration-300 bg-[#1e1e1e] border border-[#323434]"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="mb-4">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-4 text-white flex flex-col gap-4">
        <p>Login to view all events</p>
        {showSignup ? <Signup /> : <Login />}
        <p
          className="cursor-pointer text-blue-500 hover:underline"
          onClick={() => setShowSignup(!showSignup)}
        >
          New user? Signup
        </p>
      </div>
    </div>
  );
}

export default Home;
