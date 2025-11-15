import Link from "next/link";
import { pricingPlans } from "@/lib/mock-data";

export function PricingGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {pricingPlans.map((plan) => (
        <Link
          key={plan.id}
          href="/booking"
          className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-lime-200/40 hover:bg-white/[0.08] block"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
    
          </div>
          <div className="mt-6 text-3xl font-semibold text-lime-200">
            {plan.price}
          </div>
          <p className="mt-3 text-sm text-white/60">{plan.description}</p>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 text-lime-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-3.5 w-3.5"
                  >
                    <path d="m5 12 4.5 4.5L19 7" />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </Link>
      ))}
    </div>
  );
}


