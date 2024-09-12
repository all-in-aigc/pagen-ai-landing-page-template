import { Item, Section } from "@/types/landing";

import { Card } from "@/components/ui/card";

export default function ({ section }: { section: Section }) {
  if (section.disabled) {
    return;
  }

  return (
    <Card className="py-24 sm:py-32 rounded-none">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center text-lg font-normal tracking-wide">
          {section.description}
        </div>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {section.items?.map((item: Item, idx: number) => (
            <img
              key={idx}
              src={item.image?.src}
              alt={item.image?.title}
              width={158}
              height={48}
              className={`col-span-2 max-h-12 w-full object-contain grayscale dark:invert ${
                idx === 3
                  ? "sm:col-start-2 lg:col-span-1"
                  : idx === 4
                  ? "col-start-2 sm:col-start-auto lg:col-span-1"
                  : "lg:col-span-1"
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
