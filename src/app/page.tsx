import { Hero } from "@/components/home/hero";
import { FeatureGrid } from "@/components/home/feature-grid";
import { SectionHeading } from "@/components/section-heading";
import { PricingGrid } from "@/components/pricing/pricing-grid";
import { BlogList } from "@/components/blog/blog-list";
import { MapSection } from "@/components/home/map-section";

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Hero />
      <FeatureGrid />
      <div className="space-y-12">
        <SectionHeading
          eyebrow="Тарифы"
          title="Гибкие пакеты для игры и тренировок"
          description="Выбирайте индивидуальные тренировки, групповые занятия или клубную карту для постоянной игры. Оплата и продление доступны онлайн."
        />
        <PricingGrid />
        </div>
      <BlogList />
      <MapSection />
    </div>
  );
}
