
/**
 * Created by wujincun on 2016/10/19.
 */
import {store} from './util';//没写util文件配置，主要是localstorage存值
let app = {
    dataArr:[{}],
    info:function () {
        store("todo",app.dataArr);
    },
    addItem:function (value) {
        app.dataArr.push({
            id:Data.now(),
            content:value,
            compile:false
        });
        app.info();
        app.render(app.dataArr)
    },
    toggleAll:function (bl) {
        app.dataArr.forEach((item)=>{
            item.compile = bl;
        });
        app.info();
        app.render(app.dataArr)
    },
    toggle:function (id) {
        app.dataArr.forEach((item)=>{
            if(item.id === id){
                item.conpile = !item.compile;
            }
        });
        app.info();
        app.render(app.dataArr)
    },
    deleteItem:function (id) {
        var newArr = app.dataArr.filter((item)=>{
            return item.id != id
        });
        app.dataArr = newArr;
        app.info();
        app.render(app.dataArr)
    }
};
app.dataArr = store('todo') || [];
store("todo",app.dataArr);
export default app;
