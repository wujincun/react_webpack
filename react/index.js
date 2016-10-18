/**
 * Created by wujincun on 2016/10/18.
 */
var React = require("react");//会查找node_modules里的文件，不要写相对路径
var ReactDOM = require("react-dom");

var Hello = react.creatClass({
    render:function () {
        return <h1>hello</h1>
    }
});
var div1 = document.createElement('div');
document.body.appendChild(div1);
// reactDOM.render(<Hello/>,div1);
