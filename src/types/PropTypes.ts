import React from 'react';

export interface CityProp {
  cityName: string;
  emoji: string;
  date: string;
  id: number;
  position: { lat: number; lng: number };
}

export interface ButtonProp {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: string;
}
