
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Quote, Star, Camera } from "lucide-react";

const reviews = [
  {
    name: "João Pedro",
    stat: "Vendeu em 3 dias",
    text: "Eu nunca tinha vendido nada online. Depois do curso fiz meu primeiro anúncio e já vendi na mesma semana. O método de copy é absurdo.",
    img: "testimonial-1"
  },
  {
    name: "Maria Clara",
    stat: "R$ 1.200 extras/mês",
    text: "Comecei como renda extra e hoje já estou fazendo mais vendas do que imaginava. O guia de negociação me ajudou a parar de perder tempo com curiosos.",
    img: "testimonial-2"
  },
  {
    name: "Carlos Alberto",
    stat: "5 vendas na semana",
    text: "O que mais gostei foi a simplicidade. É muito direto ao ponto, sem enrolação. As planilhas de lucro facilitam tudo na hora de ver o dinheiro entrando.",
    img: "expert-portrait"
  }
];

export function SocialProof() {
  const prints = [
    PlaceHolderImages.find(img => img.id === "proof-print-1"),
    PlaceHolderImages.find(img => img.id === "proof-print-2"),
    PlaceHolderImages.find(img => img.id === "proof-print-3"),
  ].filter(Boolean);

  return (
    <section className="py-24 overflow-hidden bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Camera className="w-4 h-4" /> Resultados Reais
          </div>
          <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase">
            Pessoas comuns já estão usando esse método
          </h2>
          <div className="flex justify-center gap-1 text-accent">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
        </div>

        {/* Prints Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {prints.map((print, idx) => (
            <div key={idx} className="relative aspect-[9/16] max-w-[300px] mx-auto group">
              <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative h-full w-full glass-card rounded-[2rem] overflow-hidden border-2 border-primary/20 shadow-2xl transition-transform hover:scale-[1.02]">
                {print && (
                  <Image
                    src={print.imageUrl}
                    alt={print.description}
                    fill
                    className="object-cover"
                    data-ai-hint={print.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold py-1 px-3 rounded-full border border-white/20 uppercase tracking-tighter">
                    Resultado de Aluno
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => {
            const userImg = PlaceHolderImages.find(img => img.id === review.img);
            return (
              <div key={idx} className="glass-card p-8 rounded-3xl relative flex flex-col group hover:border-primary/40 transition-all">
                <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                    {userImg && <Image src={userImg.imageUrl} alt={review.name} fill className="object-cover" />}
                  </div>
                  <div>
                    <p className="font-bold uppercase text-sm tracking-tight">{review.name}</p>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{review.stat}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed text-sm flex-1">
                  "{review.text}"
                </p>
                <div className="mt-6 flex gap-0.5 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
