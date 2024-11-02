import Benefits from "@/components/Benefits";
import HeroesSection from "@/components/HeroesSection";
import NavBar from "@/components/NavBar";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div className="">
        <NavBar />
      <HeroesSection />
        <Statistics />
        <Benefits/>
    </div>
  );
}
