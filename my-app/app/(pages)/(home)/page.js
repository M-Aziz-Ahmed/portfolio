import Certificates from "@/components/certificates/certificates";
import Education from "@/components/education/Education";
import Profile from "@/components/profile/Profile";
import Skills from "@/components/skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Profile/>
    <Education/>
    <Certificates/>
    <Skills/>
    </>
  );
}