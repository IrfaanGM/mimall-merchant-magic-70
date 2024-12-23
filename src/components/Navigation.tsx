import { ShoppingCart, MessageSquare, Store, UserPlus } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-black">
              MiMall
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-black transition-colors">
              Home
            </a>
            <a href="/categories" className="text-gray-600 hover:text-black transition-colors">
              Categories
            </a>
            <a href="/stores" className="text-gray-600 hover:text-black transition-colors">
              Stores
            </a>
            <a href="/about" className="text-gray-600 hover:text-black transition-colors">
              About
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" asChild>
                <a href="/signup/customer">
                  <UserPlus className="h-4 w-4 mr-1" />
                  Join
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/signup/retailer">
                  <Store className="h-4 w-4 mr-1" />
                  Sell
                </a>
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              <MessageSquare className="h-4 w-4 mr-2" />
              Talk to MiMall
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};