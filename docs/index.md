---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Create-Form"
  text: 
  tagline: 基于原生小程序+Vant Weapp封装的组件库
  actions:
    - theme: brand
      text: 快速开始
      link: /quick-start
  image:
    src: /logo.jpg
    alt: Giraffe

features:
  - title: 减少开发成本
    details: 传入JSON数据即可生成表单
  - title: 其他
    details: ''
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
