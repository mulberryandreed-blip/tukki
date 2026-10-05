/** Large white search input; border turns Berry Deep on focus. */
export interface SearchFieldProps{
  placeholder?:string;
  value?:string;
  /** Receives the string value. */
  onChange?:(value:string)=>void;
  label?:string;
}
export declare function SearchField(props:SearchFieldProps):JSX.Element;
