## mutex-box

> * WEB拖放网格控制器，支持原生JS或任意MVC MVVM框架
> * 支持 上 下 左 右 四个方向排挤元素
> * 支持动态增删改元素，动态配置网格列数等等
> * [测试链接](https://feff01.github.io/mutex-box/dist/test.html)
> * [测试链接-VUE](https://feff01.github.io/mutex-box/dist/test_vue.html)
> * [网址导航编辑器](http://www.holdhot.com/#/editor)

![image](https://feff01.github.io/static/img/holdhot_1.gif)
![image](https://feff01.github.io/static/img/mutex_box_1.gif)


## 安装

```
    npm install mutex-box
```
> * 免安装可直接保存 `https://feff01.github.io/input-listener/dist/js/mutex_box.js` 文件，本地 script 引入后通过 `window.MutexBox` 使用


## 应用

> * 浏览器环境
```javascript

    /**
     * @description 具体使用方式参考上两个测试链接和对应的 `test.html` `text_vue.html` 页面 
     */
    import MutexBox from 'mutex-box';
    //const MutexBox = require('mutex-box').default;
    //const MutexBox = window.MutexBox;
    
```

> * 各种JS环境
```javascript
    /**
     * @description 和交互无关的JS内存模型，输入当前状态可获得各种需要输出的交互
     */
    import {MutexModel} from 'mutex-box';
    //const {MutexModel} = require('mutex-box');
    //const {MutexModel} = window.MutexBox;
```