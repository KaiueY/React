
/**
 * 下一个工作单元
 * 用于追踪当前正在处理的工作单元
 */
let nextUnitOfWork = null// 下一个工作单元
let currentRoot = null // 当前正在工作的fiber树的
let wipRoot = null // 旧的fiber树
let deletions = null // 需要删除的节点

const render = (element, container) => {
    wipRoot = {
        dom: container,
        props: {
            children: [element]
        },
        alternate: currentRoot  // 修正：使用 currentRoot
    }
    deletions = []
    nextUnitOfWork = wipRoot   // 修正：使用 wipRoot
}
/**
 * 工作循环函数
 * @param {IdleDeadline} deadLine - 浏览器空闲时间的截止时间对象
 * 
 * 该函数实现了时间切片的核心逻辑：
 * 1. 在浏览器空闲时执行任务
 * 2. 如果没有足够的时间，就暂停任务执行
 * 3. 在下一个空闲时间继续执行
 */
function workLoop(deadLine) {
    let shouldYield = false
    // 如果有剩余时间，就继续执行
    // 如果没有剩余时间，就退出
    while (nextUnitOfWork && !shouldYield) {
        nextUnitOfWork = performUnitWork(nextUnitOfWork)
        shouldYield = deadLine.timeRemaining() < 1
    }
    if(!nextUnitOfWork && wipRoot){
        commitRoot()
    }
    // 在下一帧中继续执行
    requestIdleCallback(workLoop)
}

/**
 * 启动工作循环
 * 利用requestIdleCallback API在浏览器空闲时执行任务
 */
requestIdleCallback(workLoop)


const createDom = (fiber) => {
    const dom = fiber.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(fiber.type)
    // 为新创建的元素添加属性 第一次创建时并没有旧的属性
    updateDom(dom, {}, fiber.props) //挂载新属性
    return dom
}

const updateDom = (dom, preProps, nextProps) => {
    // 删除旧的属性
    Object.keys(preProps).filter(name => name !== 'children').forEach(name => {
        dom[name] = ''
    })
    // 添加新的属性
    Object.keys(nextProps).filter(name => name !== 'children').forEach(name => {
        dom[name] = nextProps[name]
    })
}
/**
 * 执行单个工作单元的任务
 * @param {Object} unitOfWork - 当前需要处理的工作单元
 * @returns {Object|null} 返回下一个要处理的工作单元，如果没有则返回null
 * 该函数负责：
 * 1. 处理当前工作单元
 * 2. 创建新的DOM节点
 * 3. 为新创建的元素添加属性
 * 4. 建立元素之间的关系
 * 返回下一个要处理的工作单元
}
 */
function performUnitWork(fiber) {
    if (!fiber.dom) {         // 修正：修复条件判断
        fiber.dom = createDom(fiber)
    }
    const elements = Array.isArray(fiber.props.children)  // 修正：确保 children 是数组
        ? fiber.props.children
        : [fiber.props.children].filter(Boolean)
    
    reconcileChildren(fiber, elements)
    if (fiber.child) {
        return fiber.child
    }
    let nextFiber = fiber

    while (nextFiber) {
        if (nextFiber.sibling) {
            // 如果有兄弟节点，就返回兄弟节点
            return nextFiber.sibling
        }
        // 如果没有兄弟节点，就返回父节点
        nextFiber = nextFiber.parent
    }
    return null
}


const reconcileChildren = (fiber, elements) => {
    let index = 0
    let prevSibling = null
    let oldFiber = fiber.alternate && fiber.alternate.child
    
    while(index < elements.length || oldFiber !== null) {
        const element = elements[index]
        let newFiber = null
        const sameType = oldFiber && element && element.type === oldFiber.type
        
        if(sameType) {
            console.log('复用',element);
            
            newFiber = {
                type: element.type,
                props: element.props,
                parent: fiber,        // 修正：使用 fiber 作为 parent
                dom: oldFiber.dom,
                child: null,
                sibling: null,
                alternate: oldFiber,
                effectTag: 'UPDATE'
            }
        }
        
        if(element && !sameType) {
            console.log('新增',element);
            newFiber = {
                type: element.type,
                props: element.props,
                parent: fiber,        // 修正：使用 fiber 作为 parent
                dom: null,
                child: null,
                sibling: null,
                alternate: null,
                effectTag: 'PLACEMENT'
            }
        }
        // 3.删除
        if(oldFiber && !sameType){

            console.log('删除',element);
            oldFiber.effectTag = 'DELETION'
            deletions.push(oldFiber)
        }
        if(oldFiber){
            oldFiber = oldFiber.sibling
        }
        // 构建 Fiber 树的连接关系
        if(index === 0) {
            fiber.child = newFiber
        } else if(element) {
            prevSibling.sibling = newFiber
        }
        
        prevSibling = newFiber
        index++
    }
}

function commitRoot(){
    deletions.forEach(commitWork)
    commitWork(wipRoot.child)
    currentRoot = wipRoot
    wipRoot = null
}
function commitWork(fiber){
    if(!fiber){
        return
    }
    const domParent = fiber.parent.dom
    if(fiber.effectTag === 'PLACEMENT' && fiber.dom){
        domParent.appendChild(fiber.dom)
    }else if(fiber.effectTag === 'UPDATE' && fiber.dom){
        updateDom(fiber.dom,fiber.alternate.props,fiber.props)
    }else if(fiber.effectTag === 'DELETION'){
        domParent.removeChild(fiber.dom)
    }
    commitWork(fiber.child)
    commitWork(fiber.sibling)

}
render(React.createElement('div', { id: 'a' }, React.createElement('span', null, 'hello raphael')), document.getElementById('root'));

setTimeout(() =>{
    render(React.createElement('div', { id: 'a' }, React.createElement('p', null, 'hello new Raphael')), document.getElementById('root'));
},2000)
