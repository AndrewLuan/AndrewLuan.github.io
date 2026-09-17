# 本地预览

在项目目录运行 `npm run preview`，然后访问 <http://127.0.0.1:4000>。脚本优先使用已安装的 Homebrew Ruby，编译 JavaScript，并同时启动 JavaScript 监听与 Jekyll LiveReload。修改 Markdown、SCSS 或 JavaScript 后会自动重新生成页面；修改 `_config.yml` 后需要重启。按 Ctrl+C 停止。

首次使用新机器时，先安装 Ruby、Bundler 和 Node.js，使用该 Ruby 运行 `bundle install`，再运行 `npm install`。

手机与电脑处于同一局域网时，可运行 `HOST=0.0.0.0 npm run preview`，再用手机访问 `http://电脑的局域网IP:4000`。默认只允许本机访问。端口冲突时可以使用 `PORT=4001 npm run preview`。

本地预览不会发布到 GitHub Pages；线上更新仍需提交并推送源码。
