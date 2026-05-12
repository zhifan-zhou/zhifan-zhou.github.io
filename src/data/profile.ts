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
  isUnavailable?: boolean;
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

export type NewsItem = {
  date: string;
  text: string;
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
      ariaLabel: "CV link will be updated",
      isUnavailable: true,
      download: true,
    },
  ] satisfies SocialLink[],
};

const datamasterLinks: SocialLink[] = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/sjtu-sai-agents/DataMaster",
    ariaLabel: "View DataMaster on GitHub",
    isExternal: true,
  },
  {
    key: "cv",
    label: "Paper",
    href: "https://arxiv.org/abs/2605.10906",
    ariaLabel: "Read DataMaster paper on arXiv",
    isExternal: true,
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
        "Undergraduate student in Statistics and Machine Learning, interested in AI agents.",
      aboutTitle: "About",
      about: [
        "I'm Zhifan Zhou (go by Sky), an undergraduate at Carnegie Mellon University studying Statistics and Machine Learning. I'm interested in AI agents and agentic systems — how LLMs can plan, use tools, and improve through iteration. My research sits at the intersection of language models and automated machine learning, and I care about building AI systems that are genuinely useful.",
        "Outside of research, I play basketball, badminton, and Go, and I spend too much time thinking about what makes AI systems actually useful.",
      ],
      researchTitle: "Research Interests",
      researchInterests: [
        "AI Agents",
        "AI for Machine Learning / Data Science",
        "Multimodal LLM Systems",
      ],
      newsTitle: "News",
      news: [
        {
          date: "2026",
          text: "Started as a Researcher at the School of Artificial Intelligence, Shanghai Jiao Tong University, working on agentic AI systems.",
        },
        {
          date: "2026",
          text: "DataMaster submitted to NeurIPS 2026 — an agentic data science system for automated ML experimentation.",
        },
        {
          date: "2025",
          text: "Started undergraduate studies in Statistics and Machine Learning at Carnegie Mellon University.",
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
        period: "2025–2029",
        description: "",
        details: [],
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
          title: "Research Intern",
          organization:
            "School of Artificial Intelligence, Shanghai Jiao Tong University",
          period: "2026-Present",
          summary:
            "Research role focused on AI agents and machine learning-related work.",
          details: [
            "Conducting research on agentic AI systems at the intersection of LLMs and automated machine learning.",
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
      locationLabel: "Address",
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
        publications: "Go to Publications",
        datamaster: "Go to DataMaster",
        contact: "Go to Contact",
        github: "Open GitHub",
        copyEmail: "Copy Email",
        toggleTheme: "Toggle Theme",
        switchLanguage: "Switch Language",
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
      title: "周知凡",
      positioning:
        "统计与机器学习方向本科生，关注 AI agents。",
      aboutTitle: "关于我",
      about: [
        "我是周知凡（别名叫 Sky），目前在卡耐基梅隆大学读本科，学习统计与机器学习。我对 AI agents 和 agentic systems 很感兴趣，尤其关注 LLM 如何进行规划、使用工具，并在迭代中变得更好。我的研究围绕语言模型与自动化机器学习的交叉展开，始终思考什么样的 AI 系统才是真的有用。",
        "研究之外，我打篮球、羽毛球，也下围棋；同时也喜欢琢磨技术产品与用户体验。",
      ],
      researchTitle: "研究兴趣",
      researchInterests: [
        "AI Agents",
        "AI for Machine Learning / Data Science",
        "Multimodal LLM Systems",
      ],
      newsTitle: "动态",
      news: [
        {
          date: "2026",
          text: "加入上海交通大学人工智能学院担任研究员，从事 agentic AI systems 相关研究。",
        },
        {
          date: "2026",
          text: "DataMaster 已投稿 NeurIPS 2026 —— 面向自动化机器学习实验的 agentic data science 系统。",
        },
        {
          date: "2025",
          text: "入学卡耐基梅隆大学，攻读统计与机器学习本科学位。",
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
        period: "2025–2029",
        description: "",
        details: [],
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
          title: "研究实习生",
          organization:
            "School of Artificial Intelligence, Shanghai Jiao Tong University",
          period: "2026-Present",
          summary: "围绕 AI agents 与机器学习相关方向的研究经历。",
          details: [
            "开展 agentic AI systems 研究，关注 LLM 与自动化机器学习的交叉方向。",
          ],
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
      locationLabel: "地址",
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
        publications: "前往论文",
        datamaster: "前往 DataMaster",
        contact: "前往联系",
        github: "打开 GitHub",
        copyEmail: "复制邮箱",
        toggleTheme: "切换主题",
        switchLanguage: "切换语言",
      },
    },
  },
};
