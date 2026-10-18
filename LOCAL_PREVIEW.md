# 本地预览

在项目目录运行 `npm run preview`，然后访问 <http://127.0.0.1:4000>。脚本优先使用已安装的 Homebrew Ruby，编译 JavaScript，并同时启动 JavaScript 监听与 Jekyll LiveReload。修改 Markdown、SCSS 或 JavaScript 后会自动重新生成页面；修改 `_config.yml` 后需要重启。按 Ctrl+C 停止。

首次使用新机器时，先安装 Ruby、Bundler 和 Node.js，使用该 Ruby 运行 `bundle install`，再运行 `npm install`。

手机与电脑处于同一局域网时，可运行 `HOST=0.0.0.0 npm run preview`，再用手机访问 `http://电脑的局域网IP:4000`。默认只允许本机访问。端口冲突时可以使用 `PORT=4001 npm run preview`。

本地预览不会发布到 GitHub Pages；线上更新仍需提交并推送源码。

## 博客

目录地址为 `/blog/`。首篇文章地址为 `/blog/2026-10-18/`。博客使用独立的 `blog.html`、`blog-post.html` 和 `assets/css/blog.css`。其他页面继续使用原来的 Academic Pages 模板。

新增文章时，在 `_posts` 中创建 `YYYY-MM-DD-slug.md`，填写以下 frontmatter：

```yaml
---
layout: blog-post
blog: true
title: "文章标题"
subtitle: "可选副标题"
date: 2026-10-18
permalink: /blog/2026-10-18-example/
lang: zh-CN
math: true
description: "用于目录与 RSS 的文章摘要。"
---
```

将日期和地址替换为实际值。正文使用 `##` 章节标题，页面会自动生成可跳转目录。目录页和 `/blog/feed.xml` 仅收录 `blog: true` 的文章。原模板的示例文章继续保留。

行内公式使用 `文字 $$a^2$$ 文字`，块级公式将 `$$` 单独放在行上。Kramdown 会先保护公式，再由本地 KaTeX 排版。没有公式时，可省略 `math` 字段。无需加载外部公式服务。

首篇文章的四张照片位于 `images/blog/hemmi-153/`。页面显示 WebP 预览，点击图版或“查看原图”可打开完整分辨率的彩色 JPG。原稿正文、34 处公式及四张原图均已保留。原稿索引放在文末的折叠区，侧边目录则按实际章节生成。

英文使用本地 EB Garamond 字体。中文使用覆盖首篇文章和界面文字的 Noto Serif SC 字体子集。新增汉字不在子集内时，浏览器按 CSS 中的宋体后备字体显示。字体及 KaTeX 的许可证与资源一同保存在 `assets/`。

博客样式和印刷花饰改编自 [Foadsf/vintage-latex](https://github.com/Foadsf/vintage-latex) 的示例 01、04 与 06，沿用 CC BY-SA 4.0，并在页脚署名。此授权用于改编的排版样式与花饰。文章正文和用户照片作为独立内容保留。参考项目许可证位于 `assets/vendor/vintage-latex/LICENSE.txt`。
