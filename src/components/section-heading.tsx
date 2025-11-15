type SectionHeadingProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`space-y-3 max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.4em] text-lime-300/80">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description ? (
        <p className="text-sm text-white/70 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
