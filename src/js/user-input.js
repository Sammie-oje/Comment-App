export const addComment = (input) => {
  return {
    id: Date.now(),
    content: `${input}`,
    createdAt: "Just now",
    score: 0,
    user: {
      image: {
        png: "/public/avatars/image-juliusomo.png",
        webp: "/public/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
    },
    replies: [],
  };
};

export const addReply = (replyingTo, input) => {
  return {
    id: Date.now(),
    content: `${input}`,
    createdAt: "Just now",
    score: 0,
    replyingTo: `${replyingTo}`,
    user: {
      image: {
        png: "/public/avatars/image-juliusomo.png",
        webp: "/public/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
    },
  };
};
