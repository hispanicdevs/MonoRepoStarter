import React from 'react';
import { useMemo, type ReactNode } from 'react';
import { Segment, SegmentContext } from './segmentContext';
import { analytics } from './analytics';
 
export function SegmentProvider({ children, client }: { children?: ReactNode; client?: Segment }) {
  const segment = useMemo(() => {
    if (!client) {
      console.warn('[Segment] You must provide a client to SegmentProvider.');
    }
 
    return analytics;
  }, [client]);
 
  return <SegmentContext.Provider value={{ client: segment }}>{children}</SegmentContext.Provider>;
}