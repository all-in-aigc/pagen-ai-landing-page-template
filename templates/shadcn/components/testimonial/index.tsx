import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Item, Section } from "@/types/landing";

import React from "react";

const TestimonialCard = ({ item }: { item: Item }) => (
  <Card className="my-4">
    <CardContent className="pt-6">
      <blockquote>
        <p>"{item.description}"</p>
      </blockquote>
      <div className="mt-6 flex items-center gap-x-4">
        <Avatar>
          <AvatarImage src={item.avatar?.src} alt={item.avatar?.title} />
          <AvatarFallback>{item.title?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold">{item.name}</div>
          <div className="text-zinc-600">{item.title}</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TestimonialsGrid = ({ items }: { items: Item[] }) => (
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {items.map((item: Item, idx: number) => (
      <TestimonialCard key={idx} item={item} />
    ))}
  </div>
);

export default function ({ section }: { section: Section }) {
  if (section.disabled) {
    return;
  }

  return (
    <div className="py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center my-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {section.title}
          </h2>
          <div className="mt-4 text-sm font-semibold tracking-wide">
            {section.description}
          </div>
        </div>
        {section.items && <TestimonialsGrid items={section.items} />}
      </div>
    </div>
  );
}
