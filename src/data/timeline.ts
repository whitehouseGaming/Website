// Years are approximate per Ashu — the 2020/2021 start dates are firm, the later
// corporate-era years are estimated from job order + duration, not confirmed calendar
// dates. Nudge them if the exact years turn out different.
export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: '2020',
    title: 'YouTube Animation — 2D & 3D',
    description: 'Started out making 2D and 3D animated videos using Blender, Adobe Animate, and Illustrator.',
  },
  {
    year: '2021',
    title: 'First Game: Pathru',
    description: 'Shifted into game development and shipped my first game, Pathru — a rage-game platformer. Kept building personal game projects through 2023.',
  },
  {
    year: '2023',
    title: 'VR Developer Intern',
    description: 'Started my professional journey as a VR developer intern.',
  },
  {
    year: '2023–24',
    title: 'Slot Games Developer',
    description: 'Spent a year building slot games.',
  },
  {
    year: '2024–25',
    title: 'VR Training Sim for Tejas, and Founding OMG GameHub',
    description: "Built a VR training simulator for the Indian Air Force's Tejas Light Combat Aircraft, and founded the OMG GameHub project alongside it.",
  },
  {
    year: '2025',
    title: 'Multiplayer Casino Game Developer',
    description: 'Spent a year building real-time multiplayer casino titles.',
  },
  {
    year: '2026–Present',
    title: 'Freelancing Under White House Gaming',
    description: 'Now freelancing full-time under the White House Gaming banner — going on 4 years of freelance work in total.',
  },
];
