import React from 'react';
const SZ={sm:{p:'10px 20px',f:15,w:500,lift:false},md:{p:'14px 28px',f:16,w:600,lift:true},lg:{p:'16px 32px',f:17,w:600,lift:true}};
const V={
 primary:{bg:'var(--berry)',fg:'var(--paper)',bd:'transparent',hbg:'var(--berry-press)',hfg:'var(--paper)',hbd:'transparent'},
 outline:{bg:'var(--paper)',fg:'var(--ink)',bd:'var(--border-button)',hbg:'var(--paper)',hfg:'var(--berry)',hbd:'var(--berry)'},
 inverse:{bg:'var(--paper)',fg:'var(--berry)',bd:'transparent',hbg:'#fff',hfg:'var(--berry-press)',hbd:'transparent'},
 'outline-inverse':{bg:'transparent',fg:'var(--paper)',bd:'var(--border-on-accent)',hbg:'rgba(250,247,242,.12)',hfg:'var(--paper)',hbd:'var(--border-on-accent)'},
};
export function Button({variant='primary',size='md',href,onClick,iconLeft,fullWidth=false,children,style,...rest}){
  const [h,setH]=React.useState(false);const [p,setP]=React.useState(false);
  const v=V[variant]||V.primary;const s=SZ[size]||SZ.md;
  const Tag=href?'a':'button';
  const tf=p?'scale(0.97)':h&&s.lift?'translateY(-2px)':'none';
  return <Tag href={href} onClick={onClick} type={href?undefined:'button'} {...rest}
    onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false)}} onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)}
    style={{display:iconLeft?'flex':'inline-block',alignItems:'center',justifyContent:'center',gap:10,textAlign:'center',padding:s.p,borderRadius:'var(--radius-pill)',
    background:h?v.hbg:v.bg,color:h?v.hfg:v.fg,border:v.bd==='transparent'?'0':'1.5px solid '+(h?v.hbd:v.bd),
    fontFamily:'var(--font-sans)',fontWeight:s.w,fontSize:s.f,lineHeight:1.2,whiteSpace:'nowrap',textDecoration:'none',cursor:'pointer',width:fullWidth?'100%':undefined,boxSizing:'border-box',
    transform:tf,transition:'transform .2s ease, background .2s ease, border-color .2s ease, color .2s ease',...style}}>
    {iconLeft}{children}
  </Tag>;
}
