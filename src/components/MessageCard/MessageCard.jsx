import React from 'react'

const MessageCard = ({ messageContent, isReqUser }) => {
    return (
        <div className={`py-2 px-2 rounded-md max-w-[50%] ${isReqUser ? 'self-start bg-white' : 'self-end bg-[#d9fdd3]'} `}>
            <p>
                {messageContent}
            </p>
        </div>
    )
}

export default MessageCard