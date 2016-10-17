/**
 * Created by wujincun on 2016/10/14.
 */

module.exports = {
   /* entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080/',
            './app/index.js'
        ]
    },*/
    entry:'./app/index.js',//打包的入口文件，可以是string或object
    output:{//配置打包结果，是一个对象 object
        path:'./build',
        filename:'build.js'
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
    }
}