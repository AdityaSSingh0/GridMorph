
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, LogIn, Mail, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '../components/UI/Button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Demo login functionality
    setTimeout(() => {
      // In a real app, you would make an actual API call to authenticate
      if (email && password) {
        // Store user info in localStorage for demo purposes
        localStorage.setItem('user', JSON.stringify({ email }));
        toast({
          title: "Login Successful",
          description: "Welcome back to Energify!",
        });
        navigate('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Please check your credentials and try again.",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center space-x-2"
          >
            <div className="h-10 w-10 rounded-full bg-energify-blue flex items-center justify-center">
              <div className="h-5 w-5 animate-pulse-slow bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-medium tracking-tight">Energify</span>
          </Link>
          <h1 className="mt-6 text-2xl font-semibold text-gray-900">Sign in to your account</h1>
          <p className="mt-2 text-gray-600">
            Enter your details to access your account
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <Label htmlFor="email">Email address</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={18} className="text-gray-400" />
                </div>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-energify-blue hover:text-energify-blue-dark">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="pl-10"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={18} className="text-gray-400" />
                  ) : (
                    <Eye size={18} className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={() => setRememberMe(!rememberMe)}
              />
              <Label htmlFor="remember" className="text-sm text-gray-500 cursor-pointer">
                Remember me for 30 days
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full"
              isLoading={isLoading}
              icon={<LogIn size={18} />}
            >
              Sign in
            </Button>

            <div className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium text-energify-blue hover:text-energify-blue-dark">
                Create one now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
