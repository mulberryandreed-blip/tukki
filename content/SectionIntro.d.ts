/** Eyebrow + Cormorant H2 (+ optional body/CTA). Left column of the site's two-column sections. */
export interface SectionIntroProps{
  eyebrow?:string;
  title:React.ReactNode;
  /** Body paragraphs and/or a Button beneath the heading. */
  children?:React.ReactNode;
  /** Sticks at 110px while the right column scrolls. */
  sticky?:boolean;
  onDark?:boolean;
  /** 400 (Pricing) or 500 (default). */
  weight?:400|500;
  style?:React.CSSProperties;
}
export declare function SectionIntro(props:SectionIntroProps):JSX.Element;
