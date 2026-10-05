import React from 'react';
export function UnderlineTabs({items=[],value,onChange}){
  return <div role="tablist" style={{display:'flex',gap:8,borderBottom:'1px solid rgba(35,27,25,.1)'}}>
    {items.map(it=>{const v=it.value??it,l=it.label??it,on=v===value;
      return <button key={v} role="tab" aria-selected={on} type="button" onClick={()=>onChange&&onChange(v)} style={{fontFamily:'var(--font-sans)',fontSize:16,fontWeight:600,background:'none',border:'none',cursor:'pointer',padding:'10px 4px',marginBottom:-1,borderBottom:'2.5px solid '+(on?'var(--berry-deep)':'transparent'),color:on?'var(--berry-deep)':'var(--ink-5)'}}>{l}</button>;})}
  </div>;
}
