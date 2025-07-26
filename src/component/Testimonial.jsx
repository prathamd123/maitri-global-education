import React from 'react'

const Testimonial = () => {
    return (
        <div className=' p-6'>
            <div className='p-8'>
                {/* Heading */}
                <div className="flex flex-col items-end justify-end text-[#CA8304] text-right">
                    <h1 className="text-4xl font-semibold">JOURNEY WITH</h1>
                    <hr className="w-full border-[#CA8304] border-t-1 my-1" />
                    <h1 className="text-4xl font-semibold">MAITRI ...</h1>
                </div>
                {/* card section */}
                <div className="flex w-full">
                    <div
                        className="
      w-full lg:w-[85%]
      
      ml-4 mr-4 lg:ml-auto 
      h-auto
      bg-gradient-to-r from-[rgb(74,70,66)]  [40%] to-[#8B4513] [60%]
      p-6
    "
                    >
                        {/*circle  */}
                        <div className="relative w-32 h-32">
                            {/* Bottom Circle */}
                            <div className="w-full h-full rounded-full bg-[#CA8304]"></div>

                            {/* Image Circle (same size, shifted right and slightly down) */}
                            <div className="absolute top-4 right-[-50%] w-32 h-32 rounded-full overflow-hidden border-2 border-white shadow-md">
                                <img
                                    src="/your-image.jpg"
                                    alt="Image Circle"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* card content */}
                        <div className='bg-[#CA8304]'>
                            <h1 className='text-black text-2xl p-3  '>jade Younger</h1>
                            <h1 className='text-white text-2xl p-3 pt-0 '>Mater in fashion trend,Italy</h1>
                            <p className='text-white text-md p-14 pt-0 '>Moving across the world alone can be really intimidating, but Maitri made it seem like no big deal. Applying through them was the best thing I have done for myself. By the time my desired school finally responded to my application request, I was already admitted and had an apartment arranged through this agency. They have continued to help me during my time in Italy. I would recommend this service to anyone</p>
                        </div>
                        {/* Card image */}
                        <div>
                            <img src="" alt="" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonial