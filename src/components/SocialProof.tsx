
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Camera, CheckCircle2, Star } from "lucide-react";

export function SocialProof() {
  const images = PlaceHolderImages || [];
  
  const resultPrints = [
    images.find(img => img.id === "student-result-1"),
    images.find(img => img.id === "student-result-2"),
    images.find(img => img.id === "student-result-3"),
  ].filter(Boolean);

  return (
    <section className="py-20 bg-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
            <Camera className="w-4 h-4" /> Resultados de Alunos
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase text-balance">
            Veja os lucros de quem <span className="text-primary">aplicou o método</span>
          </h2>
          <div className="flex justify-center gap-1 text-accent pt-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
          </div>
        </div>

        {/* Mobile: Stack ou Carousel, aqui usamos stack otimizado */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {resultPrints.map((print, idx) => (
            <div key={idx} className="relative group w-full max-w-[320px] mx-auto md:max-w-none">
              <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-[9/16] glass-card rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl transition-transform hover:scale-[1.02]">
                {print && (
                  <Image
                    src={print.imageUrl}
                    alt={print.description}
                    fill
                    className="object-cover"
                    data-ai-hint={print.imageHint}
                    unoptimized={true}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <div className="inline-flex items-center gap-1.5 bg-primary text-white text-[10px] font-black py-2 px-6 rounded-full uppercase tracking-tighter shadow-xl">
                    <CheckCircle2 className="w-4 h-4" /> Venda Confirmada
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
