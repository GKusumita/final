import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your products?",
    answer:
      "We specialize in handcrafted crochet bouquets that never wilt. Our products include wedding bouquets, home décor arrangements, and personalized gifts made from high-quality, eco-friendly yarns.",
  },
  {
    question: "How is shipping handled?",
    answer:
      "We offer free shipping on orders over $75. Standard shipping takes 5-7 business days, while express shipping is available for 2-3 business days. All items are carefully packaged to ensure they arrive in perfect condition.",
  },
  {
    question: "Can I customize my order?",
    answer:
      "Absolutely! We offer full customization including color schemes, flower types, arrangement styles, and size. Contact us to discuss your vision and we'll create a unique piece just for you.",
  },
  {
    question: "What's your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, we'll work with you to make it right or provide a full refund for standard items.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about our crochet bouquets
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
