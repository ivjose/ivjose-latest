import Image from "next/image";
import { Gabarito } from "next/font/google";
const gabarito = Gabarito({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
   
  return (
    <div className="flex min-h-[calc(100%-400px)] flex-col items-center justify-between font-[family-name:var(--font-geist-sans)]">
      <Image
        className="h-20 w-20 mb-20 mt-4"
        src="/ivjose-logo.png"
        alt="ivjose Logo"
        width={150}
        height={150}
        priority
      />
      <main className="flex flex-col gap-8 row-start-2 items-center md:items-start">
        <div className="flex md:flex-row md:items-end flex-col-reverse text-center px-10 md:text-left gap-8">
          <Image
            className="drop-shadow-xl"
            src="/ivjose-hero.png"
            alt="Jose Santos IV hero image"
            width={600}
            height={600}
            priority
          />
          <div className="md:-ml-20 z-10 flex flex-col gap-4 items-center md:items-start md:mb-20">
            <h1
              className={`text-5xl md:text-7xl ${gabarito.className} text-[var(--red)]`}
            >
              Jose Santos IV
            </h1>
            <p className="text-2xl/8 md:text-3xl/10 ">
              I am a front-end developer specializing in <strong>React.js</strong>
            </p>
           
          </div>
        </div>
      </main>
    </div>
  );
}
