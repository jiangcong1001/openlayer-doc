(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{381:function(l,e,v){"use strict";v.r(e);var _=v(7),i=Object(_.a)({},(function(){var l=this,e=l._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[e("h1",{attrs:{id:"layers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layers"}},[l._v("#")]),l._v(" Layers")]),l._v(" "),e("p",[l._v("Layers（ol.Layer.Base）图层，包含多个调用数据的子类，由子类的实例加载地图数据，必须结合图层数据源匹配使用。")]),l._v(" "),e("ul",[e("li",[l._v("layers它用于定义地图的图层列表。图层是地图中显示的元素，如地图、图块、矢量、栅格等。通过 layers 属性，你可以添加、移除和修改地图中的图层。注意：没有定义图层也会加载，显示空白图层。显示空白图层。")]),l._v(" "),e("li",[l._v("1、图层数组：layers 属性接收一个图层数组，可以叠加一个或多个图层。这些图层将按照数组中的顺序进行渲染，因此如果希望一个矢量图层显示在瓦片图层之上，它必须在瓦片图层之后添加")]),l._v(" "),e("li",[l._v("2、图层类型：OpenLayers定义了四种基本的图层类型：Tile（瓦片图层）、Image（图像图层）、Vector（矢量图层）、VectorTile（矢量瓦片图层）。这些图层类型都继承自共同的基类 Layer\n。")]),l._v(" "),e("li",[l._v("3、图层属性：\n"),e("ul",[e("li",[l._v("source\n"),e("ul",[e("li",[l._v("指定图层的数据来源，这是渲染图层所必需的")])])]),l._v(" "),e("li",[l._v("className\n"),e("ul",[e("li",[l._v("图层各个元素的样式；")])])]),l._v(" "),e("li",[l._v("opacity\n"),e("ul",[e("li",[l._v("设置图层的不透明度，取值范围从0（完全透明）到1（完全不透明），默认值为1")])])]),l._v(" "),e("li",[l._v("visible\n"),e("ul",[e("li",[l._v("布尔值，表示图层是否可见，默认为 true")])])]),l._v(" "),e("li",[l._v("zIndex\n"),e("ul",[e("li",[l._v("设置图层的叠加次序，默认为0，值最小的图层位于最下方。如果使用 setMap 方法添加的图层，zIndex 值为 Infinity，在最上层")])])]),l._v(" "),e("li",[l._v("extent\n"),e("ul",[e("li",[l._v("图层渲染的区域，即浏览器窗口中可见的地图区域。extent 是一个矩形范围，格式是[number, number, number, number] 分别代表 [left, bottom, right, top] 。为了提升渲染效率和加载速度，extent范围之外的瓦片是不会请求的，当然也不会渲染；")])])]),l._v(" "),e("li",[l._v("minResolution\n"),e("ul",[e("li",[l._v("图层可见的最小分辨率")])])]),l._v(" "),e("li",[l._v("maxResolution\n"),e("ul",[e("li",[l._v("图层可见的最大分辨率；")])])]),l._v(" "),e("li",[l._v("minZoom\n"),e("ul",[e("li",[l._v("图层可见的最小zoom level；")])])]),l._v(" "),e("li",[l._v("maxZoom\n"),e("ul",[e("li",[l._v("图层可见的最大zoom level")])])])])]),l._v(" "),e("li",[l._v("4、图层方法：")]),l._v(" "),e("li",[l._v("5、图层事件：")]),l._v(" "),e("li",[l._v("6、图层可见性：")]),l._v(" "),e("li",[l._v("7、图层样式：")])])])}),[],!1,null,null,null);e.default=i.exports}}]);