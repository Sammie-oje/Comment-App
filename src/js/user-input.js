export const addComment = (input) => {
  return {
    id: Date.now(),
    content: `${input}`,
    createdAt: `1 week ago`,
    score: 0,
    user: {
      image: {
        png: "/images/avatars/image-juliusomo.png",
        webp: "/images/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
    },
    replies: [],
  };
};
