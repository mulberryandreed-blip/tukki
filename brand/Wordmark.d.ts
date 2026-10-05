/** The Mulberry & Reed wordmark (transparent PNG). */
export interface WordmarkProps{
  /** berry = on Paper (default); ink = darkest; light = on Berry/Espresso */
  tone?:'berry'|'ink'|'light';
  /** px. Site nav uses 34 (54 on mobile). */
  height?:number;
  /** Path from the page to the design-system root, e.g. "../../". */
  base?:string;
  /** Explicit image URL; overrides tone/base (e.g. a bundler blob URL). */
  src?:string;
  alt?:string;
  style?:React.CSSProperties;
}
export declare function Wordmark(props:WordmarkProps):JSX.Element;
