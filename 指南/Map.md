# Map
Map（ol.Map）​：地图容器，核心部分，可加载各类地图与功能控件，用于渲染、表现动态地图
 ```js
 //初始化地图时可以传入参数，如：
 let map = new ol.Map({
    target: 'map', //必传 map为一个dom节点
    layers: [],
    view: new ol.View({}), //必传
 })
```
## Map方法
- 1、addControl(control) 向地图添加一个控件
    - control：要添加的控件对象。
    - 示例:
    ```js
    map.addControl(new ol.control.Zoom());
    ```
- 2、addInteraction(interaction) 向地图添加一个交互
    - interaction：要添加的交互对象。
    - 示例:
    ```js
    map.addInteraction(new ol.interaction.DragZoom());
    ```
- 3、addLayer(layer) 向地图添加一个图层
    - layer：要添加的图层对象
    - 示例:
    ```js
    map.addLayer(new ol.layer.Tile({ source: new ol.source.OSM() }));
    ```
- 4、addOverlay(overlay)：向地图添加一个覆盖物
    - overlay：要添加的覆盖物对象。
    - 示例:
    ```js
    map.addOverlay(new ol.Overlay({ position: coordinate, element: document.getElementById('popup') }));
    ```
- 5、getLayers()：获取地图中的所有图层。
    - 返回值：图层集合。
- 6、getOverlays()：获取地图中的所有覆盖物。
    - 返回值：覆盖物集合。
- 7、getEventCoordinate 触发事件的坐标
- 8、getEventPixel 触发事的像素位置
- 9、getOverlys()、
- 10、getControls()
- 11、getView()：获取地图的视图
    - 返回值：视图对象。
- 12、setLayerGroup(layerGroup)：设置地图的图层组。
    - layerGroup：图层组对象。
- 13、setTarget(target)：设置地图的目标容器。
    - target：目标容器的元素或ID
- 14、setView(view)：设置地图的视图。
    - view：视图对象。
- 15、removeOverlay(overlay)：从地图中移除一个覆盖物。
    - overlay：要移除的覆盖物对象
- 16、removeLayer()
- 17、removeControl()
## Map事件
OpenLayers的`Map`对象可以触发多种事件，以下是一些主要的事件类型：

1. **change**：通用的改变事件。当修订计数器增加时触发。

2. **change:layerGroup**：当图层组改变时触发。

3. **change:size**：当地图大小改变时触发。

4. **change:target**：当地图的目标容器改变时触发。

5. **change:view**：当地图视图改变时触发。

6. **click**：没有拖动的单击事件。双击会触发两次此事件。

7. **dblclick**：没有拖动的真正的双击事件。

8. **error**：通用的错误事件。当发生错误时触发。

9. **loadend**：加载额外的地图数据完成时触发。

10. **loadstart**：开始加载额外的地图数据（瓦片、图像、要素）时触发。

11. **moveend**：地图移动结束后触发。

12. **movestart**：地图开始移动时触发。

13. **pointerdrag**：当指针被拖动时触发。

14. **pointermove**：当指针移动时触发。在触摸设备上，这会在地图平移时触发，因此与mousemove不同。

15. **postcompose**：图层组合后触发。当由地图分派时，事件对象不会有上下文设置。当由图层分派时，事件对象会有上下文设置。目前只有WebGL图层会分派此事件。

16. **postrender**：地图帧渲染完成后触发。

17. **precompose**：图层组合前触发。当由地图分派时，事件对象不会有上下文设置。当由图层分派时，事件对象会有上下文设置。目前只有WebGL图层会分派此事件。

18. **propertychange**：当属性改变时触发。

19. **rendercomplete**：当渲染完成时触发，即所有源和瓦片已为当前视口加载完成，并且所有瓦片已淡入。事件对象不会有上下文设置。

20. **singleclick**：没有拖动和双击的真正的单击事件。这个事件会延迟250毫秒以确保它不是双击。

这些事件可以用于响应用户交互、地图状态变化等多种情况，使得开发者能够根据这些事件来执行特定的逻辑处理。

以下属性允许你配置地图的基本行为和外观，包括控件、交互、图层、视图等。
## target
- 在OpenLayers中，target 属性是 new Map() 构造函数的一个关键参数，它指定了地图的容器，它是OpenLayers地图初始化时必须指定的一个属性，它决定了地图在页面上的具体位置和渲染的容器。
- 容器指定：target 属性可以是地图容器的DOM元素本身，也可以是该元素的ID。这个容器是地图渲染的目标位置
 ```js
 //初始化地图时可以传入参数，如：
 let map = new ol.Map({
    target: 'map', //必传 map为一个dom节点
 })
```
## layers
- layers它用于定义地图的图层列表。图层是地图中显示的元素，如地图、图块、矢量、栅格等。通过 layers 属性，你可以添加、移除和修改地图中的图层。注意：没有定义图层也会加载，显示空白图层。显示空白图层。

 ```js
 //初始化地图时可以传入参数，如：
 let map = new ol.Map({
    layers: new TileLayer({
        source: new XYZ({
            url: "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=您的天地图密钥"
        })
    }),
 })
```
## view
- view它用于定义地图的视图。视图是地图的显示区域和缩放级别等信息，它决定了地图的显示范围、比例尺等。通过 view 属性，你可以设置地图的视图，如中心点、缩放级别、旋转角度等。
 ```js
 //初始化地图时可以传入参数，如：
 let map = new ol.Map({
    view: new View({
        center: [114.2905, 30.5607], //中心点
        projection: 'EPSG:4326', //坐标系
        zoom: 12, //默认缩放级别
        minZoom: 2, //最小缩放级别
        maxZoom: 18, //最大缩放级别
    }) 
 })
```
## controls
- controls它用于定义地图上的控件。控件是地图上的交互元素，如缩放按钮、平移按钮、旋转按钮等。通过 controls 属性，你可以添加、移除和修改地图上的控件。
## pixelRatio
- 设备上物理像素与设备独立像素（dips）之间的比例。默认值为 window.devicePixelRatio。类型为 number
## interactions
- 最初添加到地图的交互集合。如果没有指定，则使用默认交互。类型为 Collection undefined
## keyboardEventTarget
- 监听键盘事件的元素。这决定了何时触发 KeyboardPan 和 KeyboardZoom 交互。如果未指定，则库监听键盘事件的元素是地图目标（即用户提供的地图div）。类型为 HTMLElement 或 Document 或 string 或 undefined
## maxTilesLoading
- 同时加载的最大瓦片数量。默认值为16。类型为 number
## moveTolerance
- 光标必须移动的最小像素距离，以被检测为地图移动事件而不是点击事件。增加此值可以更容易地在地图上点击。默认值为1。类型为 number
## overlays
- 最初添加到地图的覆盖物集合。默认情况下，不添加覆盖物。
