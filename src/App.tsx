import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Stores from "./pages/Stores";
import Categories from "./pages/Categories";
import CustomerSignup from "./pages/CustomerSignup";
import RetailerSignup from "./pages/RetailerSignup";
import HailoRide from "./pages/HailoRide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/signup/customer" element={<CustomerSignup />} />
          <Route path="/signup/retailer" element={<RetailerSignup />} />
          <Route path="/hailo-ride" element={<HailoRide />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;