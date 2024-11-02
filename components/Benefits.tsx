import BenefitsCard from "./BenefitsCard";

export default function Benefits(){
    return(
            <div id={"services"} className={"xl:w-[1300px] xl:h-[850px] mx-auto py-14 space-y-8 "}>
                <div className={"text-center"}>
                    <h1 className={"text-4xl font-semibold text-black"}>Why Choose Us</h1>
                    <p className={"text-2xl text-gray-500"}>We are the best in the market</p>
                </div>
                <div className={""}>
                    <div className={"flex flex-wrap justify-center m-2 gap-8 xl:grid xl:grid-cols-3  "}>
                        <BenefitsCard index={1} title={"Free Courses"} description={"We offer free courses to make learning accessible to all kids, helping every young learner reach their potential."}/>
                        <BenefitsCard index={2} title={"Unlimited Access"} description={"Once enrolled, you have access to all your courses forever! Learn at your own pace, no rush."}/>
                        <BenefitsCard index={3} title={"Guided Learning Paths"} description={"From beginners to advanced levels, our courses guide kids step-by-step so everyone feels supported and excited to learn."}/>
                        <BenefitsCard index={4} title={"Experienced Instructors"} description={"Our instructors are experts with real-world experience, ready to share their knowledge and make learning fun!"}/>
                        <BenefitsCard index={5} title={"Parent Progress Dashboard"} description={"Parents can monitor their child’s learning journey with progress dashboards, so you’re always up-to-date on their achievements and growth."}/>
                        <BenefitsCard index={6} title={"Fun Challenges and Rewards"} description={"Kids can participate in exciting challenges and earn rewards along the way, making learning even more fun and motivating!"}/>
                    </div>
                </div>
            </div>
    )
}