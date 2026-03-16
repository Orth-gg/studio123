"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter experiência prévia?",
    answer: "Absolutamente não! O curso foi desenhado do zero, desde a criação da sua primeira conta até as técnicas mais avançadas de escala e gestão. Qualquer pessoa que saiba mexer no Facebook pode aplicar."
  },
  {
    question: "Preciso investir dinheiro?",
    answer: "Você não precisa investir em estoque inicial ou anúncios pagos. Você pode começar vendendo coisas que já tem em casa ou usar estratégias de parcerias que ensinamos dentro do curso."
  },
  {
    question: "O acesso é imediato?",
    answer: "Sim! Assim que o seu pagamento for aprovado, você receberá automaticamente os dados de acesso no seu e-mail. Pagamentos via PIX e Cartão de Crédito liberam na hora."
  },
  {
    question: "Funciona em qualquer cidade?",
    answer: "Sim! O Facebook Marketplace é global e funciona em qualquer lugar que tenha acesso ao Facebook. O método é adaptável tanto para grandes capitais quanto para cidades pequenas do interior."
  },
  {
    question: "Quanto tempo demora para ter resultados?",
    answer: "Muitos alunos fazem sua primeira venda em menos de 48 horas após aplicar o primeiro módulo. O tempo real depende da sua dedicação em listar os produtos corretamente conforme o método."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase">Dúvidas Frequentes</h2>
          <p className="text-muted-foreground font-bold uppercase text-xs tracking-widest">Tudo o que você precisa saber antes de começar.</p>
        </div>

        <div className="glass-card p-4 rounded-3xl border-primary/10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-white/5 px-4">
                <AccordionTrigger className="text-left font-bold uppercase text-sm hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-sm">
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