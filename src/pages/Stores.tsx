import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURED_STORES = [
  {
    name: "TechVibe Electronics",
    category: "Electronics",
    description: "Premium gadgets and smart home devices",
    speciality: "Latest tech innovations and expert guidance"
  },
  {
    name: "Fashion Forward",
    category: "Fashion",
    description: "Trendy clothing and accessories",
    speciality: "Personal styling and size recommendations"
  },
  {
    name: "Wellness Haven",
    category: "Health & Beauty",
    description: "Natural beauty and wellness products",
    speciality: "Personalized skincare routines"
  },
  {
    name: "Home Harmony",
    category: "Home & Living",
    description: "Modern furniture and home decor",
    speciality: "Interior design consultation"
  }
];

const Stores = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">MiMall Partner Stores</CardTitle>
            <CardDescription className="text-lg">
              Experience AI-Enhanced Store Navigation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-primary/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                How MiMall's AI Enhances Your Store Experience
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Real-time inventory checks across all store locations</li>
                <li>• Virtual store tours with product demonstrations</li>
                <li>• Instant connection with store specialists through AI</li>
                <li>• Cross-store product comparisons and recommendations</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {FEATURED_STORES.map((store) => (
            <Card key={store.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{store.name}</CardTitle>
                <CardDescription>{store.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{store.description}</p>
                <p className="text-sm text-primary mb-4">
                  <strong>Specialty:</strong> {store.speciality}
                </p>
                <Button className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Chat with Store AI
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;