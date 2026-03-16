
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { Quote } from "lucide-react";

export function Expert() {
  const expertImg = PlaceHolderImages.find(img => img.id === "expert-portrait");
  const user1 = PlaceHolderImages.find(img => img.id === "testimonial-1");
  const user2 = PlaceHolderImages.find(img => img.id === "testimonial-2");

  return (
    <section id="especialista" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative aspect-square max-w-md mx-auto">
              {expertImg && (
                <Image
                  src={expertImg.imageUrl}
                  alt={expertImg.description}
                  fill
                  className="object-cover rounded-3xl border-2 border-white/10 shadow-2xl"
                  data-ai-hint={expertImg.imageHint}
                />
              )}
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-headline font-bold">Quem é seu mentor?</h2>
              <p className="text-xl text-primary font-medium italic">Especialista em Marketplace com mais de 5 mil vendas concluídas.</p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Há 5 anos, eu estava onde você está hoje. Buscando uma forma de fazer o dinheiro sobrar no fim do mês. 
                Descobri no Facebook Marketplace um oceano azul de oportunidades. Depois de errar muito e testar centenas de estratégias, 
                criei o Marketplace Renda Express para que você não precise passar pelo que eu passei.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="glass-card p-6 rounded-xl">
                <p className="text-3xl font-headline font-bold text-accent">5.000+</p>
                <p className="text-sm text-muted-foreground">Vendas no Marketplace</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <p className="text-3xl font-headline font-bold text-accent">R$ 500k+</p>
                <p className="text-sm text-muted-foreground">Faturamento Gerado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 space-y-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-4xl font-headline font-bold">O que dizem nossos alunos</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                  {user1 && <Image src={user1.imageUrl} alt="User 1" fill className="object-cover" />}
                </div>
                <div>
                  <p className="font-bold">João Pedro</p>
                  <p className="text-xs text-muted-foreground">Faturamento: R$ 3.200/mês</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "O curso mudou minha perspectiva sobre vendas online. Comecei com produtos que tinha em casa e hoje já compro para revender seguindo as dicas do guia. O dashboard de lucro é sensacional!"
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                  {user2 && <Image src={user2.imageUrl} alt="User 2" fill className="object-cover" />}
                </div>
                <div>
                  <p className="font-bold">Maria Clara</p>
                  <p className="text-xs text-muted-foreground">Faturamento: R$ 5.800/mês</p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                "Eu achava que o Marketplace era bagunçado. Com as ferramentas de gestão do curso, tudo ficou claro. Consigo conciliar com meu emprego atual e pretendo viver só disso em breve."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
