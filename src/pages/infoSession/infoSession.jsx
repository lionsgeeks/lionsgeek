import { useEffect, useState } from "react";
import { useAppContext } from "../../utils/contextProvider";
import axios from "axios";

const InfoSession = () => {
    //* TODO add info session drop down or radio
    const { selectedLanguage, URL } = useAppContext();
    const [sessions, setSessions] = useState();
    const [chosenSession, setChosenSession] = useState('');
    const [sending, setSending] = useState(false);

    axios.get(URL + 'infosessions').then((res) => {
        setSessions(res.data.infos);
    }).catch((err) => {
        console.log('info session form errrr', err)
    })

    const formFields = [
        { name: 'first_name', label: 'First Name', type: 'text' },
        { name: 'last_name', label: 'Last Name', type: 'text' },
        { name: 'birthday', label: 'Birthday', type: 'date' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'city', label: 'City', type: 'text' },
        { name: 'address', label: 'Address', type: 'text' },
        { name: 'phone', label: 'Phone', type: 'tel' }
    ];

    const initialState = formFields.reduce((acc, field) => {
        acc[field.name] = '';
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialState);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);
        const allData = {
            ...formData,
            code: 'this is a test for the code thing',
            info_session_id: chosenSession,
        }


        const newForm = new FormData();
        Object.keys(allData).forEach(key => {
            newForm.append(key, allData[key]);
        });


        axios.post(URL + 'participate', newForm).then((res) => {


            setFormData(initialState);
            setSending(false);
        }).catch((err) => {
            console.log(err)
        })


    };


    const Required = () => {
        return(
            <span className="text-lg font-bold text-red-500">*</span>
        )
    }

    return (
        <div className='px-4 pt-24 lg:px-16 lg:pt-28 overflow-hidden' dir={selectedLanguage == "ar" ? 'rtl' : 'ltr'}>
            <h1 className="font-semibold text-2xl tracking-wide">Sign Up to Start Your Adventure with Us</h1>
            <form onSubmit={handleSubmit} className="mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
                {
                    sessions && <div className="flex flex-col space-y-2">
                        <label htmlFor="sessions" className="text-gray-700">Choose a Session: <Required /></label>
                        <select name="sessions" id="sessions"
                            onChange={(e) => { setChosenSession(e.target.value) }}
                            className="w-full rounded border border-gray-300 px-4 py-2" required>
                            <option value="">Choose a Session</option>
                            {
                                sessions.map((opt, ind) => (
                                    opt.isAvailable && <option key={ind} className="text-lg" value={opt.id}>{opt.formation} {opt.name}</option>
                                ))
                            }
                        </select>
                    </div>
                }
                {formFields.map((field) => (
                    <div key={field.name} className="flex flex-col space-y-2">
                        <label htmlFor={field.name} className="text-gray-700">
                            {field.label}: <Required />
                        </label>
                        <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            placeholder={field.label + "..."}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                ))}

                <div className="mt-4">
                    <button
                        type="submit" disabled={sending}
                        className="w-full py-2 px-4 bg-alpha font-semibold rounded-md hover:bg-beta hover:text-alpha focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default InfoSession;