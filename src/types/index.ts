import { StandardLonghandProperties } from 'csstype';
import { CSSProperties } from 'react';
export * from './eventHandler.types';
export * from './PageProps';
export * from './User';
export * from './units';
export type MediaType = 'image' | 'video';
export type Size = 'xs' | 'small' | 'medium' | 'large' | 'xl' | '2xl';
export type Gender = 'male' | 'female' | 'other';
export type Color =
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';
export type StyleType = CSSProperties | StandardLonghandProperties;
