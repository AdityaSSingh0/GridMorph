import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Mail, Lock, UserPlus, User, ArrowLeft, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/custom-button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [step, setStep] = useState(1);
  const [energyType, setEnergyType] = useState('');
  const [monthlyConsumption, setMonthlyConsumption] = useState('');
  const [estimatedLocation, setEstimatedLocation] = useState<string | null>(null);
  const [verificationSent, setVerificationSent] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signUp, user } = useAuth();

  useEffect(() => {
    // Redirect if user is already logged in
    if (user) {
      navigate('/dashboard');
    }
    
    // Simulate location detection
    const detectLocation = setTimeout(() => {
      setEstimatedLocation('Greater Noida, UP, India');
    }, 1500);

    return () => clearTimeout(detectLocation);
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

  const getStrengthText = () => {
    if (passwordStrength < 40) return 'Weak';
    if (passwordStrength < 80) return 'Medium';
    return 'Strong';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      if (!name || !email || !password) {
        toast({
          variant: "destructive",
          title: "Missing Information",
          description: "Please fill in all required fields.",
        });
        return;
      }
      
      if (passwordStrength < 60) {
        toast({
          variant: "destructive",
          title: "Weak Password",
          description: "Please create a stronger password for better security.",
        });
        return;
      }
      
      if (!agreeTerms) {
        toast({
          variant: "destructive",
          title: "Terms Required",
          description: "Please agree to the terms and conditions to continue.",
        });
        return;
      }
      
      // Move to next step
      setStep(2);
      return;
    }
    
    if (step === 2) {
      if (!energyType || !monthlyConsumption) {
        toast({
          variant: "destructive",
          title: "Missing Information",
          description: "Please fill in all required energy information.",
        });
        return;
      }
      
      setIsLoading(true);
      
      const { error } = await signUp(email, password, { 
        name,
        energyProfile: {
          type: energyType,
          consumption: monthlyConsumption,
          location: estimatedLocation
        }
      });
      
      setIsLoading(false);
      
      if (!error) {
        setStep(3);
        setVerificationSent(true);
      }
    }
  };

  const simulateVerification = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 py-10">
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
          <h1 className="mt-6 text-2xl font-semibold text-gray-900">Create an account</h1>
          <p className="mt-2 text-gray-600">
            Join thousands of users optimizing their energy usage
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          {/* Registration Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {['Personal Info', 'Energy Profile', 'Complete'].map((label, index) => (
                <div 
                  key={index} 
                  className={`text-xs font-medium ${step > index ? 'text-energify-blue' : 'text-gray-400'}`}
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 h-1.5 rounded-full">
              <div 
                className="bg-energify-blue h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {step === 1 && (
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
                {password && (
                  <div className="mt-2">
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-1">
                      <span>Password Strength: {getStrengthText()}</span>
                      <span>{passwordStrength}%</span>
                    </div>
                    <Progress value={passwordStrength} className={`h-1 ${getStrengthColor()}`} />
                    <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                      <div className={`flex items-center gap-1 ${/[A-Z]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
                        <CheckCircle2 size={12} />
                        <span>Uppercase letter</span>
                      </div>
                      <div className={`flex items-center gap-1 ${/[a-z]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
                        <CheckCircle2 size={12} />
                        <span>Lowercase letter</span>
                      </div>
                      <div className={`flex items-center gap-1 ${/[0-9]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
                        <CheckCircle2 size={12} />
                        <span>Number</span>
                      </div>
                      <div className={`flex items-center gap-1 ${/[^A-Za-z0-9]/.test(password) ? 'text-green-600' : 'text-gray-400'}`}>
                        <CheckCircle2 size={12} />
                        <span>Special character</span>
                      </div>
                      <div className={`flex items-center gap-1 ${password.length >= 8 ? 'text-green-600' : 'text-gray-400'}`}>
                        <CheckCircle2 size={12} />
                        <span>8+ characters</span>
                      </div>
                    </div>
                  </div>
                )}
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
                icon={<ArrowLeft size={18} className="rotate-180" />}
                iconPosition="right"
              >
                Continue to Energy Profile
              </Button>

              <div className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="font-medium text-energify-blue hover:text-energify-blue-dark">
                  Sign in
                </Link>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <Label htmlFor="energyType">Primary Energy Source</Label>
                <select
                  id="energyType"
                  value={energyType}
                  onChange={(e) => setEnergyType(e.target.value)}
                  className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-energify-blue/50 focus:border-energify-blue"
                  required
                >
                  <option value="">Select energy source</option>
                  <option value="solar">Solar</option>
                  <option value="wind">Wind</option>
                  <option value="hydro">Hydro</option>
                  <option value="biomass">Biomass</option>
                  <option value="geothermal">Geothermal</option>
                  <option value="grid">Traditional Grid</option>
                </select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="monthlyConsumption">Monthly Energy Consumption (kWh)</Label>
                <Input
                  id="monthlyConsumption"
                  type="number"
                  value={monthlyConsumption}
                  onChange={(e) => setMonthlyConsumption(e.target.value)}
                  placeholder="e.g., 250"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  This helps us customize your energy trading experience.
                </p>
              </div>

              {estimatedLocation && (
                <div className="p-3 bg-blue-50 rounded-lg flex items-start gap-2">
                  <MapPin size={18} className="text-energify-blue mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Detected Location</p>
                    <p className="text-sm text-gray-600">{estimatedLocation}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      This helps connect you with local energy producers.
                    </p>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                className="w-full"
                isLoading={isLoading}
                icon={<ShieldCheck size={18} />}
              >
                Create Account
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => setStep(1)}
              >
                Back to Personal Information
              </Button>
            </form>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h2 className="text-xl font-medium">Almost There!</h2>
                <p className="text-gray-600 mt-2">
                  We've sent a verification link to <span className="font-medium">{email}</span>.
                  Check your inbox to complete your registration.
                </p>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Your GridMorph Energy Profile</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium">{name}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Energy Source:</span>
                    <span className="font-medium capitalize">{energyType}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Monthly Consumption:</span>
                    <span className="font-medium">{monthlyConsumption} kWh</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{estimatedLocation}</span>
                  </li>
                </ul>
              </div>

              <Button
                type="button"
                className="w-full"
                isLoading={isLoading}
                onClick={simulateVerification}
              >
                I've Verified My Email
              </Button>

              <div className="text-center text-sm text-gray-500">
                Didn't receive the email?{" "}
                <button className="text-energify-blue hover:text-energify-blue-dark">
                  Resend verification
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
