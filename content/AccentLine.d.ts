/** Bricolage Grotesque statement line — the one place the third typeface appears. */
export interface AccentLineProps{
  children?:React.ReactNode;
  tone?:'ink'|'berry'|'paper';
  /** 600 default; 700 for the tagline in "Our approach". */
  weight?:500|600|700;
  style?:React.CSSProperties;
}
export declare function AccentLine(props:AccentLineProps):JSX.Element;
