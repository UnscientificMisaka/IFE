## 数据图表产品体验

### 折线图
#### Echarts
#### AmCharts
#### Chart.js
#### Chartist-js
1. 学生可能没有注意到，没有找到配置多个y轴的参数
2. 官方网站的文档注释和代码一个字体颜色，体验太差了,后来发现是css文件加载太慢后面才正常。
3. 没有搜索功能差评。
#### HighCharts

#### Summary
Echarts最棒！

***
### 柱状图
#### Echarts
1. X轴刻度显示不完全,十个数据只显示五个刻度，解决方法：扩大width或缩小刻度。
![Alt text](q1.png)
2. 多个y轴参照，发现yAxisIndex属性完美解决。
#### AmCharts
#### Chart.js
1. 默认样式不太符合审美。
#### Chartist-js
#### HighCharts
1. 默认type为bar的柱状图是横着的体验不太好
#### Summary
Echarts、HighCharts和AmCharts都很棒,AmCharts默认左上角水印感觉不太好。
***
### 饼状图
#### Echarts
#### AmCharts
#### Chart.js
1. 太大了，默认样式好像没能控制好大小...
#### Chartist-js
#### HighCharts
1. data值的名字必须是y
#### Summary
个人还是觉得Echarts最棒，易上手。
***
### 大数据量散点图
#### Echarts
1. 刚开始渲染像在刷番茄酱~，把symbolSize调成最小才能看见空白。
#### AmCharts
1. bulletSize设置了最小数值为1，显示还是很大,仔细看了看文档，设置了maxBulletSize才是正确的.
#### Chart.js
1. chart.js中文API文档太简洁了点..还好后来看到了英文API
2. 点与点之间一直有连线，仔细阅读文档发现需要设置type为line类型才能覆盖属性默认值
#### Chartist-js
1. 没找到定义点大小的参数，后来发现是在css里定义的。
2. 没有修改相关参数，横坐标宽度莫名其妙缩小了，后来发现横坐标间距是根据series中数据个数增大减小,并不像其他图表框架中根据图标宽度变化
#### HighCharts
#### Summary
Echarts是从左到右依次渲染，HighCharts和Amcharts整体出现，具体速度没有精确计量，Chartist.js体验最差，加载事件较长。
***
### 特殊最高点样式折线图
#### Echarts
#### AmCharts
1. 学生眼拙找了好久没有找到类似于echart里的markpoint,在demo里发现一个最高点特殊样式但是是手动设置的。
[官方demo](https://www.amcharts.com/demos/line-with-custom-bullets/)
#### Chart.js
#### Chartist-js
1. 在api文档中发现 Chartist.getHighLow()方法应该和设置最高低的样式有关，但参数设置中无相关选项。
#### HighCharts
1. 手动在数据数组中设置最高点样式。
#### Summary
Echart的option选项较多，解决的很完美。
***
### 同一图表内折线图和柱状图
#### Echarts
#### AmCharts
#### Chart.js
#### Chartist-js
1. 构造图表时chartist.Line/Bar指定了构造类型，应该是学生太笨，没有找到相关方法同时在一张表中出现:(
#### HighCharts
#### Summary
1. 还是感觉Echarts和HighCharts很棒。



#### 总的来说，如果让我这样新手选择图表框架的话首选会是Echarts或HighCharts,上手较快，chart.js默认样式太苍白，第一印象直接毙掉了，Chartist.js体验较差，AmCharts也不错但感觉还是和Echarts，HighCharts差了一点，以上就是学生刚各大接触图表框架的微言。