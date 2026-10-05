/** One line of the pricing guide. Stack inside a container with a top hairline. */
export interface PriceRowProps{
  name:string;
  /** "Free", "From $1,500", "Custom"… */
  price:string;
  desc?:string;
}
export declare function PriceRow(props:PriceRowProps):JSX.Element;
