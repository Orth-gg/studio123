"use client";

import { CheckCircle2, UserCheck, ShieldCheck, Zap, HeartHandshake } from "lucide-react";

const items = [
  { icon: UserCheck, text: "Funciona mesmo se você nunca vendeu nada online." },
  { icon: Zap, text: "Funciona mesmo se você não entende de tecnologia." },
  { icon: HeartHandshake, text: "Funciona mesmo se você quer apenas uma renda extra." },
  { icon: ShieldCheck, text: "Funciona para qualquer pessoa disposta a aplicar o método." },
];

export function Objections() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="glass-card p-10 md:p-16 rounded-[3rem] border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
          
          <div className="relative z-10 text-center space-y-12">
            <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase">Isso funciona para você?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <div className="mt-1 bg-primary/20 p-2 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg font-medium leading-tight">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">O método foi desenhado para ser à prova de falhas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}