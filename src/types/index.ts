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


export interface IAuthor {
  id: string;
  name: string;
  slug: string;
  avatar: {
    url: string;
  };
}


export interface IAuthorCardProps {
  slug: string;
  avatar: { url: string };
  name: string;
}

export interface AuthorCardProps extends IAuthorCardProps {
  isLast: boolean;
}