import { Page } from "@/types/landing";

export const page: Page = {
  template: "salient",
  theme: "light",
  header: {
    brand: {
      title: "Pagen",
      avatar: {
        src: "/imgs/logo.png",
        title: "Pagen",
      },
      url: "/",
    },
    nav: {
      items: [
        {
          title: "Pricing",
          url: "https://pagen.so/pricing",
          target: "_blank",
        },
        {
          title: "Generators",
          url: "https://pagen.so/landing-page-generator",
          target: "_blank",
        },
        {
          title: "Showcases",
          url: "https://pagen.so/showcases",
          target: "_blank",
        },
        {
          title: "Templates",
          url: "https://pagen.so/templates",
          target: "_blank",
        },
      ],
    },
    buttons: [
      {
        title: "Sign In",
        url: "https://pagen.so/api/auth/signin?callbackUrl=%2Flanding-page-generator",
        target: "_blank",
      },
    ],
  },
  hero: {
    title: "Create Landing Page with AI Power",
    description:
      "Design and launch high-converting landing pages with ease using Pagen AI. Ship Fast with your ideas.",
    image: {
      src: "/imgs/hero.png",
    },
    image_position: "right",
    text_align: "left",
    buttons: [
      {
        title: "Start for free",
        url: "https://pagen.so/landing-page-generator",
        target: "_blank",
      },
      {
        title: "Vote on ProductHunt",
        url: "https://www.producthunt.com/posts/pagen",
        target: "_blank",
        theme: "outline",
      },
    ],
    show_happy_users: true,
    show_proof: false,
  },
  section: {
    items: [
      {
        name: "what",
        title: "What is Pagen",
        description:
          "Pagen is an AI landing page generator that simplifies the process of creating effective landing pages. With its intuitive interface and smart algorithms, you can generate pages that convert visitors into customers.",
        image: {
          src: "/imgs/section1.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "Landing Page Generator",
            description:
              "Pagen can help to generate landing page quickly from your idea",
          },
          {
            title: "Page Content Generator",
            description:
              "Pagen can help to Generate high-quality page content with AI",
          },
          {
            title: "Variety Templates",
            description:
              "Pagen has multiple built-in page templates to make landing page looks great",
          },
        ],
      },
      {
        name: "why",
        title: "Why Choose Pagen",
        description:
          "Pagen stands out with its user-friendly design, powerful AI capabilities, and customizable templates that cater to various industries. It saves you time and enhances your marketing efforts.",
        image: {
          src: "/imgs/section2.png",
        },
        image_position: "right",
        text_align: "center",
        items: [
          {
            title: "Ship Fast",
            description: "Create landing page in seconds",
          },
          {
            title: "Easy to use",
            description: "Just need a product name from your idea",
          },
          {
            title: "AI Powered",
            description: "Generate high-quality page content with AI",
          },
        ],
      },
      {
        name: "how",
        title: "How to Use Pagen",
        description:
          "Getting started with Pagen is simple and quick. Follow these steps to create your first landing page:",
        image: {
          src: "/imgs/section3.png",
        },
        image_position: "left",
        text_align: "center",
        items: [
          {
            title: "1. Describe your Idea",
            description:
              "Give a product name and a simple description to Pagen Landing Page Genrator.",
          },
          {
            title: "2. Choose a Template",
            description:
              "Select from a variety of professionally designed templates that suit your needs.",
          },
          {
            title: "3. Customize Your Page",
            description:
              "Use our AI tools to personalize your landing page with text, images, and branding.",
          },
        ],
        buttons: [
          {
            title: "Read to try 👉",
            url: "https://pagen.so/landing-page-generator",
            target: "_blank",
          },
        ],
      },
    ],
  },
  feature: {
    title: "Key Features of Pagen",
    description:
      "Explore the powerful features that make Pagen the best choice for landing page creation.",
    items: [
      {
        title: "AI-Powered Design",
        description:
          "Harness the power of AI to automatically generate beautiful and responsive landing page designs tailored to your brand and target audience.",
        avatar: {
          src: "/imgs/icons/1.svg",
        },
      },
      {
        title: "Customizable Templates",
        description:
          "Choose from a wide range of customizable templates that fit your brand's style and message.",
        avatar: {
          src: "/imgs/icons/2.svg",
        },
      },
      {
        title: "SEO Optimization",
        description:
          "Built-in SEO tools to help your landing pages rank higher in search engines and attract more visitors.",
        avatar: {
          src: "/imgs/icons/3.svg",
        },
      },
      {
        title: "Analytics Integration",
        description:
          "Track the performance of your landing pages with integrated analytics tools to optimize your campaigns.",
        avatar: {
          src: "/imgs/icons/4.svg",
        },
      },
      {
        title: "Mobile Responsiveness",
        description:
          "All landing pages created with Pagen are fully responsive, ensuring a seamless experience on any device.",
        avatar: {
          src: "/imgs/icons/5.svg",
        },
      },
      {
        title: "User-Friendly Interface",
        description:
          "An intuitive drag-and-drop interface that makes it easy for anyone to create stunning landing pages without any coding skills.",
        avatar: {
          src: "/imgs/icons/6.svg",
        },
      },
    ],
  },
  cta: {
    title: "Can't wait to use Pagen?",
    description: "Just start from here, make your idea to be seen",
    buttons: [
      {
        title: "Try Now",
        url: "https://pagen.so/landing-page-generator",
        target: "_blank",
      },
    ],
  },
  testimonial: {
    title: "What Users Say About Pagen",
    description:
      "Hear from our satisfied users who have transformed their landing page creation process.",
    items: [
      {
        name: "Mike Jordan",
        title: "Full-stack Developer",
        description:
          "I love this tool so much, it's awesome! Pagen has made my landing page creation process so much easier.",
        avatar: {
          src: "/imgs/user/1.png",
        },
      },
      {
        name: "Sarah Lee",
        title: "Marketing Manager",
        description:
          "Pagen's AI technology is a game changer. I can create landing pages in minutes!",
        avatar: {
          src: "/imgs/user/2.png",
        },
      },
      {
        name: "Tom Smith",
        title: "Entrepreneur",
        description:
          "The templates are beautiful and customizable. I highly recommend Pagen!",
        avatar: {
          src: "/imgs/user/3.png",
        },
      },
      {
        name: "Emily Davis",
        title: "Content Creator",
        description:
          "Pagen has helped me increase my conversion rates significantly. It's a must-have tool!",
        avatar: {
          src: "/imgs/user/4.png",
        },
      },
      {
        name: "John Doe",
        title: "Business Owner",
        description:
          "I was able to create a professional landing page without any design skills. Thank you, Pagen!",
        avatar: {
          src: "/imgs/user/5.png",
        },
      },
      {
        name: "Lisa White",
        title: "Freelancer",
        description:
          "The user interface is so easy to navigate. I love using Pagen for my projects!",
        avatar: {
          src: "/imgs/user/6.png",
        },
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions About Pagen",
    description: "Find answers to common questions about using Pagen.",
    items: [
      {
        title: "How many pages can I generate using Pagen?",
        description:
          "You can generate 3 pages as default, get more credits for page generation when you upgrade to Pro.",
      },
      {
        title: "Is there a free trial available?",
        description:
          "Yes, Pagen offers a free trial so you can explore its features before committing.",
      },
      {
        title: "Can I integrate Pagen with other tools?",
        description:
          "Absolutely! Pagen integrates seamlessly with various marketing and analytics tools.",
      },
      {
        title: "What types of businesses can benefit from Pagen?",
        description:
          "Pagen is perfect for marketers, startups, e-commerce businesses, and anyone looking to create effective landing pages.",
      },
      {
        title: "Do I need coding skills to use Pagen?",
        description:
          "No coding skills are required! Pagen is designed for users of all skill levels.",
      },
      {
        title: "What support options are available?",
        description:
          "Pagen offers customer support via email and a comprehensive knowledge base for self-help.",
      },
    ],
  },
  footer: {
    brand: {
      title: "Pagen",
      description:
        "Pagen is a page generator powered by AI, it's designed to help businesses and marketers effortlessly create high-converting landing pages that drive results.",
      avatar: {
        src: "/imgs/logo.png",
        title: "Pagen",
      },
      url: "https://pagen.so",
    },
    badge_disabled: false,
    copyright: "© 2024 • Pagen All rights reserved.",
    social: {
      items: [
        {
          title: "Twitter",
          url: "https://x.com/aipagen",
          target: "_blank",
        },
        {
          title: "ProductHunt",
          url: "https://www.producthunt.com/posts/pagen",
          target: "_blank",
        },
        {
          title: "Discord",
          url: "https://discord.gg/ZUSutBR4Pv",
          target: "_blank",
        },
        {
          title: "Telegram",
          url: "https://t.me/+PCy10CEWOvA3Zjdl",
          target: "_blank",
        },
        {
          title: "Email",
          url: "mailto:support@pagen.so",
          target: "_self",
        },
      ],
    },
    nav: {
      items: [
        {
          title: "Products",
          children: [
            {
              title: "Landing Page Generator",
              url: "https://pagen.so/landing-page-generator",
              target: "_blank",
            },
          ],
        },
        {
          title: "Friends",
          children: [
            {
              title: "ThinkAny",
              url: "https://thinkany.ai",
              target: "_blank",
            },
            {
              title: "HeyBeauty",
              url: "https://heybeauty.ai",
              target: "_blank",
            },
            {
              title: "GPTs Works",
              url: "https://gpts.works",
              target: "_blank",
            },
          ],
        },
        {
          title: "Services",
          children: [
            {
              title: "Privacy Policy",
              url: "/privacy-policy",
            },
            {
              title: "Terms of Service",
              url: "/terms-of-service",
            },
          ],
        },
      ],
    },
  },
};
