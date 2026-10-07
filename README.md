# Voltoro Engineering Solutions — website

A plain static website (HTML + CSS + a little vanilla JS). No build step, no dependencies.
Everything — copy, logo, colours, typefaces, service icons, client logos and photography —
comes from the *Voltoro Engineering Solutions Profile* company profile PDF.

## Preview locally

```bash
node serve.js
```

Then open <http://localhost:4300>. (`serve.js` is only a convenience for local preview —
you can also just double-click `index.html`.)

## Deploying

The repo is a zero-config static site: `index.html` sits at the root and there is no
`package.json`, so no build step runs. `vercel.json` only sets long cache headers for
`/assets`.

**Vercel (via GitHub):** import `webdemosite0/vesengineering` at <https://vercel.com/new>
with these settings — Framework Preset **Other**, Root Directory **`./`**, and Build
Command, Output Directory and Install Command all left **empty**. Once imported, every push
to `main` deploys automatically.

Any other static host works the same way: serve the repo root as-is.

## Brand

| | |
| --- | --- |
| Brand blue | `#004AAD` (sampled from the logo in the profile) |
| Ink / headings | `#111111` |
| Secondary blue | `#7B9FDC` (the sweep used on the profile's services page) |
| Display type | **Archivo Black** — the profile's big statement headings |
| Text type | **Montserrat** 400–800 — the profile's body and sub-headings |

Both faces are loaded from Google Fonts. The profile also uses Canva Sans and Pattanakarn,
which are Canva-only fonts with no web release; Montserrat covers those cases, and it is the
dominant typeface in the document anyway.

Colours are CSS custom properties in `:root` at the top of `assets/css/style.css`.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home |
| `about.html` | About Voltoro |
| `services.html` | Services overview |
| `civil-engineering.html` | Civil engineering (site prep, foundations, steel, roads, repair, epoxy, painting) |
| `mechanical-engineering.html` | Mechanical engineering (design & inspection, fabrication, maintenance) |
| `electrical-engineering.html` | Electrical engineering (power systems, consultancy, gap analysis) |
| `project-management.html` | Turnkey project management |
| `noc-services.html` | Government NOC acquisition |
| `clients.html` | Clients |
| `contact.html` | Contact + enquiry form |

## Structure

```
assets/css/style.css      all styling (design tokens at the top of the file)
assets/js/main.js         mobile nav, services dropdown, footer year, enquiry form
assets/img/               photography from the company profile
assets/img/ves-logo.png         logo for light backgrounds (header)
assets/img/ves-logo-white.png   logo for dark backgrounds (footer)
assets/img/icons/         the five blue service icons from the profile
assets/img/clients/       the nine client logos from the profile
```

Both logo files are transparent PNGs lifted from the profile at high resolution. The white
variant is the same artwork with the black ink inverted, matching how the logo appears on the
profile's dark cover.

## Things to fill in before going live

1. **Phone number and office address** — `contact.html` carries labelled placeholders (search for
   "Add your office address here" and "Add your contact number here"). Add them to the top bar and
   footer too if you want.
2. **Enquiry form** — with no backend, submitting opens the visitor's mail client addressed to
   `info@ves-eng.com`. To collect submissions properly, replace the submit
   handler at the bottom of `assets/js/main.js` with a `fetch()` POST to a form service
   (Formspree, Basin, Netlify Forms) or your own endpoint.
3. **Header/footer edits apply per file** — that markup is duplicated in each page, so a change
   to the nav needs to be made in all ten HTML files.
