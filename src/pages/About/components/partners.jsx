import React from 'react';

export const Partners = () => {
    return (
        <section className=' py-[10vh]'>
            <div className="flex flex-col">
                <div className="w-full flex flex-col items-center px-16 pb-[10vh]">
                <h1 className="text-6xl font-bold text-center">Our Partners</h1>
                <div className="py-[20vh] flex w-full gap-16">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <img
                        className="w-[calc(100%/7)] h-16"
                        key={index}
                        src={require(`../../../assets/images/partners/partner-${index}.png`)}
                        alt={`partner-${index}`}/>
                        ))}
                    </div>
                </div>                
            </div>

        </section>
    );
};

