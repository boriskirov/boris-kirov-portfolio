/**
 * Card — polymorphic wrapper for the shared "glass" surface treatment.
 *
 * Composes the CSS utility classes `card`, `card-link`, `card-column`,
 * `card-row` (defined in `styles/components.css`) so callers don't have to
 * remember which combination to reach for.
 *
 * Props
 *   - as        Element or component to render as (default `"div"`). Accepts
 *               strings ("a", "button") or components (`Link`, `motion.a`).
 *   - variant   "column" | "row" — layout modifier (optional).
 *   - link      If true, applies `card-link` for hover/focus interactivity.
 *               Auto-inferred when `href` or `onClick` is passed.
 *   - className Additional classes appended after the card composition.
 *
 * All other props are forwarded to the rendered element.
 */
export default function Card({
  as: Component = "div",
  variant,
  link,
  className,
  children,
  ...rest
}) {
  const isInteractive =
    link !== undefined ? link : "href" in rest || "onClick" in rest;

  const classes = [
    "card",
    isInteractive && "card-link",
    variant === "column" && "card-column",
    variant === "row" && "card-row",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}
