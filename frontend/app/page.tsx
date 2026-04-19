import WalletButton from "../components/WalletButton";
import Stats from "../components/Stats";
import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
    <main className="p-10 bg-black text-white min-h-screen">
      <h1 className="text-5xl font-bold">
        NEXUS Web3 Agency
      </h1>

      <div className="mt-6">
        <WalletButton />
      </div>

      <Stats />
      <Chatbot />
    </main>
  );
}
