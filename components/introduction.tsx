"use client"
import  Link  from "next/link";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () =>{
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="profile pic"/>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                    Una idea,  
                        <TypeAnimation
                        sequence={[
                        "se puede crear",
                        3000,
                        "se puede programar",
                        3000,
                        "se puede hacer realidad",
                        3000
                        ]} 
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="block font-bold text-secondary"
                        />
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                    Como analista en programación junior, creo firmemente que la versatilidad y la capacidad de adaptación son fundamentales en la industria
                    de la tecnología, y estoy dispuesta a enfrentar cualquier desafío que se presente en el camino.
                    </p>
                    <div className="flex items-center justify-center gap-3 mb:justify-start mb:gap-10">
                        <Link href="/portfolio" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </Link>
                        <Link href="https://www.linkedin.com/in/nicole-meller-8860808b/" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl text-secondary border-secondary hover:shadow-xl hover:shadow-secondary/50">
                            Contactarme
                        </Link>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default Introduction;