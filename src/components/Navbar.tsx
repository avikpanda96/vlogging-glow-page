
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Menu, 
  X,
  Video,
  LogIn
} from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo and site name */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <Video className="h-6 w-6 text-vlog-purple" />
            <span className="font-display font-bold text-xl tracking-tight">VlogGlow</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors story-link">Discover</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors story-link">Categories</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors story-link">Learn</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors story-link">About</a>
        </div>

        {/* Search and Auth */}
        <div className="flex items-center space-x-4">
          {/* Desktop Search */}
          <div className={`hidden md:flex items-center relative ${isSearchOpen ? 'w-64' : 'w-auto'} transition-all duration-300`}>
            {isSearchOpen ? (
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search videos and creators..."
                  className="w-full pr-8"
                  autoFocus
                  onBlur={() => setIsSearchOpen(false)}
                />
                <X 
                  className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground hover:text-foreground cursor-pointer" 
                  onClick={() => setIsSearchOpen(false)}
                />
              </div>
            ) : (
              <Search 
                className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" 
                onClick={() => setIsSearchOpen(true)}
              />
            )}
          </div>
          
          {/* Mobile Search Button */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Search className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-10">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search videos and creators..." 
                  className="w-full pr-8"
                  autoFocus
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
            </SheetContent>
          </Sheet>

          {/* Login Button */}
          <Button variant="ghost" className="hidden md:flex gap-2">
            <LogIn className="h-4 w-4" />
            <span>Login</span>
          </Button>
          <Button className="hidden md:inline-flex">Sign Up</Button>
          
          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-10">
                <a href="#" className="text-lg font-medium">Discover</a>
                <a href="#" className="text-lg font-medium">Categories</a>
                <a href="#" className="text-lg font-medium">Learn</a>
                <a href="#" className="text-lg font-medium">About</a>
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <LogIn className="h-4 w-4" />
                    <span>Login</span>
                  </Button>
                  <Button className="w-full">Sign Up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
