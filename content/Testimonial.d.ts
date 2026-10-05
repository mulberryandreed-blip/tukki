/** Client quote with Berry rule on the left. */
export interface TestimonialProps{
  /** Without surrounding quote marks — they're added. */
  quote:string;
  /** e.g. "Client details withheld for confidentiality." */
  attribution?:string;
}
export declare function Testimonial(props:TestimonialProps):JSX.Element;
