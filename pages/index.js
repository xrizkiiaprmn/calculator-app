import CalculateHistory from "../components/CalculateHistory";
import Calculator from "../components/Calculator";

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-cyan-100 to-cyan-500 font-primary'>
      <div className='container mx-auto lg:px-12 sm:px-16 px-8'>
        <div className='flex flex-wrap gap-10 justify-around py-24'>
          <Calculator />
        </div>
      </div>
    </div>
  );
}
