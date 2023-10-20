
const dashbordPage =()=>{
  return (
<div className="">
  <div className="flex justify-between items-center w-full h-full px-2">
    <h1>Dashboard</h1>
    <div className="w-[40px] h-[40px] bg-slate-300 rounded-full shadow-2xl"></div>
    </div>    
    <div className="mt-2 flex justify-evenly">
      <div className="bg-gray-100 rounded-3xl shadow-lg p-4">
        <div className="flex justify-between items-center gap-24">
          <h2>Totla Profit</h2> <div className="px-2 py-1 bg-green-200 rounded-full ">45%</div>

        </div>
        <h1 className="mt-2">45 5566 55 NOK</h1>
        <div className="mt-2">Avg client = <span className="text-xl">545444</span></div>
      </div>
    </div>
</div>
    )
}

export default dashbordPage