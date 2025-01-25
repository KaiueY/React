/* eslint-disable react-refresh/only-export-components */
/**
 * @description 这是一个全局Message组件
 * @author Raphael
 * @date 2025.1.23
 */

import ReactDOM from "react-dom/client"
import { 
    MdErrorOutline, 
    MdCheckCircleOutline, 
    MdInfoOutline, 
    MdWarningAmber 
} from "react-icons/md";
import './index.css'

type MessageType = 'success' | 'error' | 'info' | 'warning';

interface MessageProps {
    type: MessageType;
    content: string;
}

const iconMap = {
    success: <MdCheckCircleOutline className="message-icon success" />,
    error: <MdErrorOutline className="message-icon error" />,
    info: <MdInfoOutline className="message-icon info" />,
    warning: <MdWarningAmber className="message-icon warning" />
}

const Message = ({ type = 'info', content }: MessageProps) => {
    return (
        <div className={`message-content ${type}`}>
            {iconMap[type]}
            <span>{content}</span>
        </div>
    )
}

interface Item {
    messageContainer: HTMLElement,
    root: ReactDOM.Root
}
const queue :Item[]= []
// 挂在到全局上才能全局调用
const show = (type: MessageType, content: string) => {
    const messageContainer = document.createElement('div')
    messageContainer.className = 'message'
    messageContainer.style.top = `${queue.length * 50}px`
    document.body.appendChild(messageContainer)
    const root = ReactDOM.createRoot(messageContainer)
    root.render(<Message type={type} content={content} />)
    queue.push({
        messageContainer,
        root
    })
    
    setTimeout(() => {
        const item = queue.find(item => item.messageContainer === messageContainer)!
        item.messageContainer.classList.add('remove')
        
        // 等待动画结束后移除元素
        setTimeout(() => {
            item.root.unmount()
            document.body.removeChild(item.messageContainer)
            queue.splice(queue.indexOf(item), 1)
        }, 300)
    }, 2000)
}

// 创建消息方法对象
const MessageAPI = {
    success: (content: string) => show('success', content),
    error: (content: string) => show('error', content),
    info: (content: string) => show('info', content),
    warning: (content: string) => show('warning', content)
}

// 将 MessageAPI 挂载到全局
window.Message = MessageAPI

// 修改类型声明
declare global {
    interface Window {
        Message: {
            success: (content: string) => void;
            error: (content: string) => void;
            info: (content: string) => void;
            warning: (content: string) => void;
        }
    }
}
