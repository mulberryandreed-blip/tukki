# Website UI kit
Recreation of mulberryandreed.com from `reference/` sources. Copy is verbatim.

- `index.html`: homepage. Swaying mulberry-bush hero (berries are clickable and leave ink stains), typewriter headline, marquee, services, pricing, about counter, journal covers, contact panel.
- `about.html`: numbered sections, Espresso "Discretion comes first" panel, testimonial, "Work with us" panel.
- `journal.html`: 50 guides loaded from `blog-data.js`, with search, category and need filters, and an article view (`#post=slug`). The Free tools tab lists the 4 PDFs from `resources-data.js`, with category filters; the PDFs are in `assets/resources/`.

Shared files: `Chrome.jsx` (Nav, ContactCTA), `Hero.jsx` (hero + stain layer), `Sections.jsx`, `content.js`, `site.css` (animation and illustration rules that can't be inline).

