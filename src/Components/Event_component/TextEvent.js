function TextEvent({ title, subtitle, number1, number2, link, color, line}) {
    const color_number = `${color}`;
    const vl = `${line}`
    return (
        <div className="event-item">
            <div className="event-dort">
                <div className={vl}></div>
                <img src={link} />
            </div>
            <div className="event-subitem">
                <div className="event-number">
                    <span className={color_number}>{number1}</span>
                    <span className={color_number}>{number2}</span>
                </div>
                <div className="event-text">
                    <h3>{title}</h3>
                    <h1>{subtitle}</h1>
                </div>
            </div>
        </div>
    )
}

export default TextEvent;