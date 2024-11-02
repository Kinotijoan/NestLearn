import Image from "next/image"

export default function Aboutus() {
    return (
        <div>
        <div className="p-4 flex flex-col lg:flex lg:flex-row lg:items-center  xl:flex xl:flex-row xl:items-center xl:justify-between mx-auto xl:w-[1300px] xl:h-[398px] ">
            <div className={"flex flex-col items-start lg:w-[624px] xl:w-[624px]"}>
                <p className={"font-semibold text-4xl"}>NestLearn – Free E-Learning to Help You Grow!</p>
                <p className={"text-[16px] font-normal"}>
                    NestLearn is designed to be a valuable learning resource, providing children with free access to
                    quality educational materials. We’re here to inspire growth, learning, and curiosity to support
                    young learners on their journey. Our mission is to make learning exciting and accessible for every
                    child.
                </p>
            </div>
            <div className={"md:w-[500px] md:mx-auto lg:w-[500px] xl:w-[575px] xl:pl-16"}>
                <Image src="/homepage/alph.png" width={500} height={500} alt="About Us" />
            </div>
        </div>
        </div>
    );
}