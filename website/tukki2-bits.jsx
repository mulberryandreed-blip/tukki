const {useState,useRef,useEffect,useCallback,createContext,useContext}=React;
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const RM=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
const SeedCtx=createContext({found:[],find:()=>{}});

function useProgress(ref){const [p,setP]=useState(0);
 useEffect(()=>{let raf=0;const on=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{const el=ref.current;if(!el)return;const r=el.getBoundingClientRect();setP(clamp(-r.top/Math.max(1,r.height-innerHeight)))})};on();addEventListener('scroll',on,{passive:true});addEventListener('resize',on);return()=>{removeEventListener('scroll',on);removeEventListener('resize',on)}},[]);
 return p;}

function Seed({n,style}){const {found,find}=useContext(SeedCtx);const f=found.includes(n);
 return <button className={'t2-seed'+(f?' found':'')} style={style} aria-label="توتة صغيرة" onClick={e=>{e.stopPropagation();if(!f){e.currentTarget.animate&&e.currentTarget.animate([{transform:'scale(1)'},{transform:'scale(2.2)'},{transform:'scale(1)'}],{duration:320});find(n)}}}><i></i></button>;}

function Note({children,style,r=-2}){return <span className="t2-hand" style={{display:'inline-block',fontSize:16,transform:`rotate(${r}deg)`,...style}}>{children}</span>;}

/* ink stains left by the draggable berry */
function useStains(rootRef){const [st,setSt]=useState([]);
 const add=useCallback((cx,cy)=>{const r=rootRef.current.getBoundingClientRect();const s=14+Math.random()*22;setSt(a=>[...a.slice(-70),{x:cx-r.left-s/2,y:cy-r.top-s/2,s,rot:Math.random()*360,k:Math.random()}])},[]);
 const layer=<div aria-hidden="true" style={{position:'absolute',inset:0,zIndex:1,pointerEvents:'none',overflow:'hidden'}}>{st.map((d,i)=><span key={i} className="t2-stain" style={{left:d.x,top:d.y,width:d.s,height:d.s*(.8+d.k*.4),transform:`rotate(${d.rot}deg)`}}></span>)}</div>;
 return [layer,add];}

function DragBerry({onStain}){const el=useRef();const st=useRef(null);const [moved,setMoved]=useState(false);
 const down=e=>{el.current.setPointerCapture(e.pointerId);st.current={x:e.clientX,y:e.clientY,lx:e.clientX,ly:e.clientY}};
 const move=e=>{if(!st.current)return;const s=st.current;el.current.style.transform=`translate(${e.clientX-s.x}px,${e.clientY-s.y}px) scale(1.1)`;if(Math.hypot(e.clientX-s.lx,e.clientY-s.ly)>12){onStain(e.clientX,e.clientY);s.lx=e.clientX;s.ly=e.clientY;setMoved(true)}};
 const up=()=>{if(!st.current)return;st.current=null;const b=el.current;b.style.transition='transform .5s cubic-bezier(.3,1.6,.5,1)';b.style.transform='';setTimeout(()=>b.style.transition='',520)};
 return <div style={{display:'flex',alignItems:'center',gap:10}}>
  <div ref={el} className="t2-berry" onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} role="img" aria-label="توتة تقدر تسحبها" style={{width:34,height:34,touchAction:'none',cursor:'grab',boxShadow:'inset -3px -4px 0 rgba(0,0,0,.18),0 4px 8px rgba(46,15,45,.35)',position:'relative',zIndex:8}}></div>
  <Note r={-3} style={{fontSize:14,color:'var(--ink-3)'}}>{moved?'(هسه شوف شسويت.)':'(اسحبها. ما تعضّ.)'}</Note></div>;}

function Hero({onStain}){const dot=useRef(),word=useRef(),hero=useRef();const [burst,setBurst]=useState(0);const hold=useRef();
 const drop=()=>{if(RM())return;const d=hero.current.getBoundingClientRect().bottom-dot.current.getBoundingClientRect().bottom-30;
  dot.current.animate([{transform:'translateY(0)'},{transform:`translateY(${d}px) scale(1.2,.8)`,offset:.32,easing:'cubic-bezier(.55,0,1,.45)'},{transform:`translateY(${d-60}px)`,offset:.45,easing:'ease-out'},{transform:`translateY(${d}px) scale(1.1,.9)`,offset:.56,easing:'ease-in'},{transform:`translateY(${d}px)`,offset:.82},{transform:'translateY(0)',easing:'cubic-bezier(.3,1.4,.5,1)'}],{duration:3200});};
 const pd=()=>{hold.current=setTimeout(()=>{setBurst(b=>b+1);word.current.animate&&word.current.animate([{transform:'scale(1)'},{transform:'scale(1.06,.9)'},{transform:'scale(1)'}],{duration:380,easing:'cubic-bezier(.3,1.6,.5,1)'})},520)};
 const pu=()=>clearTimeout(hold.current);
 useEffect(()=>{const t=setTimeout(drop,900);const r=()=>setTimeout(drop,300);addEventListener('t2-rewound',r);return()=>{clearTimeout(t);removeEventListener('t2-rewound',r)}},[]);
 return <header ref={hero} id="top" style={{position:'relative',zIndex:2,minHeight:'88svh',padding:'40px 22px 28px',display:'flex',flexDirection:'column',justifyContent:'center'}}>
  <span className="t2-reg" style={{top:22,left:22}}></span><span className="t2-reg" style={{bottom:22,right:22}}></span>
  <p className="t2-kick" style={{marginBottom:4}}>تدريب تسويقي للأعمال في العراق</p>
  <div style={{position:'relative',width:'fit-content'}}>
   <h1 ref={word} onPointerDown={pd} onPointerUp={pu} onPointerLeave={pu} onContextMenu={e=>e.preventDefault()} style={{fontFamily:'var(--disp)',fontWeight:900,fontSize:'min(46vw,200px)',lineHeight:1.75,margin:'-0.1em 0 0',paddingBottom:'0.18em',color:'var(--ink)',userSelect:'none',WebkitUserSelect:'none',cursor:'pointer'}}>تُكِّي</h1>
   {burst>0&&<span key={burst} aria-hidden="true">{[...Array(7)].map((_,i)=>{const a=i/7*Math.PI*2;return <span key={i} className="t2-berry" style={{position:'absolute',left:'45%',top:'45%',width:12,height:12,'--dx':Math.cos(a)*110+'px','--dy':Math.sin(a)*90+'px',animation:'t2-burst .7s ease-out forwards'}}></span>})}</span>}
  </div>
  <p className="t2-p" style={{fontSize:19,maxWidth:'22em',margin:'6px 0 6px'}}>نساعد المشاريع تفهم المشكلة، ترتب أفكارها، وتعرف شنو الخطوة الجاية.</p>
  <Note r={-2} style={{marginBottom:26}}>(لأن مو كل مشكلة تحتاج حملة.)</Note>
  <div style={{display:'flex',flexWrap:'wrap',gap:12,marginBottom:30}}><a className="t2-press" href="#contact">احجز مكالمة تعارف مجانية</a></div>
  <DragBerry onStain={onStain}/>
  <Seed n={1} style={{bottom:70,left:'38%'}}/>
  <p className="t2-hand" aria-hidden="true" style={{position:'absolute',bottom:10,left:0,right:0,textAlign:'center',fontSize:14,color:'var(--ink-4)',animation:'t2-nudge 1.8s ease-in-out infinite',margin:0}}>نزّل ↓</p>
 </header>;}

/* scroll story: idea → problem → stuck → let's see → dots cluster, reeds connect */
const SCAT=[[12,18],[82,12],[30,78],[70,70],[90,48],[8,58],[52,8],[58,92],[40,40]];
const CLUS=[[44,38],[56,40],[50,50],[40,52],[60,54],[47,62],[55,64],[50,30],[38,42]];
function Story(){const ref=useRef();const p=useProgress(ref);const rm=RM();
 const seg=(a,b)=>clamp((p-a)/(b-a));const A=seg(0,.22),B=seg(.22,.44),C=seg(.44,.64),D=seg(.64,1);
 const win=(x,last)=>rm?1:(x<=0?0:x<.18?x/.18:(last||x<.82)?1:(1-x)/.18);
 const line={position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'0 22px'};
 const big={fontFamily:'var(--disp)',fontWeight:900,fontSize:'min(15vw,68px)',lineHeight:1.4,margin:0};
 const k=Math.sin(B*Math.PI);const stopX=C<.45?(1-C/.45)*-120:C<.55?Math.sin((C-.45)/.1*Math.PI)*6:0;
 const cl=clamp((D-.18)/.35),rd=clamp((D-.5)/.3);
 if(rm)return <section className="t2-sec" style={{textAlign:'center',display:'grid',gap:18}}><p style={big}>عندك فكرة؟</p><p style={big}>مشكلة؟</p><p style={big}>مشروع واقف؟</p><p className="t2-hand" style={{fontSize:34,margin:0}}>خل نشوف.</p></section>;
 return <section ref={ref} style={{position:'relative',zIndex:2,height:'420vh'}}>
  <div style={{position:'sticky',top:0,height:'100svh',overflow:'hidden'}}>
   <div style={{...line,opacity:win(A)}}><p style={big}>عندك <span style={{display:'inline-block',color:'var(--berry)',transform:`translateX(${(.5-A)*90}%) rotate(${(A-.5)*-14}deg)`}}>فكرة؟</span></p></div>
   <div style={{...line,opacity:win(B)}}><p style={{...big,transform:`rotate(${Math.sin(B*38)*5*k}deg) skewX(${Math.sin(B*23)*8*k}deg)`,textShadow:`${4*k}px ${-3*k}px 0 rgba(201,138,155,.8),${-5*k}px ${4*k}px 0 rgba(123,27,51,.35),${2*k}px ${6*k}px 0 rgba(35,27,25,.15)`,textDecoration:'underline wavy',textDecorationColor:`rgba(123,27,51,${k})`,textDecorationThickness:2,textUnderlineOffset:14}}>مشكلة؟</p></div>
   <div style={{...line,opacity:win(C)}}><p style={{...big,transform:`translateX(${stopX}%)`}}>مشروع واقف؟</p>
    <span className="t2-stamp" style={{marginTop:18,fontSize:22,opacity:C>.55?.85:0,transform:`rotate(-9deg) scale(${C>.55?1:1.8})`,transition:'transform .18s cubic-bezier(.3,1.6,.5,1),opacity .1s'}}>متوقف</span></div>
   <div style={{...line,opacity:win(D,true),justifyContent:'flex-start',paddingTop:'14svh'}}>
    <p className="t2-hand" style={{fontSize:'min(12vw,52px)',margin:0,transform:`rotate(-3deg) scale(${.85+clamp(D/.15)*.15})`}}>خل نشوف.</p>
    <div aria-hidden="true" style={{position:'relative',width:'min(80vw,340px)',aspectRatio:'1',marginTop:8}}>
     {rd>0&&CLUS.slice(0,7).map((c,i)=>{const n=CLUS[(i+2)%7];const dx=n[0]-c[0],dy=n[1]-c[1];return <span key={'l'+i} style={{position:'absolute',left:c[0]+'%',top:c[1]+'%',width:Math.hypot(dx,dy)+'%',height:1.5,background:'var(--leaf-green)',transformOrigin:'0 50%',transform:`rotate(${Math.atan2(dy,dx)}rad) scaleX(${rd})`,opacity:.8}}></span>})}
     {SCAT.map((s,i)=>{const c=CLUS[i];const x=s[0]+(c[0]-s[0])*cl,y=s[1]+(c[1]-s[1])*cl;return <span key={i} className="t2-berry" style={{position:'absolute',left:x+'%',top:y+'%',width:22,height:22,margin:'-11px 0 0 -11px',opacity:clamp(D/.12)}}></span>})}
    </div>
    <p className="t2-p" style={{opacity:rd,maxWidth:'18em',marginTop:-10}}>نجمع الأفكار، نرتبها، ونوصلها ببعض. وبعدين نعرف شنو الخطوة الجاية.</p>
   </div>
  </div>
 </section>;}

Object.assign(window,{clamp,RM,SeedCtx,useProgress,Seed,Note,useStains,Hero,Story});
