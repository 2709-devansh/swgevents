import React, { useState } from 'react';
import './Events.css';

const eventsData = [
  {
    id: 1,
    category: 'welfare',
    title: 'Student Mentorship Program (SMP)',
    description: 'An important initiative to connect seniors with freshers and mentor them throughout their first year journey, and further as a guide and support.',
    image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/SMP/SMP.jpeg?raw=true',
  },
  {
    id: 2,
    category: 'career',
    title: 'FORESIGHT',
    description: 'A blog-based initiative that gives all the guidance that a student needs to crack their dream internship. The blogs are published based on articles submitted by students of IIT Kharagpur who have already completed internships through CDC.',
    image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/Foresight%20Photos/Foresight.png?raw=true',
    link: 'https://swgiitkgp.org/placementblogs',
  },
  {
    id: 3,
    category: 'career',
    title: 'Off-Campus Talks',
    description: 'An offline session conducted to resolve all the doubts regarding the off-campus internship and placement opportunities.',
    image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/Off%20Campus%20Talks%20Photos/OffCampus.jpg?raw=true',
  },
  {
    id: 4,
    category: 'academic',
    title: 'Examania',
    description: 'An offline event conducted before mid-semester exams to guide the freshers. We provide students with essential resources, study materials, and links to past exam papers to help them succeed in mid-semester exams.',
    image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/Examania%20Photos/Examania.jpg?raw=true',
  },
  {
    id: 5,
    category: 'career',
    title: 'Career Orientation Session',
    description: 'Access curated study materials, previous year question papers, and preparation strategies for your semester exams. Our Exam Prep resources are designed to help you excel in your academics with minimal stress.',
    image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/Career%20Orientation%20Session%20Photos/COS.jpg?raw=true',
  },
  {
    id: 6,
    category: 'academic',
    title: 'PDS Doubt Session',
    description: 'An offline initiative conducted to improve the skills in Programming and Data Structures for first years and get guidance from seniors regarding the grade in PDS and coding skills.',
    image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/PDS%20Doubt%20Session%20Photos/PDS.jpg?raw=true',
  },
  {
    id: 7,
    category: 'academic',
    title: 'English Language Assessment Test',
    description: 'An offline initiative conducted to improve the English Language, which is useful for various careers.',
    image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/ELAT%20Photos/ELAT.png?raw=true',
  },
  {
    id: 8,
    category: 'career',
    title: 'Research Guidance Webinar',
    description: 'An online session where panellists give insights about various research opportunities.',
    image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/Research%20Guidance%20Webinar%20Photos/RGW.jpg?raw=true',
  },
  {
    id: 9,
    category: 'welfare',
    title: 'Campus Tour',
    description: 'An offline event for freshers to show them around the campus and learn stories about important places.',
    image: 'https://github.com/PraneetDixit/swg-events/blob/master/src/Assets/Images/Campus%20Tour%20Photos/CampusTour.png?raw=true',
  },
  {
    id: 10,
    category: 'academic',
    title: 'Study Abroad 101',
    description: 'An offline event where panellists guide about higher education opportunities abroad and how to crack various examinations.',
    image: 'https://github.com/param711/SWG-events-revamped/blob/main/src/Assets/Images/Study%20Abroad%20101%20Photos/sa101.png?raw=true',
  },
];

const filterCategories = [
  { id: 'all', label: 'All Events' },
  { id: 'welfare', label: 'Welfare' },
  { id: 'career', label: 'Career' },
  { id: 'academic', label: 'Academic' },
];

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="scroll-arrow">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const EventCard = ({ event, index }) => {
  return (
    <div 
      className="event-card" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img 
        src={event.image} 
        alt={event.title} 
        className="event-card-image"
      />
      <div className="event-card-content">
        <span className={`event-category-badge ${event.category}`}>
          {event.category}
        </span>
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-description">{event.description}</p>
        {event.link && (
          <a 
            href={event.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="event-card-link"
          >
            Learn More <ArrowIcon />
          </a>
        )}
      </div>
    </div>
  );
};

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents = activeFilter === 'all'
    ? eventsData
    : eventsData.filter((event) => event.category === activeFilter);

  const scrollToEvents = () => {
    document.getElementById('events-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="events-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Explore SWG Events</h1>
        <p className="hero-subtitle">
          Discover a wide range of events organized by the Student Welfare Group 
          to enhance your campus experience.
        </p>
        <div className="scroll-indicator" onClick={scrollToEvents} style={{ cursor: 'pointer' }}>
          <span>Scroll to explore</span>
          <ChevronDownIcon />
        </div>
      </section>

      {/* Events Section */}
      <section className="filter-section" id="events-grid">
        <div className="filter-buttons">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              className={`filter-button ${category.id} ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="events-grid">
          {filteredEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* App Promo Section */}
      <section className="app-promo-section">
        <h2 className="app-promo-title">Get the SWG App</h2>
        <p className="app-promo-subtitle">
          Download our app to stay updated with the latest events and resources.
        </p>
        <div className="app-store-buttons">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Download on App Store" 
              className="store-button"
            />
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get it on Google Play" 
              className="store-button"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;
