import Title from "@/components/home/title";
import { Meta } from "@/configs/Meta";
import { HomeLayout } from "@/layouts/Home";
import ArticleSection from "@/sections/home/articleSection";
import PopularDestinationSection from "@/sections/home/popularDestinationSection";
import ReasonSection from "@/sections/home/reasonSection";
import TripSection from "@/sections/home/tripSection";

export default function Home() {

  return (
    <HomeLayout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <PopularDestinationSection />
      <TripSection />
      <ReasonSection />
      <ArticleSection />
    </HomeLayout>
  );
}
