"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { ScheduleTable } from "@/components/booking/schedule-table";
import { BookingModal } from "@/components/booking/booking-modal";

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedCourt, setSelectedCourt] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSlotSelect = (time: string, court: string) => {
    setSelectedTime(time);
    setSelectedCourt(court);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Онлайн-бронирование"
          title="Забронируйте корт за пару минут"
          description="Выберите время, подтвердите бронь и оплатите онлайн. После подтверждения на email придёт письмо с деталями и QR-доступом."
        />
    
      </section>
      <ScheduleTable
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        onSlotSelect={handleSlotSelect}
      />
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTime("");
          setSelectedCourt("");
        }}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        selectedCourt={selectedCourt}
      />
    </div>
  );
}
