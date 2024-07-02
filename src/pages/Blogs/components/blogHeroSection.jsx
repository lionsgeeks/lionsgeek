import Button from "../../../components/Button"

export const BlogHeroSection = () => {

    return (
        <>
                <div className="flex   ">
                    <img className="w-1/2 h-[60vh] objectc rounded-xl " src={require("../../../assets/images/visite-ministre-president.jpg")} alt="" />

                    <div className="flex flex-col w-[40%] gap-8 py- px-8">
                        <p className="text-beta/50 ">wedensday 13 february 2021</p>
                        <h1 className="font-bold text-3xl leading-normal">Visites ministre  et salim cheikh pdg de 2M a  LionsGeek pour signe des partenariat avec L Apefe</h1>
                        <p className="text-beta/50 ">wedensday 13 february 2021 lorem 12 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta adipisci nesciunt praesentium quas.</p>
                        <Button children={"Read Article"} />
                    </div>

                </div>

    


        </>
    )
}







































