
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">
            Lucro<span className="text-primary">Express</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#beneficios" className="hover:text-primary transition-colors">Benefícios</Link>
          <Link href="#ferramentas" className="hover:text-primary transition-colors">Ferramentas</Link>
          <Link href="#especialista" className="hover:text-primary transition-colors">Especialista</Link>
          <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
        </div>

        <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90">
          <Link href="#comprar">Começar Agora</Link>
        </Button>
      </div>
    </nav>
  );
}
