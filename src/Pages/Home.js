import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Secure Bank</h1>
      <p className="text-gray-700 max-w-lg">
        Manage your finances securely with real-time transaction updates, fund transfers, 
        and balance tracking. Experience a seamless banking experience.
      </p>

      <div className="mt-6 flex space-x-4">
        <Link to="/login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="px-6 py-2 bg-green-500 text-white rounded shadow-md hover:bg-green-600">
            Register
          </button>
        </Link>
      </div>

      <div className="mt-10">
        <img
          src="https://source.unsplash.com/600x400/?finance,money"
          alt="Banking illustration"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
