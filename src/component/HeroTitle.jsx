import React from 'react'
import '../../src/index.css';
function HeroTitle() {
    return (
        <>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-3xl flex flex-col items-center justify-center z-10 px-2">
                <div className='flex flex-col items-center gap-3'>
                    <h1 className="bg-gradient-to-r from-gold1 via-gold2 to-gold3 bg-clip-text text-transparent font-cinzel text-2xl sm:text-3xl md:text-4xl leading-tight font-normal tracking-normal text-center">
                        Turn Your Study Abroad Dreams into REALITY
                    </h1>
                    <h2 className="w-full max-w-xl text-base sm:text-lg md:text-2xl leading-tight font-normal text-center font-antic bg-gradient-to-r from-gold4 via-gold5 to-gold6 bg-clip-text text-transparent">
                        Guiding You to a Global Future since 2009
                    </h2>   
                </div>
            </div>
        </>
    )
}

export default HeroTitle
