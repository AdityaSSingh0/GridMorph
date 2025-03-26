
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Mail, Lock, UserPlus, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '../components/UI/Button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreeTerms) {
      toast({
        variant: "destructive",
        title: "Terms Required",
        description: "Please agree to the terms and conditions to continue.",
      });
      return;
    }
    
    setIsLoading(true);

    // Demo registration functionality
    setTimeout(() => {
      // In a real app, you would make an actual API call to register the user
      if (name && email && password) {
        // Store user info in localStorage for demo purposes
        localStorage.setItem('user', JSON.stringify({ name, email }));
        toast({
          title: "Registration Successful",
          description: "Welcome to Energify! Your account has been created.",
        });
        navigate('/dashboard');
      } else {
        toast({
          variant: "destructive",
          title: "Registration Failed",
          description: "Please fill in all required fields.",
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
          <h1 className="mt-6 text-2xl font-semibold text-gray-900">Create an account</h1>
          <p className="mt-2 text-gray-600">
            Join thousands of users optimizing their energy usage
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="pl-10"
                  required
                />
              </div>
            </div>

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
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="pl-10"
                  required
                  minLength={8}
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
              <p className="text-xs text-gray-500 mt-1">
                Password must be at least 8 characters long
              </p>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreeTerms}
                onCheckedChange={() => setAgreeTerms(!agreeTerms)}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm text-gray-500 cursor-pointer">
                I agree to the{" "}
                <Link to="/terms" className="text-energify-blue hover:text-energify-blue-dark">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-energify-blue hover:text-energify-blue-dark">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full"
              isLoading={isLoading}
              icon={<UserPlus size={18} />}
            >
              Create Account
            </Button>

            <div className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-energify-blue hover:text-energify-blue-dark">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
