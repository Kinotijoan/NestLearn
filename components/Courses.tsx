import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Book, Clock, Users } from "lucide-react"

export default function Courses() {
    return (
        <section id={"Learn"} className="lg:h-[613px] xl:w-[1300px] mx-auto py-12 bg-background">
            <div className="container px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-primary">Fun Learning Adventures!</h2>
                    <select className="px-3 py-2 border rounded-md bg-background">
                        <option value="all">All Topics</option>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="reading">Reading</option>
                    </select>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                        <CardHeader className="p-0">
                            <div className="aspect-video relative bg-gradient-to-br from-blue-100 to-blue-200">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Book className="h-12 w-12 text-blue-500" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4">
                            <Badge className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-100">Reading</Badge>
                            <h3 className="text-xl font-bold mb-2">Magical Story Time</h3>
                            <p className="text-sm text-muted-foreground mb-4">Join us on exciting reading adventures!</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    <span>1,234 friends learning</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>30 mins</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                        <CardHeader className="p-0">
                            <div className="aspect-video relative bg-gradient-to-br from-green-100 to-green-200">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-4xl">🔢</div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4">
                            <Badge className="mb-2 bg-green-100 text-green-700 hover:bg-green-100">Math</Badge>
                            <h3 className="text-xl font-bold mb-2">Number Adventures</h3>
                            <p className="text-sm text-muted-foreground mb-4">Make math fun with games and puzzles!</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    <span>2,345 friends learning</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>20 mins</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                        <CardHeader className="p-0">
                            <div className="aspect-video relative bg-gradient-to-br from-purple-100 to-purple-200">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-4xl">🔬</div>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4">
                            <Badge className="mb-2 bg-purple-100 text-purple-700 hover:bg-purple-100">Science</Badge>
                            <h3 className="text-xl font-bold mb-2">Science Explorer</h3>
                            <p className="text-sm text-muted-foreground mb-4">Discover amazing science experiments!</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    <span>1,567 friends learning</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>25 mins</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}