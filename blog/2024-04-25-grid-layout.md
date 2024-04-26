---
slug: Grid Layout
title: Grid Layout
authors:
  name: Bartosz Mucha
  title: Second creator of the website
  url: https://github.com/pieklop
  image_url: https://avatars.githubusercontent.com/u/100522099?v=4
tags: [HTML, CSS, Layout]
---


# Grid layout

Grid layout on a website refers to the arrangement of content elements using a grid system, where the webpage is divided into columns and rows to create a structured layout. This approach offers designers precise control over the placement and alignment of various elements such as text, images, navigation menus, and other components.

1. **Structuring the Grid**: The webpage is conceptualized as a grid, with horizontal rows and vertical columns forming a framework. Designers determine the number of columns, their widths, and the spacing between them to establish the grid's structure. 

2. **Placing Content Elements**: Each content element is positioned within the grid by specifying its placement in terms of grid columns and rows. Designers can allocate specific grid areas for different sections of the webpage, such as headers, sidebars, main content, and footers. This allows for a logical organization of content and facilitates navigation.

3. **Creating Responsive Layouts**: With the advent of mobile devices and varying screen sizes, responsive design has become essential. Grid layout enables designers to create responsive layouts that adapt seamlessly to different viewport sizes. Media queries and grid layout techniques are used to adjust column widths, rearrange content, and optimize the layout for optimal viewing on devices of all sizes.

4. **Maintaining Accessibility**: Accessibility considerations are crucial in web design. Designers ensure that grid layouts maintain readability, logical tab order, and sufficient contrast between elements to accommodate users with diverse needs and disabilities.

---

# CSS Styling with Grid

CSS Grid Layout is a powerful two-dimensional layout system that allows you to design complex web layouts with ease. It's ideal for creating grid-based designs, whether simple or intricate.

## Basics of CSS Grid

CSS Grid operates on a grid system, where you define both rows and columns to lay out elements in a grid-like fashion.

### Setting up a Grid Container

To create a grid layout, you designate an element as the grid container using the `display` property set to `grid`.

```css
.container {
  display: grid;
}
```

### Defining Grid Columns and Rows

You can define the size and structure of grid columns and rows using the `grid-template-columns` and `grid-template-rows` properties, respectively.

```css
.container {
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 50px 100px;
}
```

### Grid Gaps

You can add gaps between grid rows and columns using the `grid-column-gap` and `grid-row-gap` properties.

```css
.container {
  grid-column-gap: 10px;
  grid-row-gap: 20px;
}
```

### Named Grid Lines and Areas:

CSS Grid allows you to name specific grid lines and areas to make layout definition more intuitive and readable.

```css
.grid-container {
    display: grid;
    grid-template-columns: [col1] 100px [col2] 200px [col3] 1fr;
    grid-template-rows: [row1] 50px [row2] 100px;
    grid-template-areas:
        'header header header'
        'sidebar main main'
        'footer footer footer';
}
```