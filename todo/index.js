
/**
 * Created by wujincun on 2016/10/19.
 */
import React from "react";//会查找node_modules里的文件，不要写相对路径
import ReactDOM from "react-dom";

import app from './app';
import Item from './item';

class Main extends react.component{
    render(){
        var dataArr = this.props.dataArr;
        var content,footer,num = 0;
        dataArr.reduce((n,item) => {
            num = item.compile ? num : num + 1
        },0);
        if(dataArr.length !== 0){
            content = <section className="main">
                <input className="toggle-all" type="checkbox" checked={num !== 0} onChange={this.toggleAll}/>
                <ul className="todo-list">
                    {
                        dataArr.map(function (item,index) {
                            return <Item key={index} {...item}
                                         toggle = {app.toggle.bind(this,item.id)}
                                         deleteItem = {app.deleteItem.bind(this,item.id)}
                            />
                        }).bind(this)
                    }
                </ul>
            </section>;
            footer = <footer className="footer">
                <span className="todo-count">
                    <strong>{num}</strong>
                    <span>条未选中</span>
                </span>
            </footer>
        }
        return(
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input className="new-todo" placeholder="请输入内容" defaultValue="" onKeyDown={this.downHandle}/>
                </header>
                {content}
                {footer}
            </div>
        );
    }
    downHandle(ev){
        if(ev.keyCode === 13){
            app.addItem(ev.target.value);
            ev.target.value = ""
        }
    };
    toggleAll(ev){
        app.toggleAll(ev.target.checked)
    }
}
var section = document.createElement('section');
section.className = "todoApp";
document.body.appendChild(section);
function render(dataArr) {
    ReactDOM.render(<Main dataArr={dataArr}/>,section);
}
render(app.dataArr);
app.render = render()
