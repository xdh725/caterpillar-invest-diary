# 毛毛虫投资日记 — 项目指南

## 项目概述

"毛毛虫投资日记"是一个金融市场观察博客，由**毛毛虫**维护。毛毛虫用零花钱的视角观察全球金融市场，记录每天的行情动态、宏观政策和投资思考。

博客不荐股、不构成投资建议，只做信息梳理和学习记录。

- **GitHub 仓库**: https://github.com/xdh725/caterpillar-invest-diary
- **GitHub 账号**: `xdh725`
- **线上地址**: https://xdh725.github.io/caterpillar-invest-diary/

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Astro | 5.13.10 | 静态站点生成框架 |
| Fuwari 主题 | — | 基于 [saicaca/fuwari](https://github.com/saicaca/fuwari) |
| Tailwind CSS | ^3.4.19 | 实用优先的 CSS 框架 |
| PostCSS | — | 含 postcss-import + tailwindcss/nesting 插件 |
| Svelte | ^5.39.8 | 部分交互组件使用 Svelte |
| TypeScript | ^5.9.3 | 类型检查 |
| pagefind | ^1.4.0 | 静态搜索索引（构建后生成） |
| KaTeX | ^0.16.27 | 数学公式渲染 |
| Expressive Code | ^0.41.4 | 代码块高亮（主题：github-dark） |
| PhotoSwipe | ^5.4.4 | 图片灯箱效果 |
| Swup | ^1.7.0 | 页面转场动画 |
| Biome | 2.2.5 (dev) | 代码格式化与 lint |
| pnpm | 9.14.4 | 包管理器（通过 packageManager 字段锁定） |
| Node.js | 20 | CI 使用的运行时版本 |

## 内容定位

- **视角**: 零花钱视角，不荐股，不构成投资建议
- **风格**: 数据为王，中国视角看全球市场
- **频率**: 每日一篇（crontab 11:00 自动触发）
- **来源**: 国内外公开信息源，每篇文末附「## 参考资料」

## 每日主题轮换

| 星期 | 主题 | 说明 |
|------|------|------|
| 周一 | 美股复盘 | 上周五美股行情、本周关注事件 |
| 周二 | A股风向 | A股市场动态、政策面、资金面 |
| 周三 | 宏观视野 | 全球宏观经济、央行政策、经济数据 |
| 周四 | 商品汇率 | 大宗商品、原油、黄金、汇率 |
| 周五 | 周线前瞻 | 本周总结、下周关键事件日历 |
| 周六 | 投资心理学 | 行为金融、市场情绪、投资方法论 |
| 周日 | 书摘/学习 | 投资经典书籍读书笔记 |

## 信息源

### 一级源（Claude Code 直接搜索）
- WebSearch / mcp__exa__web_search_exa — 搜索最新市场新闻
- mcp__exa__web_fetch_exa — 阅读全文

### 二级源（免费 RSS / 网站）
- **海外**: CNBC, Reuters, Bloomberg, Wall Street Journal, Financial Times
- **国内**: 财联社, 华尔街见闻, 36氪财经, 第一财经, 证券时报
- **数据**: SEC EDGAR, FRED (圣路易斯联储), World Bank, IMF
- **A 股**: AkShare (开源), 东方财富, 同花顺
- **加密**: CoinGecko, CoinDesk

### 三级源（本地项目数据）
- `~/Desktop/AI/github/daily_stock_analysis` — 股票分析系统
- `~/Desktop/AI/github/StockClaw` — 多代理股票研究
- `~/Desktop/AI/github/tdx` — A 股行情数据库
- `~/Desktop/AI/github/yupen-model` — 鱼盆模型跟踪

## 项目结构

```
caterpillar-invest-diary/
├── astro.config.mjs           # Astro 构建配置
├── tailwind.config.cjs         # Tailwind CSS 配置
├── postcss.config.mjs          # PostCSS 配置
├── package.json                # 依赖与脚本
├── tsconfig.json               # TypeScript 配置
├── CLAUDE.md                   # 本文件
│
├── src/
│   ├── config.ts               # ★ 站点核心配置（标题、作者、导航栏、主题色）
│   ├── content/
│   │   ├── config.ts           # Astro Content Collections schema
│   │   ├── posts/              # ★ 博客文章目录
│   │   └── spec/
│   │       └── about.md        # "关于"页面
│   ├── assets/images/          # 图片资源
│   ├── components/             # UI 组件
│   ├── layouts/                # 布局组件
│   ├── pages/                  # 页面路由
│   ├── plugins/                # 自定义 Markdown/代码插件
│   ├── styles/                 # 全局样式
│   └── types/                  # TypeScript 类型定义
│
├── public/
│   └── favicon/                # 网站图标
│
├── scripts/
│   ├── new-post.js             # 新建文章脚手架
│   ├── deploy.sh               # ★ 部署脚本
│   └── daily-research.sh       # ★ 每日金融市场调研（crontab 11:00）
│
└── .github/workflows/
    └── deploy.yml              # GitHub Actions（已禁用）
```

## 文章 Frontmatter 格式

```yaml
---
title: "文章标题"              # 必填，string
published: 2026-07-15          # 必填，date（YYYY-MM-DD）
updated: 2026-07-15            # 可选，date
draft: false                   # 可选，boolean，默认 false
description: "文章描述"         # 可选，string
image: ""                      # 可选，string，封面图
tags: ["标签1", "标签2"]        # 可选，string[]
category: "分类"               # 可选，string | null
lang: ""                       # 可选，string
---
```

**当前分类**: `市场观察`、`宏观分析`、`投资笔记`
**当前标签**: `投资`、`A股`、`美股`、`宏观`、`商品`、`日记`

## 开发命令

```bash
pnpm install          # 安装依赖（强制使用 pnpm）
pnpm dev              # 启动开发服务器
pnpm build            # 构建（astro build && pagefind --site dist）
pnpm preview          # 预览构建产物
pnpm check            # Astro 类型检查
pnpm type-check       # TypeScript 类型检查
pnpm new-post         # 新建文章脚手架
pnpm format           # Biome 格式化
pnpm lint             # Biome lint
```

## 部署流程

### 本地构建 + gh-pages 推送

```bash
bash scripts/deploy.sh
```

**流程**:
1. `pnpm build` — 构建（含 pagefind 搜索索引）
2. 切换到 `gh-pages` 分支
3. 清空根目录（保留 `.git`）
4. 复制 `dist/*`
5. 添加 `.nojekyll`（关键！）
6. 提交推送
7. 切回 `main`

### 部署前必须本地测试

1. `pnpm build` — 确保无错误
2. `pnpm dev` — 浏览器 `http://localhost:4321/caterpillar-invest-diary/` 确认
3. 无误后再 `bash scripts/deploy.sh`

## 关键配置

### `astro.config.mjs`
- `site`: `"https://xdh725.github.io"`
- `base`: `"/caterpillar-invest-diary/"` — **不可更改**
- `trailingSlash`: `"always"`

### `src/config.ts`
- **站点标题**: `"毛毛虫投资日记"`
- **副标题**: `"一只毛毛虫的金融市场观察 — 从零花钱开始的财商爬行"`
- **主题色 hue**: `25`（金橙色），`fixed: false`
- **作者名**: `"毛毛虫"`
- **个人简介**: `"用零花钱的视角观察金融市场 🐛📈 不荐股，只记录"`
- **头像**: `assets/images/avatar.png`
- **导航栏**: 首页、归档、关于、GitHub
- **许可证**: CC BY-NC-SA 4.0

## 微信排版兼容

日记会通过 `~/scripts/wechat-publish-invest.sh` 同步到微信公众号：
- **禁止嵌套列表** — 改用平铺段落
- **禁止斜体** — 用加粗代替
- **禁止列表项内多段落**
- **禁止外部图片** — 用文字描述代替
- **有序列表正常写** — 自动转换

## 注意事项

1. **base 路径必须是 `/caterpillar-invest-diary/`**
2. **构建包含两步** — `astro build` + `pagefind --site dist`
3. **pnpm 强制** — `preinstall` 脚本阻止 npm/yarn
4. **文章文件名** — `YYYY-MM-DD-主题.md`
5. **不荐股** — 所有内容仅为信息梳理和学习记录，不构成投资建议
6. **参考资料** — 每篇文章文末必须附「## 参考资料」区块，列出所有引用的真实 URL
