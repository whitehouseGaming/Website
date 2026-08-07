export interface Service {
  title: string;
  description: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: 'Unity Game Development',
    description: '2D and 3D games built end to end in Unity, from first prototype to store-ready release.',
    items: ['2D games', '3D games', 'Gameplay systems', 'UI systems', 'Game mechanics', 'Prototypes', 'Existing-project development'],
  },
  {
    title: 'VR Development',
    description: 'Unity VR applications for standalone and PC VR platforms, including Meta Quest.',
    items: ['Unity VR', 'Meta Quest-targeted applications', 'Standalone VR', 'PC VR', 'Training simulations', 'Interactive VR experiences'],
  },
  {
    title: 'Mobile & WebGL',
    description: 'Cross-platform builds for phones and the browser.',
    items: ['Android', 'iOS', 'WebGL', 'Browser-based Unity experiences'],
  },
  {
    title: 'Interactive Applications',
    description: 'Purpose-built interactive tools beyond games.',
    items: ['Training', 'Education', 'Visualization', 'Simulation', 'Interactive 3D experiences'],
  },
  {
    title: 'Technical Development',
    description: 'Hands-on Unity engineering for projects already in motion.',
    items: ['C#', 'Unity systems', 'Optimization', 'Bug fixing', 'Feature implementation', 'Performance improvements'],
  },
];

export interface ProvenWorkItem {
  title: string;
  description: string;
}

export const provenWork: ProvenWorkItem[] = [
  {
    title: 'Slot Game Development',
    description: 'Built a slot game for a client sourced through Upwork.',
  },
  {
    title: 'Strail VR — Surgical Sterilization Sim',
    description: 'A VR simulation for sterilization of surgical equipment, built for an Upwork client.',
  },
  {
    title: 'VR Car Racing Simulator',
    description: 'A separate VR car racing simulator project, delivered for an Upwork client.',
  },
  {
    title: 'Party Games Development',
    description: 'Built party games for a client on Upwork.',
  },
  {
    title: 'Meta Quest VR Development',
    description: 'VR games and training simulations built for Meta Quest, including work on Quest 3.',
  },
];

export interface WorkflowStep {
  title: string;
  description: string;
}

export const workflowSteps: WorkflowStep[] = [
  { title: 'Prototype Fast', description: 'Playable core loop within days, not weeks.' },
  { title: 'Playtest', description: 'Real players, real feedback, before a single asset gets polished.' },
  { title: 'Ship', description: 'Store-ready builds — Play Store, Meta Quest, or web.' },
  { title: 'Iterate with Live Data', description: 'Analytics and retention data steer every post-launch update.' },
];
