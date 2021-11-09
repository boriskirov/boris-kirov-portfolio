---
title: "Display-P3 color uplift"
description: "Improving the colors with the P3 gamut is easy. But the question is why? Well there a few reason of going in that direction."
date: "01-11-2021"
type: "Code snippet"
image: "https://www.boriskirov.me/DCI-P3-1.png"
---

Recently I've decide to upgrade the colors of my portfolio website. The reason was the colors were feeling a bit strict, sterile and not vivid enough even though they were ranging in the black and white area.

I started digging around the web and ended up remembering about something I wanted to try for a very long time. The 'display p3' color space.

Improving the colors of your portfolio with the P3 gamut is easy. But the question was why? Well there a few reason of going in that direction:

- It's super simple and easy you can use multiple techniques to make your web page support it
- It uses the same logic as the 'sRGB' channels but with extended values
- It allows for the viewers who have modern screens to experience things better
- It creates a closer color range to what you will be aiming and people will be able to see it

![DCI P3 range](../../DCI-P3-1.png)

The Display P3 is a superset of the sRGB so you will have a wider range of colors to express yourself. You can play around with Safari's DevTools, they actually show you the wider range of colors that the browser is supporting.

Check the screenshots for the final result:
![DCI P3 example](../../DCI-P3-2.png)

![DCI P3 example](../../DCI-P3-3.png)

Here is the CSS simple snippet of how to add the display-p3 support for your website:

```
:root {
  --dark-color-bg: rgb(19, 19, 19);
  --light-color-text: rgb(226, 226, 226);
  --light-color-bg: rgb(226, 226, 226);
  --dark-color-text: rgb(5, 0, 56);
  --selection-color-bg: rgb(63, 83, 217);
  --selection-color-text: rgb(255, 215, 7);
  --link-color-text: rgb(63, 83, 217);
  --link-color-bg: rgb(255, 207, 0);
}

/* Display-P3 color, when supported. */
@supports (color: color(display-p3 1 1 1)) {
  :root {
    --light-color-bg: color(display-p3 0.845 0.858 1);
    --dark-color-text: color(display-p3 0.001 0.019 0.09);
    --dark-color-bg: color(display-p3 0.001 0.025 0.105);
    --light-color-text: color(display-p3 0.84 0.978 1);
    --selection-color-bg: color(display-p3 0.255 0.147 0.98);
    --selection-color-text: color(display-p3 0.945 0.676 0.17);
    --link-color-text: color(display-p3 0.255 0.147 0.98);
    --link-color-bg: color(display-p3 0.945 0.676 0.17);
    --card-color-bg: color(display-p3 0.44 0.495 1 / 0.08);
    --tag-color-bg: color(display-p3 0.44 0.495 1 / 0.24);
  }
}
```

Want to read more about the Display P3? Check those amazing resources

- [https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
- [https://webkit.org/blog/6682/improving-color-on-the-web/](https://webkit.org/blog/6682/improving-color-on-the-web/)
- [https://css-tricks.com/wide-gamut-color-in-css-with-display-p3/](https://css-tricks.com/wide-gamut-color-in-css-with-display-p3/)
- [https://www.w3.org/TR/css-color-4/#predefined](https://www.w3.org/TR/css-color-4/#predefined)
