// Mulberry & Reed — blog article data.
// Kept as a plain ES module. The blog page loads only the list-level fields;
// full content lives here and is shown when an article is opened.

export const categories = ["All","Brand","Marketing","Social","Content","Websites","Growth","Money","Customers","Business","Tools"];
export const needs = ["Get noticed","Get more customers","Make more money","Save money","Save time","Keep customers","Build your brand","Learn the basics"];

export const articles = [
  {
    n:51, slug:"the-anatomy-of-a-sticky-story", title:"The anatomy of a sticky story",
    summary:"The parts every memorable story shares, and how to use them in your marketing.",
    category:"Content", need:"Get noticed", readingTime:"4 min read",
    date:"2026-09-17", keywords:["storytelling","sticky","memory","structure"],
    photo:"assets/sticky-story.png",
    content:{
      short:"Sticky stories share the same parts: a person we recognise, a problem with real stakes, a concrete detail we can picture, a change we can feel, and one point that survives the retelling. Build all five in and the story carries itself.",
      learned:"I have watched the same lesson told two ways. As advice, it was nodded at and forgotten by lunch. As a story about one real customer, it was repeated back to me months later, almost word for word. The difference was not talent. It was anatomy: the story had a face, stakes, a detail you could picture and a single point.",
      steps:["Start with one real person, not 'our customers'.","Give the problem stakes: what it cost them, in plain terms.","Add one concrete detail people can picture.","Show the change, before and after.","End on one point. If there are two, it is two stories."],
      why:"Memory holds on to people, pictures and feelings, not abstractions. Each part of the anatomy gives the brain a hook: the face makes us care, the stakes make us feel, the detail makes it vivid, the point makes it useful. Miss a part and the story slides off.",
      remember:"A face, stakes, a detail, a change, one point.",
      related:["what-makes-a-good-story","what-makes-a-brand-easy-to-remember","how-do-i-make-dull-things-interesting"]
    }
  },
  {
    n:1, slug:"do-i-need-a-new-brand", title:"Do I need a new brand?",
    summary:"Before changing your logo, find out what is really not working.",
    category:"Brand", need:"Build your brand", readingTime:"3 min read",
    date:"2026-09-01", keywords:["rebrand","brand refresh","logo","strategy"],
    content:{
      short:"Most of the time, no. A new brand is a big job. Before you start, be honest about what is broken. Often it is the message, the price or the website, not the brand.",
      learned:"In 14 years I have seen many people ask for a new brand when the real problem was something smaller. A tired logo rarely loses you sales. A confusing message does. Fix the small thing first. It is cheaper and faster, and it often solves the problem you were worried about.",
      steps:["Write down what you think is wrong.","Ask five customers why they chose you.","Check if the problem is really the brand, or the offer, price or site.","Fix the cheapest, clearest problem first.","Only rebrand if the brand itself is truly holding you back."],
      why:"A brand is not just a logo. It is what people expect from you. Changing the look does not change a weak offer. When you fix the real problem, you often find the brand was fine all along.",
      remember:"Fix the problem, not the paint.",
      related:["does-my-logo-really-matter","why-does-my-brand-feel-messy","when-should-i-change-my-logo"]
    }
  },
  {
    n:2, slug:"does-my-logo-really-matter", title:"Does my logo really matter?",
    summary:"Yes, but it is only one part of what people remember.",
    category:"Brand", need:"Build your brand", readingTime:"3 min read",
    date:"2026-08-30", keywords:["logo","identity","recognition"],
    content:{
      short:"Yes, a little. A clear logo helps people know it is you. But people remember how you made them feel, what you said and how you treat them far more than a symbol.",
      learned:"A logo is a name tag. It helps people spot you in a crowd. That is useful. But I have watched plain logos win because the business was clear, kind and easy to buy from. And I have watched pretty logos lose because nothing behind them worked.",
      steps:["Make sure your logo is simple and easy to read.","Use it the same way every time.","Put more effort into your message than your mark.","Check it works small, on a phone and in one colour."],
      why:"People do not study logos. They glance at them. A simple, steady logo builds quiet trust over time. A flashy one that keeps changing does not.",
      remember:"A logo helps people find you. Everything else makes them choose you.",
      related:["do-i-need-a-new-brand","what-makes-a-brand-easy-to-remember","why-do-simple-brands-work"]
    }
  },
  {
    n:3, slug:"what-makes-a-brand-easy-to-remember", title:"What makes a brand easy to remember?",
    summary:"Clear ideas, repeated well, are easier to remember than lots of different messages.",
    category:"Brand", need:"Get noticed", readingTime:"3 min read",
    date:"2026-08-29", keywords:["memory","recall","consistency","message"],
    content:{
      short:"One clear idea, said the same way, again and again. People remember what they see and hear often. They forget what keeps changing.",
      learned:"The brands people recall are not the loudest. They are the most steady. Pick one thing you want to be known for. Then say it, show it and live it until you are almost bored of it. That is usually the point where customers are just starting to remember.",
      steps:["Pick one idea you want people to remember.","Say it in a few plain words.","Use the same colours, tone and message everywhere.","Repeat it far longer than feels comfortable."],
      why:"The brain saves what it sees often and drops the rest. If you change your message every month, you reset the clock each time. Repetition is not lazy. It is how memory works.",
      remember:"Say one thing well, over and over.",
      related:["why-do-simple-brands-work","what-makes-people-remember-a-brand","does-my-logo-really-matter"]
    }
  },
  {
    n:4, slug:"why-does-my-brand-feel-messy", title:"Why does my brand feel messy?",
    summary:"Too many colours, styles, messages and ideas can make a good business feel less trusted.",
    category:"Brand", need:"Build your brand", readingTime:"3 min read",
    date:"2026-08-28", keywords:["consistency","clutter","trust"],
    content:{
      short:"Usually because there are too many of everything. Too many colours, fonts, messages and ideas. Each one on its own is fine. Together they make you look unsure.",
      learned:"Mess is what happens when a business grows without a rulebook. Someone made a flyer. Someone else made a post. Nobody agreed on the look. Over time it drifts. The fix is not more design. It is fewer choices, used well.",
      steps:["Gather everything you put in front of customers.","Lay it side by side.","Pick two or three colours and one or two fonts.","Remove anything that does not fit.","Write a one-page guide so it stays tidy."],
      why:"When things match, people relax. When they clash, people pause, and a pause is a tiny drop of doubt. Fewer choices, used the same way, feel calmer and more trusted.",
      remember:"Tidy looks trustworthy.",
      related:["how-do-i-make-my-brand-look-more-trusted","why-do-simple-brands-work","do-i-need-a-new-brand"]
    }
  },
  {
    n:5, slug:"how-do-i-make-my-brand-look-more-trusted", title:"How do I make my brand look more trusted?",
    summary:"Be clear, be consistent and remove things that make people stop and think for the wrong reason.",
    category:"Brand", need:"Build your brand", readingTime:"3 min read",
    date:"2026-08-27", keywords:["trust","clarity","proof"],
    content:{
      short:"Be clear about what you do. Look the same everywhere. Show proof. And remove anything that makes people unsure, like typos, dead links or vague claims.",
      learned:"Trust is built from small signals. A page that loads fast. A price that is easy to find. A real photo of real people. None of these are big. Together they tell the customer you have your act together. That is what they are really buying.",
      steps:["Say what you do in plain words on every page.","Show reviews, results or names of happy customers.","Fix small errors that quietly cost you trust.","Make it easy to contact a real person.","Keep the look the same across your site and posts."],
      why:"People cannot test you before they buy. So they look for clues. Clear, steady, honest signals feel safe. Vague or sloppy ones feel risky, even if the work is good.",
      remember:"Trust is many small clear signals.",
      related:["why-does-my-brand-feel-messy","what-makes-a-good-about-page","why-do-people-leave-my-website"]
    }
  },
  {
    n:6, slug:"how-do-i-know-what-makes-us-different", title:"How do I know what makes us different?",
    summary:"Start with what customers choose you for, not what you wish made you different.",
    category:"Brand", need:"Build your brand", readingTime:"3 min read",
    date:"2026-08-26", keywords:["difference","positioning","strengths"],
    content:{
      short:"Ask the people who already buy from you. What they say is your real difference. It is often simpler than the clever thing you had in mind.",
      learned:"Owners often guess wrong about why people pick them. You might think it is your years of skill. Customers might say it is because you reply fast and are easy to talk to. Both can be true. But you should build on the reason they give, not the one you prefer.",
      steps:["Ask ten recent customers why they chose you.","Look for the same words coming up again.","Write down the reason in their language, not yours.","Say that reason clearly on your site and in your posts."],
      why:"You cannot invent a difference and hope people agree. A real difference is one customers already feel. When you name it plainly, you simply make it easier for the next person to choose you.",
      remember:"Your difference is their reason, not your wish.",
      related:["what-is-marketing-really","how-do-i-make-my-brand-look-more-trusted","should-i-copy-what-my-rivals-are-doing"]
    }
  },
  {
    n:7, slug:"should-my-brand-follow-trends", title:"Should my brand follow trends?",
    summary:"Use trends with care. Your brand still needs to look like you next year.",
    category:"Brand", need:"Build your brand", readingTime:"3 min read",
    date:"2026-08-25", keywords:["trends","longevity","style"],
    content:{
      short:"A little, in the parts you can change often, like posts. Not in the parts that should last, like your logo and core look. Trends fade. Your brand should not fade with them.",
      learned:"Chasing every trend is tiring and it confuses people. The brands I trust most keep a steady core and play with trends only at the edges. That way they feel current without losing who they are.",
      steps:["Split your brand into two parts: the steady core and the flexible edges.","Keep logo, colours and tone in the steady core.","Try trends in posts, campaigns and small tests.","Drop any trend that stops feeling like you."],
      why:"If your whole brand chases trends, people never get a chance to learn it. A steady core lets you stay recognisable while still feeling fresh. You get both.",
      remember:"Steady core, playful edges.",
      related:["what-makes-a-brand-easy-to-remember","why-do-simple-brands-work","when-should-i-change-my-logo"]
    }
  },
  {
    n:8, slug:"can-a-small-business-build-a-strong-brand", title:"Can a small business build a strong brand?",
    summary:"Yes. You do not need a huge budget. You need a clear idea and the will to repeat it.",
    category:"Brand", need:"Build your brand", readingTime:"3 min read",
    date:"2026-08-24", keywords:["small business","budget","brand building"],
    content:{
      short:"Yes. Strong brands are built on clear ideas, not big budgets. A small business can often move faster and feel more human, which people like.",
      learned:"Some of the strongest brands I have worked with were tiny. They won because they knew exactly who they were for and said it clearly, over and over. Big budgets can even hide a weak idea. A small business cannot afford to be vague, and that focus is a gift.",
      steps:["Choose one group of people to serve well.","Say what you do in one plain sentence.","Show up in the same way every time.","Be human. Reply, help and remember people.","Repeat for longer than you think you need to."],
      why:"People do not choose brands because they are big. They choose brands they understand and trust. A small business can build both with time and consistency, not money.",
      remember:"Clarity beats budget.",
      related:["why-do-simple-brands-work","what-makes-a-brand-easy-to-remember","how-much-should-i-spend-on-marketing"]
    }
  },
  {
    n:9, slug:"why-do-simple-brands-work", title:"Why do simple brands work?",
    summary:"Simple ideas are easier to understand, remember and share.",
    category:"Brand", need:"Get noticed", readingTime:"3 min read",
    date:"2026-08-23", keywords:["simplicity","clarity","recall"],
    content:{
      short:"Because people are busy. A simple brand is quick to understand, easy to remember and easy to tell a friend about. A complex one asks for effort most people will not give.",
      learned:"Every time I have helped a business cut its message down, results went up. Not because the work got smaller, but because people finally got it. Simple is not basic. Simple is the hard work of removing everything that is not needed.",
      steps:["Say what you do in one short sentence.","Cut any word that does not add meaning.","Use fewer colours and fonts.","Test it on someone outside your business.","If they cannot repeat it back, simplify again."],
      why:"The brain rewards things it can process fast. Simple brands feel easy, and easy feels good. That good feeling gets passed on when someone recommends you.",
      remember:"Simple is easy to choose and easy to share.",
      related:["what-makes-a-brand-easy-to-remember","how-do-i-write-in-a-simple-way","why-does-my-brand-feel-messy"]
    }
  },
  {
    n:10, slug:"when-should-i-change-my-logo", title:"When should I change my logo?",
    summary:"Change it when it is holding the business back, not just because you are bored of it.",
    category:"Brand", need:"Build your brand", readingTime:"3 min read",
    date:"2026-08-22", keywords:["logo","rebrand","timing"],
    content:{
      short:"Change it when it stops working, not when you get bored. Good reasons: it is hard to read, it looks dated to customers, it does not work on a phone, or the business has truly changed.",
      learned:"You look at your own logo far more than any customer ever will. What feels stale to you is often fresh to them. I have talked many owners out of a costly change they wanted for the wrong reason, and none of them regretted waiting.",
      steps:["List the real reasons you want to change it.","Cross out any reason that is only about your taste.","Check if it works small, in one colour and on screens.","If real problems remain, change it. If not, wait.","When you do change it, keep what people already know."],
      why:"A logo builds value quietly as people learn it. Changing it resets some of that learning. So change should buy you more than it costs. Boredom is not worth the cost.",
      remember:"Change it to fix a problem, not to feel new.",
      related:["do-i-need-a-new-brand","does-my-logo-really-matter","should-my-brand-follow-trends"]
    }
  },
  {
    n:11, slug:"what-is-marketing-really", title:"What is marketing, really?",
    summary:"Marketing is knowing who you want to reach, what they need and why they should choose you.",
    category:"Marketing", need:"Learn the basics", readingTime:"3 min read",
    date:"2026-08-21", keywords:["marketing basics","fundamentals"],
    content:{
      short:"Marketing is not just posts or ads. It is knowing who you want to reach, understanding what they need and making it clear why you are a good choice. The rest is just how you say it.",
      learned:"People think marketing starts with a channel, like social media. It does not. It starts with a person and a problem. When you truly understand both, the words, ads and posts almost write themselves. Skip that step and no amount of posting will save you.",
      steps:["Pick one type of person you want to reach.","Learn the problem they are trying to solve.","Be clear on why you are a good fit for that problem.","Say it plainly where those people already are."],
      why:"All marketing is really one thing: helping the right person understand why you can help them. Tools change. That idea does not.",
      remember:"Right person, real problem, clear reason.",
      related:["where-should-i-start-with-marketing","how-do-i-make-a-simple-marketing-plan","how-do-i-know-what-makes-us-different"]
    }
  },
  {
    n:12, slug:"where-should-i-start-with-marketing", title:"Where should I start with marketing?",
    summary:"Start with the customer and the problem. Not with a post.",
    category:"Marketing", need:"Learn the basics", readingTime:"3 min read",
    date:"2026-08-20", keywords:["getting started","strategy","customer"],
    content:{
      short:"Start with the customer, not the channel. Learn who you are for and what they are trying to fix. Only then decide where to show up and what to say.",
      learned:"The most common mistake I see is starting with a tactic. People ask which app to post on before they know who they are talking to. That is like shouting before you know who is in the room. Sort out the room first.",
      steps:["Write down who your best customer is.","Write the problem they want solved, in their words.","Write why you are a good answer to it.","Now pick one or two places to reach them.","Say one clear message there and watch what happens."],
      why:"When you start with the customer, every later choice gets easier. You know what to say, where to say it and what to leave out. Start with the channel and you are guessing.",
      remember:"Customer first. Channel second.",
      related:["what-is-marketing-really","how-do-i-make-a-simple-marketing-plan","what-should-i-do-first-with-a-small-budget"]
    }
  },
  {
    n:13, slug:"how-much-should-i-spend-on-marketing", title:"How much should I spend on marketing?",
    summary:"Start with what you want back and what one customer is worth.",
    category:"Money", need:"Make more money", readingTime:"4 min read",
    date:"2026-08-19", keywords:["budget","spend","roi"],
    content:{
      short:"Do not start with a fixed number. Start with two things: what one customer is worth to you, and how many more you want. That tells you what you can afford to spend.",
      learned:"There is no magic percentage. A business where one customer spends £2,000 can afford far more than one where a customer spends £20. Work from value, not from a rule someone read online. Then start small and grow spend on what works.",
      steps:["Work out what one customer is worth over time.","Decide how many more customers you want.","Set a test budget you can lose without pain.","Spend it, measure the results, then decide.","Move money towards what works and away from what does not."],
      why:"Marketing is not a cost you guess at. It is an investment you test. If £200 reliably brings in £600 of profit, the question is not how much to spend, it is how fast you can safely grow.",
      remember:"Spend from value, and grow what works.",
      related:["how-much-is-one-customer-really-worth","which-marketing-gives-the-best-roi","what-should-i-do-first-with-a-small-budget"]
    }
  },
  {
    n:14, slug:"how-do-i-make-a-simple-marketing-plan", title:"How do I make a simple marketing plan?",
    summary:"Pick one goal, one group of people, one clear message and the best places to reach them.",
    category:"Marketing", need:"Learn the basics", readingTime:"4 min read",
    date:"2026-08-18", keywords:["plan","strategy","focus"],
    content:{
      short:"A plan does not need to be long. One goal. One group of people. One clear message. One or two places to reach them. Written on a single page.",
      learned:"Big plans look impressive and then sit in a drawer. The plans that work fit on one page and get used every week. Focus is the whole point. A plan that tries to do everything ends up doing nothing well.",
      steps:["Write one goal, with a number and a date.","Name the one group of people you want to reach.","Write one message that matters to them.","Choose one or two places to say it.","Decide how you will know if it worked."],
      why:"A short plan forces choices. Choices create focus. Focus is what makes small budgets go far. The plan is not the work, but it keeps the work pointed the right way.",
      remember:"One page beats one binder.",
      related:["where-should-i-start-with-marketing","how-do-i-know-if-my-marketing-works","what-should-i-do-first-with-a-small-budget"]
    }
  },
  {
    n:15, slug:"what-should-i-do-first-with-a-small-budget", title:"What should I do first with a small budget?",
    summary:"Fix the basics before paying to send more people towards a weak offer.",
    category:"Money", need:"Save money", readingTime:"4 min read",
    date:"2026-08-17", keywords:["small budget","basics","offer"],
    content:{
      short:"Fix your basics first. Sending paid traffic to a weak page or unclear offer just wastes money faster. Make sure the offer, the page and the follow-up work before you pay for more visitors.",
      learned:"I have seen people spend hundreds on ads that fail, when the real problem was a confusing home page. Ads only make an existing result bigger. If the result is a leak, ads make you lose money quicker. Plug the leaks first.",
      steps:["Check your offer is clear and worth buying.","Make sure your main page loads fast and says what to do.","Set up a simple way to follow up with people.","Only then spend on getting more visitors.","Start with a small test and grow slowly."],
      why:"A small budget cannot afford waste. Fixing the basics costs little and makes every future pound work harder. It is the highest return you will get.",
      remember:"Fix the leaks before you pour in more.",
      related:["how-much-should-i-spend-on-marketing","why-is-my-marketing-not-working","when-should-i-start-paid-ads"]
    }
  },
  {
    n:16, slug:"how-do-i-know-if-my-marketing-works", title:"How do I know if my marketing works?",
    summary:"Decide what result you want before you start.",
    category:"Growth", need:"Learn the basics", readingTime:"3 min read",
    date:"2026-08-16", keywords:["measurement","goals","results"],
    content:{
      short:"Decide the result you want before you begin. A sale, a lead, a booking. Then track that one thing. If you do not name the goal first, any number can be spun to look like a win.",
      learned:"Most confusion about marketing comes from having no clear goal. People post, then wonder if it worked, with no way to answer. Set the target first. Then the answer is simple: did we hit it or not?",
      steps:["Name the one result that matters, like sales or leads.","Write down the number you are aiming for.","Track only what links to that result.","Check after a fair amount of time.","Keep what worked and drop what did not."],
      why:"You cannot judge a journey with no destination. A clear goal turns a vague feeling into a plain yes or no. That is how you learn and improve.",
      remember:"Name the result before you start.",
      related:["which-numbers-should-i-watch","how-long-should-i-test-an-idea","how-do-i-make-a-simple-marketing-plan"]
    }
  },
  {
    n:17, slug:"which-numbers-should-i-watch", title:"Which numbers should I watch?",
    summary:"Watch the numbers that link to sales, leads, profit and repeat customers.",
    category:"Growth", need:"Make more money", readingTime:"4 min read",
    date:"2026-08-15", keywords:["metrics","kpis","measurement"],
    content:{
      short:"Watch the few numbers that link to money: sales, leads, cost to win a customer, and how often customers come back. Ignore numbers that look nice but do not pay the bills, like likes on their own.",
      learned:"There are hundreds of numbers you could track. Most are noise. I ask one question of any number: if this goes up, do we make more money? If the answer is no, it goes in a folder I check rarely, not on the daily dashboard.",
      steps:["List every number you currently track.","Circle the ones that link to sales or profit.","Cross out the rest, or check them rarely.","Put the important few where you see them weekly.","Review and act on them, do not just watch."],
      why:"Watching too many numbers hides the ones that matter. A short list keeps you honest and calm. It shows you where to act instead of drowning you in charts.",
      remember:"Track what pays, not what flatters.",
      related:["how-do-i-know-if-my-marketing-works","how-much-does-it-cost-me-to-win-one-customer","do-likes-really-matter"]
    }
  },
  {
    n:18, slug:"why-is-my-marketing-not-working", title:"Why is my marketing not working?",
    summary:"The problem may be the offer, the message, the audience, the page or the follow-up.",
    category:"Marketing", need:"Get more customers", readingTime:"4 min read",
    date:"2026-08-14", keywords:["troubleshooting","conversion","offer"],
    content:{
      short:"It is usually one of five things: the offer, the message, the audience, the page or the follow-up. Check them one at a time. Do not change everything at once or you will not learn what fixed it.",
      learned:"When results are flat, people tend to blame the whole thing and start over. That is a mistake. The chain has links, and usually only one is broken. Find the weak link and you often fix the result with a small change, not a rebuild.",
      steps:["Offer: is it clear and worth buying?","Message: does it speak to a real need?","Audience: are you reaching the right people?","Page: is it fast, clear and easy to act on?","Follow-up: do you contact people who showed interest?"],
      why:"Marketing is a chain. Traffic means nothing if the page is weak. A great page means nothing if the offer is dull. Testing one link at a time tells you exactly where the money is leaking.",
      remember:"Check the links, not the whole chain.",
      related:["what-should-i-do-first-with-a-small-budget","why-do-people-leave-my-website","how-long-should-i-test-an-idea"]
    }
  },
  {
    n:19, slug:"how-long-should-i-test-an-idea", title:"How long should I test an idea?",
    summary:"Long enough to learn something. Not so long that you keep paying for a bad idea.",
    category:"Growth", need:"Save money", readingTime:"3 min read",
    date:"2026-08-13", keywords:["testing","experiments","patience"],
    content:{
      short:"Long enough to get real signal, short enough to avoid throwing good money after bad. Set the length and budget before you start, so emotion does not decide it for you.",
      learned:"Two mistakes are common. Stopping too early, before you have enough data to know anything. Or running far too long because you are attached to the idea. Deciding the rules up front protects you from both.",
      steps:["Decide the goal and the number that means success.","Set a budget and an end date before you start.","Give it enough time to reach real numbers, not a handful.","At the end, judge it against the rule you set.","Keep, kill or tweak. Do not keep it out of hope."],
      why:"Tests only help if you act on them. Clear rules turn a test into a decision. Without them, you drift, and drifting is expensive.",
      remember:"Set the rules before you start.",
      related:["how-do-i-know-if-my-marketing-works","what-should-i-do-first-with-a-small-budget","which-numbers-should-i-watch"]
    }
  },
  {
    n:20, slug:"should-i-copy-what-my-rivals-are-doing", title:"Should I copy what my rivals are doing?",
    summary:"Learn from them. Do not become them.",
    category:"Marketing", need:"Build your brand", readingTime:"3 min read",
    date:"2026-08-12", keywords:["competitors","research","differentiation"],
    content:{
      short:"Learn from them, but do not copy them. If you look the same, people have no reason to choose you over the one they already know. Study rivals to find gaps you can fill, not styles to clone.",
      learned:"You never see the full picture of a rival. That bold campaign might be losing them money. Copying it means copying a bet you cannot see the result of. Better to watch what they ignore, because that gap is often your best chance.",
      steps:["List three rivals and note what they all do.","Note what they all ignore or do badly.","Look for a gap you can own honestly.","Do that thing clearly and consistently.","Check your own results, not just their moves."],
      why:"Markets reward difference. If every business looks alike, price becomes the only choice, and that is a race nobody wins. Standing apart gives people a reason beyond price.",
      remember:"Study rivals to be different, not the same.",
      related:["how-do-i-know-what-makes-us-different","what-is-marketing-really","why-do-simple-brands-work"]
    }
  },
  {
    n:21, slug:"how-often-should-i-post", title:"How often should I post?",
    summary:"Post when you have something useful to say. A clear plan matters more than a daily count.",
    category:"Social", need:"Get noticed", readingTime:"3 min read",
    date:"2026-08-11", keywords:["posting","frequency","consistency"],
    content:{
      short:"Post as often as you can while keeping it useful. A steady, good post twice a week beats seven weak ones. Pick a pace you can keep for months, not one you will drop in two weeks.",
      learned:"People burn out chasing a daily target, then vanish. That does more harm than posting less often. What builds trust is showing up in a steady rhythm. Choose a pace that fits your real life.",
      steps:["Decide how much time you can give each week.","Pick a pace you can keep for six months.","Plan posts in batches to save time.","Focus on being useful, not just present.","Keep the rhythm even when a post does not do well."],
      why:"Consistency builds trust more than volume. People start to expect you, and being expected is a small form of being trusted. A pace you cannot keep breaks that trust when you stop.",
      remember:"Steady beats often.",
      related:["do-i-need-to-post-every-day","what-should-my-business-post-about","how-can-one-idea-make-ten-posts"]
    }
  },
  {
    n:22, slug:"what-should-my-business-post-about", title:"What should my business post about?",
    summary:"Talk about problems your customers have, questions they ask and things you can help with.",
    category:"Social", need:"Get more customers", readingTime:"3 min read",
    date:"2026-08-10", keywords:["content ideas","topics","customers"],
    content:{
      short:"Post about the problems your customers have and the questions they ask you. If someone asked it once, others are wondering it too. Your answers are your best posts.",
      learned:"The best content ideas are hiding in your inbox and your last ten conversations. You do not need to invent topics. You need to notice the questions you already answer every week and share those answers openly.",
      steps:["Write down the last ten questions customers asked.","Turn each one into a short, helpful post.","Add a small real example where you can.","Answer fully. Do not hold back the useful bit.","Watch which topics get saved and shared, then do more."],
      why:"Helpful answers pull the right people towards you. When you solve a small problem for free, you prove you can solve a bigger one for money. That is trust, earned in public.",
      remember:"Answer the questions you already get.",
      related:["how-do-i-find-things-to-write-about","should-every-post-sell-something","what-makes-someone-stop-scrolling"]
    }
  },
  {
    n:23, slug:"do-i-need-to-post-every-day", title:"Do I need to post every day?",
    summary:"No. More posts do not always mean more results.",
    category:"Social", need:"Save time", readingTime:"3 min read",
    date:"2026-08-09", keywords:["frequency","time","quality"],
    content:{
      short:"No. Daily posting is a myth that burns people out. A few strong posts beat a flood of weak ones. Quality and consistency matter far more than a daily count.",
      learned:"I have watched businesses post daily for a month, exhaust themselves, and see no real change. The posts were rushed and forgettable. When they slowed down and made fewer, better posts, results improved and so did their sanity.",
      steps:["Drop the idea that daily is required.","Pick a pace you can keep without stress.","Put the saved time into making each post better.","Reuse good ideas instead of always finding new ones.","Judge by results, not by how much you posted."],
      why:"Feeds show good content, not just recent content. One post people love does more than seven they scroll past. Fewer, better posts also last longer, because you have time to make them right.",
      remember:"Fewer, better, kinder to yourself.",
      related:["how-often-should-i-post","how-can-one-idea-make-ten-posts","do-i-need-to-be-on-every-social-app"]
    }
  },
  {
    n:24, slug:"why-do-my-posts-get-no-likes", title:"Why do my posts get no likes?",
    summary:"It may be the idea, the first line, the format or simply the wrong goal.",
    category:"Social", need:"Get noticed", readingTime:"4 min read",
    date:"2026-08-08", keywords:["engagement","hooks","format"],
    content:{
      short:"Usually one of four things: the idea is not interesting, the first line does not grab, the format is wrong for the app, or you are chasing likes when you should chase customers. Check each one.",
      learned:"Likes are the wrong worry a lot of the time. But if you do want more, the first line is where most posts die. People decide in a second whether to stop. A dull opening loses them before your good point arrives.",
      steps:["Read your first line alone. Would it stop you?","Make sure the idea is useful or surprising.","Match the format to the app people are using.","Ask if likes are even your real goal.","Test a stronger opening on your next post."],
      why:"Attention is won or lost at the start. Even great advice fails if nobody reads past line one. And sometimes the fix is realising likes were never the point, sales were.",
      remember:"Win the first line, or lose the post.",
      related:["what-makes-someone-stop-scrolling","do-likes-really-matter","what-makes-a-good-headline"]
    }
  },
  {
    n:25, slug:"do-likes-really-matter", title:"Do likes really matter?",
    summary:"Sometimes. But a like is not the same as a sale.",
    category:"Social", need:"Learn the basics", readingTime:"3 min read",
    date:"2026-08-07", keywords:["vanity metrics","engagement","sales"],
    content:{
      short:"A little. Likes can show a post landed. But they do not pay wages. Plenty of loved posts sell nothing, and plenty of quiet posts bring real customers. Judge by what matters to your business.",
      learned:"Likes feel good, and that is the trap. It is easy to chase the feeling instead of the result. I care far more about saves, shares, replies and clicks, because those are people taking a step towards you.",
      steps:["Decide what a post is really for: reach, trust or sales.","Look past likes to saves, shares and clicks.","Track whether posts lead to enquiries or sales.","Do more of what drives real steps, not just likes.","Do not let a quiet-but-selling post feel like a failure."],
      why:"A like is the cheapest action someone can take. It costs nothing and means little on its own. The actions that cost effort, like saving or messaging you, tell you far more.",
      remember:"Likes feel good. Sales keep you open.",
      related:["which-numbers-should-i-watch","why-do-my-posts-get-no-likes","should-every-post-sell-something"]
    }
  },
  {
    n:26, slug:"what-makes-someone-stop-scrolling", title:"What makes someone stop scrolling?",
    summary:"Give them a reason to care in the first few seconds.",
    category:"Content", need:"Get noticed", readingTime:"3 min read",
    date:"2026-08-06", keywords:["hooks","attention","opening"],
    content:{
      short:"A reason to care, given fast. That means a strong first line or image that touches a problem, a surprise or a clear promise. If the first second is dull, the rest never gets read.",
      learned:"People scroll on autopilot. To stop them, you have to interrupt the pattern. The best openings name a problem the person feels, or say something they did not expect. Clever wording matters less than hitting a real nerve.",
      steps:["Open with the problem your reader feels most.","Or open with a surprising, true fact.","Keep the first line short and specific.","Cut any warm-up before the point.","Say who it is for so the right people stop."],
      why:"Feeds are endless, so attention is the real cost. You are not competing on quality alone, you are competing to be noticed at all. Earn the stop first, then earn the read.",
      remember:"Make them care in one second.",
      related:["what-makes-a-good-headline","why-do-my-posts-get-no-likes","how-do-i-make-dull-things-interesting"]
    }
  },
  {
    n:27, slug:"should-every-post-sell-something", title:"Should every post sell something?",
    summary:"No. Some posts should teach, help, prove or remind.",
    category:"Social", need:"Keep customers", readingTime:"3 min read",
    date:"2026-08-05", keywords:["content mix","selling","trust"],
    content:{
      short:"No. If every post sells, people tune out. Mix it up: teach something, help with a problem, show proof you are good, and sometimes ask for the sale. The selling works better because of the rest.",
      learned:"Think of it like a friendship. Someone who only ever asks for things is tiring. The businesses people love give more than they ask. When they do ask for the sale, people are glad to say yes.",
      steps:["Aim for mostly helpful or interesting posts.","Add proof posts: results, reviews, real work.","Sell clearly, but not in every post.","Make the selling posts just as useful as the rest.","Watch that helping does not quietly become never selling."],
      why:"Trust is built by giving. Sales come from trust. If you skip the giving and only sell, you are asking for something you have not earned yet. The mix earns it.",
      remember:"Give more than you ask.",
      related:["what-should-my-business-post-about","do-likes-really-matter","what-makes-a-good-about-page"]
    }
  },
  {
    n:28, slug:"do-i-need-to-be-on-every-social-app", title:"Do I need to be on every social app?",
    summary:"No. Be where the right people are and where you can do good work.",
    category:"Social", need:"Save time", readingTime:"3 min read",
    date:"2026-08-04", keywords:["channels","focus","platforms"],
    content:{
      short:"No. Being on every app spreads you thin and makes everything weak. Pick one or two where your customers actually are and where you can keep up a good standard. Do those well.",
      learned:"Being everywhere is a fast way to feel busy and get nowhere. Each app needs its own style and time. I would rather see a business own one channel than limp along on five. You can always add another once the first is strong.",
      steps:["Find out which apps your customers really use.","Pick one or two you can do well.","Go deep there before adding more.","Reuse your best ideas across them to save time.","Only add a new app when the first is steady."],
      why:"Attention and time are limited. Focus lets you learn one place properly and build a real audience. Spreading thin means never being good enough anywhere to matter.",
      remember:"Own one before adding another.",
      related:["do-i-need-to-post-every-day","how-can-one-idea-make-ten-posts","where-should-i-start-with-marketing"]
    }
  },
  {
    n:29, slug:"should-the-founder-be-on-camera", title:"Should the founder be on camera?",
    summary:"It can help build trust, but only when it suits the brand and the person.",
    category:"Social", need:"Get noticed", readingTime:"3 min read",
    date:"2026-08-03", keywords:["founder","video","trust"],
    content:{
      short:"It often helps. People trust faces and voices more than logos. But only if the founder is willing and it fits the brand. A nervous, forced founder on camera can do more harm than none at all.",
      learned:"A founder on camera can shortcut a lot of trust, because people feel they know a real person. But it must be honest. If you hate it, it shows, and that awkwardness reads as something to hide. There are other ways to be human if camera is not for you.",
      steps:["Ask if the founder is genuinely willing.","Start small, with short, simple clips.","Be real, not polished. People forgive rough, not fake.","Talk about customer problems, not just the business.","If camera is wrong, use voice, writing or a team member."],
      why:"Buying from a business can feel risky. Seeing a real person lowers that feeling. But the trust only holds if the person is being themselves. Forced confidence is easy to spot.",
      remember:"A real face builds trust. A forced one does not.",
      related:["what-makes-a-good-story","how-long-should-a-marketing-video-be","how-do-i-make-my-brand-look-more-trusted"]
    }
  },
  {
    n:30, slug:"how-long-should-a-marketing-video-be", title:"How long should a marketing video be?",
    summary:"As short as it can be while still doing the job.",
    category:"Content", need:"Get noticed", readingTime:"3 min read",
    date:"2026-08-02", keywords:["video","length","attention"],
    content:{
      short:"As short as it can be while still making its point. If the point lands in fifteen seconds, do not stretch it to sixty. Length should serve the message, not a rule you read somewhere.",
      learned:"People do not owe you their time. Every extra second is a chance for them to leave. The best short videos say one thing clearly. The worst long ones say one thing slowly, buried in a warm-up nobody asked for.",
      steps:["Decide the one thing the video must say.","Start at the point, skip the intro.","Cut every second that does not add to it.","Watch it back and remove the slow bits.","If it drags, it is too long."],
      why:"Attention drops fast on video. A tight, short video keeps people to the end, where your point and your call to action live. A long one loses them before they get there.",
      remember:"Say it fast, then stop.",
      related:["what-makes-someone-stop-scrolling","should-the-founder-be-on-camera","how-do-i-write-in-a-simple-way"]
    }
  },
  {
    n:31, slug:"what-makes-a-good-story", title:"What makes a good story?",
    summary:"A good story has a clear person, problem, change and point.",
    category:"Content", need:"Get noticed", readingTime:"3 min read",
    date:"2026-08-01", keywords:["storytelling","structure","narrative"],
    content:{
      short:"A good story has four parts: a person you care about, a problem they face, a change that happens, and a point you take away. Miss one and it stops feeling like a story.",
      learned:"People remember stories far longer than facts. But a story is not just a nice anecdote. It needs a real person with a real problem, and something has to change. That change is what makes it stick and what makes your point land.",
      steps:["Pick one real person, often a customer.","Show the problem they had, plainly.","Show what changed, and how.","Land one clear point from it.","Keep it short. Cut anything that does not serve the point."],
      why:"Facts inform, but stories move people. We are wired to follow a person through a problem to a change. That shape carries your message in a way a list of features never will.",
      remember:"Person, problem, change, point.",
      related:["what-makes-a-brand-easy-to-remember","how-do-i-make-dull-things-interesting","what-makes-a-good-headline"]
    }
  },
  {
    n:32, slug:"how-do-i-find-things-to-write-about", title:"How do I find things to write about?",
    summary:"Start with questions customers already ask.",
    category:"Content", need:"Save time", readingTime:"3 min read",
    date:"2026-07-31", keywords:["ideas","topics","questions"],
    content:{
      short:"Look at the questions your customers already ask you. Emails, calls, messages, reviews. Each question is a topic. You will never run out, because customers never stop asking.",
      learned:"People stare at a blank page trying to invent clever topics, while a goldmine sits in their inbox. Every real question is proof that someone wants that answer. Writing it once saves you answering it a hundred times.",
      steps:["Keep a running list of questions people ask.","Add the things you explain again and again.","Pick one question per piece and answer it fully.","Use the customer's own words as the title.","Point people to the piece when they ask again."],
      why:"Topics from real questions are guaranteed to be wanted. You are not guessing what people care about, you are answering what they already asked. That is the safest content bet there is.",
      remember:"Every question is a topic.",
      related:["what-should-my-business-post-about","how-can-one-idea-make-ten-posts","do-i-need-a-blog"]
    }
  },
  {
    n:33, slug:"how-do-i-write-in-a-simple-way", title:"How do I write in a simple way?",
    summary:"Use short words, short lines and one idea at a time.",
    category:"Content", need:"Learn the basics", readingTime:"3 min read",
    date:"2026-07-30", keywords:["writing","clarity","simple english"],
    content:{
      short:"Use short words. Write short sentences. Put one idea in each. Cut anything you would not say out loud to a friend. Then read it aloud and fix what makes you stumble.",
      learned:"Simple writing is not easy writing. It takes work to cut the clever bits and say the plain thing. But plain writing gets read and understood, and understood is the whole point. Nobody ever complained that something was too clear.",
      steps:["Say the main point in the first line.","Break long sentences into short ones.","Swap long words for short, common ones.","Cut filler like 'in order to' and 'at this moment in time'.","Read it aloud. If you stumble, fix it."],
      why:"Readers are busy and skimming. Simple writing respects that. It lowers the effort to understand you, and lower effort means more people finish and act. Clever writing often just shows off.",
      remember:"Write like you talk, then trim.",
      related:["why-do-simple-brands-work","how-do-i-make-ai-writing-sound-human","what-makes-a-good-headline"]
    }
  },
  {
    n:34, slug:"what-makes-a-good-headline", title:"What makes a good headline?",
    summary:"Tell people what they will get, learn or feel.",
    category:"Content", need:"Get noticed", readingTime:"3 min read",
    date:"2026-07-29", keywords:["headlines","titles","clarity"],
    content:{
      short:"A good headline promises something clear: what the reader will get, learn or feel. It is specific, honest and easy to understand in one glance. Clever comes second to clear.",
      learned:"Most people spend an hour on the piece and ten seconds on the headline. That is backwards. The headline decides if the piece gets read at all. A clear promise beats a clever pun almost every time.",
      steps:["Say what the reader gets, in plain words.","Be specific. Numbers and details help.","Keep it honest. Do not promise what you cannot give.","Write five versions, then pick the clearest.","Read it cold and ask, would I click this?"],
      why:"The headline is the door. If it is confusing or dull, nobody opens it, and the good work behind it is wasted. A clear promise gives people a reason to step through.",
      remember:"Clear beats clever.",
      related:["what-makes-someone-stop-scrolling","how-do-i-write-in-a-simple-way","why-do-my-posts-get-no-likes"]
    }
  },
  {
    n:35, slug:"how-do-i-make-dull-things-interesting", title:"How do I make dull things interesting?",
    summary:"Find the problem, the person or the surprise inside the topic.",
    category:"Content", need:"Get noticed", readingTime:"3 min read",
    date:"2026-07-28", keywords:["engagement","storytelling","angle"],
    content:{
      short:"Nothing is dull if you find the human bit. Look for the problem it solves, the person it affects, or the surprising fact inside it. Lead with that, not the dry detail.",
      learned:"There are no boring topics, only boring angles. Tax, insurance, plumbing, all can grip people if you find the moment where it matters to a real person. Start where the stakes are, not where the manual starts.",
      steps:["Ask who this really affects and how.","Find the moment it goes wrong for them.","Lead with that problem or a surprise.","Use a small real example, not theory.","Keep the dry detail short and near the end."],
      why:"People care about people and problems, not facts in the abstract. When you show the human stake, a flat topic gets a pulse. The facts still get through, but now they matter.",
      remember:"Find the human bit, lead with that.",
      related:["what-makes-a-good-story","what-makes-someone-stop-scrolling","what-makes-a-good-headline"]
    }
  },
  {
    n:36, slug:"should-i-use-ai-to-write-content", title:"Should I use AI to write content?",
    summary:"Yes, but use it as a tool. Do not let it do all the thinking.",
    category:"Tools", need:"Save time", readingTime:"4 min read",
    date:"2026-07-27", keywords:["ai","writing","tools"],
    content:{
      short:"Yes, as a helper. AI is great for drafts, ideas and first passes. But it does not know your customers or your story. Use it to go faster, then add the real detail and judgement only you have.",
      learned:"AI is like a fast junior who has read everything but done nothing. It gives you a solid start in seconds, which is genuinely useful. But if you publish it untouched, it reads flat and says nothing only you could say. The value is in what you add.",
      steps:["Use AI for outlines, drafts and rewrites.","Give it real detail from your business to work with.","Cut the filler it tends to add.","Add real examples, numbers and opinions.","Read it aloud and make it sound like you."],
      why:"AI can copy the shape of good writing but not the substance of your experience. Readers can feel the difference. Used as a tool it saves hours. Used as a replacement it makes you sound like everyone else.",
      remember:"AI drafts. You decide.",
      related:["how-do-i-make-ai-writing-sound-human","how-do-i-write-in-a-simple-way","how-can-one-idea-make-ten-posts"]
    }
  },
  {
    n:37, slug:"how-do-i-make-ai-writing-sound-human", title:"How do I make AI writing sound human?",
    summary:"Cut filler, add real detail and write the way people speak.",
    category:"Tools", need:"Save time", readingTime:"3 min read",
    date:"2026-07-26", keywords:["ai","editing","voice"],
    content:{
      short:"Cut the filler, add real detail, and change the rhythm. AI loves long, even sentences and safe words. Humans use short ones, specific facts and the odd strong opinion. Add those and it comes alive.",
      learned:"You can spot AI writing because it is smooth but empty. It never says anything risky or exact. The fix is to pour in real specifics only you know, a real number, a real customer, a real mistake, and to break the tidy rhythm with short lines.",
      steps:["Delete filler phrases and warm-up sentences.","Add specific, true details from your world.","Mix short sentences with longer ones.","Add one clear opinion or a bit of personality.","Read it aloud and cut anything that sounds like a robot."],
      why:"Human writing has texture: specifics, rhythm and a point of view. AI defaults to safe and smooth, which reads as fake. Adding real detail and voice is what makes people trust it.",
      remember:"Specifics and rhythm make it human.",
      related:["should-i-use-ai-to-write-content","how-do-i-write-in-a-simple-way","what-makes-a-good-story"]
    }
  },
  {
    n:38, slug:"how-can-one-idea-make-ten-posts", title:"How can one idea make ten posts?",
    summary:"Change the angle, format and question instead of finding ten new ideas.",
    category:"Content", need:"Save time", readingTime:"4 min read",
    date:"2026-07-25", keywords:["repurposing","content","efficiency"],
    content:{
      short:"You do not need ten ideas, you need one good idea seen ten ways. Change the angle, the format and the question. A single lesson can become a post, a tip, a story, a mistake and a how-to.",
      learned:"Trying to invent fresh ideas daily is exhausting and unnecessary. One strong idea has many faces. I have turned a single customer lesson into a week of posts just by asking different questions of it. Work the idea, do not chase new ones.",
      steps:["Take one idea you know is useful.","Post the tip plainly.","Post the story behind it.","Post the mistake people make with it.","Post it as a question, a how-to and a short video."],
      why:"Your audience does not see everything you post, so repeating an idea in new forms is fine, not lazy. It also lets you get more from your best thinking instead of spreading yourself thin over weak ideas.",
      remember:"One idea, ten angles.",
      related:["how-do-i-find-things-to-write-about","do-i-need-to-post-every-day","how-often-should-i-post"]
    }
  },
  {
    n:39, slug:"what-should-my-home-page-say", title:"What should my home page say?",
    summary:"Tell people what you do, who it is for and why they should care.",
    category:"Websites", need:"Get more customers", readingTime:"4 min read",
    date:"2026-07-24", keywords:["home page","messaging","clarity"],
    content:{
      short:"Three things, fast: what you do, who it is for, and why it matters to them. A visitor should understand all three within seconds of landing, without scrolling or guessing.",
      learned:"Most home pages talk about the business, not the customer. They lead with 'welcome' and a mission statement. Visitors do not care yet. They want to know, in plain words, if they are in the right place and if you can help them.",
      steps:["Say what you do in one clear line at the top.","Say who it is for right after.","Show one clear reason you are worth it.","Add one obvious next step, like 'get a quote'.","Cut anything that does not help them decide."],
      why:"A home page has seconds to answer 'am I in the right place?'. If it makes people work for that answer, they leave. Clarity at the top keeps them reading and moving towards you.",
      remember:"What, who, why, then what next.",
      related:["what-should-people-see-first-on-my-website","why-do-people-leave-my-website","what-makes-a-good-about-page"]
    }
  },
  {
    n:40, slug:"what-should-people-see-first-on-my-website", title:"What should people see first on my website?",
    summary:"The clearest reason to stay.",
    category:"Websites", need:"Get more customers", readingTime:"3 min read",
    date:"2026-07-23", keywords:["above the fold","first impression","clarity"],
    content:{
      short:"The clearest reason to stay. That is one plain line saying what you do and who it helps, plus one obvious next step. Not a slideshow, not a slogan, not a stock photo.",
      learned:"The top of the page is your most valuable space, and most people waste it on something pretty but empty. A visitor's first question is simple: can this help me? Answer it in the first thing they see and they will keep reading.",
      steps:["Put a clear, plain headline at the very top.","Follow it with one line that adds detail.","Add one clear button for the next step.","Make sure it all shows without scrolling.","Remove sliders and anything that hides the message."],
      why:"You get one first impression and it happens in seconds. If the first thing people see is unclear, they never reach your good stuff. A clear top turns a glance into a read.",
      remember:"Lead with the reason to stay.",
      related:["what-should-my-home-page-say","why-do-people-leave-my-website","how-fast-should-my-website-be"]
    }
  },
  {
    n:41, slug:"why-do-people-leave-my-website", title:"Why do people leave my website?",
    summary:"It may be slow, unclear, hard to use or asking too much too soon.",
    category:"Websites", need:"Get more customers", readingTime:"4 min read",
    date:"2026-07-22", keywords:["bounce","usability","speed"],
    content:{
      short:"Usually one of four reasons: it loads too slowly, the message is unclear, it is hard to use, or it asks for too much before earning trust. Check each and fix the worst first.",
      learned:"People rarely leave because your business is bad. They leave because the site made them work. A slow load, a confusing menu, a form with fifteen fields. Each is a small reason to give up, and online, small reasons are enough.",
      steps:["Test how fast your site loads on a phone.","Read your first screen. Is the message clear?","Try to buy or enquire yourself. Note every snag.","Cut form fields down to the essentials.","Fix the biggest friction first, then the next."],
      why:"Every extra second and every moment of confusion loses people. The web makes leaving effortless. So the job is to remove reasons to go, one by one, until staying is the easy choice.",
      remember:"People leave when you make them work.",
      related:["how-fast-should-my-website-be","what-should-people-see-first-on-my-website","why-is-my-marketing-not-working"]
    }
  },
  {
    n:42, slug:"how-fast-should-my-website-be", title:"How fast should my website be?",
    summary:"Fast enough that people do not notice they are waiting.",
    category:"Websites", need:"Get more customers", readingTime:"3 min read",
    date:"2026-07-21", keywords:["speed","performance","loading"],
    content:{
      short:"Fast enough that nobody notices it loading. As a rule, aim for your main content to appear in under two to three seconds on a phone. Every second slower loses people and sales.",
      learned:"Speed is quiet but powerful. Nobody praises a fast site, but a slow one loses money every day without you seeing why. Often the fix is simple: big images that were never shrunk. That one change can transform a page.",
      steps:["Test your site on a phone, not just your laptop.","Shrink and compress large images.","Remove plugins and trackers you do not need.","Keep the page simple, especially the top.","Re-test and aim for content in a few seconds."],
      why:"People judge speed against their patience, which is short. A slow site feels unreliable before they even read a word. A fast one feels trustworthy and keeps people moving towards a sale.",
      remember:"If they notice the wait, it is too slow.",
      related:["why-do-people-leave-my-website","what-should-people-see-first-on-my-website","what-should-my-home-page-say"]
    }
  },
  {
    n:43, slug:"do-i-need-a-blog", title:"Do I need a blog?",
    summary:"A blog is useful when you have real questions worth answering.",
    category:"Websites", need:"Get noticed", readingTime:"3 min read",
    date:"2026-07-20", keywords:["blog","content","seo"],
    content:{
      short:"You need one if your customers ask questions worth answering. A blog that answers real questions builds trust and helps people find you. A blog written just to have one is a waste of time.",
      learned:"A blog is not a box to tick. It earns its place when each post answers a genuine question and helps a real person. The best business blogs are quiet libraries of useful answers, not diaries of company news nobody reads.",
      steps:["List the questions customers actually ask.","Only start a blog if you have real answers to give.","Write one clear, useful post per question.","Link posts to each other where it helps.","Skip posts written only for search engines."],
      why:"Useful answers pull the right people to you and prove you know your field. But content with no purpose just sits there, ageing. The value is in usefulness, not in the fact you have a blog.",
      remember:"Answer real questions, or skip it.",
      related:["how-do-i-find-things-to-write-about","what-should-my-business-post-about","how-do-i-write-in-a-simple-way"]
    }
  },
  {
    n:44, slug:"what-makes-a-good-about-page", title:"What makes a good About page?",
    summary:"Tell people who you help, what you do and why they can trust you.",
    category:"Websites", need:"Build your brand", readingTime:"3 min read",
    date:"2026-07-19", keywords:["about page","trust","story"],
    content:{
      short:"A good About page is not really about you. It is about who you help and why they can trust you. Tell them what you do, who it is for, and give real proof, all in plain words.",
      learned:"People visit your About page when they are close to choosing you and want reassurance. So it should reduce their worry, not list your history. Say who you help, show you have done it before, and be human. That is what wins them.",
      steps:["Open with who you help and what you do.","Show proof: results, years, real customers.","Include a real photo and a real name.","Keep the history short. Lead with the customer.","End with a clear next step."],
      why:"The About page is a trust page in disguise. People are asking 'can I rely on these people?'. Answering that with clarity and proof does more than any origin story about your founding.",
      remember:"Make it about them, backed by proof.",
      related:["how-do-i-make-my-brand-look-more-trusted","should-i-show-prices-on-my-website","what-should-my-home-page-say"]
    }
  },
  {
    n:45, slug:"should-i-show-prices-on-my-website", title:"Should I show prices on my website?",
    summary:"Sometimes yes. It depends on what you sell and how people buy it.",
    category:"Websites", need:"Get more customers", readingTime:"4 min read",
    date:"2026-07-18", keywords:["pricing","transparency","conversion"],
    content:{
      short:"Often yes. Prices help people decide and filter out those who cannot afford you. Hide them only when the price truly depends on the job. Even then, give a starting point or a range.",
      learned:"Many owners hide prices out of fear. But hiding them frustrates the good customers and wastes your time on people who were never going to buy. When prices, or at least ranges, are clear, the enquiries you get are warmer and closer to buying.",
      steps:["Show a price or range wherever you can.","If it varies, give a 'from' figure or bands.","Explain what changes the price.","Do not make people email just to learn the cost.","Test whether clear pricing raises good enquiries."],
      why:"People are uneasy about what they cannot see. A hidden price feels like a catch. Showing it, even as a range, builds trust and screens out poor-fit enquiries, saving everyone time.",
      remember:"Clear pricing builds trust and saves time.",
      related:["what-makes-a-good-about-page","why-do-people-leave-my-website","what-should-my-home-page-say"]
    }
  },
  {
    n:46, slug:"when-should-i-start-paid-ads", title:"When should I start paid ads?",
    summary:"Start when the offer, page and way you track results are ready.",
    category:"Growth", need:"Get more customers", readingTime:"4 min read",
    date:"2026-07-17", keywords:["paid ads","readiness","conversion"],
    content:{
      short:"Start when three things are ready: a clear offer people want, a page that turns visitors into buyers, and a way to track what happens. Ads before that just pay to speed up a problem.",
      learned:"Ads are an amplifier, not a fix. If your page already turns some visitors into customers, ads bring you more of them. If it does not, ads bring more people to a page that fails, and you pay for every one. Get the machine working first.",
      steps:["Make sure your offer is clear and wanted.","Check your page already converts some visitors.","Set up tracking so you know what ads produce.","Start with a small budget you can afford to test.","Grow spend only on what brings profit."],
      why:"Paid ads make whatever you already have bigger, good or bad. Starting too early wastes money learning what a free look at your page could have told you. Ready first, then amplify.",
      remember:"Ads amplify. Fix the machine first.",
      related:["what-should-i-do-first-with-a-small-budget","which-marketing-gives-the-best-roi","how-much-does-it-cost-me-to-win-one-customer"]
    }
  },
  {
    n:47, slug:"which-marketing-gives-the-best-roi", title:"Which marketing gives the best ROI?",
    summary:"ROI means return on investment. It shows how much you get back compared with what you spend. The best channel is the one that brings good customers at a cost that still leaves you profit.",
    category:"Money", need:"Make more money", readingTime:"4 min read",
    date:"2026-07-16", keywords:["roi","channels","profit"],
    content:{
      short:"There is no single best channel. ROI means return on investment: for every £1 you spend, how much do you get back? The best channel is simply the one that brings you good customers cheaply enough to leave a profit, and that differs for every business.",
      learned:"People want one answer, like 'email' or 'ads'. But the right channel depends on who you sell to and what you sell. What matters is not the channel's reputation, it is your own numbers. Test a few, measure honestly, and back the ones that pay.",
      steps:["Pick two or three channels that suit your customers.","Give each a fair test with a set budget.","Track what each one costs and what it brings back.","Work out the return: money back divided by money spent.","Put more into the winners, less into the rest."],
      why:"ROI turns marketing from a guess into a decision. If email returns £5 for every £1 and ads return £2, you know where the next pound should go. The best channel is the one your own numbers prove.",
      remember:"The best channel is the one that pays you back.",
      related:["how-much-does-it-cost-me-to-win-one-customer","how-much-is-one-customer-really-worth","how-do-i-know-if-my-marketing-works"]
    }
  },
  {
    n:48, slug:"how-much-does-it-cost-me-to-win-one-customer", title:"How much does it cost me to win one customer?",
    summary:"Add up what you spend to bring in new customers, then divide it by how many new customers you gained.",
    category:"Money", need:"Make more money", readingTime:"4 min read",
    date:"2026-07-15", keywords:["cac","cost per customer","budget"],
    content:{
      short:"Add up everything you spent to win customers in a period, then divide by how many new customers you got. That number is your cost to win one. It tells you if your marketing can pay for itself.",
      learned:"This one number changes how people think overnight. Once you know a customer costs you £20 to win and spends £100, you stop worrying about the cost of ads and start asking how many more you can win. It turns fear into maths.",
      steps:["Pick a time period, like one month.","Add up all money spent on winning customers.","Count the new customers you gained in that time.","Divide the spend by the number of customers.","Compare that cost to what a customer is worth."],
      why:"Without this number, spending feels scary and random. With it, you can see clearly whether marketing makes or loses money. It is the link between what you spend and what you earn.",
      remember:"Spend to win, divided by customers won.",
      related:["how-much-is-one-customer-really-worth","which-marketing-gives-the-best-roi","how-much-should-i-spend-on-marketing"],
      example:{lines:["You spend £200.","You get 10 new customers.","Each customer cost you £20 to win."],note:"If each customer spends £100 with you, that £20 is money well spent. If they spend £15, you are losing money on every one."}
    }
  },
  {
    n:49, slug:"how-much-is-one-customer-really-worth", title:"How much is one customer really worth?",
    summary:"Do not just look at the first sale. Look at what they may spend over the full time they stay with you.",
    category:"Money", need:"Make more money", readingTime:"4 min read",
    date:"2026-07-14", keywords:["lifetime value","ltv","retention"],
    content:{
      short:"Do not judge a customer by their first purchase. Judge them by everything they spend over the whole time they stay with you. That full figure is what you can really afford to spend to win them.",
      learned:"This is the number that lets small businesses outspend bigger ones on winning customers. If a rival only counts the first sale and you count the full relationship, you can afford to pay more to win each customer and still come out ahead.",
      steps:["Work out what a customer spends on average each time.","Work out how often they buy in a year.","Work out how many years they usually stay.","Multiply these to get their full value.","Use that figure, not the first sale, to set what you can spend."],
      why:"The first sale hides the real value. A customer worth £30 once might be worth £600 over three years. Knowing the bigger number lets you invest properly in winning and keeping them.",
      remember:"Count the whole relationship, not the first sale.",
      related:["how-much-does-it-cost-me-to-win-one-customer","which-marketing-gives-the-best-roi","should-every-post-sell-something"],
      example:{lines:["A customer spends £50 each visit.","They visit 4 times a year.","They stay with you for 3 years."],note:"That customer is worth £600, not £50. So spending £40 to win them is a good deal, not a scary one."}
    }
  },
  {
    n:50, slug:"what-makes-people-remember-a-brand", title:"What makes people remember a brand?",
    summary:"A clear idea, told well and repeated long enough to stick.",
    category:"Brand", need:"Get noticed", readingTime:"3 min read",
    date:"2026-07-13", keywords:["memory","brand","recall","consistency"],
    content:{
      short:"One clear idea, told well, and repeated for longer than feels needed. Memory is built by repetition, not by being clever once. The brands you remember earned it by staying the same over time.",
      learned:"After 14 years, this is the pattern I trust most. It is not the biggest budget or the cleverest advert that people remember. It is the brand that said one clear thing, in the same voice and look, again and again, until it stuck.",
      steps:["Choose the one idea you want to own.","Say it in plain, simple words.","Look and sound the same everywhere.","Repeat it far past the point of boredom.","Resist the urge to change it just to feel new."],
      why:"The brain remembers what it meets often and what is easy to grasp. A clear idea repeated steadily ticks both boxes. Chopping and changing resets the memory each time, so nothing sticks.",
      remember:"Tell a good story. Make it stick. Leave a mark.",
      related:["what-makes-a-brand-easy-to-remember","why-do-simple-brands-work","how-do-i-know-what-makes-us-different"]
    }
  }
];
