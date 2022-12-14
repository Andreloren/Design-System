import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-blue-700 rounded font-semibold text-gray-100 text-sm w-full transition-colors hover:bg-blue-300 focus:ring-2 ring-gray-100",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
