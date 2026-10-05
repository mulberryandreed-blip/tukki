/* Scroll story (ported from Tukki 2): idea → problem → stuck → let's see → dots cluster, reeds connect */
const tkClamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
function useTkProgress(ref){const [p,setP]=React.useState(0);
 React.useEffect(()=>{let raf=0;const on=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{const el=ref.current;if(!el)return;const r=el.getBoundingClientRect();setP(tkClamp(-r.top/Math.max(1,r.height-innerHeight)))})};on();addEventListener('scroll',on,{passive:true});addEventListener('resize',on);return()=>{removeEventListener('scroll',on);removeEventListener('resize',on)}},[]);
 return p;}
const TK_SCAT=[[12,18],[82,12],[30,78],[70,70],[90,48],[8,58],[52,8],[58,92],[40,40]];
const TK_CLUS=[[44,38],[56,40],[50,50],[40,52],[60,54],[47,62],[55,64],[50,30],[38,42]];
const TK_WC=TK_SCAT.map((_,i)=>{const r=n=>((Math.sin(i*12.9898+n*78.233)*43758.5453)%1+1)%1;const w=38+r(9)*10,h=w*(1.18+r(7)*.14),d=w*.3;const dr=[];let j=0;
 for(let y=d*.5;y<=h-d*.4;y+=d*.78){const row=Math.round(y/(d*.78));for(let x=(row%2?d*.39:0)+d*.5;x<=w-d*.4;x+=d*.78){const nx=(x-w/2)/(w/2),ny=(y-h/2)/(h/2);if(nx*nx+ny*ny>.86)continue;j++;const q=n=>r(100+j*7+n);dr.push({x:x+(q(1)-.5)*d*.22,y:y+(q(2)-.5)*d*.22,d:d*(.88+q(3)*.28),t:q(4),br:`${45+Math.round(q(5)*12)}% ${45+Math.round(q(6)*12)}% ${45+Math.round(q(7)*12)}% ${45+Math.round(q(8)*12)}%`})}}
 return {w,h,dr,a:(r(5)-.5)*50}});
function TukkiStory(){const ref=React.useRef();const p=useTkProgress(ref);const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const seg=(a,b)=>tkClamp((p-a)/(b-a));const A=seg(0,.22),B=seg(.22,.44),C=seg(.44,.64),D=seg(.64,1);
 const win=(x,last)=>rm?1:(x<=0?0:x<.18?x/.18:(last||x<.82)?1:(1-x)/.18);
 const line={position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'0 clamp(20px,5vw,64px)'};
 const big={fontFamily:'var(--font-arabic-display)',fontWeight:900,fontSize:'clamp(48px,9vw,120px)',lineHeight:1.4,margin:0,color:'var(--ink)'};
 const hand={fontFamily:"'Marhey','Thmanyah Sans',sans-serif",color:'var(--berry)',fontWeight:400,lineHeight:1.6};
 const body={fontFamily:'var(--font-arabic-text)',fontSize:'clamp(17px,1.8vw,20px)',lineHeight:1.85,color:'var(--ink-2)',margin:0};
 const k=Math.sin(B*Math.PI);const stopX=C<.45?(1-C/.45)*-120:C<.55?Math.sin((C-.45)/.1*Math.PI)*6:0;
 const cl=tkClamp((D-.18)/.35),rd=tkClamp((D-.5)/.3);
 if(rm)return <section style={{position:'relative',zIndex:3,background:'var(--paper)',padding:'var(--section-pad-y) var(--section-pad-x)',textAlign:'center',display:'grid',gap:18}}><p style={big}>عندك فكرة؟</p><p style={big}>مشكلة؟</p><p style={big}>مشروع واقف؟</p><p style={{...hand,fontSize:40,margin:0}}>خل نشوف.</p></section>;
 return <section ref={ref} aria-label="عندك فكرة؟ مشكلة؟ مشروع واقف؟ خل نشوف." style={{position:'relative',zIndex:3,height:'420vh',background:'var(--paper)'}}>
  <div style={{position:'sticky',top:0,height:'100svh',overflow:'hidden'}}>
   <div style={{...line,opacity:win(A)}}><p style={big}>عندك <span style={{display:'inline-block',color:'var(--berry)',transform:`translateX(${(.5-A)*90}%) rotate(${(A-.5)*-14}deg)`}}>فكرة؟</span></p></div>
   <div style={{...line,opacity:win(B)}}><p style={{...big,transform:`rotate(${Math.sin(B*38)*5*k}deg) skewX(${Math.sin(B*23)*8*k}deg)`,textShadow:`${4*k}px ${-3*k}px 0 rgba(201,138,155,.8),${-5*k}px ${4*k}px 0 rgba(123,27,51,.35),${2*k}px ${6*k}px 0 rgba(35,27,25,.15)`,textDecoration:'underline wavy',textDecorationColor:`rgba(123,27,51,${k})`,textDecorationThickness:3,textUnderlineOffset:18}}>مشكلة؟</p></div>
   <div style={{...line,opacity:win(C)}}><p style={{...big,transform:`translateX(${stopX}%)`}}>مشروع واقف؟</p>
    <span style={{display:'inline-block',marginTop:22,fontFamily:'var(--font-arabic-sans)',fontWeight:900,fontSize:28,color:'var(--berry)',border:'3px double var(--berry)',borderRadius:6,padding:'4px 14px',opacity:C>.55?.85:0,transform:`rotate(-9deg) scale(${C>.55?1:1.8})`,transition:'transform .18s cubic-bezier(.3,1.6,.5,1),opacity .1s'}}>متوقف</span></div>
   <div style={{...line,opacity:win(D,true),justifyContent:'flex-start',paddingTop:'12svh'}}>
    <p style={{...hand,fontSize:'clamp(40px,6vw,72px)',margin:0,transform:`rotate(-3deg) scale(${.85+tkClamp(D/.15)*.15})`}}>خل نشوف.</p>
    <div aria-hidden="true" style={{position:'relative',width:'min(80vw,52svh,420px)',aspectRatio:'1',marginTop:8}}>
          {TK_SCAT.map((s,i)=>{const c=TK_CLUS[i];const x=s[0]+(c[0]-s[0])*cl,y=s[1]+(c[1]-s[1])*cl;const B=TK_WC[i];return <span key={i} style={{position:'absolute',left:x+'%',top:y+'%',width:B.w,height:B.h,margin:`${-B.h/2}px 0 0 ${-B.w/2}px`,transform:`rotate(${B.a}deg)`,opacity:tkClamp(D/.12),filter:'blur(.3px)'}}>
      <span style={{position:'absolute',inset:'8%',borderRadius:'50%',background:'radial-gradient(ellipse,rgba(158,40,72,.28),rgba(158,40,72,0) 72%)'}}></span>
      {B.dr.map((g,j)=><span key={j} style={{position:'absolute',left:g.x-g.d/2,top:g.y-g.d/2,width:g.d,height:g.d,borderRadius:g.br,mixBlendMode:'multiply',background:`radial-gradient(circle at 36% 32%,rgba(255,228,235,.75) 0 14%,rgba(${g.t>.5?'170,48,82':'140,30,62'},.6) 34%,rgba(${g.t>.3?'110,22,48':'70,14,40'},.85) 72%,rgba(70,14,40,.95) 86%,rgba(70,14,40,0) 100%)`}}></span>)}
     </span>})}
{rd>0&&TK_CLUS.slice(0,7).map((c,i)=>{const n=TK_CLUS[(i+2)%7];const dx=n[0]-c[0],dy=n[1]-c[1];return <span key={'l'+i} style={{position:'absolute',left:c[0]+'%',top:c[1]+'%',width:Math.hypot(dx,dy)+'%',height:3,marginTop:-1.5,borderRadius:3,zIndex:2,boxShadow:'0 0 0 1.5px rgba(250,247,242,.85)',background:'var(--leaf-green)',transformOrigin:'0 50%',transform:`rotate(${Math.atan2(dy,dx)}rad) scaleX(${rd})`,opacity:1}}></span>})}
    </div>
    <p style={{...body,opacity:rd,maxWidth:'24em',marginTop:-6}}>نجمع الأفكار، نرتبها، ونوصلها ببعض. وبعدين نعرف شنو الخطوة الجاية.</p>
   </div>
  </div>
 </section>;}
Object.assign(window,{TukkiStory});
