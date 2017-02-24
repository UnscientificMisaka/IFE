## 效果太差，待改

### 2017.2.24 update  
+  鼠标移出时效果太生硬，查资料知在hover添加transition后同时在原标签上添加transition可以平滑过渡。

+ 文字渐变所用的css    
1.linear-gradient


    Formal grammar: linear-gradient(  [ <angle> | to <side-or-corner> ,]? <color-stop> [, <color-stop>]+ )  

根据MDN上的描述可知   

    <side-or-corner> : 渐变起始位置left,right,top,bottom  
    <angle> : 用角度指定渐变的方向  
    <color-stop> :由color值组成，跟随着可选的终点颜色值  

2.background-clip:text  
MDN的描述是这样：
>The background is painted within (clipped to) the foreground text  

背景被画在被裁减过的前景文字当中。   

text-fill-color:transparent;   
顾名思义，文字填充颜色，IE系列不支持，webkit支持良好,此处设为透明，为了配合同时在动画中使用background-position完成背景颜色位置变化产生视觉上文字渐变的效果，background-size：200% 100%；宽度设置为2倍，有一部分刚开始是不可见的，随着位置的移动而变换达到多种颜色在渐变的效果。

3.在下没有用伪类实现左右边框，明日再修改。
