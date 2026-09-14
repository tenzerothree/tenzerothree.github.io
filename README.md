# tenzerothree.github.io

Personal portfolio site for Chris Ward — UI/UX-rooted engineering leader based in Cambridge, UK.

Built as a static Jekyll site — plain HTML pages with shared `_includes` for the nav, footer, and contact block — served by GitHub Pages with no other build tooling.

## Features

- Career timeline covering freelance, SyndicateRoom, Risilience, and Memorify
- About page and case study pages for featured work
- Contact section with email, phone, and social links, shared across pages via `_includes/contact.html`

## Usage

This site uses Jekyll includes (`{% include %}`), so it needs a Jekyll build to render correctly — opening `index.html` directly (or serving the folder with something like `python3 -m http.server`) will show the raw, unrendered template tags.

Install Jekyll once:

```
gem install jekyll --user-install
```

Then serve the site locally with live-reload:

```
jekyll serve
```

## Feedback

[tenzerothree.com](https://tenzerothree.com)
