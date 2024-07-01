import React from 'react';
import staff from '../../../assets/images/team.jpg'
export const Press = () => {
    return (
<section className='py-[4vh]'>

    {/* <div className="w-full flex justify-center pb-[10vh]">
        <p className='text-5xl font-bold text-center hover:border-b-4 hover:border-b-yellow-400 transition-all h-14 w-fit cursor-default'>Staff <span className='text-yellow-400'>:</span></p>
    </div>
    <div className="allcards">
        <div className="top3 flex flex-row justify-around">
            <div className="card3 shadow-xl rounded-lg w-[25vw] h-[35vh]">
                <div className="flex border-t-[5px] rounded-lg border-t-yellow-400 justify-center relative top-0">
                    <img src={logo} alt="" className='w-20 mt-2' />
                </div>
                <div className="text">
                    <p className='text-center font-second py-2'>Hamid idk</p>
                    <p className='text-sm px-4 py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, omnis libero aperiam numquam nihil ducimus ea, delectus ex possimus natus laboriosam necessitatibus saepe!</p>
                </div>
            </div>

            <div className="card3 shadow-xl rounded-lg w-[25vw] h-[35vh]">
                <div className="flex border-t-[5px] rounded-lg border-t-yellow-400 justify-center relative top-0">
                    <img src={logo} alt="" className='w-20 mt-2' />
                </div>
                <div className="text">
                    <p className='text-center font-second py-2'>Mehdi bouziani</p>
                    <p className='text-sm px-4 py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, omnis libero aperiam numquam nihil ducimus ea, delectus ex possimus natus laboriosam necessitatibus saepe!</p>
                </div>
            </div>

            <div className="card3 shadow-xl rounded-lg w-[25vw] h-[35vh]">
                <div className="flex border-t-[5px] rounded-lg border-t-yellow-400 justify-center relative top-0">
                    <img src={logo} alt="" className='w-20 mt-2' />
                </div>
                <div className="text">
                    <p className='text-center font-second py-2'>Amina khabab</p>
                    <p className='text-sm px-4 py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, omnis libero aperiam numquam nihil ducimus ea, delectus ex possimus natus laboriosam necessitatibus saepe!</p>
                </div>
            </div>            
        </div>

    </div> */}


    <div className="w-full flex justify-center px-16 pb-[10vh]">
        <h1 className="text-6xl font-bold text-center">Press</h1>
    </div>

    {/* <div className="cards flex flex-wrap justify-around ">
    <div className="card h-[50vh] w-[20vw] hover:bg-shadow-2xl hover:shadow transition-shadow duration-500 rounded-lg">
        <div className="text h-full flex flex-col justify-end py-2">
            <p className='text-center font-second'>Amine bakrim</p>
            <p className='text-center text-yellow-400 font-second'>CEO</p>
        </div>
    </div>

    <div className="card h-[50vh] w-[20vw] hover:bg-shadow-2xl hover:shadow transition-shadow duration-500 rounded-lg">
        <div className="text h-full flex flex-col justify-end py-2">
            <p className='text-center font-second'>Amine bakrim</p>
            <p className='text-center text-yellow-400 font-second'>CEO</p>
        </div>
    </div>

    <div className="card h-[50vh] w-[20vw] hover:bg-shadow-2xl hover:shadow transition-shadow duration-500 rounded-lg">
        <div className="text h-full flex flex-col justify-end py-2">
            <p className='text-center font-second'>Amine bakrim</p>
            <p className='text-center text-yellow-400 font-second'>CEO</p>
        </div>
    </div>

    <div className="card h-[50vh] w-[20vw] hover:bg-shadow-2xl hover:shadow transition-shadow duration-500 rounded-lg">
        <div className="text h-full flex flex-col justify-end py-2">
            <p className='text-center font-second'>Amine bakrim</p>
            <p className='text-center text-yellow-400 font-second'>CEO</p>
        </div>
    </div>   
</div> */}

<div className="cards flex justify-around px-16">
    <div className="flex flex-col">
        <div className="card w-[20vw] grayscale-[75%] hover:grayscale-0 h-[50vh] rounded-lg hover:scale-105 transition-all duration-300"></div>
        <div className="text w-[20vw] flex flex-col mt-3">
            <p className='font-bold py-1'>2M</p>
            <p className='font-normal w-fit text-md rounded-xl text-black'>CEO</p>
        </div>
    </div>

    <div className="flex flex-col">
        <div className="card w-[20vw] grayscale-[75%] hover:grayscale-0 h-[50vh] rounded-lg hover:scale-105 transition-all duration-300"></div>
        <div className="text w-[20vw] flex flex-col mt-3">
            <p className='font-bold py-1'>2M</p>
            <p className='font-normal w-fit text-md rounded-xl text-black'>CEO</p>
        </div>
    </div>

    <div className="flex flex-col">
        <div className="card w-[20vw] grayscale-[75%] hover:grayscale-0 h-[50vh] rounded-lg hover:scale-105 transition-all duration-300"></div>
        <div className="text w-[20vw] flex flex-col mt-3">
            <p className='font-bold py-1'>2M</p>
            <p className='font-normal w-fit text-md rounded-xl text-black'>CEO</p>
        </div>
    </div>

    <div className="flex flex-col">
        <div className="card w-[20vw] grayscale-[75%] hover:grayscale-0 h-[50vh] rounded-lg hover:scale-105 transition-all duration-300"></div>
        <div className="text w-[20vw] flex flex-col mt-3">
            <p className='font-bold py-1'>2M</p>
            <p className='font-normal w-fit text-md rounded-xl text-black'>CEO</p>
        </div>
    </div>
</div>
</section>
    );
};

