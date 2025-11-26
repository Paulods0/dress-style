import { createFileRoute } from '@tanstack/react-router';
import HeroSection from './-components/home-sections/hero-section';
import WeddingSuitSection from './-components/home-sections/wedding-suit-section';
import StyleTrendingSection from './-components/home-sections/style-trending-section';
import MostSellingSection from './-components/home-sections/most-selling-section';
import ScheduleConsultingSection from './-components/home-sections/schedule-consulting-section';
import NewsSection from './-components/home-sections/news-section';
import StartSellingSection from './-components/home-sections/start-selling-section';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-full flex flex-col gap-[72px]">
      <HeroSection />
      <StyleTrendingSection />
      <WeddingSuitSection />
      <MostSellingSection />
      <div className="bg-zinc-100 w-full p-10">
        <ScheduleConsultingSection />
      </div>
      <NewsSection />
      <StartSellingSection />
    </div>
  );
}
