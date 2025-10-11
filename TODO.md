# TODO: Fix Navbar Navigation Issue

## Approved Plan
- Move Header to layout.tsx for shared navigation across pages.
- Remove Header from individual pages.
- Clean up unused GSAP smooth wrapper divs in layout.tsx.

## Steps
- [x] Add Header import and <Header /> to src/app/layout.tsx inside the smooth-content div.
- [x] Remove Header import and <Header /> from src/app/page.tsx.
- [x] Remove Header import and <Header /> from src/app/about/page.tsx.
- [x] Remove Header import and <Header /> from src/app/projects/page.tsx.
- [x] Remove Header import and <Header /> from src/app/contact/page.tsx.
- [x] Remove unused GSAP smooth wrapper divs from src/app/layout.tsx.
