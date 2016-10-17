/**
 * Created by wujincun on 2016/10/14.
 */
var htmlWebpackPlugin=require("html-webpack-plugin");
module.exports = {
   /* entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080/',
            './app/index.js'
        ]
    },*/

    entry:{//打包的入口文件，可以是string或object
        build:'./es6/index.js',
    },
    output:{//配置打包结果，是一个对象 object
        path:'./es6_build',
        filename:'[name].js'   //因为打包多个文件，即将build、abs分别打包，此时fileName:[].js
    },
    module:{//定义了对模块的处理逻辑  object
        loaders:[//定义了一系列的加载器 array
            {
                test:/.css$/,//正则
                loaders:['style','css'],//从右向左
                exclude:"/node_modules" //排除的文件夹
            }
        ]
    },
    devServer:{  //配置服务，但是即使在此处hot和inline设为true命令行里仍旧要写
        hot:true,
        inline:true
    },
    resolve:{
        extensions: ['', '.js','.css', '.jsx']//自动补全后缀
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"欢迎",
            chunks:["build"]//html中引入的js模块
        })
    ]
}