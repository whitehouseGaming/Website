export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqs: FaqEntry[] = [
  {
    question: 'Do you work with startups?',
    answer:
      'Yes — White House Gaming takes on work with early-stage startups on game builds, XR prototypes, and app development, working within lean budgets and fast timelines.',
  },
  {
    question: 'Can I intern remotely?',
    answer:
      "Occasionally — remote collaborators are considered on a case-by-case basis. Reach out through the Contact page with what you're looking for.",
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
  {
    question: 'How do tournament recharge prizes work?',
    answer:
      'GameHub runs skill-based leaderboard tournaments inside the app; top-ranked players win mobile recharge prizes. Full eligibility rules and prize terms are on our Terms & Conditions page.',
  },
];
