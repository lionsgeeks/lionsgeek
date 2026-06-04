import { Check } from 'lucide-react';
import { TransText } from '../../../../components/TransText';

export default function ChildrenProgressIndicator({ steps, currentStep, darkMode }) {
    if (!steps || steps.length <= 1) {
        return null;
    }

    const totalSteps = steps.length;
    const progressPercent = Math.round((currentStep / totalSteps) * 100);

    return (
        <div className="mb-6 sm:mb-8">
            <div className="md:hidden">
                <div className="mb-2 flex items-center justify-between">
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <TransText en="Step" fr="Étape" ar="خطوة" /> {currentStep}{' '}
                        <TransText en="of" fr="de" ar="من" /> {totalSteps}
                    </span>
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {progressPercent}%
                    </span>
                </div>
                <div className={`h-2 w-full rounded-full ${darkMode ? 'bg-beta' : 'bg-gray-200'}`}>
                    <div
                        className="h-2 rounded-full bg-alpha transition-all duration-500 ease-out"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            <div className="hidden items-center justify-between md:flex">
                {steps.map((step, index) => (
                    <div key={step.group} className="flex flex-1 items-center">
                        <div className="flex flex-col items-center">
                            <div
                                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all duration-200 ${
                                    currentStep > step.number
                                        ? 'bg-alpha text-beta'
                                        : currentStep === step.number
                                          ? 'bg-alpha text-beta'
                                          : darkMode
                                            ? 'bg-beta text-white'
                                            : 'bg-gray-200 text-gray-500'
                                }`}
                            >
                                {currentStep > step.number ? <Check className="h-5 w-5" /> : step.number}
                            </div>
                            <span
                                className={`mt-2 max-w-[7rem] text-center text-xs font-medium ${
                                    currentStep >= step.number
                                        ? darkMode
                                            ? 'text-white'
                                            : 'text-gray-900'
                                        : darkMode
                                          ? 'text-gray-400'
                                          : 'text-gray-500'
                                }`}
                            >
                                {step.title}
                            </span>
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={`mx-2 h-0.5 flex-1 sm:mx-4 ${
                                    currentStep > step.number ? 'bg-alpha' : darkMode ? 'bg-beta' : 'bg-gray-200'
                                }`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
