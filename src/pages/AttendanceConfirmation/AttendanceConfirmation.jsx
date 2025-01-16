import { useAppContext } from "../../utils/contextProvider";
import confetti from "../../assets/images/confetti.gif"
import { TransText } from "../../components";

const AttendanceConfirmation = () => {
    const { darkMode, selectedLanguage } = useAppContext();

    return (
        <div
            dir={selectedLanguage === "ar" ? "rtl" : "ltr"}
            className={`h-screen flex items-center justify-center text-center relative ${darkMode ? 'bg-black' : ''} `}
        >
            <img src={confetti} className="w-full h-full lg:h-fit object-cover absolute" alt="" />
            <div className="z-10">
                <h1 className={`text-4xl font-bold ${darkMode ? 'text-white' : ''}`}>
                    <TransText
                        en="Thank you for Confirming Your Attendance."
                        fr="Merci de confirmer votre présence."
                        ar="شكراً لتأكيد حضورك." />

                </h1>
                <br />
                <p className={`text-lg ${darkMode ? 'text-white' : ''}`}>
                    <TransText
                        en="Can't wait to get to meet you."
                        fr="Nous avons hâte de vous rencontrer."
                        ar="نتطلع للقائكم بفارغ الصبر." />
                </p>
            </div>
        </div>
    )
}

export default AttendanceConfirmation;