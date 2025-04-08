
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, LogIn, Mail, Lock, ArrowLeft, Fingerprint, ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/custom-button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [lastLocation, setLastLocation] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signIn, user } = useAuth();

  useEffect(() => {
    // Redirect if user is already logged in
    if (user) {
      navigate('/dashboard');
    }
    
    // Simulate loading last login location
    const storedLocation = localStorage.getItem('lastLoginLocation');
    if (storedLocation) {
      setTimeout(() => {
        setLastLocation(storedLocation);
      }, 1000);
    }
  }, [user, navigate]);

  // Password strength calculator
  useEffect(() => {
    if (!password) {
      setPasswordStrength(0);
      return;
    }

    let strength = 0;
    // Length check
    if (password.length >= 8) strength += 20;
    // Uppercase letters
    if (/[A-Z]/.test(password)) strength += 20;
    // Lowercase letters
    if (/[a-z]/.test(password)) strength += 20;
    // Numbers
    if (/[0-9]/.test(password)) strength += 20;
    // Special characters
    if (/[^A-Za-z0-9]/.test(password)) strength += 20;

    setPasswordStrength(strength);
  }, [password]);

  const getStrengthColor = () => {
    if (passwordStrength < 40) return 'bg-red-500';
    if (passwordStrength < 80) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const handleBiometricAuth = () => {
    toast({
      title: "Biometric Authentication",
      description: "Biometric authentication is not available in this demo.",
    });
  };

  const handleVerifyCode = () => {
    if (verificationCode === '123456' || verificationCode.length === 6) {
      toast({
        title: "Verification Successful",
        description: "Two-factor authentication complete.",
      });
      navigate('/dashboard');
    } else {
      toast({
        variant: "destructive",
        title: "Invalid Code",
        description: "Please enter a valid verification code.",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginAttempts(prev => prev + 1);

    if (email && password) {
      const { error } = await signIn(email, password);
      
      if (!error) {
        localStorage.setItem('lastLoginLocation', 'Greater Noida, IN');
        navigate('/dashboard');
      } else if (loginAttempts >= 2) {
        setShowTwoFactor(true);
      }
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Please check your credentials and try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center relative">
          <div className="absolute left-0 top-0">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="flex items-center gap-1 text-gray-600 hover:text-energify-blue"
              icon={<ArrowLeft size={16} />}
            >
              Back to Home
            </Button>
          </div>
          
          <Link 
            to="/" 
            className="inline-flex items-center justify-center space-x-2"
          >
            <div className="h-10 w-10 rounded-full bg-energify-blue flex items-center justify-center">
              <div className="h-5 w-5 animate-pulse-slow bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-medium tracking-tight">GridMorph</span>
          </Link>
          <h1 className="mt-6 text-2xl font-semibold text-gray-900">Sign in to your account</h1>
          <p className="mt-2 text-gray-600">
            Enter your details to access your account
          </p>
        </div>

        {lastLocation && (
          <div className="mb-6 px-4 py-3 bg-blue-50 rounded-lg border border-blue-100 flex items-center gap-2">
            <ShieldCheck size={18} className="text-energify-blue" />
            <p className="text-sm text-gray-700">
              Last login detected from <span className="font-medium">{lastLocation}</span>
            </p>
          </div>
        )}

        {showTwoFactor ? (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-energify-blue/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <ShieldCheck size={24} className="text-energify-blue" />
              </div>
              <h2 className="text-xl font-medium">Two-Factor Authentication</h2>
              <p className="text-gray-600 text-sm mt-2">
                Please enter the 6-digit code sent to your device
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-1">
                <Label htmlFor="verification-code">Verification Code</Label>
                <Input
                  id="verification-code"
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Enter 6-digit code"
                  className="text-center tracking-wider text-lg"
                  maxLength={6}
                />
              </div>
              
              <Button
                type="button"
                className="w-full"
                onClick={handleVerifyCode}
              >
                Verify
              </Button>
              
              <p className="text-center text-sm text-gray-500">
                Didn't receive a code?{" "}
                <button className="text-energify-blue hover:text-energify-blue-dark">
                  Resend Code
                </button>
              </p>
            </div>
          </div>
        ) : (
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
                {password && (
                  <div className="mt-2">
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
                      <span>Password Strength</span>
                      <span>{passwordStrength < 40 ? 'Weak' : passwordStrength < 80 ? 'Medium' : 'Strong'}</span>
                    </div>
                    <Progress value={passwordStrength} className={`h-1 ${getStrengthColor()}`} />
                  </div>
                )}
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
                isLoading={false}
                icon={<LogIn size={18} />}
              >
                Sign in
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                icon={<Fingerprint size={18} />}
                onClick={handleBiometricAuth}
              >
                Biometric Authentication
              </Button>

              <div className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to="/register" className="font-medium text-energify-blue hover:text-energify-blue-dark">
                  Create one now
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
