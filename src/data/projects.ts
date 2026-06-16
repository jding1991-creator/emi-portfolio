export interface ProjectSection {
  id: string;
  title: string;
  content: string[];
  hasImage?: boolean;
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
    title: "ICTA Ai Agent Design",
    subtitle: "Generative Agent for clinical business scenario.",
    tags: ["UI/UX", "Design Strategy", "Agentic Design"],
    coverGradient: "linear-gradient(135deg,#F5C9B9 0%,#F07C4C 60%,#1A1A1A 100%)",
    accentSymbol: "x",
    year: 2025,
    sections: [
      {
        id: "summary",
        title: "Project Summary",
        content: [
          "ICTA Ai Agent is a cutting-edge generative AI agent designed specifically for clinical business scenarios. The project aims to revolutionize healthcare workflows by providing intelligent assistance to medical professionals.",
          "By leveraging advanced AI capabilities, the agent can analyze complex medical data, generate insights, and support decision-making processes in real-time."
        ],
        hasImage: true
      },
      {
        id: "challenge",
        title: "Challenge",
        content: [
          "The primary challenge was designing an AI interface that balances sophistication with usability. Medical professionals need powerful tools but also require intuitive interactions that don't disrupt their workflow.",
          "Additionally, ensuring compliance with healthcare regulations and maintaining data privacy while delivering intelligent insights presented significant design constraints."
        ],
        hasImage: true
      },
      {
        id: "research",
        title: "Design Research",
        content: [
          "Extensive user research was conducted with clinicians, administrators, and healthcare IT specialists. This revealed key pain points around information overload and the need for contextual, timely insights.",
          "The research phase included contextual inquiries, surveys, and iterative prototype testing to validate assumptions about user needs and workflow patterns."
        ],
        hasImage: true
      },
      {
        id: "design-issue",
        title: "Design the Issue",
        content: [
          "Based on research findings, we identified that the core issue was information fragmentation. Clinicians had to navigate multiple systems to gather necessary data, leading to inefficiency and cognitive overload.",
          "The design solution focused on creating a unified interface that brings relevant information to the user at the right moment, reducing the need for context switching."
        ],
        hasImage: true
      },
      {
        id: "scenario",
        title: "User Scenario",
        content: [
          "Key user scenarios included: emergency room triage assistance, patient record analysis, treatment recommendation support, and administrative workflow optimization.",
          "Each scenario required careful consideration of context, data sensitivity, and the need for human-AI collaboration rather than full automation."
        ],
        hasImage: true
      },
      {
        id: "prototyping",
        title: "Prototyping",
        content: [
          "The prototyping phase involved creating low-fidelity wireframes to test navigation and information architecture, followed by high-fidelity prototypes for visual design validation.",
          "Rapid iteration with stakeholders allowed for quick feedback cycles and ensured the design remained grounded in real user needs."
        ],
        hasImage: true
      },
      {
        id: "lofi",
        title: "Lo-Fi",
        content: [
          "Low-fidelity prototypes focused on core interactions: AI suggestion cards, data visualization components, and contextual menu systems. These were tested for usability and task completion efficiency.",
          "The lo-fi phase helped refine the interaction patterns before committing to visual design details."
        ],
        hasImage: true
      },
      {
        id: "hifi",
        title: "Hi-Fi",
        content: [
          "High-fidelity designs introduced the visual language: a clean medical-grade aesthetic with careful use of accent colors to highlight AI-generated content. Typography was optimized for readability of complex medical information.",
          "Micro-interactions were added to provide feedback on AI processing states and to create a sense of responsiveness."
        ],
        hasImage: true
      },
      {
        id: "showcase",
        title: "Final Showcase",
        content: [
          "The final design delivers an intelligent assistant that integrates seamlessly into clinical workflows. Key features include contextual AI suggestions, predictive analytics dashboards, and natural language interaction capabilities.",
          "The solution has been successfully deployed in pilot programs, showing significant improvements in workflow efficiency and clinician satisfaction."
        ],
        hasImage: true
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
        hasImage: true
      },
      {
        id: "challenge",
        title: "Challenge",
        content: [
          "The main challenge was creating a productivity tool that doesn't add to user stress. Many productivity apps can feel overwhelming or create pressure to 'do more'.",
          "Designing for both iOS and Android while maintaining a consistent brand experience presented technical and design challenges around platform-specific patterns."
        ],
        hasImage: true
      },
      {
        id: "research",
        title: "Design Research",
        content: [
          "User research revealed that modern professionals struggle with constant notifications and the pressure to be always available. There was a clear need for tools that respect boundaries.",
          "Competitive analysis showed a gap in the market for apps that integrate productivity features with mindfulness practices in a cohesive way."
        ],
        hasImage: true
      },
      {
        id: "design-issue",
        title: "Design the Issue",
        content: [
          "The core issue identified was that existing productivity tools often contribute to burnout by emphasizing constant productivity. Users needed permission to pause.",
          "The design approach focused on creating gentle nudges rather than strict systems, allowing users to work at their own pace while maintaining focus."
        ],
        hasImage: true
      },
      {
        id: "scenario",
        title: "User Scenario",
        content: [
          "Key scenarios included: morning routine planning, focused work sessions, midday mindfulness breaks, evening reflection, and weekly review of accomplishments.",
          "Each scenario was designed to feel supportive rather than prescriptive, giving users flexibility in how they use the app."
        ],
        hasImage: true
      },
      {
        id: "prototyping",
        title: "Prototyping",
        content: [
          "Prototypes explored various interaction patterns for task entry, focus mode activation, and mindfulness exercises. Gestural interactions were particularly important for mobile usability.",
          "User testing helped refine the onboarding flow and simplify core interactions to reduce cognitive load."
        ],
        hasImage: true
      },
      {
        id: "lofi",
        title: "Lo-Fi",
        content: [
          "Low-fidelity wireframes established the app structure: home dashboard, task lists, focus mode, mindfulness library, and insights section. Navigation patterns were tested for intuitiveness.",
          "The lo-fi phase helped identify that users preferred a minimal interface with clear visual hierarchy."
        ],
        hasImage: true
      },
      {
        id: "hifi",
        title: "Hi-Fi",
        content: [
          "High-fidelity designs embraced a warm, calming color palette with soft gradients and organic shapes. Typography used gentle weights to create a soothing reading experience.",
          "Animations were designed to feel natural and unobtrusive, with smooth transitions between screens and subtle feedback for user actions."
        ],
        hasImage: true
      },
      {
        id: "showcase",
        title: "Final Showcase",
        content: [
          "Solstice Mobile has been well-received for its thoughtful approach to productivity. Users report reduced feelings of overwhelm and improved work-life balance.",
          "The app continues to evolve based on user feedback, with new features focused on deeper mindfulness integration and personalized insights."
        ],
        hasImage: true
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
        hasImage: true
      },
      {
        id: "challenge",
        title: "Challenge",
        content: [
          "The challenge was balancing AI generation with designer control. Too much automation can stifle creativity, while too little misses the AI's potential.",
          "Creating a UI that feels both powerful and approachable for designers with varying levels of technical expertise was also critical."
        ],
        hasImage: true
      },
      {
        id: "research",
        title: "Design Research",
        content: [
          "Research with designers revealed frustration with repetitive tasks in design system creation and a desire for tools that spark creative inspiration.",
          "There was also interest in AI tools that could serve as creative partners rather than replacement for human designers."
        ],
        hasImage: true
      },
      {
        id: "design-issue",
        title: "Design the Issue",
        content: [
          "The core issue was that designers often get stuck in creative ruts or spend too much time on tedious tasks. AI can help break these patterns.",
          "The solution needed to position AI as a collaborator, providing suggestions that designers can refine, remix, and make their own."
        ],
        hasImage: true
      },
      {
        id: "scenario",
        title: "User Scenario",
        content: [
          "Key scenarios: exploring color palettes for a new brand, generating typography combinations, prototyping layout variations, and exporting design tokens.",
          "Each scenario emphasized exploration and iteration, allowing designers to quickly test ideas without commitment."
        ],
        hasImage: true
      },
      {
        id: "prototyping",
        title: "Prototyping",
        content: [
          "Prototypes focused on the generation interface, preview panels, and export workflows. Special attention was given to making AI parameters accessible but not overwhelming.",
          "Testing revealed that designers wanted clear controls for guiding AI output while maintaining flexibility."
        ],
        hasImage: true
      },
      {
        id: "lofi",
        title: "Lo-Fi",
        content: [
          "Low-fidelity wireframes mapped out the core sections: color explorer, typography lab, layout generator, and export center. Navigation between these sections was tested for fluidity.",
          "The lo-fi phase helped establish that users preferred a single-page experience with contextual panels rather than multiple screens."
        ],
        hasImage: true
      },
      {
        id: "hifi",
        title: "Hi-Fi",
        content: [
          "High-fidelity designs embraced a dark mode-first aesthetic with vibrant accent colors that showcase the generative outputs. The interface uses a split-panel layout for simultaneous control and preview.",
          "Micro-interactions highlight AI generation progress and provide satisfying feedback when designs are exported or saved."
        ],
        hasImage: true
      },
      {
        id: "showcase",
        title: "Final Showcase",
        content: [
          "Chroma Atlas has become a go-to tool for designers looking to explore creative possibilities quickly. Its ability to generate and refine design system components has been particularly praised.",
          "The tool continues to expand with new AI capabilities and deeper integrations with popular design tools."
        ],
        hasImage: true
      }
    ]
  },
];
