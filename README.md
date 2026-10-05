# RU-APM: Applied Mathematics Resources

A static website for Applied Mathematics students of the University of Rajshahi. It needs no build step, so it runs on GitHub Pages as it is.

Live site: https://bidhankumarpaul.github.io/APM-Resources-by-BKP/

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: Applied Mathematics Resources (link buttons, social handles, family, semester cards) |
| `apm-1y1s.html` ... `apm-4y2s.html` | APM 1Y1S, 1Y2S, 2Y1S, 2Y2S, 3Y1S, 3Y2S, 4Y1S, 4Y2S |
| `students.html` | Know students (batch dropdown, APM 24 at the top) |
| `about.html` | About me |

Other files: `style.css` (design), `app.js` (page logic), `data.js` (all content), `assets/me.jpg` (profile photo), `.nojekyll` (tells GitHub Pages to serve files as they are).

## Publish on GitHub Pages

1. Upload every file and the `assets` folder to the root of the repository (replace the old `index.html`).
2. Open the repository, then Settings, then Pages.
3. Under Build and deployment, choose Deploy from a branch, pick `main` and the `/ (root)` folder, then Save.
4. Wait about a minute and open the live site link above.

## Add your content (edit `data.js` only)

**Course links.** Each course has five buttons: Note 1, Note 2, Books, PYQs (typed) and PYQs (handwritten). Find the course in the `LINKS` list (for example `"1y1s:AMAT1101"`) and paste a link between the quotes:

```js
"1y1s:AMAT1101":{n1:"https://example.com/note1.pdf",n2:"",bk:"https://example.com/book",pt:"",ph:""},
```

Empty slots show "Not added yet". Tip: a Google Drive share link works well for PDFs and images.

**Students.** Add people to `BATCHES` by batch number:

```js
window.BATCHES={
  24:[{name:"Full Name",handle:"https://facebook.com/their.profile"}],
  23:[{name:"Another Name",handle:"@instagram_handle"}]
};
```

**Other editable parts**

- `HOME_LINKS`: the link buttons on the Home page.
- `SOCIAL`: APM group, page and sports links.
- `TEACHERS_URL`: where "Know teachers" goes.
- `ABOUT`: links on the About me page.
- Courses and semester names: the `SEMS` list. To change the intro text on the About me page, edit the `about` section in `app.js`.

## Notes

- Dark and light mode follow the device setting, and the Theme button saves the choice in the browser.
- Fonts load from Google Fonts. Without internet the site falls back to system fonts.
- GitHub, LinkedIn and YouTube do not allow embedded previews, so About me uses buttons.

Created by BKP APM24, University of Rajshahi.
