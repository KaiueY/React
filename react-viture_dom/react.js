// jsx/tsx  -- babel/swc  --> React.createElement
// https://react.dev/reference/react/createElement
const React = {
    createElement(type,props,...children){
        return {
            type,
            props:{
                ...props,
                children:children.map(child =>{
                    if(typeof child === "object" && child!==null ){
                        return child
                    }else{
                        return React.createTextElement(child)
                    }
                })
            }
        }
    },
    createTextElement(text){
        return {
            type:"TEXT_ELEMENT",
            props:{
                nodeValue:text,
                children:[]
            }
        }
    }
}
// const text  = document.createTextNode('')
const vDom = React.createElement("div",{id:1},React.createElement('span',null,'Raphael'))
// console.log(vDom,11111);

