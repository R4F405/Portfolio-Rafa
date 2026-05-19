export const social = [
  { url: "mailto:sanpablorafa@gmail.com", name: "mail" },
  { url: "https://github.com/R4F405", name: "github" },
  { url: "https://www.linkedin.com/in/rafaspg/", name: "linkedin" },
  { url: "https://www.instagram.com/rafa__030/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
