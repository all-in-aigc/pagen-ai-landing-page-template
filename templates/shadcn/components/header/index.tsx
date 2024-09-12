import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Header, Item } from "@/types/landing";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function ({ header }: { header: Header }) {
  if (header.disabled) {
    return;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-14 items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-4 hidden md:flex">
          {/* <a
            href={header.brand?.url}
            className="mr-6 flex items-center space-x-2"
          >
            <h1 className="hidden font-bold sm:inline-block">
              {header.brand?.title}
            </h1>
          </a> */}
          <Link
            href={header.brand?.url || ""}
            className="text-lg font-medium mr-16"
          >
            {header.brand && header.brand.avatar ? (
              <div className="flex items-center gap-x-2 cursor-pointer">
                <img
                  src={header.brand.avatar.src}
                  alt={header.brand.avatar.title}
                  className="h-8"
                />
                <h1 className="text-xl font-bold">{header.brand.title}</h1>
              </div>
            ) : (
              <h1 className="text-xl font-bold cursor-pointer">
                {header.brand?.title}
              </h1>
            )}
          </Link>

          <nav className="flex items-center space-x-6 text-sm">
            {header.nav?.items?.map((v: Item, idx: number) => {
              return (
                <Link href={v.url || ""} target={v.target || "_self"}>
                  {v.title}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
          {header.buttons?.map((v, idx) => (
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

          <div className="md:hidden w-full flex items-center gap-x-2">
            <Link
              href={header.brand?.url || ""}
              className="text-lg font-medium mr-16"
            >
              {header.brand && header.brand.avatar ? (
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <img
                    src={header.brand.avatar.src}
                    alt={header.brand.avatar.title}
                    className="h-8"
                  />
                  <h1 className="text-xl font-bold">{header.brand.title}</h1>
                </div>
              ) : (
                <h1 className="text-xl font-bold cursor-pointer">
                  {header.brand?.title}
                </h1>
              )}
            </Link>
            <div className="flex-1"></div>

            {header.nav && header.nav.items && header.nav.items.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {header.nav?.items?.map((v: Item, idx: number) => {
                    return (
                      <DropdownMenuItem key={idx}>
                        <Link
                          href={v.url || ""}
                          target={v.target || "_self"}
                          className="w-full"
                        >
                          {v.title}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
