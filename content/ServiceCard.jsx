import React from 'react';
export function ServiceCard({name,desc,style}){
  const [h,setH]=React.useState(false);
  return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:h?'var(--espresso-3)':'var(--espresso-2)',border:'1px solid var(--border-on-dark)',borderRadius:'var(--radius-card)',padding:'28px 26px',transition:'background .25s ease',...style}}>
    <p style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:21,margin:'0 0 10px',color:'var(--paper)'}}>{name}</p>
    <p style={{fontFamily:'var(--font-sans)',fontSize:15,lineHeight:1.55,color:'var(--text-inverse-muted)',margin:0,textWrap:'pretty'}}>{desc}</p>
  </div>;
}
