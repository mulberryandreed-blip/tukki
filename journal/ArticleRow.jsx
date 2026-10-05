import React from 'react';
export function ArticleRow({category,title,summary,readingTime,href='#',onClick}){
  const [h,setH]=React.useState(false);
  return <a href={href} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'block',padding:'22px 14px',margin:'0 -14px',borderBottom:'1px solid rgba(35,27,25,.1)',borderRadius:10,color:'var(--ink)',textDecoration:'none',background:h?'var(--oat-hover)':'transparent',transition:'background .15s ease'}}>
    <p style={{fontFamily:'var(--font-sans)',fontSize:12,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--berry-deep)',margin:'0 0 8px'}}>{category}</p>
    <h2 style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:'clamp(20px,3.5vw,25px)',lineHeight:1.2,margin:'0 0 6px',textWrap:'pretty'}}>{title}</h2>
    {summary&&<p style={{fontFamily:'var(--font-sans)',fontSize:16,lineHeight:1.5,color:'var(--ink-3)',margin:'0 0 12px',textWrap:'pretty'}}>{summary}</p>}
    {readingTime&&<span style={{display:'inline-flex',alignItems:'center',gap:8,fontFamily:'var(--font-sans)',fontSize:14,fontWeight:600,color:'var(--ink-5)'}}>{readingTime} <span style={{color:'var(--berry-deep)'}}>→</span></span>}
  </a>;
}
