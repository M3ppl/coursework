import TextEvent from "./TextEvent";

function EventComponent() {
    return (
        <div className="event-wrapper">
            <TextEvent number1="11" number2="14" title="History of the Earth Assignment" subtitle="09h30’" link="./img/Ellipse-1.png" color="blue_number" line="vl" />
            <TextEvent number1="11" number2="27" title="Introduction to Geography Test " subtitle="09h30’" link="./img/Ellipse-2.png" color="orange_number" />
            <div className="addition">
                <h3>Math Formative Assessment Test </h3>
                <h1>14h30’</h1>
            </div>
            <TextEvent number1="11" number2="29" title="History of the Earth Final Test" subtitle="15h45’’" link="./img/Ellipse-1.png" color="turquoise_number" />
        </div>
    )
}

export default EventComponent;
