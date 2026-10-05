/** Article callouts: short (white summary box), example (oat panel of Cormorant lines), remember (double Berry rules). */
export interface ArticleCalloutProps{
  variant?:'short'|'example'|'remember';
  /** Overrides "The short version" / "Remember this". */
  label?:string;
  children?:React.ReactNode;
  /** Example variant: explanatory note under the lines. */
  note?:string;
}
export declare function ArticleCallout(props:ArticleCalloutProps):JSX.Element;
