import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UserPlus, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const CustomerSignup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    interests: "",
    shoppingPreferences: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would typically handle the signup process
    toast({
      title: "Welcome to MiMall!",
      description: "Your personal shopping experience awaits.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
                <UserPlus className="h-8 w-8 text-primary" />
                Join MiMall
              </CardTitle>
              <p className="text-muted-foreground">
                Create your personal shopping profile and get tailored recommendations
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="interests">What are your favorite things to shop for?</Label>
                    <Textarea
                      id="interests"
                      placeholder="E.g., Tech gadgets, fashion, home decor..."
                      value={formData.interests}
                      onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferences">Shopping Preferences</Label>
                    <Textarea
                      id="preferences"
                      placeholder="E.g., Eco-friendly products, luxury items, budget-friendly options..."
                      value={formData.shoppingPreferences}
                      onChange={(e) => setFormData({ ...formData, shoppingPreferences: e.target.value })}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Start Your Personal Shopping Journey
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerSignup;