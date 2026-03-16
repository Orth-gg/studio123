"use client";

import { ShieldCheck, Calendar, RotateCcw } from "lucide-react";

export function Guarantee() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-12 glass-card p-10 md:p-16 rounded-[3rem] border-primary/20">
          <div className="relative shrink-0">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-primary/20 rounded-full flex items-center justify-center border-4 border-primary shadow-[0_0_40px_rgba(34,197,94,0.3)]">
              <span className="text-4xl md:text-6xl font-headline font-extrabold text-primary">7</span>
              <span className="text-xs md:text-sm font-bold absolute bottom-4 md:bottom-8 uppercase">Dias</span>
            </div>
            <ShieldCheck className="absolute -top-2 -right-2 w-10 h-10 text-accent bg-background rounded-full p-1" />
          </div>

          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-headline font-bold uppercase">Risco Zero para você</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>Você terá <span className="text-foreground font-bold">7 dias de garantia total</span>.</p>
              <p>
                Se por qualquer motivo achar que o treinamento não é para você, basta pedir reembolso e devolveremos <span className="text-primary font-bold">100% do seu dinheiro</span>.
              </p>
              <p className="text-sm font-bold uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
                <RotateCcw className="w-4 h-4" /> Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}