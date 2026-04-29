import Image from "next/image";

export default function ProjectCard({title, description, image, github}){
    return(
        <a href={github} target="_blank" rel="noopener noreferrer">
            <div>
                <Image src={image} alt={title} width={300} height={200}/>

                <h3>{title}</h3>
                <p>{description}</p>

                <span>View on GitHub</span>
            </div>
        </a>
    );
}