/** Category / need filter chip used on the Journal. */
export interface FilterPillProps{
  label:string;
  active?:boolean;
  onClick?:()=>void;
}
export declare function FilterPill(props:FilterPillProps):JSX.Element;
