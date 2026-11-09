import logoMark from "@/assets/barberfy-logo-mark.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({ className, size = 36 }: { className?: string; size?: number }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <img
        src={logoMark.url}
        alt=""
        width={size}
        height={size}
        className="shrink-0 rounded-lg"
        style={{ width: size, height: size }}
      />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        Barber<span className="text-primary">fy</span>
      </span>
    </span>
  );
}
