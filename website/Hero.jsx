function Hero({onPop}){
 const {Button}=window.DS;const L=MR.heroLines;const all=L.join('');
 const [t,setT]=React.useState(all.length);const [caret,setCaret]=React.useState(false);
 React.useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;setT(0);setCaret(true);let n=0,tm;
  const step=()=>{n++;setT(n);if(n<all.length){tm=setTimeout(step,all[n-1]==='.'?340:42+Math.random()*46)}else tm=setTimeout(()=>setCaret(false),1600)};tm=setTimeout(step,500);return()=>clearTimeout(tm)},[]);
 const l1=L[0].slice(0,t),l2=L[1].slice(0,Math.max(0,t-L[0].length)),l3=L[2].slice(0,Math.max(0,t-L[0].length-L[1].length));
 const pop=e=>{const b=e.currentTarget;b.animate&&b.animate([{transform:'translate(-50%,-50%) scale(1)'},{transform:'translate(-50%,-50%) scale(.72,.55)'},{transform:'translate(-50%,-50%) scale(1)'}],{duration:240,easing:'ease-out'});onPop&&onPop(e.clientX,e.clientY)};
 return <header id="top" style={{padding:'clamp(56px,10vw,120px) clamp(20px,5vw,64px) clamp(48px,8vw,96px)',maxWidth:1100,margin:'0 auto',position:'relative'}}>
  <div className="mr-plant">
   <div className="mr-lean mr-lean-a" aria-hidden="true"><div className="mr-sway-a"><img src={MRres('bush','../../assets/illustrations/mulberry-bush.png')} alt=""/></div></div>
   <div className="mr-lean mr-lean-b" aria-hidden="true"><div className="mr-sway-b"><img src={MRres('bush','../../assets/illustrations/mulberry-bush.png')} alt=""/></div></div>
   {MR.berryPos.map((p,i)=><button key={i} className="mr-berry" tabIndex={-1} aria-hidden="true" style={{left:p[0]+'%',top:p[1]+'%'}} onClick={pop}/>)}
  </div>
  <h1 className="mr-hero" style={{position:'relative',zIndex:3,fontFamily:'var(--font-display)',fontWeight:400,fontSize:'clamp(40px,7.5vw,92px)',lineHeight:1.02,letterSpacing:'-0.005em',margin:'0 0 28px',minHeight:'3.06em',color:'var(--ink)'}}>{l1}<br/>{l2}<br/><span style={{color:'var(--berry)'}}>{l3}</span>{caret&&<span className="mr-caret" aria-hidden="true"/>}</h1>
  <p className="mr-hero" style={{position:'relative',zIndex:3,animationDelay:'.15s',fontSize:'clamp(18px,2.2vw,23px)',lineHeight:1.5,maxWidth:'34em',margin:'0 0 36px',color:'var(--ink-2)',textWrap:'pretty',background:'rgba(250,247,242,.85)',boxShadow:'var(--shadow-halo)',borderRadius:8,width:'fit-content'}}>{MR.heroBody}</p>
  <div className="mr-hero" style={{position:'relative',zIndex:3,animationDelay:'.28s',display:'flex',flexWrap:'wrap',gap:14}}><Button href="#contact">Let's connect</Button><Button variant="outline" href="#work">What we do</Button></div>
 </header>;
}
function useStains(){
 const [stains,setS]=React.useState([]);const [falls,setF]=React.useState([]);const ref=React.useRef();
 const R=(a,b)=>a+Math.random()*(b-a);const br=()=>Math.round(R(35,68));
 const add=(x,y)=>{const sw=R(36,84),sh=sw*R(.75,1.1);
  const drop=()=>({position:'absolute',left:Math.round(R(-18,105))+'%',top:Math.round(R(-14,104))+'%',width:R(3,7),height:R(3,8),borderRadius:'50% 50% 55% 45%/45% 55% 50% 50%',background:'rgba(64,10,28,'+R(.3,.55).toFixed(2)+')'});
  setS(s=>s.concat({id:Math.random(),style:{left:x-sw/2,top:y-sh/2,width:sw,height:sh,borderRadius:br()+'% '+br()+'% '+br()+'% '+br()+'% / '+br()+'% '+br()+'% '+br()+'% '+br()+'%',background:'radial-gradient(58% 54% at '+Math.round(R(38,62))+'% '+Math.round(R(38,62))+'%, rgba(52,7,24,'+R(.5,.65).toFixed(2)+'), rgba(94,18,38,'+R(.32,.44).toFixed(2)+') 55%, rgba(123,27,51,.16) 78%, rgba(123,27,51,0) 100%)',transform:'rotate('+Math.round(R(0,360))+'deg)'},d:[drop(),drop()]}).slice(-6))};
 const onPop=(cx,cy)=>{const r=ref.current.getBoundingClientRect();const x=cx-r.left,y=cy-r.top;
  if(Math.random()<.3&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const id=Math.random();setF(f=>f.concat({id,x,y}));setTimeout(()=>{setF(f=>f.filter(z=>z.id!==id));add(x,y+98)},480)}else add(x,y+4)};
 const layer=<div ref={ref} aria-hidden="true" style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none',zIndex:0}}>
  {stains.map(s=><div key={s.id} className="mr-stain" style={s.style}>{s.d.map((d,i)=><div key={i} style={d}/>)}</div>)}
  {falls.map(f=><div key={f.id} className="mr-fall" style={{left:f.x-5,top:f.y+8}}/>)}</div>;
 return [layer,onPop];
}
Object.assign(window,{Hero,useStains});
