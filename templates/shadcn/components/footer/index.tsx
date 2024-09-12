import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { Footer, Item, Nav } from "@/types/landing";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ({ footer }: { footer: Footer }) {
  if (footer.disabled) {
    return;
  }

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap">
          {/* Newsletter */}
          {footer.brand && footer.brand.title && (
            <div className="w-full md:w-1/4 text-center md:text-left px-8">
              <p className="uppercase mb-6 font-bold">{footer.brand.title}</p>
              <div className="flex flex-col">{footer.brand.description}</div>
            </div>
          )}

          {footer.nav?.items?.map((v: Item, idx: number) => {
            return (
              <div
                className="w-full md:w-1/4 text-center md:text-left px-8"
                key={idx}
              >
                <p className="uppercase mb-6 font-bold">{v.title}</p>
                <ul className="mb-4">
                  {v.children?.map((item: Item, i) => {
                    return (
                      <li className="mt-2" key={i}>
                        <a
                          href={item.url}
                          target={item.target}
                          className="hover:underline text-gray-600 hover:text-gray-800"
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Social Links */}
        {footer.social && footer.social.items && (
          <div className="flex justify-center mt-8 space-x-6">
            {footer.social?.items?.map((v: Item, idx: number) => {
              return (
                <a
                  href={v.url}
                  target={v.target}
                  rel="nofollow"
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                >
                  <span className="sr-only">{v.title}</span>
                  {v.icon}
                </a>
              );
            })}
          </div>
        )}

        {/* Copyright */}
        <div className="mt-4 text-center">
          <p className="text-base text-gray-400">{footer.copyright}</p>
          {!footer.badge_disabled && (
            <div className="mt-4 mb-2 flex flex-wrap space-x-2 text-sm dark:text-gray-400">
              <div className="w-full flex-shrink-0">
                built with{" "}
                <a
                  href="https://pagen.so"
                  target="_blank"
                  className="text-secondary-500"
                >
                  Pagen
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
