import Image from 'next/image'
import React from 'react'


const Sale = () => {
  return (
    <main>
    <div className='w-full h-[300px] flex justify-center items-center mt-10'>
      <div  className='w-[80%] h-full'>
{/* topside */}
        <div>
          <span className='border-l-8 border-red-500 text-red-500 mb-5 font-bold'>Today's</span>
        <h2 className='text-4xl font-bold mt-5'>Flash Sales</h2>
        </div>
        {/*Products*/}
        {/*containter*/}
        <div className='flex justify-between mt-7'>
          <div> 
          <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center '  >
               <Image 
                src="/images/game.png.png" 
                alt="game Image" 
                width={150} 
                height={100} 
                
              />
               
          </div>
          {/*title*/}
          <div className='flex flex-col'>
            <span className=' font-bold'>HAVIT HV-G92 Gamepad</span>
            <span className='font-bold'>$120</span>
          </div>
          </div>
         
          
        
          

         <div>
         <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center '>
          <Image 
                src="/images/keyboard.png.png" 
                alt="game Image" 
                width={150} 
                height={100} 
                
              />
          </div>
          {/*title*/}
          <div className='flex flex-col'>
            <span className=' font-bold'>HAVIT HV-G92 Gamepad</span>
            <span className='font-bold'>$120</span>
          </div>
         </div>
          
          <div>
          <div className='w-[200px] h-[170px] bg-gray-200  flex justify-center items-center'>
          <Image 
                src="/images/Lcd.png.png" 
                alt="game Image" 
                width={150} 
                height={100} 
                
              />
          </div>
           {/*title*/}
           <div className='flex flex-col'>
            <span className=' font-bold'>HAVIT HV-G92 Gamepad</span>
            <span className='font-bold'>$120</span>
          </div>
          </div>
          <div>
          <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center '>
          <Image 
                src="/images/Chair.png.png" 
                alt="game Image" 
                width={150} 
                height={100} 
                
              />
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
    <button className='py-2 px-3 bg-red-500 ml-[550px] rounded-md text-white mt-10 mb-10'>View All Products</button>
    </main>
  )
}

export default Sale
