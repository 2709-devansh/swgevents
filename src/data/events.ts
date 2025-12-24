export type EventCategory = 'welfare' | 'career' | 'academic';

export interface EventItem {
  id: number;
  category: EventCategory;
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const events: EventItem[] = [
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
    image: 'https://raw.githubusercontent.com/PraneetDixit/swg-events/master/src/Assets/Images/Study%20Abroad%20101%20Photos/IMG_1362.HEIC',
  },
];
