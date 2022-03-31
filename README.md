#iClicks
build

```scss
@include container

@include min-width() { }
@include max-width() { }
@include only-width() { }
```

```scss
@include media-retina() { }
```

```
<picture>
  <source type="image/webp" media="(min-width: 1200px)" srcset="img/photo--lg.webp 1x, img/photo--lg@2x.webp 2x"> 
  <source type="image/webp" srcset="img/photo.webp 1x, img/photo@2x.webp 2x">
  
  <source media="(min-width: 1200px)" srcset="img/photo--lg.jpg 1x, img/photo--lg@2x.jpg 2x">
  <img src="img/photo-1.jpg" srcset="img/photo@2x.jpg 2x" alt="Описание картинки">
</picture>
```
```html
<svg class="safe__icon" width="24" height="24">
  <use xlink:href="#ic-name"></use>
</svg>
```

```
100: Thin;
200: Extra Light (Ultra Light);
300: Light;
400: Normal;
500: Medium;
600: Semi Bold (Demi Bold);
700: Bold;
800: Extra Bold (Ultra Bold);
900: Black (Heavy).
```

```
@media (min-resolution: $retina-dpi), (min-resolution: $retina-dppx) {
  background-image: url("../img/bg-header@2x.jpg");
}
```



[travis-image]: https://travis-ci.com/htmlacademy-adaptive/982629-mishka-16.svg?branch=master
[travis-url]: https://travis-ci.com/htmlacademy-adaptive/982629-mishka-16
[dependency-image]: https://david-dm.org/htmlacademy-adaptive/982629-mishka-16/dev-status.svg?style=flat-square
[dependency-url]: https://david-dm.org/htmlacademy-adaptive/982629-mishka-16?type=dev
