import FeaturedSneakers from '@/components/FeaturedSneakers';
import Hero from '@/components/Hero';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <FeaturedSneakers />
      <Newsletter />
    </div>
  );
}