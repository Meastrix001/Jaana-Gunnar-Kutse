export interface Route {
  path: string;
  label: string;
  subLinks?: {
    path: string;
    label: string;
  }[]
}
