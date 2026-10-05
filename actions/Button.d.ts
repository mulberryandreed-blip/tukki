/**
 * Pill-shaped call to action, as used across the site.
 * @startingPoint section="Actions" subtitle="Pill CTAs: primary, outline, inverse" viewport="700x220"
 */
export interface ButtonProps{
  /** primary = Berry fill (default) · outline = Paper with hairline, hovers to Berry · inverse = Paper on Berry panels · outline-inverse = translucent on Berry panels */
  variant?:'primary'|'outline'|'inverse'|'outline-inverse';
  /** sm = nav CTA (15/500, no lift) · md = page CTA (16/600) · lg = contact panel (17/600) */
  size?:'sm'|'md'|'lg';
  /** Renders an <a> when set. */
  href?:string;
  onClick?:(e:React.MouseEvent)=>void;
  iconLeft?:React.ReactNode;
  fullWidth?:boolean;
  children?:React.ReactNode;
  style?:React.CSSProperties;
  target?:string;
  rel?:string;
}
export declare function Button(props:ButtonProps):JSX.Element;
