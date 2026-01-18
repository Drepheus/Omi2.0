'use client';

import EventsCalendar from '@/src/EventsCalendar';
import { TimelineDemo } from '@/components/demos/timeline-demo';

export default function CalendarPage() {
  return (
    <div className="w-full bg-black min-h-screen">
      <EventsCalendar />
      <div className="py-20">
        <TimelineDemo />
      </div>
    </div>
  );
}
