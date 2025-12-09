---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "架构札记"
  text: "王硕 - Shuo Wang"
  tagline: 跨越边界：代码、光影与自主系统
  image:
    # 替换成您的 Logo URL
    src: /images/logo.png 
    alt: SpaceGT Logo # 为图片添加替代文本
  actions:
    - theme: brand
      # 链接到您的 CVZJ 项目详情页
      text: 技术架构思辨 | 🧠
      link: /posts/ 
    - theme: alt
      # 链接到您的技术博客/研究文章
      text: 光影生活札记 | 📸
      link: /interests/photography

features:
  - title: 🧠 LangChain 哲学：AI Agent 的操作系统
    details: 从系统工程的角度，解析 LangChain 的六大模块（Models, Prompts, Chains, Agents等）如何实现软硬件边界的抽象，为 LLM 赋予感知和推理能力。
    link: /posts/langchain-philosophy
    linkText: 深入架构本质

  - title: ⛓️ Flows 与 Chaining：构建柔性执行骨架
    details: 探讨如何利用 Chains 实现多步骤任务的解耦与流程的柔性。这是将碎片化逻辑转化为可复用、高可靠性任务管道的关键。
    link: /posts/langchain-chains-flow
    linkText: 掌握流程解耦

  - title: 🛠️ Tools 与 Agents：掌控异构资源与自主权
    details: 探讨如何将外部 API、网络接口等异构资源抽象为 Tools。并通过 Agent 的 ReAct 循环实现根据实时反馈进行动态规划。
    link: /posts/langchain-agents-tools
    linkText: 实现系统自主性

  - title: 🌌 RAG 实践：连接私有知识与 LLM 的未来
    details: 如何利用 RAG 架构突破 LLM 的知识截止，将企业的私有文档、网络配置、CVZJ 设计数据等，无缝地融入到 Agent 的决策和生成流程中。
    link: /posts/langchain-rag-vision
    linkText: 突破知识边界
---
