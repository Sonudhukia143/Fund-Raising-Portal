import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface LoginProps {
  onSuccess?: () => void;
}

export default function Login({ onSuccess }: LoginProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading,setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Handle login logic here
    console.log("Login data:", formData);
    // Simulate successful login
    setTimeout(() => {
      if (onSuccess) {
        onSuccess();
      }
      setLoading(false);
    },2000);

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 h-full">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h4 className="font-bold text-2xl text-gray-800 mb-2">🎯 Fundraising Portal</h4>
          <p className="text-gray-600">Welcome back to your dashboard</p>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
          <p className="text-gray-600">Sign in to continue your fundraising journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>
          
          <div>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>
          
          <Button type="submit" 
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            {loading?"Signing In":"Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}