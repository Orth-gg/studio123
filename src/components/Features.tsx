
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { LayoutDashboard, ShieldCheck, Zap, Users, BarChart3, Database } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Gestão Profissional",
    description: "Controle total das suas vendas com dashboards intuitivos. Saiba exatamente quanto está lucrando por anúncio."
  },
  {
    icon: ShieldCheck,
    title: "Método Validado",
    description: "Aprenda com quem já faturou múltiplos 6 dígitos apenas no Facebook Marketplace."
  },
  {
    icon: Zap,
    title: "Escalabilidade",
    description: "Descubra como gerenciar dezenas de anúncios sem perder a cabeça ou a conta."
  },
  {
    icon: Users,
    title: "Público Infinito",
    description: "O Marketplace tem milhões de usuários ativos diariamente. Saiba como ser prioridade para eles."
  },
  {
    icon: BarChart3,
    title: "Análise de Lucro",
    description: "Ferramentas exclusivas para calcular margem, ROI e projeção de faturamento real."
  },
  {
    icon: Database,
    title: "Estoque e Logística",
    description: "Guia completo de como organizar seu fluxo de produtos para nunca deixar um cliente esperando."
  }
];

export function Features() {
  const toolMockup = PlaceHolderImages.find(img => img.id === "tool-mockup");

  return (
    <section id="beneficios" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">O que você vai receber</h2>
          <p className="text-muted-foreground text-lg">
            Muito mais que um curso, o Marketplace Renda Express é um ecossistema completo para o seu sucesso financeiro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-headline font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div id="ferramentas" className="mt-32 glass-card p-8 lg:p-16 rounded-3xl overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">
                Ferramentas de <span className="text-accent">Controle e Gestão</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pare de usar cadernetas ou planilhas confusas. Nossa plataforma exclusiva permite gerenciar conversas, leads e vendas em um só lugar, garantindo que sua prioridade seja sempre o lucro.
              </p>
              <ul className="space-y-4">
                {[
                  "Dashboard em tempo real",
                  "Cálculo automático de lucro líquido",
                  "Gestão de anúncios ativos e inativos",
                  "Histórico completo de clientes"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
              {toolMockup && (
                <Image
                  src={toolMockup.imageUrl}
                  alt={toolMockup.description}
                  width={500}
                  height={400}
                  className="relative drop-shadow-2xl rounded-xl"
                  data-ai-hint={toolMockup.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
