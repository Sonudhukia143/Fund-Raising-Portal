import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    // Simulate successful authentication
    navigate('/dashboard');
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 min-h-screen bg-white">
      <div className="flex flex-col justify-center p-8">
        {
          isLogin ? (
            <Login onSuccess={handleAuthSuccess} />
          ) : (
            <Register onSuccess={handleAuthSuccess} />
          )
        }

        <div className="text-center mt-6">
          {
            isLogin ? (
              <span className="text-gray-600">
                Don't have an account?{" "}
                <a 
                  className="text-blue-500 font-bold cursor-pointer hover:underline" 
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </a>
              </span>
            ) : (
              <span className="text-gray-600">
                Already have an account?{" "}
                <a 
                  className="text-blue-500 font-bold cursor-pointer hover:underline" 
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </a>
              </span>
            )
          }
        </div>
      </div>

      <div className="hidden md:block p-5">
        <div className="w-full h-full rounded-lg overflow-hidden">
          <img src="/registerImg.webp" alt="registerimage" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
}