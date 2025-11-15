export function formatDate(input: string | Date | undefined, locale = "ru-RU") {
  if (!input) {
    return "";
  }
  const date = typeof input === "string" ? new Date(input) : input;
  if (isNaN(date.getTime())) {
    return "";
  }
  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "short",
  });
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
