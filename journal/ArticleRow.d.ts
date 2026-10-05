/** Text-only guide row in the Journal list; oat wash on hover. */
export interface ArticleRowProps{
  category:string;
  /** Usually a question, e.g. "Do I need a rebrand?" */
  title:string;
  summary?:string;
  /** "3 min read" */
  readingTime?:string;
  href?:string;
  onClick?:(e:React.MouseEvent)=>void;
}
export declare function ArticleRow(props:ArticleRowProps):JSX.Element;
