/** Two-or-three-way view switch with a 2.5px underline ("Guides" / "Free tools"). */
export interface UnderlineTabsProps{
  items:(string|{value:string;label:string})[];
  value:string;
  onChange?:(value:string)=>void;
}
export declare function UnderlineTabs(props:UnderlineTabsProps):JSX.Element;
