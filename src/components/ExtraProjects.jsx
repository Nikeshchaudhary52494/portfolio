import { useNavigate } from "react-router"
import { ExtraProjectsData } from "../utils/data"

const ExtraProjects = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold text-white">More Projects</h1>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  flex-col ">
                {
                    ExtraProjectsData.map((project) => (
                        <div
                            onClick={() => navigate(project.href)}
                            className={`p-5 rounded-lg bg-opacity-10 ${project.color}`}
                        >
                            <h2 className="font-bold  text-xl text-[#cbcbcf]">{project.title}</h2>
                            <p className="text-[#737375]">{project.techStack}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ExtraProjects
