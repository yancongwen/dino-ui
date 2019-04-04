# Collapse 折叠面板

## 概述

将内容区域折叠/展开。

## 示例

#### 示例一

<ClientOnly>
  <demo-collapse></demo-collapse>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-collapse v-model="currentCollapse">
      <d-collapse-item name="1">
        史蒂夫·乔布斯
        <p slot="content">
          史蒂夫·乔布斯（Steve
          Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
        </p>
      </d-collapse-item>
      <d-collapse-item name="2">
        斯蒂夫·盖瑞·沃兹尼亚克
        <p slot="content">
          斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
          Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
          Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
        </p>
      </d-collapse-item>
      <d-collapse-item name="3">
        乔纳森·伊夫
        <p slot="content">
          乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
        </p>
      </d-collapse-item>
    </d-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCollapse: []
    }
  }
}
</script>
```

</details>

#### 示例二

<ClientOnly>
  <demo-collapse-2></demo-collapse-2>
</ClientOnly>
<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-collapse v-model="currentCollapse" accordion>
      <d-collapse-item name="1">
        史蒂夫·乔布斯
        <p slot="content" style="height: 200px;">
          史蒂夫·乔布斯（Steve
          Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
        </p>
      </d-collapse-item>
      <d-collapse-item name="2">
        斯蒂夫·盖瑞·沃兹尼亚克
        <p slot="content">
          斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary
          Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC
          Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
        </p>
      </d-collapse-item>
      <d-collapse-item name="3">
        乔纳森·伊夫
        <p slot="content">
          乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
        </p>
      </d-collapse-item>
    </d-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCollapse: '1'
    }
  }
}
</script>
```

</details>

## API

### props

#### Collapse props

| 属性 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| value | 当前激活的面板的 name，可以使用 v-model 双向绑定 | Array \| String | - |
| accordion | 是否开启手风琴模式，开启后每次至多展开一个面板 | Boolean | `false` |

#### CollapseItem props

| 属性 | 说明 | 类型 | 默认值 |
| - | - | - | - |
| name | 当前面板的 name，与 Collapse的value对应，不填为索引值 | String | index |
| hideArrow | 隐藏箭头 | Boolean | `false` |

### events

#### Collapse events

| 事件名 | 说明 | 返回值 |
| ------ | ---- | ------ |
| on-change  | 切换面板时触发，返回当前已展开的面板的 name 或 key，格式为数组 | `[]` |
| input  | 切换面板时触发，返回当前已展开的面板的 name 或 key，格式为数组 | `[]` |
