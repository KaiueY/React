/* eslint-disable react-refresh/only-export-components */
/**
 * @description 这是一个全局Message组件
 * @author Raphael
 * @date 2025.1.23
 */

import ReactDOM from "react-dom/client"
import './index.css'
const Message = () =>{
    return <div>hello Raphael</div>
}
interface Item {
    messageContainer: HTMLElement,
    root: ReactDOM.Root
}
const queue :Item[]= []
// 挂在到全局上才能全局调用
window.onShow = () =>{
    const messageContainer = document.createElement('div')
    messageContainer.className = 'message'
    messageContainer.style.top = `${queue.length * 50}px`
    document.body.appendChild(messageContainer)
    const root = ReactDOM.createRoot(messageContainer)
    root.render(<Message/>)
    queue.push({
        messageContainer,
        root
    })
    setTimeout(() => {
        const item = queue.find(item => item.messageContainer === messageContainer)!
        item.root.unmount()
        document.body.removeChild(item.messageContainer)
        queue.splice(queue.indexOf(item),1)
    }, 2000)
    
}


// ts声明扩充 断言？
declare global {
    interface Window {
        onShow: () => void
    }
}