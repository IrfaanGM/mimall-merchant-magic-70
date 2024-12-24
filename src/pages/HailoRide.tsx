import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Car, Truck, Package, Bus, Bike } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import Map from "@/components/Map";

const vehicleOptions = [
  {
    id: "car",
    name: "Regular Ride",
    icon: Car,
    description: "Comfortable sedan for up to 4 passengers",
    price: "R120",
  },
  {
    id: "scooter",
    name: "Scooter",
    icon: Bike,
    description: "Quick delivery for small packages",
    price: "R80",
  },
  {
    id: "minibus",
    name: "Minibus",
    icon: Bus,
    description: "Perfect for group travel or medium cargo",
    price: "R200",
  },
  {
    id: "bakkie",
    name: "Bakkie",
    icon: Truck,
    description: "Ideal for furniture and large items",
    price: "R250",
  },
];

const HailoRide = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  
  const handleBooking = () => {
    toast({
      title: "Booking Requested",
      description: "We're finding the nearest available driver for you.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Panel */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Book a Ride or Delivery</h2>
                <div className="space-y-4">
                  <Input placeholder="Pickup Location" className="w-full" />
                  <Input placeholder="Destination" className="w-full" />
                  
                  <div className="space-y-4">
                    {vehicleOptions.map((option) => (
                      <div
                        key={option.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                          selectedVehicle === option.id
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedVehicle(option.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <option.icon className="h-6 w-6" />
                            <div>
                              <h3 className="font-semibold">{option.name}</h3>
                              <p className="text-sm text-gray-500">{option.description}</p>
                            </div>
                          </div>
                          <span className="font-semibold">{option.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handleBooking}
                  >
                    <Package className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* Map Panel */}
            <div className="lg:col-span-2 h-[600px]">
              <Card className="h-full">
                <Map />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HailoRide;