import clsx from "clsx";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className={clsx([
      'relative overflow-hidden mx-auto sm:px-10 px-5',
      'flex flex-col justify-center items-center',
      "bg-black-100"
    ])}>
      <div className='max-w-7xl w-full'>

        <Hero />

      </div>
    </main>
  );
}
