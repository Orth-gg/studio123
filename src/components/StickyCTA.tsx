
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-40 p-4 transition-transform duration-500 md:hidden",
      show ? "translate-y-0" : "translate-y-full"
    )}>
      <Button 
        size="lg" 
        className="w-full h-14 bg-primary hover:bg-primary/90 font-extrabold uppercase cta-button-glow shadow-2xl rounded-xl"
        asChild
      >
        <a href="https://pay.kirvano.com/db5931e7-179f-4147-b201-a554ac4c0aeb">
          <ShoppingCart className="mr-2 w-5 h-5" /> Quero começar agora <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </Button>
    </div>
  );
}
