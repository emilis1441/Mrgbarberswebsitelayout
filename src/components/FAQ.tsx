import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useLanguage } from "../utils/LanguageContext";

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section className="py-[17px] bg-black px-[0px]">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent tracking-widest uppercase mb-4 block text-[32px]">
            {t.faq.label}
          </span>
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            {t.faq.title}
          </h2>
          <p className="text-xl text-white/80">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {t.faq.questions.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-primary/30 mb-4 px-6 rounded-sm border border-white/10">
              <AccordionTrigger className="text-left hover:no-underline text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Additional Help */}
        <div className="text-center mt-12">
          <p className="text-white/70">
            {t.faq.stillQuestions}{" "}
            <a
              href="https://www.fresha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {t.faq.contactLink}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
