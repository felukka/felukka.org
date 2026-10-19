export const writers = {
  mahmoud_farouk: {
    name: "Mahmoud Farouk",
    role: "Founder, Felukka",
    avatar: "MF",
    avatarColor: "#eac07d",
    bio: "Founder of Felukka, building cloud-native tools that bring calm to chaos.",
    github: "https://github.com/mahmoudk1000",
    linkedin: "https://linkedin.com/in/mahmoudk1000",
  },
  mahmoud_beshay: {
    name: "Mahmoud Beshay",
    role: "Co-Founder, Felukka",
    avatar: "MB",
    avatarColor: "#b1c9e0",
    bio: "Co-founder of Felukka, working on infrastructure tooling and distributed systems.",
    github: "https://github.com/bluzzdev",
    linkedin: "https://linkedin.com/in/mahmoubeshay",
  },
};

export type WriterKey = keyof typeof writers;
export type Writer = (typeof writers)[WriterKey];
