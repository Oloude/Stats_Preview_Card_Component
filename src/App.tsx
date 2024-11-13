import Image from "./components/Image";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <main className="font-Lexend_Deca min-h-screen bg-mainBg flex justify-center items-center p-6">
      <section className="flex flex-col gap-5 rounded-2xl max-w-xl lg:max-w-4xl mx-auto bg-cardBg lg:flex-row ">
        <Image/>
        <MainContent/>
      </section>
    </main>
  )
}