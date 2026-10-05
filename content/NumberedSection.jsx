import React from 'react';
export function NumberedSection({number,title,children,closing,style}){
  const p={fontFamily:'var(--font-sans)',fontSize:17,lineHeight:1.65,color:'var(--ink-2)',margin:'0 0 14px',maxWidth:'40em'};
  return <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'clamp(20px,4vw,56px)',alignItems:'start',padding:'clamp(36px,5vw,56px) 0',borderTop:'1px solid rgba(35,27,25,.1)',...style}}>
    <div style={{position:'sticky',top:110,alignSelf:'start'}}>
      {number&&<p style={{fontFamily:'var(--font-sans)',fontSize:14,fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--berry)',margin:'0 0 12px'}}>{number}</p>}
      <h2 style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:'clamp(26px,3.4vw,36px)',letterSpacing:'-0.005em',margin:0,color:'var(--ink)'}}>{title}</h2>
    </div>
    <div>
      {(Array.isArray(children)?children:[children]).filter(Boolean).map((t,i)=>typeof t==='string'?<p key={i} style={p}>{t}</p>:<React.Fragment key={i}>{t}</React.Fragment>)}
      {closing&&<p style={{...p,color:'var(--ink)',fontWeight:600,margin:0}}>{closing}</p>}
    </div>
  </section>;
}
