import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'sudoku-competition',
    name: 'Sudoku Competition Platform',
    tagline: 'Real-time online competition system',
    description:
      'An online Sudoku competition platform built for a live technical event, handling authentication, timed rounds, and real-time scoring for every participant.',
    stack: ['React', 'Express', 'MongoDB'],
    features: ['Authentication', 'Leaderboard', 'Timer', 'Auto-save', 'Admin Dashboard'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/projects/sudoku.png',
    overview:
      'A full-stack web application enabling live Sudoku competitions. Players authenticate via secure sessions, join timed rounds, and compete on real-time leaderboards. The system auto-saves progress and includes an admin panel for event management.',
    reflection:
      'Building this taught me how to manage real-time state synchronization across multiple users and how to optimize database queries for live scoring without blocking the UI.',
    challenges:
      'Handling concurrent updates for the leaderboard without race conditions and designing a timeout mechanism that felt fair under network latency.',
    lessons:
      'Use optimistic UI updates for interactivity, centralize state with context or a store, and always validate game logic on the server to prevent client-side manipulation.',
    languages: ['JavaScript', 'HTML', 'CSS'],
    featured: true,
  },
  {
    id: 'drum-machine',
    name: 'Drum Machine',
    tagline: 'Interactive audio playground',
    description:
      'An interactive drum machine built for freeCodeCamp’s front-end certification, mapping keyboard input to sampled drum sounds.',
    stack: ['React'],
    features: ['Keyboard Input', 'Audio Samples', 'Loop Playback', 'Volume Control'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/projects/drum-machine.png',
    overview:
      'A front-end audio project that maps keyboard keys to drum samples, allowing users to play beats in real time with loop and volume controls.',
    reflection:
      'This project deepened my understanding of the Web Audio API and how to keep audio playback responsive while handling rapid key events.',
    challenges:
      'Preventing key-repeat lag from causing audio glitches and managing overlapping sounds so the mix stays coherent.',
    lessons:
      'Debounce keyboard events carefully, preload audio assets upfront, and use refs to preserve stable audio node references across renders.',
    languages: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'creative-agency-landing',
    name: 'Creative Agency Landing Page',
    tagline: 'Modern responsive marketing site',
    description:
      'A modern, responsive landing page for a creative agency, integrated with a CMS so content can be updated without touching code.',
    stack: ['React', 'Tailwind CSS'],
    features: ['CMS Integration', 'Responsive Layout', 'Animations', 'SEO Ready'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/projects/creative-agency.png',
    overview:
      'A marketing landing page built with React and Tailwind CSS, connected to a headless CMS for easy content updates by non-technical users.',
    reflection:
      'Connecting a static front end to a CMS while keeping performance high pushed me to think carefully about caching and build-time optimization.',
    challenges:
      'Balancing rich animations with performance budgets and ensuring pages remained statically exportable for fast deployments.',
    lessons:
      'Static generation plus ISR is a strong combo for marketing sites, and component composition in Tailwind keeps styles maintainable as pages grow.',
    languages: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    id: 'e-wedding-invitation',
    name: 'E-Wedding Invitation',
    tagline: 'Digital invitation with RSVP',
    description:
      'A digital wedding invitation platform with guest RSVP handling and a fully responsive layout for sharing across devices.',
    stack: ['React'],
    features: ['RSVP Form', 'Responsive Design', 'Event Details', 'Guest List'],
    githubUrl: '#',
    liveUrl: '#',
    image: '/projects/wedding-invitation.png',
    overview:
      'A digital wedding invitation site featuring event details, maps, and an RSVP form with guest list management, optimized for sharing on mobile and desktop.',
    reflection:
      'This project helped me practice form validation, accessibility, and responsive design for an emotionally meaningful product.',
    challenges:
      'Supporting many device sizes while keeping animations smooth and form inputs usable on small screens.',
    lessons:
      'Accessibility labels and semantic HTML benefit every user, and animating decorative elements sparingly preserves perceived performance.',
    languages: ['JavaScript', 'HTML', 'CSS'],
  },
]
