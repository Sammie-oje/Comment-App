import { timeAgo } from "./timestamp.js";

export const addComment = (input) => {
  const timestamp = Date.now();
  return {
    id: timestamp,
    content: `${input}`,
    get createdAt() {
      return timeAgo(timestamp);
    },
    score: 0,
    user: {
      image: {
        png: "/images/avatars/juliusomo.png",
        webp: "/images/avatars/juliusomo.webp",
      },
      username: "juliusomo",
    },
    replies: [],
  };
};

export const addReply = (replyingTo, input) => {
  const timestamp = Date.now();

  return {
    id: timestamp,
    content: `${input}`,
    get createdAt() {
      return timeAgo(timestamp);
    },
    score: 0,
    replyingTo: `${replyingTo}`,
    user: {
      image: {
        png: "/images/avatars/juliusomo.png",
        webp: "/images/avatars/juliusomo.webp",
      },
      username: "juliusomo",
    },
  };
};
