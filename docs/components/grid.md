# Grid 栅格

## 概述

我们采用了 24 栅格系统，将区域进行 24 等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网页布局，可以使页面排版美观、舒适。支持响应式布局。

我们定义了两个概念，行 row 和列 col，具体使用方法如下：

- 使用 row 在水平方向创建一行
- 将一组 col 插入在 row 中（col 必须放在 row 里面）
- 在每个 col 中，键入自己的内容
- 通过设置 col 的 span 参数，指定跨越的范围，其范围是 1 到 24
- 每个 row 中的 col 总和应该为 24

## 示例

#### 示例一：基础用法

<ClientOnly>
  <demo-grid></demo-grid>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-row>
      <d-col span="4">
        <div class="col-content">4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">4</div>
      </d-col>
      <d-col span="8">
        <div class="col-content">8</div>
      </d-col>
      <d-col span="8">
        <div class="col-content">8</div>
      </d-col>
      <d-col span="8">
        <div class="col-content">8</div>
      </d-col>
      <d-col span="12">
        <div class="col-content">12</div>
      </d-col>
      <d-col span="12">
        <div class="col-content">12</div>
      </d-col>
      <d-col span="24">
        <div class="col-content">24</div>
      </d-col>
    </d-row>
  </div>
</template>
```

</details>

#### 示例二：区块间隔

通过给 row 添加 `gutter` 属性，可以给下属的 col 添加间距。间隔占用各个区块的空间（即每行仍然由总和24铺满）

<ClientOnly>
  <demo-grid-2></demo-grid-2>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-row :gutter="20">
      <d-col span="8">
        <div class="col-content">8</div>
      </d-col>
      <d-col span="8">
        <div class="col-content">8</div>
      </d-col>
      <d-col span="8">
        <div class="col-content">8</div>
      </d-col>
    </d-row>
  </div>
</template>
```

</details>

#### 示例三：栅格顺序(Flex) 

通过 Flex 布局的 `order` 来改变栅格的顺序，`order` 值越小越靠前。

<ClientOnly>
  <demo-grid-3></demo-grid-3>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-row>
      <d-col span="6" order="4">
        <div class="col-content">1 | order-4</div>
      </d-col>
      <d-col span="6" order="3">
        <div class="col-content">2 | order-3</div>
      </d-col>
      <d-col span="6" order="2">
        <div class="col-content">3 | order-2</div>
      </d-col>
      <d-col span="6" order="1">
        <div class="col-content">4 | order-1</div>
      </d-col>
    </d-row>
  </div>
</template>
```

</details>

#### 示例四：左右偏移

通过 Flex 布局的 `order` 来改变栅格的顺序。

<ClientOnly>
  <demo-grid-4></demo-grid-4>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-row>
      <d-col span="8">
        <div class="col-content">col-8</div>
      </d-col>
      <d-col span="8" offset="8">
        <div class="col-content">col-8 | offset-8</div>
      </d-col>
    </d-row>
    <d-row>
      <d-col span="6" offset="8">
        <div class="col-content">col-6 | offset-8</div>
      </d-col>
      <d-col span="6" offset="4">
        <div class="col-content">col-8 | offset-4</div>
      </d-col>
    </d-row>
  </div>
</template>
```

</details>

#### 示例四：左右偏移

通过 Flex 布局的 `order` 来改变栅格的顺序。

<ClientOnly>
  <demo-grid-4></demo-grid-4>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-row>
      <d-col span="8">
        <div class="col-content">col-8</div>
      </d-col>
      <d-col span="8" offset="8">
        <div class="col-content">col-8 | offset-8</div>
      </d-col>
    </d-row>
    <d-row>
      <d-col span="6" offset="8">
        <div class="col-content">col-6 | offset-8</div>
      </d-col>
      <d-col span="6" offset="4">
        <div class="col-content">col-8 | offset-4</div>
      </d-col>
    </d-row>
  </div>
</template>
```

</details>

#### 示例五：Flex布局

通过给 `row` 设置参数 `justify` 为不同的值，来定义子元素的排布方式。

<ClientOnly>
  <demo-grid-5></demo-grid-5>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <span>center</span>
    <d-row justify="center">
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
    </d-row>
    <span>start</span>
    <d-row justify="start">
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
    </d-row>
    <span>end</span>
    <d-row justify="end">
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
    </d-row>
    <span>space-around</span>
    <d-row justify="space-around">
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
    </d-row>
    <span>space-between</span>
    <d-row justify="space-between">
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
    </d-row>
  </div>
</template>
```

</details>

#### 示例六：Flex对齐

通过给 `row` 设置参数 `align` 为不同的值，来定义子元素在垂直方向上的排布方式。

<ClientOnly>
  <demo-grid-6></demo-grid-6>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <span>top</span>
    <d-row justify="center" align="top">
      <d-col span="4">
        <div class="col-content" style="height: 80px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 30px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 100px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 60px">col-4</div>
      </d-col>
    </d-row>
    <span>bottom</span>
    <d-row justify="center" align="bottom">
      <d-col span="4">
        <div class="col-content" style="height: 80px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 30px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 100px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 60px">col-4</div>
      </d-col>
    </d-row>
    <span>middle</span>
    <d-row justify="center" align="middle">
      <d-col span="4">
        <div class="col-content" style="height: 80px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 30px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 100px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 60px">col-4</div>
      </d-col>
    </d-row>
  </div>
</template>
```

</details>

#### 示例七：响应式布局

本组件支持响应式布局，预设四个响应尺寸：`xs` `sm` `md` `lg`，详见 API。

调整浏览器尺寸来查看效果。

<ClientOnly>
  <demo-grid-7></demo-grid-7>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-row>
      <d-col :xs="24" :sm="12" :md="8" :lg="4">
        <div class="col-content">1</div>
      </d-col>
      <d-col :xs="24" :sm="12" :md="8" :lg="4">
        <div class="col-content">1</div>
      </d-col>
    </d-row>
    <d-row>
      <d-col
        :xs="{span:12, offset:4}"
        :sm="{span:8, offset:4}"
        :md="{span:4, offset:1}"
        :lg="{span:4, offset:1}"
      >
        <div class="col-content">1</div>
      </d-col>
      <d-col
        :xs="{span:12, offset:4}"
        :sm="{span:8, offset:4}"
        :md="{span:4, offset:1}"
        :lg="{span:4, offset:1}"
      >
        <div class="col-content">1</div>
      </d-col>
    </d-row>
  </div>
</template>
```

</details>

## API

### props

#### Row props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 栅格间距，单位 px，左右平分 | Number | 0 |
| align | flex 布局下的垂直对齐方式，可选值为 `top`、`middle`、`bottom`、`baseline`、`stretch` | String | `top` |
| justify | 水平轴对齐方式，可选值为 `start`、`end`、`center`、`space-around`、`space-between` | String | `start` |

#### Col props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| span | 栅格的占位格数，可选值为1~24的整数 | Number \| String | - |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | Number \| String | - |
| order | 栅格的顺序，数字越小越靠前，参考 CSS Flex 布局中的 `order` 属性 | Number \| String  | - |
| xs | `xs: <768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number \| Object | - |
| sm | `sm: ≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number \| Object | - |
| md | `md: ≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number \| Object | - |
| lg | `lg: ≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number \| Object | - |
