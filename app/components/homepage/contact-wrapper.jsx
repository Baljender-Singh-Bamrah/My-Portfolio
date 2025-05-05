"use client";

import dynamic from 'next/dynamic';

const ContactSection = dynamic(
  () => import('./contact'),
  { ssr: false }
);

export default function ContactWrapper() {
  return <ContactSection />;
} 
