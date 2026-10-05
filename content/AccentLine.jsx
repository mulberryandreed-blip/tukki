import React from 'react';
const C={ink:'var(--ink)',berry:'var(--berry)',paper:'var(--paper)'};
export function AccentLine({children,tone='ink',weight=600,style}){
  return <p style={{fontFamily:'var(--font-accent)',fontSize:'clamp(19px,2.4vw,24px)',fontWeight:weight,lineHeight:1.35,color:C[tone],margin:0,maxWidth:'24em',textWrap:'pretty',...style}}>{children}</p>;
}
