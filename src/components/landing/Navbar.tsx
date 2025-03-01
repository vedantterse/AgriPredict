import React from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onTryFreeClick?: () => void;
}

const Navbar = ({ onTryFreeClick = () => {} }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="/"
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-black font-bold">A</span>
            </div>
            <span>AgriPredict</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#features"
                  className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#solution"
                  className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
                >
                  Our Solution
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#demo"
                  className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
                >
                  Watch Demo
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#testimonials"
                  className="text-white/90 hover:text-white px-4 py-2 text-sm font-medium transition-colors"
                >
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            onClick={onTryFreeClick}
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium rounded-full px-6 shadow-lg shadow-emerald-500/20 backdrop-blur-sm border border-emerald-400/50"
          >
            Try for Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#features"
              className="text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#solution"
              className="text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={toggleMenu}
            >
              Our Solution
            </a>
            <a
              href="#demo"
              className="text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={toggleMenu}
            >
              Watch Demo
            </a>
            <a
              href="#testimonials"
              className="text-white/90 hover:text-white py-2 text-lg font-medium"
              onClick={toggleMenu}
            >
              Testimonials
            </a>
            <Button
              onClick={() => {
                onTryFreeClick();
                toggleMenu();
              }}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium rounded-full px-6 w-full mt-4 shadow-lg shadow-emerald-500/20 backdrop-blur-sm border border-emerald-400/50"
            >
              Try for Free
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
