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
  --dark-color-bg: #131313;
  --light-color-text: #e2e2e2;
  --light-color-bg: #e2e2e2;
  --dark-color-text: #050038;
  --selection-color-bg: #3f53d9;
  --selection-color-text: #ffd707;
  --link-color-text: #3f53d9;
  --link-color-bg: #ffcf00;
}

@media (color-gamut: p3) {
  :root {
    --dark-color-bg: color(display-p3 0.053 0.064 0.096 / 1);
    --light-color-text: color(display-p3 0.768 0.754 0.764 / 1);
    --light-color-bg: color(display-p3 0.768 0.754 0.764 / 1);
    --dark-color-text: color(display-p3 0.053 0.064 0.096 / 1);
    --selection-color-bg: color(display-p3 0.287 0.179 1 / 1);
    --selection-color-text: color(display-p3 1 0.773 0.09 / 1);
    --link-color-text: color(display-p3 0.194 0.183 0.794 / 1);
    --link-color-bg: color(display-p3 1 0.773 0.09 / 1);
  }
}
```

Want to read more about the Display P3?

- [https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
- [https://webkit.org/blog/6682/improving-color-on-the-web/](https://webkit.org/blog/6682/improving-color-on-the-web/)
- [https://css-tricks.com/wide-gamut-color-in-css-with-display-p3/](https://css-tricks.com/wide-gamut-color-in-css-with-display-p3/)
- [https://www.w3.org/TR/css-color-4/#predefined](https://www.w3.org/TR/css-color-4/#predefined)
