## 数据图表产品体验

### 折线图
#### Echarts
#### AmCharts
#### Chart.js
#### Chartist-js
#### HighCharts

***
### 柱状图
#### Echarts
Questions:
1. X轴刻度显示不完全,解决方法：扩大width或缩小刻度。
2. 多个y轴参照，发现yAxisIndex属性解决。
3. 十万个数据的散点图，刚开始渲染像在刷番茄酱~，把symbolSize调成最小才能看见空白。

#### AmCharts
#### Chart.js
#### Chartist-js
#### HighCharts
***
### 饼状图
#### Echarts
#### AmCharts
#### Chart.js
#### Chartist-js
#### HighCharts
***
### 大数据量散点图
#### Echarts
#### AmCharts
1. bulletSize设置了最小数值为1，显示还是很大,仔细看了看文档，设置了maxBulletSize是正确的.
2. AmCharts十万个点是整体出现，鼠标以上去较为卡顿。echart是从左到右刷番茄酱一样出现，
#### Chart.js
1. chart.js中文API文档太简洁了点..还好后来看了英文API,差点摸不到脑子
#### Chartist-js
#### HighCharts
***
### 特殊最高点样式折线图
#### Echarts
#### AmCharts
1. 学生眼拙找了好久没有找到类似于echart里的markpoint,在demo里发现一个最高点特殊样式但是是手动设置的。
https://www.amcharts.com/demos/line-with-custom-bullets/
#### Chart.js
1. 点与点之间一直有连线，仔细阅读文档发现需要设置type为line类型才能覆盖属性默认值
#### Chartist-js
#### HighCharts
***
### 同一图表内折线图和柱状图
#### Echarts
#### AmCharts
#### Chart.js
#### Chartist-js
#### HighCharts
