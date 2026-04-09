export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "scorecard",
    title: "Technical Support Specialist Scorecard",
    description:
      "Automated QA scoring system integrating ticketing, Toggl time-tracking, SLA metrics, and escalation data via APIs into a unified analyst dashboard.",
    tags: ["Python", "REST APIs", "Zoho Desk", "Toggl", "Google Sheets"],
    featured: true,
  },
  {
    slug: "toggl-sheets",
    title: "Toggl → Sheets Automation",
    description:
      "Apps Script pipeline pulling multi-workspace Toggl data into Google Sheets with daily triggers, billable filters, and automated monthly exports.",
    tags: ["Apps Script", "Toggl API", "Google Sheets"],
  },
  {
    slug: "ops-revenue",
    title: "Ops Revenue Report",
    description:
      "Automated Gmail report with inline HTML styling, data pipeline from ops systems, and row-capping logic to stay within email size limits.",
    tags: ["Apps Script", "Gmail API", "Monday.com"],
  },
  {
    slug: "ai-enablement",
    title: "Claude AI Enablement Program",
    description:
      "Three-session education roadmap rolling out Claude adoption org-wide, including training materials, prompt libraries, and usage tracking.",
    tags: ["Claude", "AI Strategy", "L&D", "Prompt Engineering"],
  },
  {
    slug: "monday-board",
    title: "Monday.com Board Manager",
    description:
      "Apps Script integration with declarative field config, parallel batch fetching, and GraphQL API calls for real-time ops dashboards.",
    tags: ["JavaScript", "Monday.com", "GraphQL", "Apps Script"],
  },
  {
    slug: "make-sop",
    title: "Make.com Automation SOP",
    description:
      "Enterprise-grade SOP covering governance, security, architecture, logging, and deployment standards across a multi-team automation platform.",
    tags: ["Make.com", "Documentation", "Ops", "Automation"],
  },
];
