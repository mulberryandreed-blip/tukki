import React from 'react';
export function StepList({steps=[]}){
  return <ol style={{margin:0,padding:0,listStyle:'none'}}>
    {steps.map((t,i)=><li key={i} style={{position:'relative',padding:'0 0 14px 40px',fontFamily:'var(--font-sans)',fontSize:17,lineHeight:1.55,color:'var(--ink-article)',textWrap:'pretty'}}>
      <span style={{position:'absolute',left:0,top:0,width:26,height:26,borderRadius:'50%',background:'var(--berry-deep)',color:'var(--paper)',fontSize:14,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center'}}>{i+1}</span>{t}
    </li>)}
  </ol>;
}
