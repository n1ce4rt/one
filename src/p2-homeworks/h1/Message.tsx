import React from 'react'
import style from './Message.module.css'

type propsTypeMessage = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message(props: propsTypeMessage) {
    return (
        <div className={style.message}>
            <div>
                <img className={style.avatar} src={props.avatar} alt='avatar'></img>
            </div>
            <div className={style.messageWraper}>

                <div className={style.name}>{props.name}</div>
                <div className={style.text}>{props.message}</div>
                <span className={style.time}>{props.time}</span>

            </div>
        </div>
        
    )
}

export default Message
