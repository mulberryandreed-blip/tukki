import React from 'react';
import {Eyebrow} from './Eyebrow.jsx';
export function SectionIntro({eyebrow,title,children,sticky=false,onDark=false,weight=500,style}){
  return <div style={{position:sticky?'sticky':'static',top:110,alignSelf:'start',...style}}>
    {eyebrow&&<Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
    <h2 style={{fontFamily:'var(--font-display)',fontWeight:weight,fontSize:'clamp(30px,4.5vw,52px)',letterSpacing:'-0.005em',lineHeight:1.08,margin:children?'0 0 18px':0,color:onDark?'var(--paper)':'var(--ink)',textWrap:'pretty'}}>{title}</h2>
    {children&&<div style={{fontFamily:'var(--font-sans)',fontSize:17,lineHeight:1.65,color:onDark?'var(--text-inverse-muted)':'var(--ink-2)'}}>{children}</div>}
  </div>;
}
