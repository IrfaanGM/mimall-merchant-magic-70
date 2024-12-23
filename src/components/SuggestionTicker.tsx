import { useEffect, useState } from "react";

const suggestions = [
  "Ask me to find the perfect headphones for your budget...",
  "Need help comparing products? Just ask!",
  "Looking for a specific brand? Let me help you find it...",
  "Want to know about current deals and promotions?",
  "Not sure what to buy? Tell me what you need it for...",
  "Ask me about product features and specifications...",
  "Need gift suggestions? Let me help you choose...",
  "Wondering about delivery options? Just ask!",
];

export const SuggestionTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % suggestions.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-primary/5 py-3 overflow-hidden">
      <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap">
        <span className="text-primary inline-block px-4">
          💡 {suggestions[currentIndex]}
        </span>
      </div>
    </div>
  );
};