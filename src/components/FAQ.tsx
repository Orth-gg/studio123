
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter experiência prévia em vendas?",
    answer: "Absolutamente não! O curso foi desenhado do zero, desde a criação da sua primeira conta até as técnicas mais avançadas de escala e gestão."
  },
  {
    question: "Quanto tempo demora para ter resultados?",
    answer: "Muitos alunos fazem sua primeira venda em menos de 48 horas após aplicar o primeiro módulo. O tempo real depende da sua dedicação em listar os produtos corretamente."
  },
  {
    question: "As ferramentas de gestão funcionam no celular?",
    answer: "Sim! Nossa plataforma é 100% responsiva, permitindo que você gerencie suas vendas, calcule lucros e acompanhe conversas diretamente do seu smartphone ou computador."
  },
  {
    question: "O acesso ao curso é vitalício?",
    answer: "Sim, o conteúdo em vídeo e o guia mestre são seus para sempre. A plataforma de gestão de vendas está inclusa gratuitamente por 1 ano, com opção de renovação por um valor simbólico após esse período."
  },
  {
    question: "Tenho suporte se tiver dúvidas?",
    answer: "Com certeza. Temos uma área de membros exclusiva e um grupo de suporte via WhatsApp para tirar dúvidas técnicas e trocar experiências com outros alunos."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold">Dúvidas Frequentes</h2>
          <p className="text-muted-foreground">Tudo o que você precisa saber antes de começar.</p>
        </div>

        <div className="glass-card p-4 rounded-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10 px-4">
                <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
