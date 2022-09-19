import Head from "next/head";
import Calculator from "../components/Calculator";

export default function Home() {
  return (
    <>
      <Head>
        <title>rizkiiaprmn - Aplikasi Kalkulator</title>
      </Head>
      <div className='bg-gradient-to-b from-cyan-100 to-cyan-500 font-primary'>
        <div className='container mx-auto lg:px-12 sm:px-16 px-8'>
          <div className='flex flex-wrap gap-10 justify-around py-24'>
            <Calculator />
          </div>
          <div className='py-10 border-t border-slate-300/30'>
            <p className='text-white text-center text-xs'>
              Designed and Created by{" "}
              <a
                href='https://instagram.com/rizkiiaprmn'
                className='font-bold text-white'
                target='_blank'
                rel='noreferrer'
              >
                rizkiiaprmn
              </a>{" "}
              © Tugas IMK (TI - 3C) 2022
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
