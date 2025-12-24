import { useState } from 'react';
import { events } from '@/data/events';
import FilterButtons from './FilterButtons';
import EventCard from './EventCard';

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents = activeFilter === 'all'
    ? events
    : events.filter((event) => event.category === activeFilter);

  return (
    <section id="events" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
