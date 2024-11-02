
interface BenefitsCardProps {
    index: number;
    title: string;
    description: string;
}

export default function BenefitsCard({ index, title, description }: BenefitsCardProps){
    return(
        <div className={"flex flex-col items-start space-y-4 w-[405px] h-[316px] bg-[#F4F6FC] p-6"}>
            <div className={"relative bg-[#2405F2] w-[40px] h-[40px] rounded-[5px]"}>
                <div className={"absolute bottom-0 top-5 bg-[#FCD980] w-[10px] h-[20px] rounded-[2px]"}></div>
                <p className={"text-center align-center text-white mt-2"}>
                    {index}
                </p>
            </div>
            <h2 className={"text-[24px] font-semibold text-black"}>{title}</h2>
            <p className={"text-gray-500 font-normal text-[16px]"}>{description}</p>
        </div>
    )
}
