export function buttonClassName(isPrimary = false) {
  return `inline-flex items-center justify-center rounded-[10px] border px-5 py-4 text-[15px] font-semibold leading-none transition-transform duration-200 hover:-translate-y-0.5 ${
    isPrimary
      ? "primary-button border-black"
      : "outline-button border-black text-[var(--color-page-ink)]"
  }`;
}
