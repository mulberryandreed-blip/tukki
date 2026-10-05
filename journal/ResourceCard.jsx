import React from 'react';
export function ResourceCard({number,category,title,description,includes,pageCount,href='#'}){
  const [h,setH]=React.useState(false);
  return <article style={{border:'1.5px solid var(--border-input)',borderRadius:'var(--radius-card)',padding:'clamp(20px,4vw,30px)',background:'#fff',fontFamily:'var(--font-sans)'}}>
    <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:14,margin:'0 0 14px'}}>
      <span style={{fontSize:11,fontWeight:700,letterSpacing:'0.16em',textTransform:'uppercase',color:'var(--berry-deep)',border:'1px solid rgba(94,18,38,.35)',borderRadius:'var(--radius-pill)',padding:'4px 10px'}}>Free tool</span>
      {number&&<span style={{fontFamily:'var(--font-display)',fontWeight:400,fontSize:'clamp(26px,5vw,34px)',lineHeight:1,color:'rgba(94,18,38,.25)',letterSpacing:'-0.02em'}}>{number}</span>}
    </div>
    {category&&<p style={{fontSize:12,fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ink-5)',margin:'0 0 8px'}}>{category}</p>}
    <h2 style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:'clamp(21px,3.6vw,26px)',lineHeight:1.15,margin:'0 0 8px',textWrap:'pretty',color:'var(--ink)'}}>{title}</h2>
    {description&&<p style={{fontSize:16,lineHeight:1.55,color:'var(--ink-2)',margin:'0 0 16px',maxWidth:'38em'}}>{description}</p>}
    {(includes||pageCount)&&<div style={{display:'flex',flexWrap:'wrap',gap:'8px 18px',margin:'0 0 18px',fontSize:14,color:'var(--ink-3)'}}>{includes&&<span><strong style={{color:'var(--ink)'}}>Includes:</strong> {includes}</span>}{pageCount&&<span>{pageCount}</span>}</div>}
    <a href={href} download onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'12px 22px',borderRadius:'var(--radius-pill)',background:h?'var(--berry-deep-hover)':'var(--berry-deep)',color:'var(--paper)',fontSize:15,fontWeight:600,textDecoration:'none'}}>Download PDF <span aria-hidden="true">→</span></a>
  </article>;
}
