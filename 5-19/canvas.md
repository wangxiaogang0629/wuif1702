# canvas 
canvas是html5新增的一个标签，我们通过canvas提供的API，做一些绘制操作、绘制形状、处理图片、实时视频。

## canvas基本使用
### canvas标签 
width
height

注意：每个标签上通用属性(id,class,style,title)

### 浏览器支持情况
IE6-8不支持canvas

调整canvas标签宽高(有区别)
1. 通过width  height 属性
2. 通过样式表的方式修改

## 绘制

1. 获取到绘图环境
```
var can = document.querySelector('canvas');
var ctx = can.getContext('2d');
```

2. 绘制图形
- 修改样式
```
ctx.fillStyle="#000"
ctx.fillStyle="red"
ctx.fillStyle="rgb(255,255,255)"
ctx.fillStyle = "rgba(255,255,255,0.5)"
```

- 绘制填充矩形
```
ctx.fillRect(x,y,width,height)
```
- 绘制描边矩形
```
ctx.strokeRect(x,y,width,height)
```



