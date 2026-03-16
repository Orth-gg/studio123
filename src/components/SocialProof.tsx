"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Quote, Star } from "lucide-react";

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
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase">Pessoas comuns já estão usando esse método</h2>
          <div className="flex justify-center gap-1 text-accent">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
        </div>
        
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