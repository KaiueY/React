import './index.css'
import React from 'react';
// 1 定义类型
interface Props {
    title?: string,
    children? : React.ReactNode

}

// 2  React.FC 函数式组件 function component
// export default function Card(props : Props) {

//     // console.log(props.title);
//     return <div className="card">
//         <header>
//             <div>{props.title}</div>
//             <div>副标题</div>
//         </header>

//         <main>
//             内容
//         </main>
//         <footer>
//             <button>确认</button>
//             <button>取消</button>
//         </footer>

//     </div>
// }

// 3 默认解构赋值 const Card: React.FC<Props> = ({ title = "这是一个默认标题"}) => {
// 4 声明一个默认对象
// props.children
const defaultProps: Partial<Props> = {
    title: "这是一个默认标题",
}

const Card: React.FC<Props> = (props) => {

    const { title = defaultProps.title } = props;
    return <div className="card">
        <header>
            <div>{title}</div>
            <div>副标题</div>
        </header>

        <main>
            {props.children}
        </main>
        <footer>
            <button>确认</button>
            <button>取消</button>
        </footer>
    </div>
}

export default Card