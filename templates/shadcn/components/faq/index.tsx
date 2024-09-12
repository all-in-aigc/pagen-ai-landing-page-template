import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Item, Section } from "@/types/landing";

export default function ({ section }: { section: Section }) {
  if (section.disabled) {
    return;
  }

  return (
    <section className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl text-center">
            {section.title}
          </h2>
          <div className="mt-4 text-center text-sm font-semibold tracking-wide">
            {section.description}
          </div>
          <Accordion type="single" collapsible className="space-y-4 mt-8">
            {section.items?.map((item: Item, idx: number) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="rounded-lg shadow-sm border"
              >
                <AccordionTrigger className="px-4 py-4">
                  <span className="text-left font-medium">{item.title}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2 text-gray-600">
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
