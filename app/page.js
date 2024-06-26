import Image from "next/image";
import Header from "./pages/header";
import ExploreServices from "./pages/services";
import About from "./pages/about";
import Choose from "./pages/choose";
import Video from "./pages/videointro";
import ClientsSection from "./pages/clients";

export default function Home() {
  return (
    <main>
      <Header />
      <ExploreServices />
      <About />
      <Choose />
      <Video />
      <ClientsSection />
    </main>
  );
}
