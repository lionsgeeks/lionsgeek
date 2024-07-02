import Button from "../../../components/Button"

export const BlogContentsSection = () => {

    return (
        <>

            <h1 className="text-center py-16 font-extrabold text-4xl">Our Blog</h1>

    
            <div className="py-2 flex flex-wrap gap-3">

                {["Salim Cheikh Visite LionsGeek and make lion shg   new talent", "Co-working", "Talks"].map((title, index) => (
                    <div
                        key={index}
                        className={`w-[32%]  border rounded-lg h-80 border-beta relative overflow-hidden group cursor-pointer flex `}
                    >

                        <img className="w-full absolute h-full object-cover -z-2" src={require("../../../assets/images/visite-ministre-president.jpg")} alt="" />
                        <div className="w-full h-1/2 bottom-0 bg-gradient-to-t from-black to-black/10 absolute "></div>
                        <div className="flex flex-col justify-between  w-full  px-8 py-5 static z-20">
                            <p className="text-white/70 text-end ">27 July 2024</p>
                            <h1 className={`font-medium text-light_gray text-lg  `} title={title}>{title}</h1>

                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}