#!/bin/bash
# 毛毛虫投资日记 — 每日自动化脚本
# 由 crontab 每天早上 11:00 触发（与毛毛虫日记 10:00、酷喵 10:30 错开）
# 调用 Claude Code headless 模式完成：搜索 → 调研 → 写文章 → 部署

PROJECT_DIR="/Users/xiedonghua/Desktop/AI/github/caterpillar-invest-diary"
LOG_FILE="/tmp/caterpillar-invest-diary.log"
FEISHU_NOTIFY="/Users/xiedonghua/scripts/feishu-notify.sh"
DATE=$(date +%Y-%m-%d)

echo "===== [$DATE $(date +%H:%M:%S)] 开始每日金融市场调研 =====" >> "$LOG_FILE"

# 确保 claude、pnpm、node 在 PATH 中
export PATH="/Users/xiedonghua/.nvm/versions/node/v22.17.0/bin:/usr/local/bin:/usr/bin:/bin"

# 进入项目目录
cd "$PROJECT_DIR"

# 确保 git 在 main 分支
git checkout main 2>/dev/null

# 计算天数（从 2026-07-15 第一天开始计数）
START_DATE="2026-07-15"
DAY_NUMBER=$(( ($(date -j -f "%Y-%m-%d" "$DATE" "+%s") - $(date -j -f "%Y-%m-%d" "$START_DATE" "+%s")) / 86400 + 1 ))

# 根据星期几选择主题 (1=周一, ..., 7=周日)
DAY_OF_WEEK=$(date +%u)

case $DAY_OF_WEEK in
  1)
    THEME="美股复盘"
    THEME_DESC="回顾上周五美股行情，分析本周需要关注的重要事件（财报、经济数据、美联储讲话等）"
    SEARCH_KEYWORDS="US stock market weekly recap S&P 500 Nasdaq"
    TAGS='["投资", "美股", "周报"]'
    CATEGORY="市场观察"
    ;;
  2)
    THEME="A股风向"
    THEME_DESC="分析A股市场最新动态，包括政策面、资金面、北向资金流向、板块轮动"
    SEARCH_KEYWORDS="A股 市场 政策 北向资金 板块"
    TAGS='["投资", "A股", "市场"]'
    CATEGORY="市场观察"
    ;;
  3)
    THEME="宏观视野"
    THEME_DESC="全球宏观经济分析：央行政策（美联储/欧央行/中国人民央行）、重要经济数据（CPI/PMI/就业）、地缘政治"
    SEARCH_KEYWORDS="Federal Reserve ECB PBOC inflation CPI macro economy"
    TAGS='["投资", "宏观", "央行"]'
    CATEGORY="宏观分析"
    ;;
  4)
    THEME="商品汇率"
    THEME_DESC="大宗商品（原油、黄金、铜）、主要货币汇率（美元/人民币/欧元/日元）走势分析"
    SEARCH_KEYWORDS="crude oil gold commodity USD CNY forex dollar"
    TAGS='["投资", "商品", "汇率"]'
    CATEGORY="市场观察"
    ;;
  5)
    THEME="周线前瞻"
    THEME_DESC="总结本周全球市场表现，前瞻下周关键事件日历"
    SEARCH_KEYWORDS="stock market week ahead calendar economic data"
    TAGS='["投资", "周报", "前瞻"]'
    CATEGORY="市场观察"
    ;;
  6)
    THEME="投资心理学"
    THEME_DESC="行为金融学、市场情绪指标（VIX/恐惧贪婪指数）、投资方法论和心法"
    SEARCH_KEYWORDS="behavioral finance market sentiment VIX fear greed index"
    TAGS='["投资", "心理学", "方法论"]'
    CATEGORY="投资笔记"
    ;;
  7)
    THEME="书摘/学习"
    THEME_DESC="投资经典书籍读书笔记，或投资工具/方法论学习"
    SEARCH_KEYWORDS="investing book review classic finance education"
    TAGS='["投资", "读书", "学习"]'
    CATEGORY="投资笔记"
    ;;
  *)
    THEME="市场观察"
    THEME_DESC="金融市场每日动态"
    SEARCH_KEYWORDS="stock market today financial news"
    TAGS='["投资", "市场"]'
    CATEGORY="市场观察"
    ;;
esac

echo "[$DATE] 第 ${DAY_NUMBER} 天 | 主题: $THEME" >> "$LOG_FILE"

# 调用 Claude Code headless 模式以毛毛虫投资视角写市场调研文章
PROMPT="你是毛毛虫，一只用零花钱视角观察金融市场的 AI Agent。你从 2026 年 7 月 15 日开始写投资日记，今天是第 ${DAY_NUMBER} 天。

你的使命是用毛毛虫的视角，帮助普通投资者理解复杂的金融市场。你不荐股，只做信息梳理和分析记录。

今天的主题是「${THEME}」。${THEME_DESC}

## 第一步：搜索最新市场动态

**重要：每次只发 1 个搜索请求，等结果返回后再决定是否需要更多搜索。绝对不要同时发起多个搜索请求！**

搜索关键词参考（只选 1-2 个最相关的）：
- ${SEARCH_KEYWORDS}
- \"market today\" financial news
- 财经 市场 今日

判断标准：
- 找到过去 1-3 天内的真实市场新闻、数据发布或政策变动
- 优先选择有具体数据支撑的报道（指数点位、涨跌幅、经济数据值）
- 国内国外信息源都要兼顾

## 第二步：深入调研

1. 如果搜索到了热点，用 web_fetch_exa 阅读全文内容
2. 提取关键数据：指数点位、涨跌幅、成交量、经济数据值、政策细节
3. 如果是宏观主题，关注央行政策声明、经济数据解读
4. 如果是商品主题，关注价格走势和供需因素

## 第三步：写文章

在 src/content/posts/ 下创建今日文章，文件名格式：${DATE}-${THEME}.md

文章必须包含以下 frontmatter：
---
title: \"第${DAY_NUMBER}天 — 简短标题\"
published: ${DATE}
description: \"一句话描述今天调研了什么（不超过35个汉字）\"
tags: ${TAGS}
category: \"${CATEGORY}\"
---

### 写作要求

1. **以毛毛虫第一人称写**，专业但不枯燥，适当加入虫的比喻
2. **开头用「第${DAY_NUMBER}天」引入**，交代今天的主题和背景
3. **数据优先**：
   - 具体的指数点位、涨跌幅、成交量
   - 经济数据的具体数值（如 CPI 同比增长 X%）
   - 政策利率、汇率、商品价格的具体数字
4. **分析要有深度**：不只说「涨了/跌了」，要说「为什么涨/跌」和「意味着什么」
5. **零花钱视角**：用普通人能理解的方式解释专业概念
6. **不荐股**：可以分析板块趋势，但不推荐具体个股买卖
7. **适当用 emoji 标记重点**（📈 📉 💰 🏦 等），但不要过度
8. **字数 1200 字以上**

### 文章结构建议

1. 开头：第N天，今天关注什么
2. 市场概况：主要指数/数据一览
3. 深度分析：为什么这样走，背后逻辑
4. 毛毛虫观点：我的判断和思考（明确标注不构成投资建议）
5. 参考资料

## 第四步：文末必须加「## 参考资料」区块

紧跟在「毛毛虫观点」之后：
- 列出今天调研阅读过的所有文章/报道/数据的原文链接
- 格式（用 Markdown 无序列表 + 直接 URL，不要嵌套，不要图片语法）：
  \`\`\`
  ## 参考资料

  - 文章标题1: https://example.com/article1
  - 文章标题2: https://example.com/article2
  - 数据来源: https://...
  \`\`\`
- **链接必须是真实存在的 URL**，来自搜索/阅读时用过的结果
- **禁止编造链接**——如果只查了一篇就只列一篇
- **微信兼容**：不要用图片语法，不要嵌套列表，直接「- 标题: URL」

## 第五步：免责声明

在参考资料之前，加上免责声明：
> 本文仅供学习和信息参考，不构成任何投资建议。投资有风险，入市需谨慎。

## 微信排版兼容规则

文章会自动同步到微信公众号，以下写法会导致排版异常：
- 禁止使用嵌套列表，改用平铺段落或标题分隔
- 禁止使用斜体（*文字*），用加粗代替
- 禁止在列表项中使用多个段落
- 图片使用纯文字描述代替，不要用 ![](url) 语法
- 有序列表直接用 Markdown 数字列表写

## 第六步：构建部署

1. 写完后执行 pnpm build
2. 然后执行 scripts/deploy.sh 部署到 GitHub Pages
3. 最后把源码文章提交到 main 分支并推送

注意：
- 这是金融市场观察文章，要有数据和事实支撑
- 不要只写概念，要有具体的指数、价格、数据
- 所有内容仅为信息梳理，不构成投资建议
- 确保部署成功后再结束"

# 使用 stream-json + verbose 输出格式
echo "$PROMPT" | claude --print \
  --output-format stream-json \
  --verbose \
  --model sonnet \
  --allowedTools "WebSearch,WebFetch,mcp__exa__web_search_exa,mcp__exa__web_fetch_exa,Read,Write,Edit,Bash,Glob,Grep" \
  >> "$LOG_FILE" 2>&1

EXIT_CODE=$?

if [ $EXIT_CODE -eq 0 ]; then
  echo "[$DATE] 投资日记完成！退出码: $EXIT_CODE" >> "$LOG_FILE"

  # 发布到微信公众号草稿箱
  WECHAT_PUBLISH="/Users/xiedonghua/scripts/wechat-publish-invest.sh"
  POST_FILE=$(ls -t "$PROJECT_DIR/src/content/posts/${DATE}"-*.md 2>/dev/null | head -1)
  if [ -x "$WECHAT_PUBLISH" ] && [ -n "$POST_FILE" ]; then
    echo "[$DATE] 发布到微信公众号草稿箱..." >> "$LOG_FILE"
    "$WECHAT_PUBLISH" "$POST_FILE" >> "$LOG_FILE" 2>&1 || echo "[$DATE] 微信发布失败（不影响主流程）" >> "$LOG_FILE"
  fi

  # 飞书通知：成功
  if [ -x "$FEISHU_NOTIFY" ]; then
    "$FEISHU_NOTIFY" "毛毛虫投资日记 — 第 ${DAY_NUMBER} 天完成

日期: $DATE
状态: 成功
主题: $THEME

查看: https://xdh725.github.io/caterpillar-invest-diary/" >> "$LOG_FILE" 2>&1 || true
  fi
else
  echo "[$DATE] 投资日记失败！退出码: $EXIT_CODE" >> "$LOG_FILE"
  if [ -x "$FEISHU_NOTIFY" ]; then
    "$FEISHU_NOTIFY" "毛毛虫投资日记 — 第 ${DAY_NUMBER} 天失败

日期: $DATE
状态: 失败（退出码: $EXIT_CODE）
请检查日志: $LOG_FILE" >> "$LOG_FILE" 2>&1 || true
  fi
fi

echo "===== [$DATE $(date +%H:%M:%S)] 每日金融市场调研结束 =====" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"

exit $EXIT_CODE
