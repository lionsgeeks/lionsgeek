import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button as LGButton } from '../../../../components/Button';
import { TransText } from '../../../../components/TransText';

export default function ChildrenNavigationButtons({
    currentStep,
    totalSteps,
    onPrevious,
    onNext,
    processing = false,
    selectedLanguage = 'en',
}) {
    const isRTL = selectedLanguage === 'ar';
    const iconSpacing = isRTL ? 'ml-2' : 'mr-2';
    const iconSpacingRight = isRTL ? 'mr-2' : 'ml-2';
    const isLastStep = currentStep >= totalSteps;

    return (
        <div
            className={`mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 dark:border-gray-700 sm:flex-row ${isRTL ? 'sm:flex-row-reverse' : ''}`}
        >
            <LGButton
                type="button"
                onClick={onPrevious}
                disabled={currentStep === 1 || processing}
                className={`flex w-full min-w-[120px] items-center justify-center px-4 py-3 text-sm transition-all duration-200 sm:w-auto sm:text-base ${
                    currentStep === 1 ? 'cursor-not-allowed opacity-50' : ''
                } ${isRTL ? 'flex-row-reverse' : ''}`}
            >
                <ChevronLeft className={`h-4 w-4 sm:h-5 sm:w-5 ${iconSpacing}`} />
                <TransText en="Previous" fr="Précédent" ar="السابق" />
            </LGButton>

            <LGButton
                type="button"
                onClick={onNext}
                disabled={processing}
                className={`flex w-full min-w-[140px] items-center justify-center px-4 py-3 text-sm transition-all duration-200 sm:w-auto sm:text-base ${isRTL ? 'flex-row-reverse' : ''}`}
            >
                {processing ? (
                    <TransText en="Submitting..." fr="Envoi..." ar="جاري الإرسال..." />
                ) : isLastStep ? (
                    <TransText en="Submit" fr="Soumettre" ar="إرسال" />
                ) : (
                    <>
                        <TransText en="Next" fr="Suivant" ar="التالي" />
                        <ChevronRight className={`h-4 w-4 sm:h-5 sm:w-5 ${iconSpacingRight}`} />
                    </>
                )}
            </LGButton>
        </div>
    );
}
