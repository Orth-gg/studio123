
"use client";

import { TrendingUp, Users, DollarSign, MapPin, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: Users, text: "Mais de milhões de pessoas comprando todos os dias" },
  { icon: DollarSign, text: "Não precisa investir em anúncios" },
  { icon: Package, text: "Pode começar com produtos simples" },
  { icon: TrendingUp, text: "Pode vender produtos usados ou novos" },
  { icon: MapPin, text: "Funciona em praticamente qualquer cidade" },
];

export function Opportunity() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase">
            Por que o Facebook Marketplace é uma das formas mais rápidas de gerar renda extra hoje
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="grid gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 group hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-lg font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-primary/10 p-6 rounded-2xl border-l-4 border-primary">
              <p className="text-lg text-foreground italic">
                "Enquanto muitas pessoas estão tentando ganhar dinheiro em métodos saturados, outras estão faturando usando algo que já existe dentro do próprio Facebook."
              </p>
            </div>
          </div>

          <div className="space-y-8 glass-card p-10 rounded-3xl border-accent/20">
            <h3 className="text-2xl font-headline font-bold text-accent uppercase">Não perca mais tempo</h3>
            <p className="text-muted-foreground text-lg">
              A cada minuto que passa, centenas de vendas são fechadas na sua cidade. Você está sendo o vendedor ou apenas um espectador?
            </p>
            <Button size="lg" className="w-full h-16 text-lg font-bold bg-primary hover:bg-primary/90 cta-button-glow uppercase" asChild>
              <a href="https://pay.kirvano.com/db5931e7-179f-4147-b201-a554ac4c0aeb">Quero começar a lucrar agora</a>
            </Button>
            <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-bold">Acesso imediato e vitalício</p>
          </div>
        </div>
      </div>
    </section>
  );
}
