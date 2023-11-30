import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import WelcomeButton from '../components/WelcomeButton';
import BackButton from '../components/BackButton';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/library');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen app-background">
      <h1 className="text-4xl font-bold mb-6 text-white ml-10">Welcome to BookValt!</h1>
      <p className="text-lg text-white mb-8 ml-10">Explore, create, and manage your book collection.</p>

      <button
        className="bg-yellow-600 ml-10 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleGetStarted}>
        Get Started
      </button>

      {/* Your name or footer */}
      {/* <p className="text-white mt-10 ml-20">Created by Anushka Jain</p> */}
    </div>
  );
};

export default WelcomePage;
