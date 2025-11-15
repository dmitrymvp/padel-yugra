import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Контакты"
          title="Свяжитесь с нами"
          description="Задайте вопрос о бронировании, корпоративных мероприятиях или партнёрстве. Команда ответит в течение рабочего дня."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

    </div>
  );
}



