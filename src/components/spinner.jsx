import React from 'react';
// import backgroundImage from '../path/to/background-image.jpg';
// import backgroundImage from '../assets/background-image.jpg';
const backgroundImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D";
export const Spinner = () => {
  return (
    <div className="animate-ping w-16 h-16 m-8 rounded-full bg-sky-600" style={{ backgroundImage: `url(${backgroundImage})` }}>
      spinner
    </div>
  );
};
