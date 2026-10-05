function Nav({active}){const {SiteNav}=window.DS;
 return <SiteNav base="../../" logoSrc={MRres('wordmark','../../assets/logo/wordmark-ripe-berry.png')} homeHref="index.html" links={[{label:'What we do',href:'index.html#work'},{label:'About',href:'about.html',active:active==='about'},{label:'Journal',href:'journal.html',active:active==='journal'},{label:'Tukki',href:'tukki.html'}]} cta={{label:"Let's connect",href:active==='journal'?'index.html#contact':'#contact'}}/>;}
function ContactCTA({title='Got a story worth telling?',body='Tell us what you are building. We will tell you how to make it stick.',note,primary='info@mulberryandreed.com',maxWidth=1100,titleWeight=500,decoration=true}){
 const {ContactPanel,Button,WhatsAppIcon}=window.DS;
 return <section id="contact" className="mr-reveal" style={{position:'relative',zIndex:1,padding:'0 var(--section-pad-x) clamp(64px,10vw,120px)'}}><ContactPanel maxWidth={maxWidth} titleWeight={titleWeight} decoration={decoration?MRres('bushLine','../../assets/illustrations/bush-line.png'):undefined} title={title} body={body} note={note}>
  <Button variant="inverse" size="lg" href="mailto:info@mulberryandreed.com">{primary}</Button>
  <Button variant="outline-inverse" size="lg" href="https://wa.me/9647885514118" target="_blank" rel="noopener noreferrer" iconLeft={<WhatsAppIcon/>}>Let's connect on WhatsApp</Button>
 </ContactPanel></section>;}
Object.assign(window,{Nav,ContactCTA});
