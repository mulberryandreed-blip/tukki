const {useState,useRef}=React;const T=window.TUKKI.ar;
function Stats(){const r=[-6,4,-3];
 return <section className="t2-sec" style={{paddingTop:48,paddingBottom:48}}>
  <div style={{display:'flex',justifyContent:'space-between',gap:8}}>{T.stats.map(([n,l],i)=><div key={l} className="t2-sticker t2-wob" style={{'--r':r[i]+'deg',transform:`rotate(${r[i]}deg)`}}><bdi dir="ltr" style={{fontFamily:'var(--disp)',fontWeight:900,fontSize:30,lineHeight:1.1,color:'var(--berry)'}}>{n}</bdi><span style={{fontFamily:'var(--sans)',fontWeight:500,fontSize:12,textAlign:'center',lineHeight:1.3,maxWidth:80}}>{l}</span></div>)}</div>
  <Seed n={2} style={{top:20,left:'48%'}}/>
 </section>;}

const STEP_NOTES=['(ببلاش. فعلاً.)','(بدون لف ودوران.)','(ما نتركك بنص الطريق.)'];
function Stack(){const [order,setOrder]=useState([0,1,2]);const [x,setX]=useState(0);const [fly,setFly]=useState(0);const st=useRef(null);
 const next=(dir=-1)=>{setFly(dir);setTimeout(()=>{setOrder(o=>[...o.slice(1),o[0]]);setFly(0);setX(0)},260)};
 const down=e=>{e.currentTarget.setPointerCapture(e.pointerId);st.current=e.clientX};
 const move=e=>{if(st.current!=null)setX(e.clientX-st.current)};
 const up=()=>{if(st.current==null)return;st.current=null;if(Math.abs(x)>80)next(Math.sign(x));else setX(0)};
 return <div>
  <div style={{position:'relative',height:300,marginTop:28}}>
   {[...order].reverse().map((idx,ri)=>{const pos=order.length-1-ri;const top=pos===0;const [h,d]=T.steps[idx];
    const tf=top?(fly?`translateX(${fly*130}%) rotate(${fly*18}deg)`:`translateX(${x}px) rotate(${x/14}deg)`):`translateY(${pos*12}px) rotate(${pos%2?-3:2.5}deg) scale(${1-pos*.04})`;
    return <article key={idx} onPointerDown={top?down:undefined} onPointerMove={top?move:undefined} onPointerUp={top?up:undefined} onPointerCancel={top?up:undefined} className="t2-paper t2-lined" style={{position:'absolute',inset:0,borderRadius:12,padding:'22px 22px 18px',touchAction:'pan-y',cursor:top?'grab':'default',transform:tf,opacity:fly&&top?0:1,transition:st.current!=null&&top?'none':'transform .3s cubic-bezier(.3,1.3,.5,1),opacity .26s',zIndex:10-pos,display:'flex',flexDirection:'column',borderTop:'5px solid var(--red-berry)'}}>
     <span style={{fontFamily:'var(--disp)',fontWeight:900,fontSize:56,lineHeight:1,color:'rgba(123,27,51,.25)'}}>{'0'+(idx+1)}</span>
     <h3 style={{fontFamily:'var(--disp)',fontWeight:700,fontSize:26,lineHeight:1.5,margin:'10px 0 4px'}}>{h}</h3>
     <p className="t2-p" style={{fontSize:16,lineHeight:2.1}}>{d}</p>
     <Note r={-3} style={{marginTop:'auto',alignSelf:'flex-end'}}>{STEP_NOTES[idx]}</Note>
    </article>})}
  </div>
  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:30}}>
   <div style={{display:'flex',gap:6}}>{[0,1,2].map(i=><span key={i} style={{width:order[0]===i?22:8,height:8,borderRadius:4,background:order[0]===i?'var(--berry)':'var(--oat-2)',transition:'width .2s'}}></span>)}</div>
   <button className="t2-press ghost" style={{minHeight:44,fontSize:14}} onClick={()=>next(-1)}>الخطوة الجاية ←</button>
  </div>
 </div>;}
function How(){return <section id="how" className="t2-sec">
  <p className="t2-kick">كيف نعمل</p><h2 className="t2-h2">ثلاث خطوات قصيرة.</h2>
  <Note r={-2} style={{fontSize:14,color:'var(--ink-4)'}}>(اسحب الكرت.)</Note>
  <Stack/><Seed n={3} style={{top:40,left:14}}/>
 </section>;}

const WHY_NOTES=['(نوفر عليك وجع الراس.)','(وإذا ما فهمنا، نسأل.)','(وهاي آخر ملاحظة. والله.)'];
function Why(){const [n,setN]=useState(1);
 return <section id="why" className="t2-sec">
  <p className="t2-kick">لماذا تُكِّي</p><h2 className="t2-h2" style={{marginBottom:24}}>تدريب يُفهم هنا، ويُطبَّق هنا.</h2>
  <div className="t2-lined t2-margin t2-paper" style={{borderRadius:4,padding:'6px 52px 20px 16px',transform:'rotate(.6deg)',position:'relative'}}>
   <span aria-hidden="true" style={{position:'absolute',top:-10,left:'40%',width:90,height:22,background:'rgba(207,227,161,.7)',transform:'rotate(-4deg)'}}></span>
   <ul style={{listStyle:'none',margin:0,padding:0}}>{T.benefits.map(([h,d])=><li key={h} style={{display:'grid',gridTemplateColumns:'26px 1fr',gap:6,padding:'10px 0'}}>
    <span className="t2-hand" style={{fontSize:22,lineHeight:1.3,color:'var(--leaf-green)'}}>✓</span>
    <div><p style={{fontFamily:'var(--disp)',fontWeight:700,fontSize:19,lineHeight:1.7,margin:0}}>{h}</p><p className="t2-p" style={{fontSize:15,lineHeight:2.25}}>{d}</p></div></li>)}</ul>
  </div>
  <button onClick={()=>setN(v=>Math.min(WHY_NOTES.length,v+1))} style={{background:'none',border:0,padding:'14px 0 0',cursor:'pointer',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:2,textAlign:'start'}}>
   {WHY_NOTES.slice(0,n).map((t,i)=><Note key={t} r={i%2?2:-2} style={{animation:'t2-in .3s ease-out'}}>{t}</Note>)}
  </button>
  <Seed n={4} style={{bottom:30,left:20}}/>
 </section>;}

function Pricing(){return <section id="pricing" className="t2-sec" style={{background:'var(--oat-1)'}}>
  <Note r={-3} style={{marginBottom:6}}>(إي، نعرف. تريد تعرف السعر أول شي.)</Note>
  <p className="t2-kick">الأسعار</p><h2 className="t2-h2">كم يكلّف؟</h2>
  <p className="t2-p" style={{margin:'8px 0 26px'}}>{T.priceBody}</p>
  <div style={{display:'grid',gap:18}}>{T.prices.map(([n,p,d],i)=><div key={n} className="t2-ticket t2-wob" style={{'--r':(i%2?.8:-.6)+'deg',transform:`rotate(${i%2?.8:-.6}deg)`}}>
   <div style={{padding:'16px 18px',position:'relative'}}>
    <p style={{fontFamily:'var(--sans)',fontWeight:700,fontSize:14,color:'var(--ink-3)',margin:0}}>{n}</p>
    <p style={{fontFamily:'var(--disp)',fontWeight:900,fontSize:26,lineHeight:1.5,margin:'2px 0',color:i===0?'var(--berry)':'var(--ink)'}}>{p}</p>
    <p className="t2-p" style={{fontSize:14.5,lineHeight:1.9}}>{d}</p>
    {i===0&&<span className="t2-stamp" style={{position:'absolute',top:14,left:12}}>ابدأ هنا</span>}
   </div>
   <div className="stub">{'0'+(i+1)}</div></div>)}</div>
  <p className="t2-p" style={{marginTop:20,fontSize:15}}>{T.priceNote}</p>
  <Seed n={5} style={{top:22,left:24}}/>
 </section>;}

function Quote(){return <section className="t2-sec" style={{paddingBottom:40}}>
  <div className="t2-paper" style={{position:'relative',borderRadius:6,padding:'26px 22px 22px',transform:'rotate(-1deg)',overflow:'hidden'}}>
   <div className="t2-halftone" aria-hidden="true" style={{position:'absolute',top:0,left:0,width:120,height:120,opacity:.18,borderBottomRightRadius:120}}></div>
   <div style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid rgba(35,27,25,.15)',paddingBottom:10,marginBottom:16,fontFamily:'var(--sans)',fontSize:12,fontWeight:700,color:'var(--ink-4)'}}><span>{T.quoteTitle}</span><span dir="ltr">No. 050+</span></div>
   <p style={{fontFamily:'var(--disp)',fontWeight:500,fontSize:22,lineHeight:1.85,margin:0,position:'relative'}}>«{T.quote}»</p>
   <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:16}}><span style={{fontSize:13,color:'var(--ink-4)'}}>{T.quoteBy}</span><span className="t2-stamp">سرّي</span></div>
  </div>
 </section>;}

function Faq(){return <section id="faq" className="t2-sec" style={{paddingTop:40}}>
  <p className="t2-kick">أسئلة</p><h2 className="t2-h2" style={{marginBottom:22}}>{T.faqTitle}</h2>
  <div style={{display:'grid',gap:12}}>{T.faq.map(([q,a],i)=><React.Fragment key={q}>
   {i===3&&<Note r={2} style={{justifySelf:'center',color:'var(--ink-3)'}}>(بعدك ويانه؟ ممتاز.)</Note>}
   <details className="t2-faq t2-paper" style={{borderRadius:8,position:'relative',marginTop:10}}>
    <span aria-hidden="true" style={{position:'absolute',top:-15,right:16,background:'var(--white-mulberry)',border:'1px solid rgba(35,27,25,.12)',borderBottom:0,borderRadius:'6px 6px 0 0',padding:'0 10px',fontFamily:'var(--disp)',fontWeight:700,fontSize:12,lineHeight:'15px'}}>{['أ','ب','ج','د','هـ'][i]}</span>
    <summary style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,padding:'16px 18px',minHeight:44,fontFamily:'var(--disp)',fontWeight:700,fontSize:18,lineHeight:1.6}}>{q}<span className="plus" style={{fontFamily:'var(--sans)',fontSize:24,color:'var(--berry)',transition:'transform .2s'}}>+</span></summary>
    <p className="t2-p" style={{padding:'0 18px 18px',fontSize:16}}>{a}</p>
   </details></React.Fragment>)}</div>
  <Seed n={6} style={{top:40,left:10}}/>
 </section>;}

const WA=<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.8-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.6 2 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.6-.1 1.1z"/></svg>;
function Contact(){return <section id="contact" className="t2-sec">
  <div className="t2-paper" style={{position:'relative',borderRadius:6,padding:'22px 22px 64px',background:'#FFFDF8',transform:'rotate(.8deg)'}}>
   <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:12}}>
    <div><p className="t2-kick">بطاقة بريدية</p><h2 className="t2-h2" style={{fontSize:30}}>{T.contactTitle}</h2></div>
    <div aria-hidden="true" style={{flex:'none',width:70,height:84,border:'2px dashed rgba(35,27,25,.3)',padding:4,transform:'rotate(4deg)'}}><div className="t2-halftone" style={{width:'100%',height:'100%',background:'var(--berry)',backgroundImage:'radial-gradient(rgba(250,247,242,.35) 1.1px,transparent 1.4px)',backgroundSize:'6px 6px',display:'grid',placeItems:'center',color:'var(--paper)',fontFamily:'var(--disp)',fontWeight:900,fontSize:20}}>تُكِّي</div></div>
   </div>
   <div className="t2-lined" style={{margin:'14px 0 20px',padding:'2px 0',backgroundColor:'transparent'}}><p className="t2-p" style={{lineHeight:'34px'}}>{T.contactBody}</p></div>
   <div style={{display:'grid',gap:14}}>
    <a className="t2-press" href="https://wa.me/9647885514118" target="_blank" rel="noopener noreferrer">{WA}{T.wa}</a>
    <a className="t2-press ghost" href="mailto:info@mulberryandreed.com" dir="ltr">info@mulberryandreed.com</a>
   </div>
   <span aria-hidden="true" style={{position:'absolute',bottom:-22,left:20,width:74,height:74,background:'rgba(255,253,248,.6)',borderRadius:'50%',border:'2px solid rgba(123,27,51,.5)',display:'grid',placeItems:'center',transform:'rotate(-14deg)',fontFamily:'var(--sans)',fontWeight:700,fontSize:12,color:'rgba(123,27,51,.7)'}}>بغداد</span>
  </div>
  <Seed n={7} style={{bottom:20,right:'45%'}}/>
 </section>;}

function Footer(){const [rw,setRw]=useState(false);
 const again=()=>{const y0=scrollY,t0=performance.now(),D=RM()?0:1400;setRw(true);const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
  const f=now=>{const t=D?clamp((now-t0)/D):1;scrollTo(0,y0*(1-ease(t)));if(t<1)requestAnimationFrame(f);else{setRw(false);dispatchEvent(new Event('t2-rewound'))}};requestAnimationFrame(f)};
 return <footer style={{position:'relative',zIndex:2,padding:'56px 22px 34px',textAlign:'center'}}>
  {rw&&<div className="t2-rewind"></div>}
  <button className="t2-press ghost" onClick={again} style={{fontFamily:'var(--hand)',fontSize:22,fontWeight:400,minHeight:58,padding:'0 30px'}}>مرة ثانية؟ ↺</button>
  <div style={{marginTop:36,display:'flex',flexDirection:'column',alignItems:'center',gap:6,fontSize:13,color:'var(--ink-4)'}}>
   <span style={{display:'flex',alignItems:'baseline',gap:8}}><span style={{fontFamily:'var(--disp)',fontWeight:900,fontSize:22,color:'var(--berry)'}}>تُكِّي</span><a href="index.html" style={{color:'var(--ink-3)'}}>{T.by}</a></span>
   <span><bdi>© 2026 Mulberry &amp; Reed.</bdi> {T.rights}</span>
  </div>
 </footer>;}

Object.assign(window,{Stats,How,Why,Pricing,Quote,Faq,Contact,Footer,WA});
