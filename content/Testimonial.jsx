import React from 'react';
export function Testimonial({quote,attribution}){
  return <blockquote style={{margin:0,padding:'0 0 0 22px',borderLeft:'3px solid var(--berry)'}}>
    <p style={{fontFamily:'var(--font-accent)',fontSize:'clamp(19px,2.4vw,24px)',fontWeight:500,lineHeight:1.5,color:'var(--ink)',margin:'0 0 14px',maxWidth:'30em',textWrap:'pretty'}}>"{quote}"</p>
    {attribution&&<p style={{fontFamily:'var(--font-sans)',fontSize:15,color:'var(--ink-5)',margin:0}}>{attribution}</p>}
  </blockquote>;
}
