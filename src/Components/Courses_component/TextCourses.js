function TextCourses({title, subtitle, link, percent}) {
    return (
        <div className="courses-item">
            <div className="percent">
                <span>{percent}</span>
                <img src={link}/>
            </div>
            <div>
                <h3>{title}</h3>
                <h1>{subtitle}</h1>
            </div>            
        </div>
    )
}

export default TextCourses;