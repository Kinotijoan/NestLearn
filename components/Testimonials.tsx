'use client'

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { useState } from "react"

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const testimonials = [
        {
            name: "Sarah, Age 8",
            avatar: "/placeholder.svg?height=40&width=40",
            quote: "I love learning here! The stories are so fun and the games make math super exciting!",
            rating: 5,
        },
        {
            name: "Tom's Mom",
            avatar: "/placeholder.svg?height=40&width=40",
            quote: "My son has improved so much in reading. The interactive lessons keep him engaged and excited to learn!",
            rating: 5,
        },
        {
            name: "Alex, Age 10",
            avatar: "/placeholder.svg?height=40&width=40",
            quote: "The science experiments are awesome! I can't wait to show my friends what I learned today.",
            rating: 5,
        },
    ]

    const nextSlide = () => setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))

    return (
        <section id={"testimonials"} className="w-full xl:pl-48 py-8 ">
            <div className="container px-4 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
                    What Our Happy Learners Say!
                </h2>
                <div className="relative max-w-[1000px] mx-auto">
                    <Card className="p-4 sm:p-6 bg-transparent border-none shadow-lg">
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                <Avatar className="h-16 w-16 sm:h-12 sm:w-12 border-2 ">
                                    <AvatarImage src={testimonials[currentSlide].avatar} alt={testimonials[currentSlide].name} />
                                    <AvatarFallback>
                                        {testimonials[currentSlide].name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="text-center sm:text-left">
                                    <h3 className="font-semibold text-lg">{testimonials[currentSlide].name}</h3>
                                    <div className="flex justify-center sm:justify-start gap-1 mt-1">
                                        {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <blockquote className="text-base sm:text-lg italic text-center sm:text-left">
                                "{testimonials[currentSlide].quote}"
                            </blockquote>
                        </div>
                    </Card>

                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    currentSlide === index ? 'bg-primary' : 'bg-primary/20'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <div className="flex justify-between mt-4 sm:mt-0">
                        <button
                            onClick={prevSlide}
                            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}