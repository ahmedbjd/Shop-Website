import { useState , useEffect } from "react"
import data from '../data/data.js'
import { IoMenu } from "react-icons/io5";

const Header = ({ len, show, setData }) => {
     const [value , setValue] = useState('')
     const [menu , setMenu] = useState(false)
     const [filteredData, setFilteredData] = useState([]); // New state to store filtered data

useEffect(() => {
  const filtered = data.filter((element) => {
    if (value === '') {
      return element; // Return entire data if no input
    } else {
      return element.name.toLowerCase().includes(value.toLowerCase()); // Filter based on input
    }
  });
  setFilteredData(filtered); // Update filteredData state
}, [value]);
setData(filteredData)

    return (
        <div  className="bg-blue-500 p-5 flex flex-row justify-between fixed w-[100vw] items-center  z-40 ">
            <div className="ml-12 text-2xl  items-center cursor-pointer max-md:hidden " onClick={() => { show(true) }}>Shopping Cart</div>

            <div>
              <IoMenu className="text-white font-extrabold text-6xl text-center hover:text-black cursor-pointer items-center my-auto md:hidden" onClick={()=>{setMenu(!menu)}}/>
            </div>
            <div className={menu ? "block fixed top-[100px] md:hidden" : "hidden"}>
              <div onClick={()=>{ show(true);setMenu(false)  }} className="border fixed rounded-lg p-3 bg bg-blue-500 left-0 top-[150px]" >Shopping Cart</div>
              <div onClick={()=>{ show(false);setMenu(false) }} className="border rounded-lg p-3 bg bg-blue-500 fixed left-0 w-[130px]">Cart</div>
            </div>
            <form className="mx-auto w-fit">
                <label for="default-search" class=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 ps-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Search" onChange={(e) => setValue(e.target.value)} required />
                </div>
            </form>
            <div className="mr-14 text-2xl md:flex items-center cursor-pointer max-md:hidden" onClick={() => { show(false) }}> Cart
                <div className='text-red-500 text-2xl border-1 p-1 px-2 rounded-lg font-bold relative left-1 bottom-0 max-md:hidden'>{len}</div>
            </div>
        </div>
    )
}
export default Header