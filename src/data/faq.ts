export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqs: FaqEntry[] = [
  {
    question: 'Do you work with startups?',
    answer:
      'Yes — White House Gaming regularly partners with early-stage startups on game builds, XR prototypes, and app development, working within lean budgets and fast timelines.',
  },
  {
    question: 'Can I intern remotely?',
    answer:
      'Yes. The studio is small and fast-moving, and remote collaborators are welcome — see the Join Us page to apply through our form.',
  },
  {
    question: "What's a typical project timeline?",
    answer:
      'It depends on scope, but most prototypes are playable within 1-2 weeks, with full contract builds typically running 4-12 weeks depending on complexity.',
  },
  {
    question: 'Is GameHub free to play?',
    answer:
      'Yes — OMG GameHub bundles 10+ hypercasual games into a single free app, with a tournament system offering mobile recharge prizes.',
  },
];
