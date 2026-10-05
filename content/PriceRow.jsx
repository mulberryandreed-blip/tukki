import React from 'react';
export function PriceRow({name,price,desc}){
  return <div style={{display:'grid',gridTemplateColumns:'minmax(130px,1fr) minmax(100px,0.9fr)',gap:'8px 16px',padding:'20px 0',borderBottom:'1px solid var(--border-default)',alignItems:'baseline'}}>
    <p style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:18,margin:0,color:'var(--ink)'}}>{name}</p>
    <p style={{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:16,color:'var(--berry)',margin:0,textAlign:'right'}}>{price}</p>
    {desc&&<p style={{fontFamily:'var(--font-sans)',fontSize:15,lineHeight:1.55,color:'var(--ink-2)',margin:0,gridColumn:'1 / -1'}}>{desc}</p>}
  </div>;
}
