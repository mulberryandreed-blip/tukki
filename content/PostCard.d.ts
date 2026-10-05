/** Journal post teaser: 16:10 cover (striped placeholder when missing), meta, title, excerpt. */
export interface PostCardProps{
  href?:string;
  /** Cover image URL. Omit to show the oat-striped placeholder. */
  image?:string;
  title:string;
  /** Category, e.g. "Brand". */
  tag:string;
  /** e.g. "Sep 2026". */
  date:string;
  excerpt?:string;
  imageNote?:string;
}
export declare function PostCard(props:PostCardProps):JSX.Element;
