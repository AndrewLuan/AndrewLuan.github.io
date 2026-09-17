#!/usr/bin/env bash
# 功能：从项目根目录启动 Jekyll 本地预览及 JavaScript 监听，供 npm run preview 调用。
# 优先使用 Homebrew Ruby，避免 macOS 自带 Ruby 无法运行项目 Bundler；不修改全局环境。
# HOST/PORT 可覆盖监听地址和端口。退出时结束 JS 监听；缺少依赖时提示安装命令。
set -euo pipefail
cd "$(dirname "$0")/.."
for ruby_bin in /opt/homebrew/opt/ruby/bin /usr/local/opt/ruby/bin; do
  if [[ -x "$ruby_bin/ruby" ]]; then
    export PATH="$ruby_bin:$PATH"
    break
  fi
done
if ! bundle check; then
  echo '请在相同 Ruby 环境运行 bundle install 后重试。' >&2
  exit 1
fi
if [[ ! -d node_modules ]]; then
  echo '请先运行 npm install。' >&2
  exit 1
fi
npm run build:js
npm run watch:js &
watch_pid=$!
trap 'kill "$watch_pid" 2>/dev/null || true' EXIT
JEKYLL_ENV=development bundle exec jekyll serve --host "${HOST:-127.0.0.1}" --port "${PORT:-4000}" --livereload --baseurl ''
