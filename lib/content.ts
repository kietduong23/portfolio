import { profile } from "./data";
import type { Content, Locale } from "./types";

const en: Content = {
  htmlLang: "en",
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  common: {
    resume: "CV",
    downloadResume: "Download CV",
    toggleTheme: "Toggle theme",
    toggleMenu: "Toggle menu",
    language: "Language",
  },
  hero: {
    headline: {
      before: "Frontend Developer with React, TypeScript &",
      accent: "Next.js",
      after: "",
    },
    introLine1: `I'm ${profile.name},`,
    introLine2: "frontend developer based in Ho Chi Minh City, Vietnam.",
    summary:
      "Web development from design to product: web apps and admin systems that are responsive, functional and fast. 2+ years building with React, TypeScript and Next.js (SSR) — from SEO-optimized websites and CMS platforms to mobile and mini apps.",
    keywords: [
      "Web Development",
      "Design to Product",
      "Web Apps & Admin CMS",
      "Responsive Design",
      "Performance Optimization",
    ],
    scrollDown: "Scroll down",
    viewWork: "View Work",
    getInTouch: "Get in Touch",
  },
  about: {
    title: "About",
    text: "I turn Figma designs into production: API integration, state management and the asynchronous edge cases that only show up in real use. I work across web, mobile and mini-app platforms, and care about clean architecture, tested code and sensible tooling.",
    education:
      "Bachelor of Information Technology — Royal Melbourne Institute of Technology (RMIT)",
    stats: {
      years: {
        title: "Years of experience",
        description: "Building production web applications with React, TypeScript and Next.js.",
      },
      apps: {
        title: "Production apps",
        description:
          "Web apps, admin systems, mobile apps and mini apps shipped on React Native, Telegram and Zalo.",
      },
      companies: {
        title: "Companies",
        description: "Across Vietnam and remote work for a international team, from design handoff to deployment.",
      },
    },
  },
  experience: {
    title: "Experience",
    items: {
      novaland: {
        role: "Frontend Developer",
        period: "Apr 2026 — Sep 2026",
        location: "Ho Chi Minh City",
        highlights: [
          "Built an internal KPI management CMS on Next.js 15 and React 19.",
          "Handled data fetching with RTK Query, validation with Zod and i18n with next-intl.",
          "Set up quality tooling: Vitest for tests, Biome for linting, Husky for git hooks.",
        ],
      },
      heu: {
        role: "Frontend & Mobile Developer",
        period: "Jul 2025 — Mar 2026",
        location: "Remote · UAE",
        highlights: [
          "Developed a React Native iOS/Android app with Google Places API, Maps SDK, Amplitude and AppsFlyer.",
          "Built a React.js back-office admin managing 1,000+ deals.",
          "Shipped an SEO-optimized Next.js marketing website with SSR.",
        ],
      },
      toncash: {
        role: "Frontend Developer",
        period: "Jan 2025 — Jun 2025",
        location: "Ho Chi Minh City",
        highlights: [
          "Built a Telegram Mini App with React.js and TypeScript, integrating Web3 and the TON blockchain.",
          "Delivered an affiliate campaign CMS for managing campaigns.",
        ],
      },
      nextway: {
        role: "Frontend Developer & Intern",
        period: "Dec 2023 — May 2024 · Jun 2024 — Dec 2024",
        location: "Ho Chi Minh City",
        highlights: [
          "Developed a Healthcare Zalo Mini App with Redux and Urbox rewards integration.",
          "Built a React Native parent tracking app for a school platform.",
          "Built a Next.js Admin Portal with Zustand and Ant Design for school management.",
        ],
      },
    },
  },
  projects: {
    title: "Projects",
    carouselLabel: "Project carousel",
    previous: "Previous project",
    next: "Next project",
    goTo: (n) => `Go to project ${n}`,
    tags: {
      "Next.js": "Next.js",
      React: "React",
      "React Native": "React Native",
      "Mini App": "Mini App",
      "CMS & Admin": "CMS & Admin",
    },
    items: {
      "001": {
        title: "KPI Management CMS",
        description:
          "Internal CMS for managing KPIs, built with the latest Next.js 15 / React 19 stack, with typed validation, localization and a tested, linted codebase.",
      },
      "002": {
        title: "Marketing Website",
        description:
          "SEO-optimized marketing website rendered with Next.js SSR, built to rank and load fast.",
      },
      "003": {
        title: "Deals Back-office Admin",
        description:
          "React.js back-office admin system used to manage more than 1,000 merchant deals.",
      },
      "004": {
        title: "heu! Mobile App",
        description:
          "Cross-platform iOS/Android app with location discovery through Google Places API and Maps SDK, plus product analytics and attribution.",
      },
      "005": {
        title: "Telegram Mini App",
        description: "Telegram Mini App with Web3 and TON blockchain integration.",
      },
      "006": {
        title: "Affiliate Campaign CMS",
        description: "Content management system for creating and running affiliate campaigns.",
      },
      "007": {
        title: "Healthcare Zalo Mini App",
        description:
          "Healthcare mini app on the Zalo platform with Redux state management and Urbox rewards integration.",
      },
      "008": {
        title: "School Platform: Parent App & Admin Portal",
        description:
          "React Native parent tracking app paired with a Next.js Admin Portal for school management.",
      },
    },
  },
  skills: {
    title: "Skills",
    groups: {
      core: "Core Web",
      ui: "UI & Styling",
      state: "State & Data",
      backend: "Backend & Cloud",
      quality: "Testing & Quality",
    },
  },
  contact: {
    title: "Contact",
    headingBefore: "Let's build something",
    headingAccent: "together.",
    body: "Open to frontend roles and interesting projects. The fastest way to reach me is email — or copy my details below.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    sendEmail: "Send an email",
    copied: (label) => `${label} copied to clipboard`,
    copyFailed: "Couldn't copy — please copy it manually",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js · Tailwind CSS · Framer Motion",
  },
};

const vi: Content = {
  htmlLang: "vi",
  nav: {
    about: "Giới thiệu",
    experience: "Kinh nghiệm",
    projects: "Dự án",
    skills: "Kỹ năng",
    contact: "Liên hệ",
  },
  common: {
    resume: "CV",
    downloadResume: "Tải CV",
    toggleTheme: "Đổi giao diện sáng/tối",
    toggleMenu: "Mở/đóng menu",
    language: "Ngôn ngữ",
  },
  hero: {
    headline: {
      before: "Lập trình viên Frontend với React, TypeScript &",
      accent: "Next.js",
      after: "",
    },
    introLine1: `Tôi là Dương Anh Kiệt,`,
    introLine2: "lập trình viên frontend tại TP. Hồ Chí Minh, Việt Nam.",
    summary:
      "Phát triển web từ thiết kế đến sản phẩm: web app và hệ thống quản trị responsive, đầy đủ chức năng và hiệu năng cao. Hơn 2 năm làm việc với React, TypeScript và Next.js (SSR) — từ website tối ưu SEO, hệ thống CMS đến ứng dụng mobile và mini app.",
    keywords: [
      "Phát triển Web",
      "Từ thiết kế đến sản phẩm",
      "Web app & Quản trị",
      "Responsive",
      "Tối ưu hiệu năng",
    ],
    scrollDown: "Cuộn xuống",
    viewWork: "Xem dự án",
    getInTouch: "Liên hệ",
  },
  about: {
    title: "Giới thiệu",
    text: "Tôi biến thiết kế Figma thành sản phẩm thực tế: tích hợp API, quản lý state và xử lý các trường hợp bất đồng bộ chỉ xuất hiện khi dùng thật. Tôi làm việc trên web, mobile và các nền tảng mini app, chú trọng kiến trúc sạch, code có kiểm thử và bộ công cụ hợp lý.",
    education:
      "Cử nhân Công nghệ Thông tin — Royal Melbourne Institute of Technology (RMIT)",
    stats: {
      years: {
        title: "Năm kinh nghiệm",
        description: "Xây dựng ứng dụng web production với React, TypeScript và Next.js.",
      },
      apps: {
        title: "Ứng dụng production",
        description:
          "Web app, hệ thống quản trị, ứng dụng mobile và mini app trên React Native, Telegram và Zalo.",
      },
      companies: {
        title: "Công ty",
        description: "Làm việc tại Việt Nam và từ xa cho đội ngũ quốc tế, từ bàn giao thiết kế đến triển khai.",
      },
    },
  },
  experience: {
    title: "Kinh nghiệm",
    items: {
      novaland: {
        role: "Lập trình viên Frontend",
        period: "Th4 2026 — Th9 2026",
        location: "TP. Hồ Chí Minh",
        highlights: [
          "Xây dựng hệ thống CMS nội bộ quản lý KPI trên Next.js 15 và React 19.",
          "Quản lý dữ liệu bằng RTK Query, kiểm tra dữ liệu với Zod và đa ngôn ngữ với next-intl.",
          "Thiết lập công cụ đảm bảo chất lượng: Vitest cho kiểm thử, Biome cho lint, Husky cho git hooks.",
        ],
      },
      heu: {
        role: "Lập trình viên Frontend & Mobile",
        period: "Th7 2025 — Th3 2026",
        location: "Làm từ xa · UAE",
        highlights: [
          "Phát triển ứng dụng React Native iOS/Android tích hợp Google Places API, Maps SDK, Amplitude và AppsFlyer.",
          "Xây dựng trang quản trị (back-office) bằng React.js để quản lý hơn 1.000 deal.",
          "Triển khai website marketing Next.js tối ưu SEO với SSR.",
        ],
      },
      toncash: {
        role: "Lập trình viên Frontend",
        period: "Th1 2025 — Th6 2025",
        location: "TP. Hồ Chí Minh",
        highlights: [
          "Xây dựng Telegram Mini App bằng React.js và TypeScript, tích hợp Web3 và blockchain TON.",
          "Phát triển CMS để quản lý các chiến dịch affiliate.",
        ],
      },
      nextway: {
        role: "Lập trình viên Frontend & Thực tập sinh",
        period: "Th12 2023 — Th5 2024 · Th6 2024 — Th12 2024",
        location: "TP. Hồ Chí Minh",
        highlights: [
          "Phát triển Zalo Mini App lĩnh vực y tế với Redux và tích hợp phần thưởng Urbox.",
          "Xây dựng ứng dụng React Native giúp phụ huynh theo dõi học sinh trên nền tảng trường học.",
          "Xây dựng cổng quản trị Next.js với Zustand và Ant Design để quản lý trường học.",
        ],
      },
    },
  },
  projects: {
    title: "Dự án",
    carouselLabel: "Danh sách dự án",
    previous: "Dự án trước",
    next: "Dự án tiếp theo",
    goTo: (n) => `Đến dự án ${n}`,
    tags: {
      "Next.js": "Next.js",
      React: "React",
      "React Native": "React Native",
      "Mini App": "Mini App",
      "CMS & Admin": "CMS & Quản trị",
    },
    items: {
      "001": {
        title: "CMS quản lý KPI",
        description:
          "CMS nội bộ để quản lý KPI, xây dựng trên Next.js 15 / React 19, có kiểm tra dữ liệu chặt chẽ, đa ngôn ngữ và codebase được kiểm thử, lint đầy đủ.",
      },
      "002": {
        title: "Website marketing",
        description:
          "Website marketing tối ưu SEO, render bằng Next.js SSR để lên top tìm kiếm và tải nhanh.",
      },
      "003": {
        title: "Trang quản trị Deals",
        description:
          "Hệ thống quản trị back-office bằng React.js dùng để quản lý hơn 1.000 deal của merchant.",
      },
      "004": {
        title: "Ứng dụng di động heu!",
        description:
          "Ứng dụng iOS/Android đa nền tảng với tính năng khám phá địa điểm qua Google Places API và Maps SDK, cùng phân tích sản phẩm và attribution.",
      },
      "005": {
        title: "Telegram Mini App",
        description: "Telegram Mini App tích hợp Web3 và blockchain TON.",
      },
      "006": {
        title: "CMS chiến dịch Affiliate",
        description: "Hệ thống quản lý nội dung để tạo và vận hành các chiến dịch affiliate.",
      },
      "007": {
        title: "Zalo Mini App y tế",
        description:
          "Mini app y tế trên nền tảng Zalo, quản lý state bằng Redux và tích hợp phần thưởng Urbox.",
      },
      "008": {
        title: "Nền tảng trường học: App phụ huynh & Cổng quản trị",
        description:
          "Ứng dụng React Native giúp phụ huynh theo dõi học sinh, đi kèm cổng quản trị Next.js để quản lý trường học.",
      },
    },
  },
  skills: {
    title: "Kỹ năng",
    groups: {
      core: "Nền tảng Web",
      ui: "UI & Giao diện",
      state: "State & Dữ liệu",
      backend: "Backend & Cloud",
      quality: "Kiểm thử & Chất lượng",
    },
  },
  contact: {
    title: "Liên hệ",
    headingBefore: "Cùng xây dựng điều gì đó",
    headingAccent: "nhé.",
    body: "Tôi đang tìm kiếm các vị trí frontend và những dự án thú vị. Cách nhanh nhất để liên hệ là email — hoặc sao chép thông tin bên dưới.",
    emailLabel: "Email",
    phoneLabel: "Điện thoại",
    sendEmail: "Gửi email",
    copied: (label) => `Đã sao chép ${label}`,
    copyFailed: "Không sao chép được — vui lòng sao chép thủ công",
  },
  footer: {
    rights: "Bảo lưu mọi quyền.",
    builtWith: "Xây dựng với Next.js · Tailwind CSS · Framer Motion",
  },
};

export const content: Record<Locale, Content> = { en, vi };
