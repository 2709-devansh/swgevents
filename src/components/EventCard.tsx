import { EventItem } from '@/data/events';

interface EventCardProps {
  event: EventItem;
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  const animationDelay = `${0.05 + index * 0.05}s`;

  return (
    <div
      className="rounded-xl overflow-hidden shadow-lg border border-border bg-card text-card-foreground transition-shadow duration-300 hover:shadow-xl animate-fade-in-up opacity-0"
      style={{ animationDelay, animationFillMode: 'forwards' }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full mb-3 text-primary bg-primary/10">
          {event.category}
        </span>
        <h3 className="text-xl font-bold mb-3 leading-tight">{event.title}</h3>
        <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
          {event.description}
        </p>
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            Learn More →
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
