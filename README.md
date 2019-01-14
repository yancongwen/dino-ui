# Dino-UI: 一个 Vue UI 组件库

[![Build Status](https://travis-ci.org/yancongwen/dino-ui.svg?branch=master)](https://travis-ci.org/yancongwen/dino-ui)


## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，目的在于学习 Vue 及学习造轮子，本项目会尽可能全的使用 Vue 中的特性和 API ，同时也会进行单元测试和持续集成，以熟悉工程化概念和流程。不建议在实际项目中采用本框架。

## 安装	## 开始使用

1. 安装
```
npm i --save dion-ui
```

2. 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box
```
*,*::before,*::after{box-sizing: border-box;}
```
IE 8 及以上浏览器都支持此样式。

你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
```css
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```

3. 使用
```js
import {Button, ButtonGroup, Icon} from 'dino-ui'
import 'dino-ui/dist/index.css'

export default {
  name: 'app',
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
