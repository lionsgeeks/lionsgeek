import React from 'react';
import logo from '../../../assets/images/logolionsgeek.png'
import formation from '../../../assets/images/formation_illustration.png'
import myImage from '../../../assets/images/visite-ministre-president.jpg'; // Adjust the path to your image
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../../utils/contextProvider';

export default () => {
  const { t } = useTranslation();
  const { selectedLanguage } = useAppContext();

    return (
        <div className={`flex flex-col items-center justify-between py-14 bg-beta border-t-4 border-t-alpha border-b-4 border-b-alpha`}>
            <div className=" rounded-lg xl:w-[50vw] w-[100vw] px-1 text-center">
            <h1 className="xl:text-7xl text-4xl text-alpha font-bold py-4">{t('main.about.section2.title.first')}</h1>
            <p className="xl:text-2xl text-sm text-alpha font-normal ">
              {t('main.about.section2.title.second')}
            </p>            
            </div>
            {/* Coding */}
            <div className="bg-[#f9f9f9] relative xl:flex hidden flex-row rounded-lg w-[80vw] h-[40vh] mt-8">
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
                <p className={`text-4xl font-semibold  ${selectedLanguage === "ar" ? "md:text-end" : ""}`}>{t('main.about.section2.coding.title')}</p>
                <p className={` ${selectedLanguage === "ar" ? "md:text-end" : ""}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, exercitationem veritatis? Ipsam alias, quidem earum officia facere nobis enim repudiandae dolores debitis dolore ad ipsum distinctio iste architecto porro!</p>
              </div>
            </div>
            {/* Media */}
            <div className="bg-[#f9f9f9] relative xl:flex hidden flex-row-reverse rounded-lg w-[80vw] h-[40vh] mt-8">
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
                <p className={`text-4xl font-semibold  ${selectedLanguage === "ar" ? "md:text-end" : ""}`}>{t('main.about.section2.media.title')}</p>
                <p className={` ${selectedLanguage === "ar" ? "md:text-end" : ""}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, exercitationem veritatis? Ipsam alias, quidem earum officia facere nobis enim repudiandae dolores debitis dolore ad ipsum distinctio iste architecto porro!</p>
          </div>
            </div>

            <div className="xl:hidden block bg-gray-100 w-[80vw] h-[80vh] rounded-lg mt-10">
              <div className="image w-full h-[50%] flex justify-center">
                <img src={myImage} alt="" className='rounded-b-lg' />
              </div>
              <div className="text h-[50%] border-b-4 rounded-lg border-b-alpha flex flex-col justify-around">
                <h1 className='font-bold text-2xl text-center'>{t('main.about.section2.coding.title')}</h1>
                <p className='w-[80vw] px-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsa. Sint obcaecati repellendus dolor atque molestiae quaerat quibusdam ratione, impedit sequi, totam magni? Accusamus!</p>
              </div>
            </div>

            <div className="xl:hidden block bg-gray-100 w-[80vw] h-[80vh] rounded-lg mt-10">
              <div className="image w-full h-[50%] flex justify-center">
                <img src={myImage} alt="" className='rounded-b-lg' />
              </div>
              <div className="text h-[50%] border-b-4 rounded-lg border-b-alpha flex flex-col justify-around">
                <h1 className='font-bold text-2xl text-center'>{t('main.about.section2.media.title')}</h1>
                <p className='w-[80vw] px-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsa. Sint obcaecati repellendus dolor atque molestiae quaerat quibusdam ratione, impedit sequi, totam magni? Accusamus!</p>
              </div>
            </div>

        </div>
    );
};
