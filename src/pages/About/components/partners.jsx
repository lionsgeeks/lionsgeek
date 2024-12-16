import React from 'react';
import { useTranslation } from 'react-i18next';

export const Partners = () => {
  const { t } = useTranslation()
  return (
    <div className="px-16 py-24">
      <div className="overflow-hidden flex flex-col gap-6 items-center justify-between">
        <div className="w-full text-center pb-10">
          <h1 className="text-xl">{t('main.about.section5.title.name')}</h1>
          <h1 className="xl:text-5xl text-3xl font-bold">{t('main.about.section5.title.description')}</h1>
        </div>

        <div className="flex w-full md:px-48 gap-x-7 md:gap-x-20 gap-14 md:gap-y-14 justify-center flex-wrap">
          {Array.from({ length: 6 }).map((_, index) => (
            <img
              loading="lazy"
              className={`h-12 w-[calc(calc(100%-calc(3*0.60rem))/4)] md:w-[calc(calc(100%-calc(11*3rem))/5)] object-contain`}
              key={index}
              src={require(`../../../assets/images/partners/partner-${index}.png`)}
              alt={`partner-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

