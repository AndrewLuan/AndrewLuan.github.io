/*
 * 功能概述：在独立博客正文中启用本地公式排版，不读取或更改 Academic Pages 的主题设置。
 * 主要职责：窄屏首次进入时收起目录，用户可自行展开；调用 KaTeX auto-render 处理行内和块级公式，保留错误公式的原文。
 * 代码库关系：blog.html defer 加载本文件；page.math 为真时，在本文件之前加载 KaTeX 和 auto-render。
 * 输入输出与副作用：仅调整博客目录和 .blog-prose 内的数学分隔符，忽略代码块；其余页面不会载入本脚本。
 */
(() => {
  const toc = document.querySelector('.blog-toc');
  if (toc && window.matchMedia('(max-width: 960px)').matches) toc.open = false;
  const prose = document.querySelector('.blog-prose');
  if (!prose || typeof window.renderMathInElement !== 'function') return;
  window.renderMathInElement(prose, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '\\[', right: '\\]', display: true },
      { left: '\\(', right: '\\)', display: false },
      { left: '$', right: '$', display: false }
    ],
    throwOnError: false,
    trust: false
  });
})();
