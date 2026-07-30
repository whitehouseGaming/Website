// TODO_STATS — replace with confirmed exact figures before launch.
export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Games Shipped' },
  { value: 4, suffix: '+', label: 'Years Building' },
  { value: 1, label: 'App, Endless Replay' },
];
