import { Item, Button as PageButton, Section } from "@/types/landing";

import { Button } from "@/components/ui/button";
import { FC } from "react";
import Link from "next/link";

interface FeatureProps {
  title: string;
  description: string;
  imageUrl: string;
  isImageLeft: boolean;
  button: PageButton;
}

const Feature: FC<{ section: Section }> = ({ section }) => (
  <div className="my-4 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
    {section.image_position === "left" && (
      <div className="order-1 md:order-1">
        <img
          className="w-full max-w-md rounded-xl shadow-xl ring-1 ring-gray-400/10"
          src={section.image?.src}
          alt={section.image?.title}
        />
      </div>
    )}
    <div
      className={`order-2 ${
        section.image_position === "left" ? "md:order-2" : "md:order-1"
      }`}
    >
      <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        {section.title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        {section.description}
      </p>

      {section.items && (
        <div className="mt-4">
          {section.items.map((v: Item, i: number) => (
            <div
              key={i}
              className="grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-md font-medium leading-none">{v.title}</p>
                <p className="text-md text-muted-foreground">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {section.buttons && (
        <div className="mt-4 flex gap-4">
          {section.buttons.map((v: PageButton, idx: number) => (
            <Link key={idx} href={v.url || ""} target={v.target || "_self"}>
              <Button
                key={idx}
                size="sm"
                variant={v.theme === "outline" ? "outline" : "default"}
              >
                {v.title}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>

    {section.image_position !== "left" && (
      <div className="order-1 md:order-2">
        <img
          className="w-full max-w-md rounded-xl shadow-xl ring-1 ring-gray-400/10"
          src={section.image?.src}
          alt={section.image?.title}
        />
      </div>
    )}
  </div>
);

export default function ({ section }: { section: Section }) {
  if (section.disabled) {
    return;
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="my-4 flex flex-col gap-8">
        {section.items?.map((v: Section, idx: number) => (
          <Feature key={idx} section={v} />
        ))}
      </div>
    </div>
  );
}
