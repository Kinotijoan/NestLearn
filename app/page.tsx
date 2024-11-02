import Aboutus from "@/components/Aboutus";
import Benefits from "@/components/Benefits";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import HeroesSection from "@/components/HeroesSection";
import NavBar from "@/components/NavBar";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <div className="">
            <NavBar/>
            <HeroesSection/>
            <Statistics/>
            <Benefits/>
            <Aboutus/>
            <Courses/>
            <Testimonials/>
            <Footer/>
        </div>
    );
}
