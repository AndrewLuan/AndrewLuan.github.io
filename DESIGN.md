---
name: "Academic CV — Blog"
description: "仅用于独立博客的 vintage-latex 古典科学印刷系统。"
colors:
  paper: "#f4ebdd"
  ink: "#231f1a"
  faded-ink: "#665443"
  rule: "#9b8870"
typography:
  display:
    fontFamily: '"Blog Garamond", "Blog Song", "Songti SC", "Noto Serif CJK SC", serif'
    fontSize: "54px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: ".1em"
  headline:
    fontFamily: '"Blog Garamond", "Blog Song", "Songti SC", "Noto Serif CJK SC", serif'
    fontSize: "clamp(30px, 4vw, 44px)"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: ".08em"
  title:
    fontFamily: '"Blog Garamond", "Blog Song", "Songti SC", "Noto Serif CJK SC", serif'
    fontSize: "21px"
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: ".1em"
  body:
    fontFamily: '"Blog Garamond", "Blog Song", "Songti SC", "Noto Serif CJK SC", serif'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: '"Blog Garamond", "Blog Song", "Songti SC", "Noto Serif CJK SC", serif'
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.8
spacing:
  compact: "8px"
  reading-gap: "48px"
  section: "2em"
components:
  masthead:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "26px 0 17px"
  archive-entry:
    textColor: "{colors.ink}"
    padding: "0 0 30px"
  margin-toc:
    textColor: "{colors.ink}"
    padding: "0 0 0 20px"
  opening:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  table-cell:
    textColor: "{colors.ink}"
    padding: "10px 14px"
---

# Design System: Academic CV — Blog

## Overview

**Creative North Star: "vintage-latex 古典科学印刷"**

博客采用用户指定的 Foadsf/vintage-latex 排版和美术方向。暖纸色、深墨色、衬线字体、细线与印刷花饰共同形成纸本文稿的阅读感。文字和图版构成主体，日期、目录和署名退居次要层次。

本文件只约束 `/blog/` 目录、日期文章及其独立布局。其他页面继续使用现有 Academic Pages 设计系统；全站只新增 Blog 导航入口。博客单独加载样式，不导入全站 `main.css`。设计依据是已实现的页面、样式与本地资源，不是未实现的效果图。

**Key Characteristics:**
- 暖纸底色、深墨正文与褐色细线。
- 自托管 Garamond 与中文宋体，配合旧式数字和小型大写。
- 居中标题、带框首字与对称印刷花饰。
- 按日期归档，宽屏外侧目录，窄屏正文前折叠目录。
- 纸墨图版预览保留原始彩色照片入口。

## Colors

颜色取自纸张、油墨和褪色印迹。上方 frontmatter 是颜色值的规范来源。

### Primary

- **深墨（ink）**：正文、标题、链接、主要分隔线和花饰。主色贯穿内容，不作为醒目的按钮色块。

### Neutral

- **暖纸（paper）**：博客整页底色。
- **褪墨（faded-ink）**：日期、署名、摘要、图注、页脚署名和链接悬停；也用于文字选区与键盘焦点轮廓。
- **纸褐细线（rule）**：页眉、外侧目录、表头和条目之间的细线。

**The Paper and Ink Rule.** 博客页面只使用已实现的纸墨色系；原始照片的颜色保留在原图入口中。

## Typography

**Display Font / Body Font:** 本地 Blog Garamond（EB Garamond）与 Blog Song（Noto Serif SC 子集）；中文依次后备到 Songti SC、Noto Serif CJK SC 和通用 serif。

英文字体提供常规体和斜体；中文提供常规体与半粗体。正文使用旧式比例数字；文章署名日期单独使用齐线数字。导航和目录页英文主标题使用小型大写。中文字体子集之外的字符由后备宋体显示。

### Hierarchy

- **Display**：博客目录主标题，居中、小型大写，使用 frontmatter 的 display 角色。手机仍保留（54px）字号与（.1em）字距。
- **Headline**：文章主标题，居中并平衡换行。手机改为（29px）和（.06em）字距。
- **Title**：正文二级标题，居中。手机改为（19px）和（.04em）字距。三级与四级标题为（19px、600）。
- **Body**：两端对齐，段距（1.2em）；连续普通段落首行缩进（2em）。手机字号和行高改为（16px、1.95）。
- **Label**：图注、表注、返回入口和页脚署名。目录正文另用（12px），摘要用（16px）。

**The Print Type Rule.** 保留衬线字体、旧式数字、小型大写和居中章节标题的已实现分工。

## Layout

外层纸页居中，最大宽度（1140px），两侧内边距（64px）。页眉按基线对齐，姓名在左，导航在右；下方一条细线连接整个版心。

文章采用双栏网格：正文列最大（740px），目录列最小（150px），列距使用 reading-gap。目录在右侧粘附，距离视窗顶端（28px），左侧加细线。标题区与正文主列对齐，标题本身居中。

在视窗不宽于（960px）时，页边距改为（36px），文章变为最大（740px）的单栏，目录移到正文前；脚本在首次载入时将目录收起。此时目录展开后分两列。在不宽于（600px）时，页边距改为（22px），目录为单列，页眉上下排列，归档年份也移到条目前。目录使用原生 details/summary，可由用户展开或收起；禁用脚本时保留原生展开状态。

归档区最大宽度（820px）。年份与条目分列；每个条目继续分为月日与内容两列。年份按倒序分组，目录和相邻文章只收录 `blog: true` 的文章。

表格和块级公式在各自容器中横向滚动。打印时使用白纸、深墨和（11pt）正文；隐藏导航与目录，正文改为单栏，图版和表格行尽量避免跨页拆分。

## Elevation & Depth

页面没有投影。纸色是连续底面，层次由字号、留白、墨色和印刷细线建立。照片预览通过灰度、少量棕褐色和 multiply 混合融入纸面；这些处理只作用于显示预览。

**The Flat Paper Rule.** 博客组件沿用平面印刷层次，不添加浮起卡片或投影。

## Shapes

形状以直线、直角和矩形为主。正文表格使用上下横线及表头底线；首字保留细线方框。正文分隔线短于版心并居中。对称曲线与中央墨点仅用于已有印刷花饰，保留其从 vintage-latex 示例 04 转换的 SVG 路径。

## Components

### Navigation

页眉导航直接排在纸面上。链接默认继承墨色；当前 Blog 项加下划线。正文链接保留下划线，悬停变为褪墨。键盘焦点使用（2px）褪墨轮廓，外偏移（5px）。跳至正文链接在获得焦点时显示。页脚提供 Blog、RSS 和回到页首入口，以及来源与许可证署名。

### Date Archive

归档条目用日期、标题、副标题、摘要和阅读全文组成。年份顶部用深墨细线，后续条目用纸褐细线分隔。标题链接默认不加下划线，悬停显示下划线。条目不使用独立卡片背景。

### Title and Ornament

标题、署名和对称花饰居中排列。花饰宽高（210px × 24px），使用当前墨色；它是纯装饰，对辅助技术隐藏。文章结尾和页脚复用同一花饰。继续保留 vintage-latex 的来源与 CC BY-SA 4.0 署名。

### Table of Contents

目录以原生折叠控件呈现，链接来自正文二级标题。目录链接默认无下划线，悬停时显示下划线。位置、展开初始状态和列数遵循 Layout 中的响应式规则。

### Opening Initial

开篇段落首字左浮动，字号为正文的（3.25em），行高（1.15），使用深墨细线方框。该处理只用于明确标记的开篇段落。

### Ruled Table

表格通栏，使用深墨上下线、纸褐表头线与半粗表头。正文左对齐，单元格顶端对齐；常规字号（15px），手机（14px）。手机单元格内边距改为（8px）。表注使用褪墨并居中。

### Photograph and Source Index

照片预览使用 `grayscale(1) sepia(.25) contrast(1.08)` 和 `multiply`；点击图版或“查看原图”打开原始彩色 JPG。图注允许换行，并将原图入口放在另一端。文末原稿索引用上下细线和原生折叠控件呈现。

## Do's and Don'ts

### Do:

- **Do** 将本系统限制在独立博客布局中，其他页面继续使用 Academic Pages。
- **Do** 复用本地字体、现有印刷花饰与署名，不改变它们的角色。
- **Do** 保留日期、正文、目录和图注的层次，以及窄屏与键盘操作。
- **Do** 为纸墨照片预览保留可访问的原始彩色 JPG 入口。

### Don't:

- **Don't** 将博客样式导入全站主样式或据此重排其他页面。
- **Don't** 给博客加入投影卡片、圆角面板或已定义纸墨色系之外的界面强调色。
- **Don't** 将预览滤镜写入用户原图，或以预览替代原图入口。
- **Don't** 将未标记 `blog: true` 的旧模板文章纳入独立博客目录。
