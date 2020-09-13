interface PostDetails {
  title: string;
  date: string;
  author: {
    name: string;
    url?: string;
  };
  path: string;
  excerpt: string;
}

export { PostDetails };
