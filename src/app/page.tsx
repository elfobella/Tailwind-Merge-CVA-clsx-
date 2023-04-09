import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "./components/ui/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <p>Hello There</p>
      </main>
      <Button variant="outline">Selam</Button>
      <Button>Default</Button>
      <Button size="sm">Small</Button>
    </>
  );
}
