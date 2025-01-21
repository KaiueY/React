## React.createElement
- type：可以是以下两种之一：字符串（如 "div"、"span"）：表示 HTML 标签。React 组件（函数组件或类组件）。

- props：一个对象，包含传递给元素或组件的属性（如 id、className 等）。如果没有属性，可以传入 null。

- ...children：可变参数，表示该元素的子元素。可以是字符串、数字、其他 React 元素，或者一个数组。

- React.createElement 返回一个 React 元素（虚拟 DOM 节点），它是一个普通的 JavaScript 对象，描述了 UI 的结构。

const element = React.createElement("div", { id: "foo" }, "Hello, world!");
返回的对象大致如下：
{
  type: "div",
  props: {
    id: "foo",
    children: "Hello, world!"
  }
}