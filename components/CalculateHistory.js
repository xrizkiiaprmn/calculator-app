export default function CalculateHistory(props) {
  return (
    <div className='xl:w-4/12 lg:w-5/12 w-full overflow-auto'>
      <div className=' flex items-center justify-center py-5 sm:text-2xl text-xl font-bold'>
        Riwayat Perhitungan
      </div>
      <table className='w-full table-auto border-collapse border border-slate-500'>
        <thead>
          <tr className='text-white bg-cyan-800'>
            <th className='border border-slate-600 p-4'>Angka Pertama</th>
            <th className='border border-slate-600 p-4'>Operator</th>
            <th className='border border-slate-600 p-4'>Angka Kedua</th>
            <th className='border border-slate-600 p-4'>Hasil</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr className='bg-white text-center' key={item.hasil}>
              <td className='border p-2'>{item.angkaPertama}</td>
              <td className='border p-2'>{item.operator}</td>
              <td className='border p-2'>{item.angkaKedua}</td>
              <td className='border p-2'>{item.hasil}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
