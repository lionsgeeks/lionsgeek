
import './firstSection.sass'
import logo from '../../../assets/images/logolionsgeek.png'
import Button from '../../../components/Button'
export const FirstSectionAbout = () => {
    return (
    <>
        <section className='py-[20vh] flex px-16 justify-between drop-shadow-2xl'>
            <div className="flex flex-col w-[50%]">
                <p className='text-6xl font-bold py-2'>What is LionsGeek<span className='text-yellow-400'>?</span></p>
                <p className='w-[70%] py-4'>Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, accusantium? dolor sit amet consectetur adipisicing elit. Ratione at quidem, amet, inventore reiciendis voluptatibus voluptatum ipsum nulla eveniet iusto eos aut accusantium repellendus error.</p>
                <div className="buttondiv py-4">
                    <Button>See More</Button>
                </div>
            </div>
            <div className="imgdiv">
                <img src={logo} alt="" className='w-[20vw] rounded-full' />
            </div>
        </section>
    </>
    )
}
