import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <Card className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-primary">About MiMall</CardTitle>
            <CardDescription className="text-lg text-gray-600">Your Personal Shopping Concierge</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              MiMall revolutionizes online shopping by combining the convenience of e-commerce with the personalized attention of a dedicated shopping assistant. Our AI-powered platform provides 24/7 assistance, helping you discover products, compare options, and make confident purchasing decisions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <h3 className="font-semibold text-primary mb-2">24/7 AI Assistant</h3>
                <p>Get instant help and personalized recommendations anytime, anywhere.</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <h3 className="font-semibold text-primary mb-2">Smart Shopping</h3>
                <p>Make informed decisions with AI-powered product comparisons and insights.</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50">
                <h3 className="font-semibold text-primary mb-2">Curated Experience</h3>
                <p>Enjoy a tailored shopping journey that adapts to your preferences.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;