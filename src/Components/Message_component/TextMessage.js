function TextMessage({title, subtitle1, subtitle2, link, link2, color}) {
    const classname2 = `message-item ${color}`;
    return (
        <div className= {classname2}>
                <img className="status" src={link2}/>
                <img src={link}/>
            <div>
                <h3>{title}</h3>
                <h2>{subtitle1}</h2>
                <h1>{subtitle2}</h1>
            </div>
        </div>
    )
}

export default TextMessage;