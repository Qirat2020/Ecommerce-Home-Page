import React from 'react'
import Image from 'next/image'

const products = () => {
  return (
    
        <div className='w-full h-[300px] flex justify-center items-center mt-10 mb-20'>
          <div  className='w-[80%] h-full'>
    {/* topside */}
            <div>
              <span className='border-l-8 border-red-500 text-red-500 mb-5 font-bold'>This Month</span>
          <div className='flex justify-between'>

           <h2 className='text-4xl font-bold mt-5'>Best Selling Products</h2>
           <button className='py-2 px-5 bg-red-500  rounded-md text-white'>View All </button>

            </div>
            {/*Products*/}
            {/*containter*/}
            <div className='flex justify-between mt-7'>
              <div> 
              <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center '  >
              <Image src="/images/jacket.png.png" alt="Jacket" width={150} height={100} />


                   
              </div>
              {/*title*/}
              <div className='flex flex-col'>
                <span className=' font-bold'>HAVIT HV-G92 Gamepad</span>
                <span className='font-bold'>$120</span>
              </div>
              </div>
             
              
            
              
    
             <div>
             <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center '>
             <Image src="/images/Table.png.png" alt="Jacket" width={150} height={100} />
              </div>
              {/*title*/}
              <div className='flex flex-col'>
                <span className=' font-bold'>HAVIT HV-G92 Gamepad</span>
                <span className='font-bold'>$120</span>
              </div>
             </div>
              
              <div>
              <div className='w-[200px] h-[170px] bg-gray-200  flex justify-center items-center'>
              <Image src="/images/speaker.png.png" alt="Jacket" width={150} height={100} />
              </div>
               {/*title*/}
               <div className='flex flex-col'>
                <span className=' font-bold'>HAVIT HV-G92 Gamepad</span>
                <span className='font-bold'>$120</span>
              </div>
              </div>
              <div>
              <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center '>
              <Image src="/images/Bag.png.png" alt="Jacket" width={150} height={100} />
              </div>
               {/*title*/}
               <div className='flex flex-col'>
                <span className=' font-bold'>HAVIT HV-G92 Gamepad</span>
                <span className='font-bold'>$120</span>
              </div>
    
              </div>
              </div>
           
    
    
    
          </div>
    
        </div>
        </div>

       
  )
}

export default products
