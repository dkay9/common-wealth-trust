export type NavCard = {
  title: string;
  anchor: string;
  img: string;
};

export type NavGroup = {
  label: string;
  basePath: string;
  items: NavCard[];
};

export const aboutNav: NavGroup = {
  label: "About Us",
  basePath: "/about",
  items: [
    {
      title: "Mission, Vision & Values",
      anchor: "mission-vision-values",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=300&auto=format&fit=crop",
    },
    {
      title: "History",
      anchor: "history",
      img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=300&auto=format&fit=crop",
    },
    {
      title: "Theory of Change",
      anchor: "theory-of-change",
      img: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=300&auto=format&fit=crop",
    },
    {
      title: "Impact & Accountability",
      anchor: "impact-accountability",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=300&auto=format&fit=crop",
    },
    {
      title: "Our Team",
      anchor: "team",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=300&auto=format&fit=crop",
    },
  ],
};

export const whatWeDoNav: NavGroup = {
  label: "What We Do",
  basePath: "/what-we-do",
  items: [
    {
      title: "Where We Work",
      anchor: "where-we-work",
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=300&auto=format&fit=crop",
    },
    {
      title: "Who We Serve",
      anchor: "who-we-serve",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=300&auto=format&fit=crop",
    },
    {
      title: "Programs",
      anchor: "programs",
      img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=300&auto=format&fit=crop",
    },
    {
      title: "What We Prioritize",
      anchor: "what-we-prioritize",
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=300&auto=format&fit=crop",
    },
    {
      title: "Success Stories",
      anchor: "success-stories",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=300&auto=format&fit=crop",
    },
  ],
};

export const supportNav: NavGroup = {
  label: "Support Our Mission",
  basePath: "/support",
  items: [
    {
      title: "Partner With Us",
      anchor: "partner",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=300&auto=format&fit=crop",
    },
    {
      title: "Donate",
      anchor: "donate",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=300&auto=format&fit=crop",
    },
  ],
};

export const navGroups: NavGroup[] = [aboutNav, whatWeDoNav, supportNav];
