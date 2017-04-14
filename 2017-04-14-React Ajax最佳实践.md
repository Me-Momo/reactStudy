---
layout: post
title: React Ajax 最佳实践
---
# 前言

## 根组件

根组件通过`fetch API`向服务器请求数据,然后存储到`state`中,通过`props`传递给子组件

![](http://upload-images.jianshu.io/upload_images/16989-5b374ab508857e65.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

参考React [官方文档](https://facebook.github.io/react/tutorial/tutorial.html)

**根组件方式适用条件**

>* 必须是浅层次的组件树
>* 不使用Redux或者Flux

## 容器组件

![](http://upload-images.jianshu.io/upload_images/16989-38a7257158f682c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**容器组件处理AJAX适用条件**

* 组件树很深
* 大部分组件不需要从服务端获取数据，但是某些组件需要
* 需要从不同的API、端获取数据
* 没有使用Redux/flux，并且你更加喜欢组件中使用'异步操作'

## Redux异步Action

![](http://upload-images.jianshu.io/upload_images/16989-3461a887a59cc465.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## Relay
![](http://upload-images.jianshu.io/upload_images/16989-4bc616067ac53dc0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



参考阅读: 
[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)