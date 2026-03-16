
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Star, Camera, CheckCircle2 } from "lucide-react";

export function SocialProof() {
  const images = PlaceHolderImages || [];
  
  const resultPrints = [
    images.find(img => img.id === "student-result-1"),
    images.find(img => img.id === "student-result-2"),
    images.find(img => img.id === "student-result-3"),
  ].filter(Boolean);

  return (
    <section className="py-24 overflow-hidden bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Camera className="w-4 h-4" /> Prova Real de Alunos
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase">
            Veja os resultados de quem <span className="text-primary">aplicou o método</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            Estes são prints reais enviados por nossos alunos. Pessoas comuns que decidiram sair da teoria e partir para a prática.
          </p>
          <div className="flex justify-center gap-1 text-accent pt-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-4 sm:px-0">
          {resultPrints.map((print, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative aspect-[9/16] glass-card rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl transition-transform hover:scale-[1.03]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <div className="inline-flex items-center gap-1 bg-primary text-white text-[10px] font-bold py-1.5 px-5 rounded-full uppercase tracking-tighter shadow-lg">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Resultado Comprovado
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
