'use client';
import { createContext } from 'react';
import { analytics } from './analytics';
 
export type Segment = typeof analytics;
 
export const SegmentContext = createContext<{ client: Segment }>({ client: analytics });