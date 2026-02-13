import React from "react";

const WelcomePage = () => {
  return (
    <section className=" bg-gradient-to-b from-gray-100 to-gray-400 ">
      <div className="h-screen  flex flex-col items-center justify-center">
        <h1 className="text-blue-950 text-6xl font-bold ">
          Welcome to Ecomdrive
        </h1>
        <h3 className="pt-4 pb-8 text-blue-500 text-xl font-medium">
          Automate and streamline
        </h3>
        <button className="p-4 bg-blue-700 text-white rounded-lg font-medium text-lg">
          Go to Dashboard
        </button>
      </div>
    </section>
  );
};

export default WelcomePage;
