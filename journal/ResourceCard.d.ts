/** Downloadable free-tool card: "Free tool" chip, ghost number, title, includes, PDF button. */
export interface ResourceCardProps{
  /** Ghosted index, e.g. "01". */
  number?:string;
  category?:string;
  title:string;
  description?:string;
  includes?:string;
  /** "6 pages" */
  pageCount?:string;
  /** PDF URL. */
  href?:string;
}
export declare function ResourceCard(props:ResourceCardProps):JSX.Element;
