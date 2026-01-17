const config = {
  title: "Melih Koçhan | Portfolio",
  description: {
    long: "Explore the portfolio of Melih Koçhan, a passionate developer creating innovative web solutions and applications.",
    short:
      "Discover the portfolio of Melih Koçhan, a developer creating innovative solutions.",
  },
  keywords: [
    "Melih Koçhan",
    "melihkochan",
    "Melih Koçhan portfolio",
    "portfolio",
    "web development",
    "developer",
    "software engineer",
    "TypeScript",
    "React",
    "Next.js",
  ],
  author: "Melih Koçhan",
  email: "melihkochan00@gmail.com",
  site: "https://melihkochan.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/melihkochan1",
    linkedin: "https://www.linkedin.com/in/melih-kochan-7961371a2/",
    instagram: "https://www.instagram.com/melih_kochan/",
    facebook: "",
    github: "https://github.com/melihkochan",
  },
};
export { config };
