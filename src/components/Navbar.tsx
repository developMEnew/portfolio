import React from 'react';
import { Menu, X } from 'lucide-react';
import { GradientText } from './GradientText';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const NavItem = ({ item }: { item: typeof navItems[0] }) => {
    const isActive = location.pathname === item.path;
    const baseClasses = "relative px-3 py-2 text-sm font-medium transition-colors";
    const desktopClasses = isActive
      ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-400"
      : "text-gray-300 hover:text-white";
    const mobileClasses = isActive
      ? "text-white bg-blue-600/20 block w-full text-left"
      : "text-gray-300 hover:text-white block w-full text-left";

    return (
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `${baseClasses} ${isOpen ? mobileClasses : desktopClasses}`
        }
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </NavLink>
    );
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex-shrink-0">
            <span className="text-xl font-bold">
              <GradientText>HASITHA_SAN_</GradientText>
            </span>
          </NavLink>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <NavItem key={item.path} item={item} />
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}