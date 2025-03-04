export interface ICardEL {
  title: string;
  slug: string;
  coverPhoto: { url: string };
  author: {
    avatar: {
      url: string;
    };
    name: string;
  };
}
