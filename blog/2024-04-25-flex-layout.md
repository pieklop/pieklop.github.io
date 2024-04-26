---
slug: Flex Layout
title: Flex Layout
authors:
  name: Tomasz Lech
  title: 
  url: https://github.com/XToximX
  image_url: https://avatars.githubusercontent.com/u/162677728?v=4
tags: [HTML, CSS, Layout]
---

# CSS Styling with Flexbox

Flexbox is a powerful layout model in CSS that allows you to create flexible and efficient layouts. It's particularly handy for creating responsive designs and aligning items within a container.

## Basics of Flexbox

Flexbox operates on two main axes: the main axis and the cross axis. You can control the layout of items along these axes using various properties.

### Setting up a Flex Container

To create a flex container, you first need to set the `display` property of the container to `flex`. This tells the browser to use flex layout for the container's children.

```css
.container {
  display: flex;
}
```

### Flex Direction

The `flex-direction` property determines the main axis along which flex items are laid out. The default value is `row`, which lays out items horizontally.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

### Justify Content

The `justify-content` property aligns items along the main axis of the flex container. It's useful for distributing extra space when the items don't fill the container.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

### Align Items

The `align-items` property aligns items along the cross axis of the flex container. It's handy for controlling vertical alignment of items within a container.

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

## Conclusion

Flexbox provides a flexible and efficient way to create layouts in CSS. By understanding and leveraging its properties, you can easily create responsive designs that adapt to different screen sizes and devices.