import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Laptop frame; children fill the screen area. */
export function LaptopFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <div className="rounded-t-2xl border border-border bg-bezel p-2 shadow-device sm:p-3">
        <div className="mb-2 flex items-center gap-1.5 px-1">
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
          <span className="size-2 rounded-full bg-foreground/15" />
        </div>
        <div className="relative aspect-[1056/716] overflow-hidden rounded-md bg-screen">
          {children}
        </div>
      </div>
      <div className="relative mx-auto h-3 w-[104%] -translate-x-[2%] rounded-b-xl border border-t-0 border-border bg-graphite-light sm:h-4">
        <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-md bg-bezel" />
      </div>
    </div>
  );
}

/** Phone frame; children fill the screen area. */
export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-[2.2rem] border border-border bg-bezel p-2 shadow-device",
        className,
      )}
    >
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.7rem] bg-screen">
        <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-bezel" />
        {children}
      </div>
    </div>
  );
}
