import React from 'react';
import logo from '../../../assets/images/logolionsgeek.png'
import formation from '../../../assets/images/formation_illustration.png'
import myImage from '../../../assets/images/visite-ministre-president.jpg'; // Adjust the path to your image

export default () => {
    return (
        <div className="flex flex-col items-center justify-between py-14 bg-beta border-t-4 border-t-alpha border-b-4 border-b-alpha">
            {/* <div className="w-full text-center pb-10">
                <h1 className="text-xl text-white">Formations</h1>
                <h1 className="text-5xl font-bold text-white">Level up your digital skills.</h1>
            </div> */}

            {/* <div className="flex flex-col w-full gap-3">
              <div className="rounded-lg flex bg-alpha">
                <div className="flex-1 py-16 pb-32 pl-6 relative overflow-hidden">
                  <h1 className="text-4xl text-balance">Full Stack Web Development</h1>
    
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute h-[150%] fill-beta/5 -top-1/2 left-0 rotate-45"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
    
                <div className="w-[62.5%] bg-image bg-cover bg-center rounded-r-lg"></div>
              </div>
    
              <div className="rounded-lg flex bg-alpha flex-row-reverse">
                <div className="flex-1 py-16 pb-32 pl-6 relative overflow-hidden">
                  <h1 className="text-4xl text-balance">Content Creation & Digital Marketing</h1>
    
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="absolute h-[150%] stroke-beta/5 -top-1/2 right-0 -rotate-45"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    />
                  </svg>
                </div>
    
                <div className="w-[62.5%] bg-image bg-cover bg-center rounded-l-lg"></div>
              </div>
            </div> */}

            {/* <div className="coding flex w-full">
                <div className="illustration bg-red-500 flex relative right-[65px] w-[30vw]">
                    <img src={formation} alt="" className='w-[30vw] mr-16' />
                </div>

                <div className="carousel_text w-fit flex h-[70vh] relative right-24 top-8 justify-around items-center flex-col">
                    <div className="text flex bg-alpha w-[40vw] h-[8vh] rounded-lg">
                        <h1 className='text-4xl py-2 text-center w-full font-medium'><span className='font-bold px-4'>MANY</span>CATEGORIES</h1>
                    </div>
                    <div className="carousel bg-alpha rounded-lg w-[40vw] h-[35vh] flex flex-col items-center">
                    <h1 className='text-8xl font-bold text-center'>Coding</h1>
                    <h1 className='text-8xl font-bold text-center'>Shool</h1>
                    </div>
                </div>

                <div className="bigtext w-[60vw] h-[80vh] flex justify-center items-center">
                    <h1 className='text-alpha text-[80px] font-extrabold w-[35vw]'>Tons of talents to choose from</h1>
                </div>
            </div> */}
            <div className=" rounded-lg w-[50vw] text-center">
              <p className='text-6xl font-bold text-alpha pb-10'>Training !</p>
            </div>
            {/* Coding */}
            <div className="bg-[#f9f9f9] relative flex flex-row rounded-lg w-[80vw] h-[40vh] mt-8">
              <div className="relative w-[50%] h-full">
                <div className="relative w-full h-full codingformationpic">
                  <img src={myImage} alt="Curved Effect" className="w-full h-full object-cover" />
                  <svg locale="fr" className="absolute right-0 top-0 h-full w-auto" viewBox="0 0 60 1000" fill="#f9f9f9" preserveAspectRatio="none">
                    <g clipPath="url(#clip0)">
                      <path d="M85.5 1079.95C43.7072 966.929 19.9593 852.301 14.5 737.24C8 600.336 29.872 512.409 41.5 424.739C59.279 290.7 60.81 99.3082 -16.5 -142.448H85.5L85.5 1079.95Z" fill="#f9f9f9"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="1000" height="80" fill="#f9f9f9" transform="translate(0 1000) rotate(-90)"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-[50%] h-[70%] flex flex-col justify-around px-6">
                <p className="text-4xl font-semibold">Coding</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, exercitationem veritatis? Ipsam alias, quidem earum officia facere nobis enim repudiandae dolores debitis dolore ad ipsum distinctio iste architecto porro!</p>
              </div>
            </div>
            {/* Media */}
            <div className="bg-[#f9f9f9] relative flex flex-row-reverse rounded-lg w-[80vw] h-[40vh] mt-8">
            <div className="relative w-[50%] h-full">
            <div className="relative w-[100%] h-[300px] codingformationpic">
              <img src={myImage} alt="Curved Effect" className="w-full h-full object-cover" />
              <svg locale="fr" className="absolute left-0 top-0 h-full flipped-svg" viewBox="0 0 60 1000" fill="#f9f9f9" preserveAspectRatio="none">
                <g clipPath="url(#clip0)">
                  <path d="M85.5 1079.95C43.7072 966.929 19.9593 852.301 14.5 737.24C8 600.336 29.872 512.409 41.5 424.739C59.279 290.7 60.81 99.3082 -16.5 -142.448H85.5L85.5 1079.95Z" fill="#f9f9f9"></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="1000" height="60" fill="#f9f9f9" transform="translate(0 1000) rotate(-90)"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            </div>             
          
          
          <div className="w-[50%] h-[70%] flex flex-col justify-around px-6">
                <p className='text-4xl font-semibold'>Media</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, exercitationem veritatis? Ipsam alias, quidem earum officia facere nobis enim repudiandae dolores debitis dolore ad ipsum distinctio iste architecto porro!</p>
          </div>
            </div>

        </div>
    );
};
