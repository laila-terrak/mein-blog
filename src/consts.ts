import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Laila Terrak",
  EMAIL: "lailaterrak@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Blog und Portfolio von Laila Terrak",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "Meine Blog Posts mit Ideen und Sachen die ich lerne und gelernt habe",
};

export const NOTES: Metadata = {
  TITLE: "Notes",
  DESCRIPTION:
     "Sammlung meiner wichtigsten Notizen, Ideen und Erkenntnisse, die für mich von Bedeutung sind.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projekte",
  DESCRIPTION: "Hier finden Sie meine Projekte",
};

export const SOCIALS: Socials = [
  {
    NAME: "Xing",
    HREF: "https://www.xing.com/profile/Laila_Terrak/web_profiles?expandNeffi=true",
  },
  {
    NAME: "github",
    HREF: "https://github.com/laila-terrak",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/laila-terrak-50a3a5208/",
  },
];
