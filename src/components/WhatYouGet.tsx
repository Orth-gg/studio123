"use client";

import { BookOpen, FolderOpen, MousePointer2, TrendingUp, Users, PieChart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  { id: 1, title: "Fundamentos do Marketplace", desc: "Tudo que você precisa saber antes de listar seu primeiro produto." },
  { id: 2, title: "Produtos de Giro Rápido", desc: "Aprenda a identificar o que as pessoas estão desesperadas para comprar." },
  { id: 3, title: "Anúncios que Geram Mensagens", desc: "Copy e fotos que fazem seu chat não parar de apitar." },
  { id: 4, title: "Estratégias de Venda Diária", desc: "O passo a passo para nunca passar um dia sem vender." },
  { id: 5, title: "Escala e Profissionalização", desc: "Como transformar a renda extra em sua principal fonte de ganhos." },
  { id: 6, title: "Gestão e Controle", desc: "Domine suas finanças e saiba exatamente quanto está lucrando." },
];

export function WhatYouGet() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase">
            O que você recebe ao entrar no <span className="text-primary">Renda Express</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um cronograma completo dividido em módulos estratégicos para sua evolução.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {modules.map((m, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all group flex flex-col">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">Módulo {m.id}</span>
                <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-headline font-bold mb-3 uppercase leading-tight">{m.title}</h3>
              <p className="text-muted-foreground text-sm flex-1">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="h-16 px-12 text-xl font-bold bg-primary hover:bg-primary/90 cta-button-glow uppercase" asChild>
            <a href="#comprar">Quero acessar o conteúdo completo</a>
          </Button>
          <p className="mt-4 text-xs text-muted-foreground font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-primary" /> Início Imediato após o pagamento
          </p>
        </div>
      </div>
    </section>
  );
}