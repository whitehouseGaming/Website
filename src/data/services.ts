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
    title: 'VR Training Simulations',
    description: 'Immersive procedural training environments built for Meta Quest, focused on repeatable scenario practice.',
  },
  {
    title: 'Surgical / Medical VR Simulations',
    description: 'Precision-critical medical training builds where interaction fidelity and realism were non-negotiable.',
  },
  {
    title: 'Multiplayer Casino Games',
    description: 'Blackjack, Roulette, Teen Patti, Ludo and more — real-time multiplayer casino titles with live tables.',
  },
  {
    title: 'Meta Quest XR Contracts',
    description: 'Standalone XR builds shipped directly to Meta Quest hardware for contract clients.',
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
