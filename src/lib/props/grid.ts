import React from "react";

export type GridProps<T extends ItemWithID> = {
  items: T[];
  CardComponent: React.ComponentType<{ item: T }>;
  pathComponent: string;
  gridClassName?: string;
};

export interface ItemWithID {
  id: number;
};

export interface CharacterCardProps {
  item: {
  name: string;
  image: string | null;
  }
};
