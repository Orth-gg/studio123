"use client";

import { Table, FileText, CheckSquare, MessageSquare, Download } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";

const tools = [
  { icon: Table, title: "Planilha Inteligente", desc: "Controle total de entradas, saídas e lucro líquido automático." },
  { icon: FileText, title: "Modelos de Anúncios", desc: "Textos prontos que geram até 3x mais cliques e mensagens." },
  { icon: CheckSquare, title: "Checklist de Publicação", desc: "O que você deve fazer todos os dias para manter o algoritmo ativo." },
  { icon: MessageSquare, title: "Guia de Negociação", desc: "Scripts prontos para quebrar objeções e fechar a venda no chat." },
];

export function Tools() {
  const toolMockup = PlaceHolderImages.find(img => img.id === "tool-mockup");

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase">
            Você também recebe ferramentas que facilitam suas vendas
          </h2>
          <p className="text-muted-foreground text-lg">
            Não queremos que você perca tempo com planilhas chatas ou textos difíceis. Entregamos tudo pronto.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {tools.map((tool, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border-white/5 hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <tool.icon className="w-6 h-6 text-accent group-hover:text-background" />
                </div>
                <h3 className="font-bold mb-2 uppercase text-sm">{tool.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
            <div className="relative glass-card p-2 rounded-3xl overflow-hidden shadow-2xl">
              {toolMockup && (
                <Image 
                  src={toolMockup.imageUrl} 
                  alt={toolMockup.description} 
                  width={600} 
                  height={450} 
                  className="rounded-2xl"
                  data-ai-hint={toolMockup.imageHint}
                />
              )}
              <div className="absolute bottom-6 right-6 bg-accent text-background px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 shadow-lg">
                <Download className="w-4 h-4" /> DOWNLOAD INCLUSO
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}