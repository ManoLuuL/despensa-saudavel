import { LazyExoticComponent } from 'react';

export type PageProps = {
  areaId: number;
};

export type PageExport = {
  path: string;
  Component: LazyExoticComponent<React.FC<PageProps>>;
};
