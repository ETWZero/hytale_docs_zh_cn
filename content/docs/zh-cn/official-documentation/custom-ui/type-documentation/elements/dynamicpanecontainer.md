---
title: DynamicPaneContainer
authors:
  - name: "Hypixel Studios Canada Inc."
    url: "https://hytale.com"
---

<OfficialDocumentationNotice />

# DynamicPaneContainer

**接受子元素：** 是

用于 DynamicPane 元素的容器。确保保持最小/最大尺寸约束。

## 属性

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| **LayoutMode** | [LayoutMode](../enums/layoutmode) | 决定子元素的布局方式 |
| **ScrollbarStyle** | [ScrollbarStyle](../property-types/scrollbarstyle) | |
| **Visible** | Boolean | 隐藏该元素，同时让父级布局跳过该元素 |
| **HitTestVisible** | Boolean | 默认情况下，大多数元素在命中测试（HitTest）中不会返回自身，除非它们提供了必须返回自身的某些功能（例如按钮）。这意味着位于其视觉下方的元素可能会改为接收输入事件。如果你希望该元素在命中测试中返回自身，请将此属性设为 true |
| **TooltipText** | String | 启用文本工具提示并设置要显示的文本。当鼠标光标位于该元素上时，工具提示会显示 |
| **TooltipTextSpans** | List<[LabelSpan](../property-types/labelspan)> | 启用文本工具提示并设置要显示的文本片段（TextSpan）。当鼠标光标位于该元素上时，工具提示会显示 |
| **TextTooltipStyle** | [TextTooltipStyle](../property-types/texttooltipstyle) | 文本工具提示的样式选项 |
| **TextTooltipShowDelay** | Float | 指定鼠标必须在该元素上停留多久（秒）后工具提示才会出现 |
| **Anchor** | [Anchor](../property-types/anchor) | 定义该元素在其分配区域内的布局方式 |
| **Padding** | [Padding](../property-types/padding) | 定义内容周围保留多少空间。背景不受影响。 |
| **FlexWeight** | Integer | 在减去显式指定的宽度/高度后，FlexWeight 可用于分配剩余空间 |
| **ContentWidth** | Integer | 如果设置，该元素将显示水平滚动条 |
| **ContentHeight** | Integer | 如果设置，该元素将显示垂直滚动条 |
| **AutoScrollDown** | Boolean | 使元素自动滚动到底部。如果已经被向上滚动，则元素不会尝试向下滚动 |
| **KeepScrollPosition** | Boolean | 是否保留滚动位置，即使在元素被卸载之后 |
| **MouseWheelScrollBehaviour** | [MouseWheelScrollBehaviourType](../enums/mousewheelscrollbehaviourtype) | |
| **Background** | [PatchStyle](../property-types/patchstyle) / String | 设置背景图像或颜色 |
| **MaskTexturePath** | UI Path (String) | 设置用于裁剪的遮罩纹理。（尚不支持九宫格/9-patch） |
| **OutlineColor** | [Color](../../markup.md#colors) | 设置要渲染的描边颜色 |
| **OutlineSize** | Float | 以指定大小在元素周围绘制基础描边 |
| **Overscroll** | Boolean | 如果启用，滚动区域将按元素的大小扩展 |

## 事件回调

| 名称 | 描述 |
| --- | --- |
| **Validating** | 按下 Enter 键（MouseDown）时触发。从获得焦点的元素向上冒泡，直到指定了 Validating 处理器；如果没有获得焦点的元素，则在图层根节点上调用 |
| **Dismissing** | 按下 Escape 键（MouseDown）时触发。从获得焦点的元素向上冒泡，直到指定了 Dismissing 处理器；如果没有获得焦点的元素，则在图层根节点上调用 |
| **Scrolled** | 元素滚动后触发。当滚动偏移由代码更改时不会触发 |
