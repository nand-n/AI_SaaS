
const dashbordPage =()=>{
  return (
<div className="">
  <div className="flex justify-between items-center w-full h-full px-2">
    <h1 className="ml-12">Dashboard</h1>
    <div className="w-[40px] h-[40px] bg-slate-300 rounded-full shadow-2xl"></div>
    </div>  
    <div className="grid grid-cols-12 items-center pr-4">
      <div className="col-span-8 col-start-1 flex justify-normal gap-12 ml-12 items-center">
  <div className="mt-2 flex justify-evenly">
      <div className="bg-gray-100 rounded-3xl shadow-lg p-4">
        <div className="flex justify-between items-center gap-24">
          <h2>Totla Profit</h2> <div className="px-2 py-1 bg-green-200 rounded-full ">45%</div>

        </div>
        <h1 className="mt-2">45 5566 55 NOK</h1>
        <div className="mt-2">Avg client = <span className="text-xl">545444</span></div>
      </div>
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
      
      <div className="col-span-4 col-start-9">
        <div className="w-full h-14 rounded-xl grid grid-cols-4 items-center  bg-gray-100">
          <div className="col-span  text-center">Weekly</div>
          <div className="col-span text-white text-center bg-black">Monthly</div>
          <div className="col-span text-center">Yearly</div>
          <div className="col-span  text-center">Custom date</div>
          <div className="col-span  text-center">Clear Date</div>


        </div>
      </div>
   
      </div>  
    
</div>
    )
}

export default dashbordPage