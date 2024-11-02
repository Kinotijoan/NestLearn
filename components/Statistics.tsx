export default function Statistics(){
    return (
        <div className="w-full grid grid-cols-2 h-[200px] align-center md:flex md:flex-row md:justify-between md:items-center p-3 2xl:h-[231px] bg-[#EEF4FA]">
                <div className="flex flex-col">
                    <h2 className="text-4xl font-semibold text-gray-800">2,356+</h2>
                    <p className="text-gray-600 font-normal">Learning Kids</p>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-4xl font-semibold text-gray-800">500+</h2>
                    <p className="text-gray-600 font-normal">Expert Instructors</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-4xl font-semibold text-gray-800">9,180+</h2>
                    <p className="text-gray-600 font-normal">Courses</p>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-4xl font-semibold text-gray-800">2000+</h2>
                    <p className="text-gray-600 font-normal">Videos</p>
                </div>
        </div>
    )
}