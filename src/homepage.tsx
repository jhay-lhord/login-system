import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="bg-blue-600 w-full py-4 shadow-md">
        <h1 className="text-center text-white text-2xl font-bold">FINAL EXAM</h1>
      </header>

      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="space-y-4">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">User Information</button>
      </div>
      </main>

      <footer className="bg-gray-800 w-full py-4 text-center text-white">
        <p>&copy; GOD BLESS.</p>
      </footer>
    </div>
  );
};

export default HomePage;
