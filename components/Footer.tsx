import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
    return (
        <footer id={"contact"} className="relative bg-[#bfe1fe] ">
            <div className="absolute inset-0 bg-[url(/placeholder.svg?height=100&width=100)] opacity-5 bg-repeat"></div>

            <div className="container relative mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="inline-flex items-center space-x-2 hover:opacity-90 transition-opacity"
                        >
                            <div>
                                <h1 className="text-xl font-bold text-primary">NestLearn</h1>
                                <p className="text-sm text-muted-foreground">Learning Made Fun!</p>
                            </div>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-[250px]">
                            Where Every Child Learns Their Way - Join our community of young learners today!
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-primary">Quick Links</h2>
                        <nav className="grid gap-2">
                            {["Home",  "Services","About", "Testimonials","Contact"].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                                >
                                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-primary">Connect With Us</h2>
                        <nav className="grid gap-3">
                            {[
                                { name: "Instagram", icon: Instagram, color: "hover:text-pink-500" },
                                { name: "LinkedIn", icon: Facebook, color: "hover:text-blue-500" },
                                { name: "Twitter", icon: Twitter, color: "hover:text-sky-500" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href="/"
                                    className={`text-sm text-muted-foreground ${item.color} transition-colors duration-200 flex items-center gap-2`}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-primary">Get in Touch</h2>
                        <div className="grid gap-3">
                            <Link
                                href="mailto:nestlearn@gmail.com"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                            >
                                <Mail className="h-4 w-4" />
                                nestlearn@gmail.com
                            </Link>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                +254712345678
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="py-6 border-t border-primary/10">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} NestLearn. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}