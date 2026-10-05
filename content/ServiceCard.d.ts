/**
 * Dark service tile for the Espresso "What we do" section.
 * @startingPoint section="Content" subtitle="Service grid on Espresso" viewport="700x320"
 */
export interface ServiceCardProps{
  name:string;
  /** One sentence. */
  desc:string;
  style?:React.CSSProperties;
}
export declare function ServiceCard(props:ServiceCardProps):JSX.Element;
