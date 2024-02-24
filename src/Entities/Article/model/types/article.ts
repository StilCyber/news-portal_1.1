import { User } from 'Entities/User';
import { ArticleBlockType, ArticleType } from '../consts/constsArticle';

export interface ArticleBlockBase {
   id: string;
   type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
   type: ArticleBlockType.CODE;
   code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
   type: ArticleBlockType.IMAGE;
   src: string;
   title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
   type: ArticleBlockType.TEXT;
   paragraphs: string[];
   title?: string;
}

export type ArticleBlock =
   | ArticleCodeBlock
   | ArticleImageBlock
   | ArticleTextBlock;

export interface Article {
   id: string;
   user: User;
   title: string;
   subtitle: string;
   views: number;
   createdAt: string;
   img: string;
   type: ArticleType[];
   blocks: ArticleBlock[];
}
