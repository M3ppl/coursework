import TextMessage from "./TextMessage";
import Message from "./message.json"

function MessageComponent() {
    return (
        <div className="message-wrapper">
            <div className="message-wrapper-item">
                <div><h1>Messages</h1><span>Current Conversations</span></div>
            </div>

            <div className="scroll">

                {
                    Message.map(message => {
                        return (
                            <TextMessage link={message.link} link2={message.link2} title={message.title} subtitle1={message.subtitle1} subtitle2={message.subtitle2} color={message.color} key={message.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MessageComponent;