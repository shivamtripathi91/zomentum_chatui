import React from 'react'
import emojiIcon from '../utils/emoji.svg'
import micIcon from '../utils/micro.svg'
import sendIcon from '../utils/send.svg'

export default function ChatInputBox({ message, setMessage, pushMessage }) {
    function handleKeyDown(e) {
        if (e.key === 'Enter' && message) {
            pushMessage()
        }
    }
    return (
        <div className="chat-input-box">
            <div className="icon emoji-selector">
                <img src={emojiIcon} alt="" />
            </div>

            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            <div className="icon send" onClick={pushMessage}>
                <img src={message ? sendIcon : micIcon} alt="" />
            </div>
        </div>
    )
}
