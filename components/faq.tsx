import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQ({ faqs }: FAQProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            الأسئلة الشائعة
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border bg-white px-6"
              >
                <AccordionTrigger className="text-right text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-gray-700">
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



