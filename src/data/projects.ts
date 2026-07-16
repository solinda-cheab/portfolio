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
    featured: true,
  },
  {
    id: 'drum-machine',
    name: 'Drum Machine',
    tagline: 'Interactive audio playground',
    description:
      'An interactive drum machine built for freeCodeCamp\u2019s front-end certification, mapping keyboard input to sampled drum sounds.',
    stack: ['React'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'creative-agency-landing',
    name: 'Creative Agency Landing Page',
    tagline: 'Modern responsive marketing site',
    description:
      'A modern, responsive landing page for a creative agency, integrated with a CMS so content can be updated without touching code.',
    stack: ['React', 'Tailwind CSS'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'e-wedding-invitation',
    name: 'E-Wedding Invitation',
    tagline: 'Digital invitation with RSVP',
    description:
      'A digital wedding invitation platform with guest RSVP handling and a fully responsive layout for sharing across devices.',
    stack: ['React'],
    githubUrl: '#',
    liveUrl: '#',
  },
]
