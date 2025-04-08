
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn, UserPlus, Database, User } from 'lucide-react';
import { Button } from '@/components/ui/custom-button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { NotificationsDropdown } from '@/components/Notifications/NotificationsDropdown';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, profile, signOut } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Trading', path: '/trading' },
    { name: 'ERP & SAP', path: '/erp-integration' },
    { name: 'Organization', path: '/organization' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const getInitials = () => {
    if (!profile?.full_name) return 'U';
    return profile.full_name
      .split(' ')
      .map((n: string) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          aria-label="Energify - Home"
        >
          <div className="h-10 w-10 rounded-full bg-energify-blue flex items-center justify-center">
            <div className="h-5 w-5 animate-pulse-slow bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-medium tracking-tight">GridMorph</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8" role="navigation">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                'nav-link',
                location.pathname === link.path && 'text-energify-blue after:scale-x-100'
              )}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <>
              <NotificationsDropdown />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-1 h-9 w-9 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={profile?.avatar_url} alt={profile?.full_name || 'User'} />
                      <AvatarFallback className="bg-energify-blue text-white">
                        {getInitials()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span>{profile?.full_name}</span>
                      <span className="text-xs font-normal text-gray-500">{user.email}</span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleProfile}>
                    <User size={16} className="mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogIn size={16} className="mr-2 rotate-180" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogin}
                icon={<LogIn size={16} />}
              >
                Login
              </Button>
              <Button 
                size="sm" 
                onClick={handleRegister}
                icon={<UserPlus size={16} />}
              >
                Register
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 hover:text-energify-blue"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden px-4 py-5 absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in"
          role="navigation"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  'py-2 px-4 text-gray-700 hover:text-energify-blue hover:bg-blue-50 rounded-lg transition-colors',
                  location.pathname === link.path && 'text-energify-blue bg-blue-50'
                )}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-3">
              {user ? (
                <>
                  <div className="flex items-center px-4 py-3 bg-blue-50 rounded-lg">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={profile?.avatar_url} alt={profile?.full_name || 'User'} />
                      <AvatarFallback className="bg-energify-blue text-white">
                        {getInitials()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{profile?.full_name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full justify-center" 
                    onClick={handleProfile}
                    icon={<User size={16} />}
                  >
                    Profile
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-center" 
                    onClick={handleLogout}
                    icon={<LogIn size={16} className="rotate-180" />}
                  >
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    className="w-full justify-center" 
                    onClick={handleLogin}
                    icon={<LogIn size={16} />}
                  >
                    Login
                  </Button>
                  <Button 
                    className="w-full justify-center" 
                    onClick={handleRegister}
                    icon={<UserPlus size={16} />}
                  >
                    Register
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
