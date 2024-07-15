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

          <div className="flex w-full px-48 gap-x-16 gap-y-14 justify-center flex-wrap">
            {Array.from({ length: 7 }).map((_, index) => (
              <img
                className={`h-12 w-[calc(calc(100%-calc(6*4rem))/7)] grayscale saturate-0 brightness-150`}
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

