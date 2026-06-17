export interface ProjectSection {
  id: string;
  title: string;
  content: string[];
  imageCount?: number;
  images?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  coverGradient: string;
  accentSymbol: "x" | "o" | "plus" | "dot" | "diamond";
  year: number;
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: "p1",
    slug: "icta-ai-agent",
    title: "iCTA AI Agent Design",
    subtitle: "临床试验文件管理生成式人工智能智能体",
    tags: ["UX/UI", "Design Strategy", "Agent Design"],
    coverGradient: "linear-gradient(135deg,#F5C9B9 0%,#F07C4C 60%,#1A1A1A 100%)",
    accentSymbol: "x",
    year: 2025,
    sections: [
      {
        id: "summary",
        title: "项目概述",
        content: [
          "iCTA 是太美医疗科技旗下 eTMF（电子试验主文档）系统的 AI 智能化升级产品。产品定位为「临床试验文件管理生成式人工智能」解决方案，通过 AI Agent 技术重构临床试验中 TMF 文件管理的全链路流程。",
          "核心交付包括：多端 0-1 落地、文件解析 AI Agent、文件自动化归档 AI Agent、智能问答 AI Agent、SaaS 私有云升级改版。"
        ],
        imageCount: 1,
        images: ["/project-images/icta-ai-agent/iCTA Ai Agent Cover.png"]
      },
      {
        id: "challenge",
        title: "挑战",
        content: [
          "现有 SaaS eTMF 系统面临三大困境：客户增长缓慢、续单困难；成熟系统架构难以拓展新功能场景；客户侧对垂类临床研究 AI 工具提效诉求日益剧增。",
          "产品目标：在 SaaS 系统内优先验证 AI 使用场景，链路调试 AI 模型工作流，优化场景 Prompt 提示词，稳步落地 AI 商业化。"
        ]
      },
      {
        id: "research",
        title: "设计研究",
        content: [
          "临床研究 III 期产生超过 15,000 份文件，CRA 需手动归档至 250 份文件目录下，人工耗时超过 500 个工时。",
          "完整 TMF 文件管理业务流程涵盖 8 个步骤：从 CRC 现场文件收集、CRA 核查整理、批量上传、人工填写信息、前置归档、审批确认到最终归档成功。",
          "客户调研覆盖恒瑞医药、康德弘毅、神舟细胞、百济神州等头部药企。1.0 上线后火速收集复星、齐鲁、恩华等 KA 客户反馈，验证 AI Agent 满足市场诉求。"
        ],
        imageCount: 2
      },
      {
        id: "design-issue",
        title: "问题定义",
        content: [
          "挖掘出 10 大痛点，涵盖批量上传处理时间太长、文件缺少项目信息需人工补充、文件修订流程不便、CRC 上传文件质量差等。",
          "定义三阶段问题框架：前期（文件收集）聚焦 AI 提高文件识别准确性、质量和完整性；中期（文件归档处理）聚焦自动化归档和批量处理效率；后期（文件审核）聚焦 AI 提高人工审核效率。"
        ]
      },
      {
        id: "scenario",
        title: "用户场景",
        content: [
          "主要用户为 CRA（临床研究监察员）。",
          "iCTA 1.0 三阶段流程：上传文件（支持 PDF、PPT、PNG、Word，一次性最多 200 份）→ AI 执行解析（格式校验、查重、识别项目/国家/中心信息、分类、匹配文件计划、生成路径、质量核查、属性填充）→ 人工复核（查看解析结果、判断通过与否、确认归档或按问题归类修订）。",
          "iCTA 2.0 引入 LLM 对话式人机交互新范式：用户发起指令、查看 AI 执行计划与思维链拆解、监控执行进度、接收任务总结。"
        ],
        imageCount: 2
      },
      {
        id: "prototyping",
        title: "原型设计",
        content: [
          "智能化上传面板围绕三大用户价值主张设计：聚焦上传动作、掌控 AI 处理全过程、轻松处理异常场景。",
          "定义 4 步交互路径：首次上传（新用户友好引导）、上传预解析中间态（明确状态提示）、追加文件（符合用户情绪的追加时机）、查看 AI 解析结果（按结果分类，消除模糊制造明确）。"
        ],
        imageCount: 2
      },
      {
        id: "lofi",
        title: "低保真",
        content: [
          "通过 Before/After 分析优化：MVP 版本筛选低效难用、批量编辑限制多、无法直观获知文件问题、「未识别」文件过多侵蚀用户信任。",
          "优化方案引入三种状态卡片：「AI 完成，待归档」（绿色）、「AI 中断，待补充」（粉色）、「全部」（蓝色），并明确展示文件问题数据列，点击即可开启修订面板。",
          "关键设计洞察：客户对「未识别」提示信息很敏感，实质约 20% 文档本身不包含项目/中心信息，并非 AI 能力问题。"
        ],
        imageCount: 2
      },
      {
        id: "hifi",
        title: "高保真",
        content: [
          "iCTA 1.0 首页体验改版与品牌升级，定义科技感元素：立体 3D 感、弥散质感，主体色为深蓝到紫色渐变。",
          "三端导航结构与集团 Wiz AI 平台融合：一级主页承载业务 Agent，二级 Agent 功能页面承载独立对话窗口，三级辅助页面承载文件预览。",
          "iCTA 2.0 对话式交互界面包含 Agent 工作空间（对话区、文件列表、文件预览面板），展示 AI 思维链拆解过程和实时进度反馈。"
        ],
        imageCount: 3
      },
      {
        id: "showcase",
        title: "最终展示",
        content: [
          "iCTA 1.0 商业化成果：平均每份文件处理时间从 3 分钟缩短至 15 秒（经过严格验证的数据）。2025 年 6 月上线，9 个试用项目，6 家签约客户，3 家新客户。",
          "iCTA 2.0 于 2025 年 9 月如期发布上线，迅速签约 3 家新客户，进一步验证 AI 在临床文件管理场景的商业化可行性。",
          "下一步计划：利用 RAG 技术拓展临床研究企业知识库。"
        ],
        imageCount: 2
      }
    ]
  },
  {
    id: "p2",
    slug: "solstice-mobile",
    title: "Solstice Mobile",
    subtitle: "Mindful productivity app · iOS & Android",
    tags: ["Mobile", "UI/UX", "Brand"],
    coverGradient: "linear-gradient(135deg,#FFD1B7 0%,#FFD1B7 16%,#FF844B 60%,#F1895E 100%)",
    accentSymbol: "o",
    year: 2025,
    sections: [
      {
        id: "summary",
        title: "Project Summary",
        content: [
          "Solstice Mobile is a mindful productivity application designed to help users achieve balance between work and well-being. Available on both iOS and Android, it combines task management with mindfulness practices.",
          "The app aims to reduce digital overwhelm by promoting intentional work sessions and encouraging regular breaks for mental refreshment."
        ],
        imageCount: 1
      },
      {
        id: "challenge",
        title: "Challenge",
        content: [
          "The main challenge was creating a productivity tool that doesn't add to user stress. Many productivity apps can feel overwhelming or create pressure to 'do more'.",
          "Designing for both iOS and Android while maintaining a consistent brand experience presented technical and design challenges around platform-specific patterns."
        ],
        imageCount: 1
      },
      {
        id: "research",
        title: "Design Research",
        content: [
          "User research revealed that modern professionals struggle with constant notifications and the pressure to be always available. There was a clear need for tools that respect boundaries.",
          "Competitive analysis showed a gap in the market for apps that integrate productivity features with mindfulness practices in a cohesive way."
        ],
        imageCount: 1
      },
      {
        id: "design-issue",
        title: "Design the Issue",
        content: [
          "The core issue identified was that existing productivity tools often contribute to burnout by emphasizing constant productivity. Users needed permission to pause.",
          "The design approach focused on creating gentle nudges rather than strict systems, allowing users to work at their own pace while maintaining focus."
        ],
        imageCount: 1
      },
      {
        id: "scenario",
        title: "User Scenario",
        content: [
          "Key scenarios included: morning routine planning, focused work sessions, midday mindfulness breaks, evening reflection, and weekly review of accomplishments.",
          "Each scenario was designed to feel supportive rather than prescriptive, giving users flexibility in how they use the app."
        ],
        imageCount: 1
      },
      {
        id: "prototyping",
        title: "Prototyping",
        content: [
          "Prototypes explored various interaction patterns for task entry, focus mode activation, and mindfulness exercises. Gestural interactions were particularly important for mobile usability.",
          "User testing helped refine the onboarding flow and simplify core interactions to reduce cognitive load."
        ],
        imageCount: 1
      },
      {
        id: "lofi",
        title: "Lo-Fi",
        content: [
          "Low-fidelity wireframes established the app structure: home dashboard, task lists, focus mode, mindfulness library, and insights section. Navigation patterns were tested for intuitiveness.",
          "The lo-fi phase helped identify that users preferred a minimal interface with clear visual hierarchy."
        ],
        imageCount: 1
      },
      {
        id: "hifi",
        title: "Hi-Fi",
        content: [
          "High-fidelity designs embraced a warm, calming color palette with soft gradients and organic shapes. Typography used gentle weights to create a soothing reading experience.",
          "Animations were designed to feel natural and unobtrusive, with smooth transitions between screens and subtle feedback for user actions."
        ],
        imageCount: 1
      },
      {
        id: "showcase",
        title: "Final Showcase",
        content: [
          "Solstice Mobile has been well-received for its thoughtful approach to productivity. Users report reduced feelings of overwhelm and improved work-life balance.",
          "The app continues to evolve based on user feedback, with new features focused on deeper mindfulness integration and personalized insights."
        ],
        imageCount: 1
      }
    ]
  },
  {
    id: "p3",
    slug: "chroma-atlas",
    title: "Chroma Atlas",
    subtitle: "Generative AI design system playground",
    tags: ["AIGC", "Design System"],
    coverGradient: "linear-gradient(135deg,#1A1A1A 0%,#F07C4C 50%,#F4E1A7 100%)",
    accentSymbol: "plus",
    year: 2024,
    sections: [
      {
        id: "summary",
        title: "Project Summary",
        content: [
          "Chroma Atlas is an innovative design system playground that leverages generative AI to help designers explore color, typography, and layout possibilities.",
          "The tool combines traditional design system principles with AI-powered generation, creating a unique space for creative exploration."
        ],
        imageCount: 1
      },
      {
        id: "challenge",
        title: "Challenge",
        content: [
          "The challenge was balancing AI generation with designer control. Too much automation can stifle creativity, while too little misses the AI's potential.",
          "Creating a UI that feels both powerful and approachable for designers with varying levels of technical expertise was also critical."
        ],
        imageCount: 1
      },
      {
        id: "research",
        title: "Design Research",
        content: [
          "Research with designers revealed frustration with repetitive tasks in design system creation and a desire for tools that spark creative inspiration.",
          "There was also interest in AI tools that could serve as creative partners rather than replacement for human designers."
        ],
        imageCount: 1
      },
      {
        id: "design-issue",
        title: "Design the Issue",
        content: [
          "The core issue was that designers often get stuck in creative ruts or spend too much time on tedious tasks. AI can help break these patterns.",
          "The solution needed to position AI as a collaborator, providing suggestions that designers can refine, remix, and make their own."
        ],
        imageCount: 1
      },
      {
        id: "scenario",
        title: "User Scenario",
        content: [
          "Key scenarios: exploring color palettes for a new brand, generating typography combinations, prototyping layout variations, and exporting design tokens.",
          "Each scenario emphasized exploration and iteration, allowing designers to quickly test ideas without commitment."
        ],
        imageCount: 1
      },
      {
        id: "prototyping",
        title: "Prototyping",
        content: [
          "Prototypes focused on the generation interface, preview panels, and export workflows. Special attention was given to making AI parameters accessible but not overwhelming.",
          "Testing revealed that designers wanted clear controls for guiding AI output while maintaining flexibility."
        ],
        imageCount: 1
      },
      {
        id: "lofi",
        title: "Lo-Fi",
        content: [
          "Low-fidelity wireframes mapped out the core sections: color explorer, typography lab, layout generator, and export center. Navigation between these sections was tested for fluidity.",
          "The lo-fi phase helped establish that users preferred a single-page experience with contextual panels rather than multiple screens."
        ],
        imageCount: 1
      },
      {
        id: "hifi",
        title: "Hi-Fi",
        content: [
          "High-fidelity designs embraced a dark mode-first aesthetic with vibrant accent colors that showcase the generative outputs. The interface uses a split-panel layout for simultaneous control and preview.",
          "Micro-interactions highlight AI generation progress and provide satisfying feedback when designs are exported or saved."
        ],
        imageCount: 1
      },
      {
        id: "showcase",
        title: "Final Showcase",
        content: [
          "Chroma Atlas has become a go-to tool for designers looking to explore creative possibilities quickly. Its ability to generate and refine design system components has been particularly praised.",
          "The tool continues to expand with new AI capabilities and deeper integrations with popular design tools."
        ],
        imageCount: 1
      }
    ]
  },
];
