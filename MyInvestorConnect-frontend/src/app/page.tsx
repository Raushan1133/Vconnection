import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Pricing from "@/sections/Pricing";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import FounderStarter from "@/sections/FounderStarter";
import Navbar from "@/sections/Navbar";
export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <LogoTicker />
            <Pricing />
            {/* <Integrations /> */}
            <FounderStarter />
             <Faqs />
            <CallToAction />
            <Footer />
        </>
    );
}

