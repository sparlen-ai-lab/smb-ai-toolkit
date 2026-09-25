/**
 * Site copy. Edit this file to change what the page says.
 * Leave `calendlyUrl` empty to show the scheduling placeholder.
 */

export const site = {
  name: "Sparlen",
  url: "https://sparlen.com",
  title: "Sparlen — AI Agent Consulting & Development",
  description:
    "Sparlen designs and deploys AI agents that run business workflows: knowledge assistants, document extraction, and internal automation.",
  email: "hello@sparlen.com",
  calendlyUrl: "" as string,
  social: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "AI consulting and freelance delivery",
    headline: "We build AI agents that run your business workflows.",
    subheadline:
      "Sparlen designs, builds, and deploys agent systems for teams that need them in production — RAG chatbots, document extraction, and internal automation — with the judgment of a consultancy and the pace of a freelance practice.",
    primaryCta: "Book a Free Consultation",
    secondaryCta: "See Our Work",
  },
  services: {
    eyebrow: "Services",
    title: "Agent systems, scoped to a real workflow.",
    lede: "We take one operational job at a time: the documents, the questions, or the handoffs your team repeats. Then we put an agent around it that your operators can trust.",
    items: [
      {
        title: "RAG Chatbots & Knowledge Assistants",
        description:
          "Assistants that answer from your policies, products, and internal documents, and show where the answer came from.",
        outcomes: [
          "Fewer repetitive questions for specialists",
          "Cited answers from sources you approve",
          "A clear handoff when the agent should stop",
        ],
      },
      {
        title: "Document Intelligence & Extraction Pipelines",
        description:
          "Pipelines that read contracts, invoices, claims, and forms and return structured fields your existing systems can use.",
        outcomes: [
          "Consistent extraction across document types",
          "Exceptions queued for a person, not dropped",
          "Outputs shaped to the tools you already run",
        ],
      },
      {
        title: "Internal Workflow Automation Agents",
        description:
          "Agents that watch a queue, an inbox, or a system of record and complete the steps your team does by hand.",
        outcomes: [
          "Shorter cycle time on routine work",
          "A log of every action the agent takes",
          "Guardrails before anything writes back",
        ],
      },
      {
        title: "Custom LLM Integration & Consulting",
        description:
          "An architecture and a build plan before production code: model choice, retrieval, evaluation, and where a person stays in the loop.",
        outcomes: [
          "A stack matched to your data and constraints",
          "Evaluation criteria written before the demo",
          "A roadmap your operators can own",
        ],
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "Engagements, told by the workflow.",
    lede: "A sample of the workflows we take on. Client names stay private.",
    items: [
      {
        sector: "BFSI operations",
        title: "Claims intake that stops at the exception",
        summary:
          "An extraction agent reads incoming claim packets, files structured fields, and routes only the ambiguous cases to adjusters. The queue got shorter because the routine packets no longer waited on a person.",
      },
      {
        sector: "Telecom support",
        title: "A policy assistant with sources attached",
        summary:
          "Contact-center agents ask a knowledge assistant grounded in current plans and procedures. Answers cite the passage. When the policy is missing or conflicting, the assistant says so.",
      },
      {
        sector: "Logistics back office",
        title: "Document routing across a daily pile",
        summary:
          "Bills of lading, delivery notes, and invoices land in one inbox. An agent classifies them, extracts the fields operations needs, and pushes clean records downstream.",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "Four steps, from workflow to production.",
    lede: "A short engagement with a named outcome. We do not start with a model. We start with the work.",
    steps: [
      {
        title: "Discover",
        description:
          "Map the workflow, the documents, the systems of record, and the exact point where an agent should stop and ask a person.",
      },
      {
        title: "Design",
        description:
          "Define retrieval, tools, evaluation cases, and the human checkpoints. Agree what “good” looks like before we build.",
      },
      {
        title: "Build",
        description:
          "Ship a narrow agent against real documents and edge cases. Measure it. Cut anything that does not earn its place.",
      },
      {
        title: "Deploy & Support",
        description:
          "Put it in your environment, watch how it behaves, and tighten prompts, retrieval, and guardrails as the work changes.",
      },
    ],
  },
  about: {
    eyebrow: "Why Sparlen",
    title: "Consulting judgment. Freelance speed.",
    lede: "Sparlen is a small practice for companies that want an agent in production, not a slide about one.",
    points: [
      {
        title: "Proven enterprise experience",
        description:
          "The work is shaped by telecom, BFSI, and logistics environments, where volume, audit trails, and uptime are part of the requirement — not a later phase.",
      },
      {
        title: "Fast freelance-style delivery",
        description:
          "You work directly with the people building the system. Engagements are scoped in weeks, with a working agent as the milestone, not a program office.",
      },
      {
        title: "Production-grade LLM and RAG architecture",
        description:
          "Retrieval, evaluation, access control, and observability are designed in from the start, so the agent can sit next to the systems your business already trusts.",
      },
    ],
  },
  stack: {
    label: "Tools we ship with",
    items: [
      "Python",
      "LangChain",
      "FastAPI",
      "Qdrant / FAISS",
      "AWS · Azure · GCP",
      "OpenAI · Anthropic · Llama",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Tell us the workflow.",
    lede: "A short brief is enough: what the team does today, where it stalls, and what a finished agent would hand back.",
    calendlyLabel: "Book a call",
    calendlyNote:
      "A calendar embed belongs here. Until it is connected, email us and we will send times.",
    submit: "Send the brief",
    success:
      "Your email app should open with this brief. If it does not, write to us directly.",
  },
  footer: {
    blurb: "AI agent consulting and development.",
  },
} as const;
