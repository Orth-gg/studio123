"use client";

import { CheckCircle2, Target, MessageSquare, Megaphone, BarChart2, ShieldCheck } from "lucide-react";

const points = [
  { title: "Produtos Vencedores", text: "Como encontrar produtos que vendem rápido", icon: Target },
  { title: "Anúncios Magnéticos", text: "Como criar anúncios que recebem mensagens todos os dias", icon: Megaphone },
  { title: "Fechamento Infalível", text: "Como conversar com compradores e fechar vendas", icon: MessageSquare },
  { title: "Escala Estratégica", text: "Como escalar suas vendas com estratégias simples", icon: BarChart2 },
  { title: "Gestão de Lucro", text: "Como organizar suas vendas com ferramentas práticas", icon: ShieldCheck },
];

export function Method() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase">
                Conheça o Método <span className="text-primary">Renda Express</span> Marketplace
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O Renda Express Marketplace é um treinamento prático que ensina passo a passo como transformar o Marketplace em uma fonte real de renda. Tudo explicado de forma direta e fácil de aplicar.
              </p>
            </div>

            <div className="space-y-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground uppercase text-sm">{point.title}</h4>
                    <p className="text-muted-foreground">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-accent/10 blur-3xl rounded-full" />
            <div className="relative glass-card p-8 md:p-12 rounded-3xl border-primary/20 space-y-8">
              <h3 className="text-2xl font-headline font-bold text-center uppercase">Você vai aprender exatamente:</h3>
              <div className="grid gap-6">
                {points.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                      <point.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-lg font-medium leading-tight">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}