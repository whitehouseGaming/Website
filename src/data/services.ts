export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: 'Game Development',
    description: 'Unity & Unreal builds from prototype to store-ready release — hypercasual, multiplayer, and mid-core.',
  },
  {
    title: 'AR / VR Development',
    description: 'Meta Quest and OpenXR experiences — training simulations, interactive demos, and immersive product work.',
  },
  {
    title: '3D Modeling & Animation',
    description: 'Asset creation and rigging/animation for in-game characters, props, and environments.',
  },
  {
    title: 'App Development',
    description: 'Cross-platform mobile and desktop apps beyond games — dashboards, tools, and internal software.',
  },
  {
    title: 'Multiplayer & Backend Integration',
    description: 'Real-time netcode (Photon PUN/Fusion), FastAPI/MongoDB/Firebase backends, live-ops tooling.',
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
