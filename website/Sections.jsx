function WorkSection(){const {Eyebrow,ServiceCard}=window.DS;
 return <section id="work" style={{position:'relative',background:'var(--espresso)',color:'var(--paper)',padding:'var(--section-pad-y) var(--section-pad-x)'}}><div style={{position:'relative',zIndex:3,maxWidth:1100,margin:'0 auto'}}>
  <Eyebrow onDark>What we do</Eyebrow>
  <h2 style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:'clamp(28px,4.5vw,52px)',letterSpacing:'-0.005em',lineHeight:1.1,margin:'0 0 48px',maxWidth:'20em',color:'var(--paper)'}}>Everything a brand needs to be noticed, remembered and chosen.</h2>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:16}}>{MR.services.map(s=><div key={s.name} className="mr-reveal"><ServiceCard {...s}/></div>)}</div>
 </div></section>;}
const twoCol={display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'var(--column-gap)',alignItems:'start'};
const sec={position:'relative',zIndex:1,padding:'var(--section-pad-y) var(--section-pad-x)',maxWidth:1100,margin:'0 auto',boxSizing:'content-box'};
const bp={fontSize:17,lineHeight:1.65,color:'var(--ink-2)',margin:'0 0 10px'};
function PricingSection(){const {SectionIntro,PriceRow,Button}=window.DS;
 return <section id="pricing" style={sec}><div style={twoCol}>
  <SectionIntro sticky eyebrow="Pricing" title="What does it cost?" weight={400}>
   <p style={bp}>We price work around what you actually need.</p><p style={bp}>The cost depends on the service, the size of your business, how much work is involved and how much support you need from us.</p><p style={{...bp,margin:'0 0 28px'}}>Here is a guide so you know what to expect.</p>
   <Button href="#contact">Book a free discovery call</Button>
  </SectionIntro>
  <div><div style={{borderTop:'1px solid var(--border-default)',margin:'0 0 44px'}}>{MR.prices.map(p=><PriceRow key={p.name} {...p}/>)}</div>
   <h3 style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:'clamp(21px,2.6vw,26px)',margin:'0 0 14px'}}>Why isn't everything a fixed price?</h3>
   <p style={{...bp,fontSize:16,margin:'0 0 12px'}}>A website for a new business is different from a website for a company with hundreds of products. A research project for one market is different from research across five. The same applies to branding, campaigns, systems and apps.</p>
   <p style={{...bp,fontSize:16,margin:'0 0 20px'}}>So we give you a clear price before any paid work begins, based on what you need, the size of the business, the size of the project and the level of support involved.</p>
   <p style={{fontFamily:'var(--font-accent)',fontSize:'clamp(19px,2.3vw,23px)',fontWeight:600,lineHeight:1.35,margin:0,maxWidth:'20em'}}>No obligation starts with the discovery call.</p>
  </div></div></section>;}
function AboutSection(){const {SectionIntro}=window.DS;const ref=React.useRef();const [y,setY]=React.useState(0);
 React.useEffect(()=>{const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){io.disconnect();const t0=performance.now();const tk=t=>{const p=Math.min(1,(t-t0)/1400);setY(Math.round(32*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(tk)};requestAnimationFrame(tk)}},{threshold:.5});io.observe(ref.current);return()=>io.disconnect()},[]);
 const p={margin:'0 0 20px'};
 return <section id="about" style={sec}><div style={{...twoCol,gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))'}}>
  <SectionIntro sticky eyebrow="About" title="People who make things work."/>
  <div style={{fontSize:'clamp(17px,1.9vw,20px)',lineHeight:1.6,color:'var(--ink-2)'}}><p style={p}>We are a team of creatives, marketers and software engineers.</p><p style={p}>Together, we have <strong ref={ref} style={{color:'var(--berry)'}}>{y}+ years</strong> of experience.</p><p style={{margin:0}}>We have worked on brands, websites, apps, campaigns, content, paid ads and growth.</p></div>
 </div></section>;}
function JournalSection(){const {SectionIntro,PostCard}=window.DS;
 return <section id="blog" style={sec}><div style={twoCol}>
  <SectionIntro sticky eyebrow="Journal" title="Notes on stories that stick."><a href="journal.html" style={{fontWeight:600,fontSize:15,color:'var(--berry)',display:'inline-block',marginTop:6}}>All posts →</a></SectionIntro>
  <div style={{display:'grid',gap:'clamp(28px,4vw,44px)'}}>{MR.posts.map(p=><div key={p.title} className="mr-reveal"><PostCard href={'journal.html#post='+p.slug} {...p} image={MRres(p.slug,p.image)}/></div>)}</div>
 </div></section>;}
Object.assign(window,{WorkSection,PricingSection,AboutSection,JournalSection});
