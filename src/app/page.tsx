'use client';
import Hero from '@/features/common/landing/content/hero';
import { FeaturesShowcase } from '@/features/common/landing/content/features-showcase/FeaturesShowcase';
import { FeaturesTestimonials } from '@/features/common/landing/content/features-testimonials/FeaturesTestimonials';

export default function LandingPage() {
  return (
    <main className="flex flex-col justify-center items-center mt-[7rem]">
      <Hero />
      <FeaturesShowcase />
      <FeaturesTestimonials/>
    </main>
  );
}
