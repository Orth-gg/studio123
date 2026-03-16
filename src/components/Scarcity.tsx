"use client";

import { AlertTriangle, Clock } from "lucide-react";

export function Scarcity() {
  return (
    <section className="py-12 bg-destructive/10">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-destructive text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          <Clock className="w-4 h-4" /> Atenção
        </div>
        <h2 className="text-2xl md:text-4xl font-headline font-bold uppercase mb-4">Essa oferta pode sair do ar a qualquer momento</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
          O valor promocional de <span className="text-white font-bold">R$ 47</span> é por tempo extremamente limitado. 
          Depois disso o curso voltará ao preço normal de R$ 197.
        </p>
      </div>
    </section>
  );
}