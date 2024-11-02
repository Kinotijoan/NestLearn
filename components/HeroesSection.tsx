import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroesSection() {
    return (
        <section className="relative bg-[#bfe1fe] min-h-[579px] mt-16 overflow-hidden">
            <div className=" w-[100vw] md:flex md:flex-col md:items-start xl:flex xl:flex-row xl:justify-between 2xl:flex 2xl:flex-row 2xl:justify-around mx-auto px-4 py-20 z-10">
                <div className="xl:w-[60%] max-w-3xl space-y-8  2xl:flex-1">
                    <h1 className="text-black text-[2.5rem] md:text-[2.6rem] lg:text-[2.8rem] xl:text-6xl 2xl:text-7xl font-semibold tracking-tight">
                        Where Every Child Learns Their Way
                    </h1>
                    <p className="text-black text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-normal">
                        NestLearn brings learning to life with endless stories, interactive lessons, and a world of
                        resources for every young mind. Explore all genres and subjects designed to inspire, so
                        every child feels seen, heard, and excited to learn!
                    </p>
                    <div className="flex flex-col items-start gap-6 md:flex md:flex-row md:items-baseline">
                        <button className="bg-[#FCD980] w-[185px] h-[54px] rounded-[5px] hover:outline-none border-2 border-transparent hover:border-[#FCD980] hover:bg-transparent  text-black px-4 py-2 mt-4">Get
                            Started
                        </button>
                        <Link
                            href="/"
                            className="flex items-center font-medium space-x-2 text-black hover:underline hover:underline-offset-8"
                        >
                            <span className="text-xl">Learn More</span>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
                <div className={"w-[40%] hidden md:hidden lg:hidden xl:block 2xl:block xl:w-[577px] xl:h-[370.97px] 2xl:w-[700px] 2xl:flex-2 xl:mb-6"}>
                    <Image
                        className=""
                        src="/homepage/books.png"
                        alt="Illustration of kids"
                        width={500}
                        height={700}
                    />
                </div>
                <div className="hidden md:block md:w-full xl:hidden 2xl:hidden">
                    <Image
                        className="absolute bottom-0 right-0 max-h-[275px] object-contain"
                        src="/homepage/kids.png"
                        alt="Illustration of kids"
                        width={400}
                        height={275}
                    />
                </div>
            </div>
        </section>
    )
}
