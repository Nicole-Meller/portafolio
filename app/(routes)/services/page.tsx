import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary"> estudios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">En mi camino hacia convertirme en un desarrollador frontend, he dedicado tiempo y esfuerzo en capacitarme a través de Platzi, una plataforma educativa de alta calidad. Aquí presento algunos de los certificados que he obtenido, los cuales reflejan mi compromiso y habilidades en el desarrollo web.</p>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;