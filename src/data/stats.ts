// TODO_STATS — replace with confirmed exact figures before launch.
export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Projects Done' },
  { value: 4, suffix: '+', label: 'Years Building' },
  { value: 20, suffix: '+', label: 'Tools' },
];
