import ProjectCard from "@/components/ProjectCard";

export default function Projetos(){
    return(
        <main>
            <h1>My Projects</h1>

            <div>
                <ProjectCard
                title="Recipe Book App (Kotlin + API)"
                description="Application for managing recipes with API integration."
                image=""
                />
            </div>
        </main>
    );
}