import { FC, ReactNode } from "react";

export interface AppRoutes {
  exact?: boolean;
  path: string;
  element: FC;
  title?: string;
  slug?: string;
}
