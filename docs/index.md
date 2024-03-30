---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Create-Form"
  text: "让开发省心一点儿"
  tagline: 基于原生小程序+VantWeapp封装的组件库
  actions:
    - theme: brand
      text: 表单
      link: /quick-start
    - theme: brand
      text: 列表
      link: /list
    - theme: brand
      text: 表格
      link: /table
  image:
    src: ./assets/logo.jpg
    alt: Giraffe

features:
  - title: 个人博客
    details: http://blog.zlxinyu.cn/
  - title: 个人项目
    details: 微信小程序《成长时光轴》
#  - title: github
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #cea568 30%, #deb77e);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #cea568 50%, #deb77e 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
.image-src  {
  border-radius: 10px;
}
</style>