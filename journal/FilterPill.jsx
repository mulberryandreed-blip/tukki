import React from 'react';
export function FilterPill({label,active=false,onClick}){
  return <button type="button" onClick={onClick} style={{fontFamily:'var(--font-sans)',fontSize:14,fontWeight:600,whiteSpace:'nowrap',padding:'9px 16px',borderRadius:'var(--radius-pill)',cursor:'pointer',transition:'all .12s ease',border:'1.5px solid '+(active?'var(--berry-deep)':'var(--border-pill)'),background:active?'var(--berry-deep)':'transparent',color:active?'var(--paper)':'var(--ink-2)'}}>{label}</button>;
}
