import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  {
    name: "Electronics",
    description: "Smart devices, gadgets, and accessories",
    aiFeatures: [
      "Technical specification comparisons",
      "Compatibility checks",
      "Setup guides and troubleshooting"
    ]
  },
  {
    name: "Fashion",
    description: "Clothing, shoes, and accessories",
    aiFeatures: [
      "Virtual try-on suggestions",
      "Size and fit recommendations",
      "Style matching advice"
    ]
  },
  {
    name: "Home & Living",
    description: "Furniture, decor, and home essentials",
    aiFeatures: [
      "Room layout visualization",
      "Color scheme coordination",
      "Maintenance tips"
    ]
  },
  {
    name: "Beauty & Personal Care",
    description: "Skincare, makeup, and grooming products",
    aiFeatures: [
      "Personalized product recommendations",
      "Ingredient analysis",
      "Application tutorials"
    ]
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">Shop by Category</CardTitle>
            <CardDescription className="text-lg">
              AI-Powered Category Navigation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                MiMall's Unique Category Experience
              </h3>
              <p className="text-gray-700 mb-4">
                Unlike traditional category browsing, MiMall's AI assistant provides dynamic, 
                interactive guidance tailored to each category's unique characteristics and your 
                specific needs.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {CATEGORIES.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">AI-Powered Features:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {category.aiFeatures.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Explore with AI Assistant
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;