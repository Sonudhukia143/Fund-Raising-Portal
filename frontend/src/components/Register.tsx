import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface RegisterProps {
  onSuccess?: () => void;
}

export default function Register({ onSuccess }: RegisterProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading,setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    setLoading(true);
    console.log("Registration data:", formData);
    // Simulate successful registration

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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 h-full">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h4 className="font-bold text-2xl text-gray-800 mb-2">🎯 Fundraising Portal</h4>
          <p className="text-gray-600">Join our intern community</p>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
          <p className="text-gray-600">Start your fundraising journey today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
          <div>
            <Input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>
          
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
          
          <div>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>
          
          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" disabled={loading}>
            {loading?"Creating Account":"Create Account"}
          </Button>
        </form>
      </div>
    </div>
  );
}