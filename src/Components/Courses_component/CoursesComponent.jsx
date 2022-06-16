import TextCourses from "./TextCourses";
import Courses from "./courses.json"

function CoursesComponent() {
    return (
        <div className="courses-wrapper">
            <div className="courses-wrapper-item">
                <div><h1>Courses</h1><span>Your Current Courses And Process</span></div>
            </div>

            <div className="scroll">
                {
                    Courses.map(courses => {
                        return (
                            <TextCourses percent={courses.percent} link={courses.link} title={courses.title} subtitle={courses.subtitle} key={courses.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CoursesComponent;
