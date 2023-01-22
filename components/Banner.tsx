function Banner(){
        return ( 
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-4 py-5 mb-10">
            <div>
                <h1 className="text-6xl">Diario Moctezuma</h1>
                <h2 className="mt-5 md:mt-0 text-2xl">
                    La{" "}
                    <span className="underline decoration-4 decoration-[#F7AB0A]">
                        verdad 
                    </span>{" "}
                    en tus manos
                </h2>
            </div>

            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                Politica | Sociedad | Economia | México
            </p>
        </div>
        );
}

export default Banner;