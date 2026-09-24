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
  degree: "B.S. in Information Systems",
  major: "Information Systems",
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
      ariaLabel: "Download Zhifan Zhou's resume",
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
      major: "B.S. in Information Systems",
      line: "AI Agents, AI for ML, Multimodal LLM Systems",
    },
    home: {
      eyebrow: "Carnegie Mellon University",
      title: "Zhifan Zhou",
      positioning:
        "Undergraduate student in Information Systems, interested in AI agents.",
      aboutTitle: "About",
      about: [
        "I'm Zhifan Zhou (go by Sky), an undergraduate at Carnegie Mellon University studying Information Systems. I'm interested in AI agents and agentic systems — how LLMs can plan, use tools, and improve through iteration. My research sits at the intersection of language models and automated machine learning, and I care about building AI systems that are genuinely useful.",
        "Outside of research, I play basketball, badminton, and Go.",
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
          text: "DataMaster published as an arXiv preprint — an agentic data science system for automated ML experimentation.",
        },
        {
          date: "2025",
          text: "Started undergraduate studies in Information Systems at Carnegie Mellon University.",
        },
      ],
    },
    publications: {
      title: "Publications",
      items: [
        {
          title: "DataMaster: Data-Centric Autonomous AI Research",
          authors:
            "Yaxin Du, Xiyuan Yang, <strong>Zhifan Zhou</strong>, Wanxu Liu, Zixing Lei, Zimeng Chen, Fenyi Liu, Haotian Wu, Yuzhu Cai, Zexi Liu, Xinyu Zhu, Wenhao Wang, Linfeng Zhang, Chen Qian, Siheng Chen",
          venue: "arXiv",
          status: "Preprint",
          description: "",
          links: datamasterLinks,
        },
      ] satisfies Publication[],
    },
    experiences: {
      title: "Experiences",
      educationTitle: "Education",
      education: {
        degree: "B.S. in Information Systems",
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
            "NLP Lab, Eastern Institute of Technology · Ningbo, China",
          period: "May 2026–Present",
          summary: "",
          details: [
            "Develop a streaming omni model for real-time multimodal interaction using a full-duplex training paradigm, under the supervision of Prof. Xiaoyu Shen.",
            "Develop post-training data pipelines by curating omni-modal conversational datasets, aligning cross-modal signals, and defining fine-grained timestamp annotations for precise temporal supervision.",
          ],
        },
        {
          title: "Research Intern",
          organization:
            "MAGIC Lab, Shanghai Jiao Tong University · Shanghai, China",
          period: "Feb. 2026–Present",
          summary: "",
          details: [
            "Conduct research on self-evolving agents and AI-for-science systems under Prof. Siheng Chen.",
            "Contribute to projects spanning multi-agent governance, autonomous AI systems, and scientific discovery workflows.",
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
      major: "信息系统",
      line: "AI Agents, AI for ML, Multimodal LLM Systems",
    },
    home: {
      eyebrow: "卡耐基梅隆大学",
      title: "周知凡",
      positioning:
        "信息系统方向本科生，关注 AI agents。",
      aboutTitle: "关于我",
      about: [
        "我是周知凡（别名叫 Sky），目前在卡耐基梅隆大学读本科，学习信息系统。我对 AI agents 和 agentic systems 很感兴趣，尤其关注 LLM 如何进行规划、使用工具，并在迭代中变得更好。我的研究围绕语言模型与自动化机器学习的交叉展开，始终思考什么样的 AI 系统才是真的有用。",
        "研究之外，我喜欢篮球、羽毛球，和围棋。",
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
          text: "DataMaster 发布 arXiv preprint —— 面向自动化机器学习实验的 agentic data science 系统。",
        },
        {
          date: "2025",
          text: "入学卡耐基梅隆大学，攻读信息系统本科学位。",
        },
      ],
    },
    publications: {
      title: "论文",
      items: [
        {
          title: "DataMaster: Data-Centric Autonomous AI Research",
          authors:
            "Yaxin Du, Xiyuan Yang, <strong>Zhifan Zhou</strong>, Wanxu Liu, Zixing Lei, Zimeng Chen, Fenyi Liu, Haotian Wu, Yuzhu Cai, Zexi Liu, Xinyu Zhu, Wenhao Wang, Linfeng Zhang, Chen Qian, Siheng Chen",
          venue: "arXiv",
          status: "Preprint",
          description: "",
          links: datamasterLinks,
        },
      ] satisfies Publication[],
    },
    experiences: {
      title: "经历",
      educationTitle: "教育背景",
      education: {
        degree: "信息系统本科",
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
            "宁波东方理工大学 NLP Lab · 中国宁波",
          period: "2026年5月–至今",
          summary: "",
          details: [
            "在沈小宇教授指导下，采用全双工训练范式开发面向实时多模态交互的流式全模态模型。",
            "构建后训练数据流水线，包括整理全模态对话数据集、对齐跨模态信号，以及定义细粒度时间戳标注以实现精确的时序监督。",
          ],
        },
        {
          title: "研究实习生",
          organization:
            "上海交通大学 MAGIC Lab · 中国上海",
          period: "2026年2月–至今",
          summary: "",
          details: [
            "在陈思衡教授指导下，开展自进化智能体与 AI for Science 系统研究。",
            "参与多智能体治理、自主 AI 系统和科学发现工作流等项目。",
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
