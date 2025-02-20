import Image from "next/image";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button className="border border-red bg-white center">Click me</Button>
    </div>
  );
};

export default Home;
