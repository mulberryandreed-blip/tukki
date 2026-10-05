/** About-page row: "01" + Cormorant H2 on the left (sticky), paragraphs right, bold closing line. */
export interface NumberedSectionProps{
  /** "01", "02"… */
  number?:string;
  title:React.ReactNode;
  /** Strings become 17px body paragraphs. */
  children?:React.ReactNode;
  /** Final emphasised sentence (Ink, 600). */
  closing?:React.ReactNode;
  style?:React.CSSProperties;
}
export declare function NumberedSection(props:NumberedSectionProps):JSX.Element;
