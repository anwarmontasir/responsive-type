# Responsive Type

Working demo at [http://www.anwarmontasir.com/responsive-type/](http://www.anwarmontasir.com/responsive-type/)

## Project Goals

This project was built for the Devsign course I designed and taught in the winter of 2018 at [Alchemy Code Lab](https://www.alchemycodelab.com/). The goal was to introduce students to three web type-related concepts:

* **Responsive typography.** My goal was to achieve roughly [optimal line length of between 50-75 characters per line](https://baymard.com/blog/line-length-readability) on a variety of screen sizes. I based my work on a 2016 Smashing Magazine article titled [“Responsive And Fluid Typography With vh And vw Units”](https://www.smashingmagazine.com/2016/05/fluid-typography/), by Michael Riethmuller.

* **Modular type scales.** This article on [Exploring Responsive Type Scales](https://medium.com/sketch-app-sources/exploring-responsive-type-scales-cf1da541be54) came out after I completed this project, but it‘s a good summary of the concept of applying ratios to body copy scaling. The goal isn‘t to suggest that one ratio is better than another, but rather to create an app that quickly and plainly demonstrates different type scale ratios with different font pairings.

* **Font pairings.** Speaking of font pairings, I chose to demonstrate fonts suggested by the October 2016 article [“Five Fresh Headline & Body Text Pairings on Google Fonts”](https://www.typewolf.com/blog/google-fonts-combinations) as found on Typewolf, one of my favorite typography resources. My students were mostly new to typography, and I wanted them to look beyond the font combinations suggested by Google Fonts itself, which tend to be a bit underwhelming. We discussed [principles of choosing font pairings](https://www.canva.com/learn/combining-fonts-10-must-know-tips-from-a-designer/) as well as finding sources of typographic inspiration.

## Prep Work

I didn’t have tons of time to prep for this one. The goal wasn’t a multipage interface with a complex navigation system, but rather something I could demo quickly and keep the focus on the JavaScript and CSS involved in making the app work.

## Challenges Faced

I faced two major development challenges:

1. The project broke as I attempted to migrate to Webpack 4. I had considerable trouble getting my [webpack-cli](https://www.npmjs.com/package/webpack-cli) install recognized. The solution turned out to be the order of my install: as suggested by one of the comments in [this link](https://github.com/webpack/webpack/issues/7197), the solution required uninstalling [webpack](https://www.npmjs.com/package/webpack) and [webpack-cli](https://www.npmjs.com/package/webpack-cli) dev dependencies, uninstalling both globally, reinstalling both globally, and finally reinstalling the dev dependencies, in that order.

2. Initially the base font size grew too large on a very wide monitor, such as an iMac, even though the content has a max-width. Then I remembered that 100vw was part of my PostCSS formula for calculating the type size:

```
$fluidFontSize: calc($minFontSize + ($maxFontVal - $minFontVal) * (100vw - $minViewportSize) / ($maxViewportVal - $minViewportVal));
```

This was easily solved by a media query:

```

@media screen and (min-width: $maxViewportSize) {
    body {font-size: $maxFontSize;}
}
```
Afterwards, I realized the max-width solution is part of this article on [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/) at CSS Tricks. Oh well :\

## Technologies used

* HTML5
* CSS
* JavaScript
* Webpack
* Node.js
* PostCSS