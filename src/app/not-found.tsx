import Image from "next/image";
import Link from "next/link";
import { Gabarito } from "next/font/google";
const gabarito = Gabarito({
  weight: "700",
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100%-400px)] flex-col items-center justify-between font-[family-name:var(--font-geist-sans)]">
      <Image
        className="h-20 w-20"
        src="/ivjose-logo.png"
        alt="ivjose Logo"
        width={150}
        height={150}
        priority
      />

      <main className="flex flex-1 flex-col gap-4 row-start-2 items-center justify-center py-14 md:py-20">
        <h1
          className={`text-5xl md:text-7xl ${gabarito.className} text-[var(--red)]`}
        >
          404
        </h1>
        <p className="text-2xl/8 md:text-3xl/10">page not found</p>

        <Link
          href="/"
          className="inline-block  py-3.5 px-10 me-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-gray-600 focus:z-10 focus:ring-4 focus:ring-gray-100  "
        >
          Go Back
        </Link>
      </main>
    </div>
  );
}
