import * as React from "react";
import { cn } from "../../lib/utils";

// Utility function to add styles dynamically
const dynamicStyles = (blur) => ({
  background: "linear-gradient(90deg, hsla(274, 100%, 63%, 1) 0%, hsla(234, 100%, 65%, 1) 100%)",
  backdropFilter: `blur(${blur}px)`,
});

const Card = React.forwardRef(({ className, blur = 10, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border max-w-screen-sm p-4 m-auto text-neutral-950 shadow-sm dark:border-neutral-800 dark:text-neutral-50",
      className
    )}
    style={dynamicStyles(blur)}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
