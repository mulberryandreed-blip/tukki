import React from 'react';
export function Eyebrow({children,onDark=false,style}){
  return <p style={{fontFamily:'var(--font-sans)',fontSize:14,fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase',color:onDark?'var(--rose)':'var(--berry)',margin:'0 0 16px',...style}}>{children}</p>;
}
