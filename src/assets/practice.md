#Css

- transition、animation、transform 三者有什么区别？

```
transition:比较简单的过度动画
animation: 使用keyframe自定义动画,比较详细的动画过程
transform: 2D或者3D的变形属性
```

- Web Worker 线程的限制是什么？

```
（1）同源限制

分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

（2）DOM 限制

Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用document、window、parent这些对象。但是，Worker 线程可以navigator对象和location对象。

（3）通信联系

Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。

（4）脚本限制

Worker 线程不能执行alert()方法和confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。

（5）文件限制

Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。
```

- canvas 默认画布的尺寸是多大？怎样设置才能不会变形？

```
默认画布尺寸为300*150 不加单位。

如果直接在css中设置canvas元素的width和height会导致画面变形。

如果不想画面变形可以直接在标签中设置，或者通过js来设置属性的宽高。
<canvas width='300' height='200' id= 'a'>

~~~js
var can = document.getElementById('a')
can.width ='500';
can.height = '300'
```
