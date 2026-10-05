import React from 'react';
export function PostCard({href,image,title,tag,date,excerpt,imageNote='post cover'}){
  const [h,setH]=React.useState(false);
  return <a href={href} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{display:'block',color:'var(--ink)',textDecoration:'none',transform:h?'translateY(-6px)':'none',transition:'transform .3s cubic-bezier(.22,1,.36,1)'}}>
    <div style={{aspectRatio:'16/10',borderRadius:'var(--radius-card)',overflow:'hidden',background:'repeating-linear-gradient(135deg,#efe8dd,#efe8dd 12px,#e7ddce 12px,#e7ddce 24px)',margin:'0 0 18px',display:'flex',alignItems:'center',justifyContent:'center'}}>
      {image?<img src={image} alt={title} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',transform:h?'scale(1.06)':'none',transition:'transform .7s cubic-bezier(.22,1,.36,1)'}}/>
      :<span style={{fontFamily:'monospace',fontSize:12,color:'var(--oat-ink)',letterSpacing:'0.04em'}}>{imageNote}</span>}
    </div>
    <p style={{fontFamily:'var(--font-sans)',fontSize:13,fontWeight:600,letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--berry)',margin:'0 0 8px'}}>{tag} · {date}</p>
    <h3 style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:22,lineHeight:1.2,margin:'0 0 8px',textWrap:'pretty'}}>{title}</h3>
    <p style={{fontFamily:'var(--font-sans)',fontSize:15,lineHeight:1.55,color:'var(--ink-3)',margin:0,textWrap:'pretty'}}>{excerpt}</p>
  </a>;
}
