'use client';
 
import React, { type ReactNode } from 'react';
 
import { usePathname, useSearchParams } from 'next/navigation';
import { analytics } from './analytics';
import { SegmentProvider } from './segmentProvider'
 
import { useEffect } from 'react';
 
if (typeof window !== 'undefined') {
  analytics.load({
    writeKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY!});
}

export function SegmentPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
 
  useEffect(() => {
    analytics.page();
  }, [pathname, searchParams]);
 
  return null;
}
 
export function AnalyticsProvider({ children }: { children: ReactNode }) {
  return <SegmentProvider client={analytics}>{children}</SegmentProvider>;
}
 
