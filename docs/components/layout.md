# Layput 布局

## 概述

提供以下组件协助页面的整体布局：
- `Layout`：布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。
- `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

## 示例

#### 示例一

<ClientOnly>
  <demo-layout></demo-layout>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-layout class="layout">
      <d-header class="header"></d-header>
      <d-content class="content"></d-content>
      <d-footer class="footer"></d-footer>
    </d-layout>
  </div>
</template>
```

</details>

#### 示例二

<ClientOnly>
  <demo-layout-2></demo-layout-2>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-layout class="layout">
      <d-header class="header">Header</d-header>
      <d-layout>
        <d-sider class="sider">Sider</d-sider>
        <d-content class="content">Content</d-content>
      </d-layout>
      <d-footer class="footer">Footer</d-footer>
    </d-layout>
  </div>
</template>
```

</details>

#### 示例三

<ClientOnly>
  <demo-layout-3></demo-layout-3>
</ClientOnly>

<details open>
<summary>代码</summary>

```vue
<template>
  <div class="demo">
    <d-layout class="layout">
      <d-sider class="sider">Sider</d-sider>
      <d-layout>
        <d-header class="header">Header</d-header>
        <d-content class="content">Content</d-content>
        <d-footer class="footer">Footer</d-footer>
      </d-layout>
    </d-layout>
  </div>
</template>
```

</details>
