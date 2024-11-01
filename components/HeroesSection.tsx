import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroesSection() {
    return (
        <section className="relative bg-[#bfe1fe] min-h-[93vh] mt-16 overflow-hidden">
            <div className="container mx-auto px-4 py-20 lg:py-24 relative z-10">
                <div className="max-w-3xl space-y-8">
                    <h1 className="text-black text-[2.5rem] lg:text-5xl xl:text-6xl font-bold tracking-tight">
                        Where Every Child Learns Their Way
                    </h1>
                    <p className="text-black text-xl">
                        NestLearn brings learning to life with endless stories, interactive lessons, and a world of
                        resources for every young mind. Explore all genres and subjects designed to inspire, so
                        every child feels seen, heard, and excited to learn!
                    </p>
                    <div className="flex flex-col items-start sm:items-center gap-6">
                        <button className="bg-[#FCD980] w-[185px] h-[54px] rounded-[5px] text-black px-4 py-2 mt-4">Get
                            Started
                        </button>
                        <Link
                            href="/"
                            className="flex items-center space-x-2 text-black hover:underline"
                        >
                            <span className="text-xl">Learn More</span>
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
            <Image
                className="absolute bottom-0 right-0  max-w-[275px] h-auto object-contain"
                src="/homepage/kids.png"
                alt="Illustration of kids"
                width={275}
                height={275}
            />
        </section>
    )
}