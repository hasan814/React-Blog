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

export interface IPost {
  id: string;
  title: string;
  slug: string;
  coverPhoto: { url: string };
  author: { name: string; avatar: { url: string } };
}

export interface IAuthorPageProps {
  avatar: { url: string };
  name: string;
  field: string;
  description: { html: string };
  posts: IPost[];
}

export interface ICommentFormProps {
  slug: string | undefined;
}

export interface ICommentProps {
  slug: string | undefined;
}

export interface IComment {
  id: string;
  text: string;
  name: string;
  email?: string;
}
