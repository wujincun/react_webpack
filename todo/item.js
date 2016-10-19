/**
 * Created by wujincun on 2016/10/19.
 */
import React from "react";//会查找node_modules里的文件，不要写相对路径
import ReactDOM from "react-dom";
import {classNames} from "./util";


export default class Item extends react.component{
    render(){
        return <li className={classNames({
            completed:this.props.compile
        })}>
                    <div className="view">
                        <input type="checkbox" className="toggle" checked={this.props.compile} onChange={this.props.toggle}/>
                        <label>{this.props.content}</label>
                        <button className="destroy" onClick={this.props.deleteItem}></button>
                    </div>
                    <input className="edit" defaultValue="多多"/>
                </li>
    }
}