'use client';
import { useState } from 'react';
import Image from 'next/image';

const Account = () => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

  
    if (!email || !password) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    try {
      
      const response = await fetch(`/api/auth/${isLogin ? 'login' : 'signup'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const result = await response.json();
      console.log(result);
 
    } catch (error) {
      console.error('Authentication error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsAccountOpen((prev) => !prev)}
        aria-label="Toggle account"
        className="focus:outline-none"
      >
        <Image
          src={"/images/account.png"}
          alt="Account"
          width={24}
          height={24}
          className="cursor-pointer w-6 h-6"
        />
      </button>

      {isAccountOpen && (
        <div className="absolute top-full  mt-2 bg-white shadow-lg rounded-md  sm:w-[350px] p-4 z-50">
          <h3 className="text-lg font-semibold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h3>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F] "
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            <button
              type="submit"
              className="bg-[#B88E2F] text-white px-4 py-2 rounded-md transition-all"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={() => setIsLogin((prev) => !prev)}
                className="text-[#B88E2F] ml-2 focus:outline-none"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
