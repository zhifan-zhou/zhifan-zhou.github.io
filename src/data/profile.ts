export type Locale = "en" | "zh";

export type NavItem = {
  key: "home" | "publications" | "experiences" | "contact";
  href: string;
};

export type SocialLink = {
  key: "github" | "linkedin" | "email" | "cv";
  href: string;
  label: string;
  ariaLabel: string;
  isExternal?: boolean;
  isPlaceholder?: boolean;
  download?: boolean;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  status: string;
  description: string;
  links: SocialLink[];
};

export type Experience = {
  title: string;
  organization: string;
  period: string;
  summary: string;
  details: string[];
};

export type ProjectEntry = {
  title: string;
  period: string;
  status: string;
  description: string;
  tags: string[];
  links: SocialLink[];
};

export type EducationEntry = {
  degree: string;
  organization: string;
  period: string;
  description: string;
  details: string[];
};

const email = "skyzhou@andrew.cmu.edu";
const github = "https://github.com/zhifan-zhou";
const linkedin = "https://www.linkedin.com/in/zhifan-zhou-425ab6331/";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) => `${basePath}${path}`;
const resumeUrl = withBasePath("/resume.pdf");

export const profile = {
  name: "Zhifan Zhou",
  shortName: "Zhifan Zhou",
  school: "Carnegie Mellon University",
  schoolAddress: "5000 Forbes Ave, Pittsburgh, PA 15213",
  degree: "B.S. in Statistics and Machine Learning",
  major: "Statistics and Machine Learning",
  subtitle: "Undergraduate Student at Carnegie Mellon University",
  email,
  github,
  linkedin,
  resumeUrl,
  photo: {
    src: withBasePath("/profile-photo.png"),
    alt: "Portrait of Zhifan Zhou",
    objectPosition: "44% 34%",
  },
  navItems: [
    { key: "home", href: "/" },
    { key: "publications", href: "/publications" },
    { key: "experiences", href: "/experiences" },
    { key: "contact", href: "/contact" },
  ] satisfies NavItem[],
  socialLinks: [
    {
      key: "github",
      label: "GitHub",
      href: github,
      ariaLabel: "Open Zhifan Zhou's GitHub profile",
      isExternal: true,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: linkedin,
      ariaLabel: "Open Zhifan Zhou's LinkedIn profile",
      isExternal: true,
    },
    {
      key: "email",
      label: "Email",
      href: `mailto:${email}`,
      ariaLabel: "Email Zhifan Zhou",
    },
    {
      key: "cv",
      label: "CV",
      href: resumeUrl,
      ariaLabel: "Download CV placeholder",
      isPlaceholder: true,
      download: true,
    },
  ] satisfies SocialLink[],
};

const datamasterLinks: SocialLink[] = [
  {
    key: "github",
    label: "GitHub",
    href: "#",
    ariaLabel: "DataMaster GitHub link placeholder",
    isPlaceholder: true,
  },
  {
    key: "cv",
    label: "Paper",
    href: "#",
    ariaLabel: "DataMaster paper link placeholder",
    isPlaceholder: true,
  },
];

export const siteCopy = {
  en: {
    languageAriaLabel: "Change language",
    languageOptions: {
      en: "EN",
      zh: "中文",
    },
    theme: {
      ariaLabel: "Change color theme",
      light: "Light",
      dark: "Dark",
    },
    nav: {
      home: "Home",
      publications: "Publications",
      experiences: "Experiences",
      contact: "Contact",
    },
    profile: {
      role: "Undergraduate Student",
      school: "Carnegie Mellon University",
      major: "B.S. in Statistics and Machine Learning",
      line: "AI Agents, AI for ML, Multimodal LLM Systems",
    },
    home: {
      eyebrow: "Carnegie Mellon University",
      title: "Zhifan Zhou",
      positioning:
        "Undergraduate student in Statistics and Machine Learning, interested in practical AI systems and research engineering.",
      aboutTitle: "About",
      about: [
        "Welcome to my homepage! I am Zhifan Zhou, also known as Sky, an undergraduate student at Carnegie Mellon University studying Statistics and Machine Learning.",
        "Outside academics, I enjoy basketball, badminton, table tennis, traveling, playing Go, and chatting with friends. I like building AI systems with the same practical mindset: clear goals, careful execution, and real people in mind.",
      ],
      researchTitle: "Research Interests",
      researchInterests: [
        "AI Agents",
        "AI for Machine Learning / Data Science",
        "Multimodal LLM Systems",
      ],
      newsTitle: "News",
      showMore: "Show more",
      showLess: "Show less",
      news: [
        {
          date: "May 2026",
          text: "Our paper DataMaster: Towards Autonomous Data Engineering for Machine Learning is submitted to NeurIPS 2026.",
        },
        {
          date: "2026",
          text: "Placeholder: add upcoming research, project, or collaboration updates here.",
        },
        {
          date: "2026",
          text: "Placeholder: add future academic or technical milestones here.",
        },
        {
          date: "2025",
          text: "Placeholder: add earlier coursework, project, or campus updates here.",
        },
        {
          date: "2025",
          text: "Placeholder: add selected notes, talks, or writing updates here.",
        },
      ],
    },
    publications: {
      title: "Publications",
      items: [
        {
          title:
            "DataMaster: Towards Autonomous Data Engineering for Machine Learning",
          authors: "Zhifan Zhou",
          venue: "NeurIPS 2026",
          status: "Under Review",
          description:
            "DataMaster studies agentic data science workflows for machine learning, with an emphasis on tool use, experiment planning, memory, execution, evaluation, and iterative model improvement.",
          links: datamasterLinks,
        },
      ] satisfies Publication[],
    },
    experiences: {
      title: "Experiences",
      educationTitle: "Education",
      education: {
        degree: "B.S. in Statistics and Machine Learning",
        organization: "Carnegie Mellon University",
        period: "Undergraduate",
        description:
          "Studying statistical reasoning, machine learning foundations, and computational methods.",
        details: [
          "Building a foundation in programming, statistics, linear algebra, and machine learning-related coursework.",
          "Interested in rigorous evaluation, useful AI systems, and product-minded technical work.",
        ],
      } satisfies EducationEntry,
      projectsTitle: "Projects",
      projects: [
        {
          title: "DataMaster",
          period: "2026",
          status: "Under Review",
          description:
            "An agentic data science system inspired by MLE-Bench, focused on automated ML experimentation, tool use, memory, and iterative model improvement.",
          tags: [
            "AI Agents",
            "Data Science Automation",
            "MLE-Bench",
            "Research Engineering",
          ],
          links: datamasterLinks,
        },
      ] satisfies ProjectEntry[],
      workTitle: "Work Experiences",
      work: [
        {
          title: "Researcher",
          organization:
            "School of Artificial Intelligence, Shanghai Jiao Tong University",
          period: "2026-Present",
          summary:
            "Research role focused on AI systems and machine learning-related work.",
          details: [
            "Detailed research responsibilities and outputs will be updated as the work develops.",
          ],
        },
      ] satisfies Experience[],
    },
    contact: {
      title: "Contact",
      description:
        "Feel free to reach out! I am open to research collaboration, internship opportunities and AI product ideas.",
      formTitle: "Drop a note",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitLabel: "Send via email",
      mapTitle: "Carnegie Mellon University",
      locationLabel: "Location",
      copyEmailLabel: "Copy email",
      copiedEmailLabel: "Email copied",
    },
    commandPalette: {
      title: "Command Palette",
      placeholder: "Search pages, sections, and actions...",
      hint: "Press Esc to close",
      copiedEmail: "Email copied to clipboard.",
      noResults: "No matching actions.",
      actions: {
        home: "Go to Home",
        about: "Go to About",
        research: "Go to Research",
        news: "Go to News",
        publications: "Go to Publications",
        datamaster: "Go to DataMaster",
        contact: "Go to Contact",
        github: "Open GitHub",
        copyEmail: "Copy Email",
        toggleTheme: "Toggle Theme",
      },
    },
  },
  zh: {
    languageAriaLabel: "切换语言",
    languageOptions: {
      en: "EN",
      zh: "中文",
    },
    theme: {
      ariaLabel: "切换颜色模式",
      light: "亮色",
      dark: "暗色",
    },
    nav: {
      home: "主页",
      publications: "论文",
      experiences: "经历",
      contact: "联系",
    },
    profile: {
      role: "本科生",
      school: "卡耐基梅隆大学",
      major: "统计与机器学习",
      line: "AI Agents, AI for ML, Multimodal LLM Systems",
    },
    home: {
      eyebrow: "卡耐基梅隆大学",
      title: "Zhifan Zhou",
      positioning:
        "统计与机器学习方向本科生，关注实用 AI 系统与研究工程。",
      aboutTitle: "关于我",
      about: [
        "欢迎来到我的主页！我是 Zhifan Zhou，也常被称为 Sky，目前就读于卡耐基梅隆大学，主修统计与机器学习。",
        "学习之外，我喜欢篮球、羽毛球、乒乓球、旅行、围棋，也喜欢和朋友聊天。我希望用同样务实的方式构建 AI 系统：目标清晰、执行认真，并真正面向人的需求。",
      ],
      researchTitle: "研究兴趣",
      researchInterests: [
        "AI Agents",
        "AI for Machine Learning / Data Science",
        "Multimodal LLM Systems",
      ],
      newsTitle: "动态",
      showMore: "展开更多",
      showLess: "收起",
      news: [
        {
          date: "2026 年 5 月",
          text: "我们的论文 DataMaster: Towards Autonomous Data Engineering for Machine Learning 已投稿 NeurIPS 2026。",
        },
        {
          date: "2026",
          text: "占位：之后可在这里补充新的研究、项目或合作动态。",
        },
        {
          date: "2026",
          text: "占位：之后可在这里补充新的学术或技术里程碑。",
        },
        {
          date: "2025",
          text: "占位：之后可在这里补充早期课程、项目或校园动态。",
        },
        {
          date: "2025",
          text: "占位：之后可在这里补充笔记、分享或写作动态。",
        },
      ],
    },
    publications: {
      title: "论文",
      items: [
        {
          title:
            "DataMaster: Towards Autonomous Data Engineering for Machine Learning",
          authors: "Zhifan Zhou",
          venue: "NeurIPS 2026",
          status: "Under Review",
          description:
            "DataMaster 探索面向机器学习的数据科学智能体工作流，重点关注工具使用、实验规划、记忆、执行、评估与迭代改进。",
          links: datamasterLinks,
        },
      ] satisfies Publication[],
    },
    experiences: {
      title: "经历",
      educationTitle: "教育背景",
      education: {
        degree: "统计与机器学习本科",
        organization: "卡耐基梅隆大学",
        period: "本科阶段",
        description: "学习统计推断、机器学习基础与计算方法。",
        details: [
          "系统打磨编程、统计、线性代数和机器学习相关基础。",
          "关注严谨评估、实用 AI 系统，以及兼具产品意识的技术工作。",
        ],
      } satisfies EducationEntry,
      projectsTitle: "项目",
      projects: [
        {
          title: "DataMaster",
          period: "2026",
          status: "Under Review",
          description:
            "一个受 MLE-Bench 启发的 agentic data science 系统，关注自动化机器学习实验、工具使用、记忆与迭代模型改进。",
          tags: [
            "AI Agents",
            "Data Science Automation",
            "MLE-Bench",
            "Research Engineering",
          ],
          links: datamasterLinks,
        },
      ] satisfies ProjectEntry[],
      workTitle: "工作经历",
      work: [
        {
          title: "Researcher",
          organization:
            "School of Artificial Intelligence, Shanghai Jiao Tong University",
          period: "2026-Present",
          summary: "围绕 AI 系统与机器学习相关方向的研究经历。",
          details: ["具体研究职责与产出会随着项目推进继续更新。"],
        },
      ] satisfies Experience[],
    },
    contact: {
      title: "联系",
      description:
        "欢迎联系我！我对研究合作、实习机会和 AI 产品想法都保持开放。",
      formTitle: "给我留言",
      nameLabel: "姓名",
      emailLabel: "邮箱",
      messageLabel: "留言",
      submitLabel: "通过邮件发送",
      mapTitle: "卡耐基梅隆大学",
      locationLabel: "位置",
      copyEmailLabel: "复制邮箱",
      copiedEmailLabel: "已复制邮箱",
    },
    commandPalette: {
      title: "命令面板",
      placeholder: "搜索页面、版块或操作...",
      hint: "按 Esc 关闭",
      copiedEmail: "邮箱已复制到剪贴板。",
      noResults: "没有匹配的操作。",
      actions: {
        home: "前往主页",
        about: "前往关于我",
        research: "前往研究兴趣",
        news: "前往动态",
        publications: "前往论文",
        datamaster: "前往 DataMaster",
        contact: "前往联系",
        github: "打开 GitHub",
        copyEmail: "复制邮箱",
        toggleTheme: "切换主题",
      },
    },
  },
};
