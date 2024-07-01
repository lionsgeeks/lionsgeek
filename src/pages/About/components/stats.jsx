import React from 'react';
import logo from '../../../assets/images/logolionsgeek.png'
import stars from '../../../assets/images/fivestars.png'
import staff from '../../../assets/images/team.jpg'

export const Stats = () => {
    return (
        <>
{/* <div class="min-w-screen min-h-screen flex items-center justify-center">
    <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div class="w-full max-w-6xl mx-auto">
            <div class="text-center max-w-xl mx-auto">
                <h1 class="text-6xl md:text-7xl font-bold mb-5 text-black">What people are saying.</h1>
                <h3 class="text-xl mb-5 font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <div class="text-center mb-10">
                    <span class="inline-block w-1 h-1 rounded-full bg-yellow-500 ml-1"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-yellow-500 ml-1"></span>
                    <span class="inline-block w-40 h-1 rounded-full bg-yellow-500"></span>
                    <span class="inline-block w-3 h-1 rounded-full bg-yellow-500 ml-1"></span>
                    <span class="inline-block w-1 h-1 rounded-full bg-yellow-500 ml-1"></span>
                </div>
            </div>
            <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=1" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=2" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Stevie Tifft.</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint quam tempora vel.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
                <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=3" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati ullam excepturi dicta error deleniti sequi.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=4" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Charlie Howse.</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem! Culpa, iusto.<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
                <div class="px-3 md:w-1/3">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=5" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Nevada Herbertson.</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere exercitationem pariatur deserunt tempora molestiae assumenda nesciunt alias eius? Illo, autem!<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div class="w-full flex mb-4 items-center">
                            <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=6" alt=""/>
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class="text-sm leading-tight"><span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto, explicabo, cupiditate quas totam!<span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>         */}
{/* <section className='py-[10vh]'>
    <p className='font-bold text-5xl text-center py-[10vh]'>Stats <span className='text-yellow-400'>:</span></p>
    <div className="all flex flex-row justify-around">
    <div className="bg-black border-2 border-yellow-400 shadow-xl h-fit w-[25vw] rounded-lg">
            <div className="flex justify-center">
                <img src={logo} alt="" className='w-20'/>
            </div>
            <p className='text-yellow-400 text-center font-medium'>Amine Bakrim</p>
            <p className='text-white text-sm px-4 py-4'>Lorem ipsum,  Lorem ipsum dolor sit amet. lorem tdolor sit amet consectetur adipisicing elit. Id, cupiditate nemo vel accusamus fugiat sint expedita porro impedit facere facilis.</p>
            <div className="flex justify-center">
                <img src={stars} alt=""  className='w-32'/>
            </div>
        </div>

    <div className="bg-black shadow-xl h-fit w-[25vw] rounded-lg">
            <div className="flex justify-center">
                <img src={logo} alt="" className='w-20'/>
            </div>
            <p className='text-yellow-400 text-center font-medium'>Amine Bakrim</p>
            <p className='text-white text-sm px-4 py-4'>Lorem ipsum,  Lorem ipsum dolor sit amet. lorem tdolor sit amet consectetur adipisicing elit. Id, cupiditate nemo vel accusamus fugiat sint expedita porro impedit facere facilis.</p>
            <div className="flex justify-center">
                <img src={stars} alt=""  className='w-32'/>
            </div>
        </div>

            <div className="bg-black shadow-xl h-fit w-[25vw] rounded-lg">
            <div className="flex justify-center">
                <img src={logo} alt="" className='w-20'/>
            </div>
            <p className='text-yellow-400 text-center font-medium'>Amine Bakrim</p>
            <p className='text-white text-sm px-4 py-4'>Lorem ipsum,  Lorem ipsum dolor sit amet. lorem tdolor sit amet consectetur adipisicing elit. Id, cupiditate nemo vel accusamus fugiat sint expedita porro impedit facere facilis.</p>
            <div className="flex justify-center">
                <img src={stars} alt=""  className='w-32'/>
            </div>
        </div>
    </div>
</section> */}

{/* <section className='py-[15vh]'>
    <div className="w-full flex justify-center pb-[10vh]">
        <p className='text-5xl font-semibold text-center hover:border-b-4 hover:border-b-yellow-400 transition-all h-14 w-fit cursor-default'>Stats <span className='text-yellow-400'>:</span></p>
    </div>
    <div className="allcards flex flex-row justify-around">
    <div className="card1  shadow-xl rounded-lg w-[25vw] h-fit">
            <div className="flex border-t-[5px] rounded-lg border-t-yellow-400 justify-center relative top-0">
                <img src={logo} alt="" className='w-20' />
            </div>
            <div className="text">
                <p className='text-center font-semibold'>Username</p>
                <p className='text-sm px-4 py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, omnis libero aperiam numquam nihil ducimus ea, delectus ex possimus natus laboriosam necessitatibus saepe!</p>
            </div>
            <div className="flex justify-center">
                <img src={stars} alt=""  className='w-32'/>
            </div>
        </div>

        <div className="card2 shadow-xl rounded-lg w-[25vw] h-fit">
            <div className="flex border-t-[5px] rounded-lg border-t-yellow-400 justify-center relative top-0">
                <img src={logo} alt="" className='w-20' />
            </div>
            <div className="text">
                <p className='text-center font-semibold'>Username</p>
                <p className='text-sm px-4 py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, omnis libero aperiam numquam nihil ducimus ea, delectus ex possimus natus laboriosam necessitatibus saepe!</p>
            </div>
            <div className="flex justify-center">
                <img src={stars} alt=""  className='w-32'/>
            </div>
        </div>

        <div className="card3 shadow-xl rounded-lg w-[25vw] h-fit">
            <div className="flex border-t-[5px] rounded-lg border-t-yellow-400 justify-center relative top-0">
                <img src={logo} alt="" className='w-20' />
            </div>
            <div className="text">
                <p className='text-center font-semibold'>Username</p>
                <p className='text-sm px-4 py-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, omnis libero aperiam numquam nihil ducimus ea, delectus ex possimus natus laboriosam necessitatibus saepe!</p>
            </div>
            <div className="flex justify-center">
                <img src={stars} alt=""  className='w-32'/>
            </div>
        </div>
    </div>
</section> */}

<section className='py-[10vh]'>
    <div className="w-full flex justify-end px-16 pb-[10vh]">
        <div className="w-[50vw] flex justify-start">
        <h1 className="text-6xl font-bold text-center">Status</h1>
        </div>
        <p className='text-xl font-medium w-[50vw] h-14 cursor-default'>We have a lot of Lorem ipsum dolor sit, amet consectetur lorem lorem fill this adipisicing elit. <span className='text-yellow-400'>:</span></p>
    </div>
    <div className="containerr flex px-16">
        <div className="left w-[40vw]">
            <img src={staff} alt="" className='w-[80%] rounded-lg border-4 border-yellow-400'/>
        </div>

        <div className="right flex flex-col justify-center items-center">

        <div className="allcards flex flex-row justify-around w-[50vw]">
        <div className="card3 border-t-2 border-t-yellow-400 w-[17vw] py-[6vh]  hover:scale-105 transition duration-500 cursor-default">
            <div className="text">
                <p className='text-6xl font-bold px-4 text-yellow-400 mr-4'>+<span className='text-black font-bold'>999</span></p>
                <p className='text-sm font-medium text-gray-950 ml-4 w-[80%] h-[15vh] flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <div className="card3 border-t-2 border-t-yellow-400 w-[17vw] py-[6vh]  hover:scale-105 transition duration-500 cursor-default">
            <div className="text">
                <p className='text-6xl font-bold px-4 text-yellow-400 mr-4'>+<span className='text-black font-bold'>999</span></p>
                <p className='text-sm font-medium text-gray-950 ml-4 w-[80%] h-[15vh] flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        </div>

        <div className="bottomcard">
        <div className="card3 border-t-2 border-t-yellow-400 w-[17vw] py-[6vh]  hover:scale-105 transition duration-500 cursor-default">
            <div className="text">
                <p className='text-6xl font-bold px-4 text-yellow-400 mr-4'>+<span className='text-black font-bold'>999</span></p>
                <p className='text-sm font-medium text-gray-950 ml-4 w-[80%] h-[15vh] flex items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        </div>


        </div>
    </div>

</section>
        </>

    );
};

