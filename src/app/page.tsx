import { Divider } from "@nextui-org/react";
import MaterialSelector from "@/components/MaterialSelector";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="text-center">
        <p className="text-lg mb-2.5">AW Künstliche Intelligenz und Maschinelles Lernen</p>
        <p className="text-gray-500 text-sm mb-8">Grünbauer, René; Nemes, Tamás - OTH Regensburg</p>
        <p className="text-primary text-4xl font-bold">Materialien</p>
      </div>
      <Divider className="my-20" />
      <MaterialSelector/>
    </main>
  );
}
