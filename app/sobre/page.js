import Image from "next/image";

export default function Sobre(){
    return(
        <main>
            <section>
                <Image src="" alt="Photo" classname="photo" />
                <div>
                    <h1>Maria Eduarda Zabel</h1>
                    <p>IT Apprentice at WEG (CentroWEG)</p>
                    <span>FullStack Developer</span>
                </div>
            </section>
            <section>
                <h2>About Me</h2>
                <p>
                    I am working through CentroWEG in the Information Technology
                    course, which I am pretty close to end. I have developed 
                    skills in backend and frontend development through real-world
                    projects and problem solving.
                </p>
            </section>
            <section>
                <h2>Education</h2>
                <ul>
                    <li>IT Course in CentroWEG - In Progress</li>
                    <li>High School - Completed</li>
                </ul>
            </section>
            <section>
                <h2>Technologies</h2>
                <div>
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>JPA</span>
                    <span>JDBC</span>
                    <span>MySQL</span>
                    <span>JavaScript</span>
                    <span>TypeScript</span>
                    <span>React</span>
                    <span>Next.js</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Kotlin</span>
                </div>
            </section>
            <section>
                <h2>Additional Knowledge</h2>
                <ul>
                    <li>Git Version Control</li>
                    <li>Agile Methodologies</li>
                    <li>SOLID Principles</li>
                    <li>Networking</li>
                </ul>
            </section>
            <section>
                <h2>Future Goals</h2>
                <p>
                    I plan to pursue  Bachelor`s degree in Software Engineering
                    to deepen my knowledge and grow as a professional in the 
                    technology field.
                </p>
            </section>
        </main>
    );
}