import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Artboard from "@/components/Artboard";
import Background from "@/components/Background";
import Box2 from "@/components/Box2"; 
import Box from "@/components/Box";
import Image from "next/image";

export default function Home() {
  return ( 
    <>
      <Navbar />
      <Background />
      <Box2 />
      <Artboard />
      <Box   />
      <Footer />
    </>
  );
}
