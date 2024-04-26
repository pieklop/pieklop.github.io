"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[305],{8307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(4848),s=t(8453);const a={slug:"Grid Layout",title:"Grid Layout",authors:{name:"Bartosz Mucha",title:"Second creator of the website",url:"https://github.com/pieklop",image_url:"https://avatars.githubusercontent.com/u/100522099?v=4"},tags:["HTML","CSS","Layout"]},r="Grid layout",o={permalink:"/blog/Grid Layout",source:"@site/blog/2024-04-25-grid-layout.md",title:"Grid Layout",description:"Grid layout on a website refers to the arrangement of content elements using a grid system, where the webpage is divided into columns and rows to create a structured layout. This approach offers designers precise control over the placement and alignment of various elements such as text, images, navigation menus, and other components.",date:"2024-04-25T00:00:00.000Z",tags:[{label:"HTML",permalink:"/blog/tags/html"},{label:"CSS",permalink:"/blog/tags/css"},{label:"Layout",permalink:"/blog/tags/layout"}],readingTime:2.255,hasTruncateMarker:!1,authors:[{name:"Bartosz Mucha",title:"Second creator of the website",url:"https://github.com/pieklop",image_url:"https://avatars.githubusercontent.com/u/100522099?v=4",imageURL:"https://avatars.githubusercontent.com/u/100522099?v=4"}],frontMatter:{slug:"Grid Layout",title:"Grid Layout",authors:{name:"Bartosz Mucha",title:"Second creator of the website",url:"https://github.com/pieklop",image_url:"https://avatars.githubusercontent.com/u/100522099?v=4",imageURL:"https://avatars.githubusercontent.com/u/100522099?v=4"},tags:["HTML","CSS","Layout"]},unlisted:!1,prevItem:{title:"Flex Layout",permalink:"/blog/Flex Layout"},nextItem:{title:"Git Bash vs. GitHub Desktop",permalink:"/blog/Git Bash vs. GitHub Desktop"}},d={authorsImageUrls:[void 0]},l=[{value:"Basics of CSS Grid",id:"basics-of-css-grid",level:2},{value:"Setting up a Grid Container",id:"setting-up-a-grid-container",level:3},{value:"Defining Grid Columns and Rows",id:"defining-grid-columns-and-rows",level:3},{value:"Grid Gaps",id:"grid-gaps",level:3},{value:"Named Grid Lines and Areas:",id:"named-grid-lines-and-areas",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Grid layout on a website refers to the arrangement of content elements using a grid system, where the webpage is divided into columns and rows to create a structured layout. This approach offers designers precise control over the placement and alignment of various elements such as text, images, navigation menus, and other components."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Structuring the Grid"}),": The webpage is conceptualized as a grid, with horizontal rows and vertical columns forming a framework. Designers determine the number of columns, their widths, and the spacing between them to establish the grid's structure."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Placing Content Elements"}),": Each content element is positioned within the grid by specifying its placement in terms of grid columns and rows. Designers can allocate specific grid areas for different sections of the webpage, such as headers, sidebars, main content, and footers. This allows for a logical organization of content and facilitates navigation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Creating Responsive Layouts"}),": With the advent of mobile devices and varying screen sizes, responsive design has become essential. Grid layout enables designers to create responsive layouts that adapt seamlessly to different viewport sizes. Media queries and grid layout techniques are used to adjust column widths, rearrange content, and optimize the layout for optimal viewing on devices of all sizes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Maintaining Accessibility"}),": Accessibility considerations are crucial in web design. Designers ensure that grid layouts maintain readability, logical tab order, and sufficient contrast between elements to accommodate users with diverse needs and disabilities."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h1,{id:"css-styling-with-grid",children:"CSS Styling with Grid"}),"\n",(0,i.jsx)(n.p,{children:"CSS Grid Layout is a powerful two-dimensional layout system that allows you to design complex web layouts with ease. It's ideal for creating grid-based designs, whether simple or intricate."}),"\n",(0,i.jsx)(n.h2,{id:"basics-of-css-grid",children:"Basics of CSS Grid"}),"\n",(0,i.jsx)(n.p,{children:"CSS Grid operates on a grid system, where you define both rows and columns to lay out elements in a grid-like fashion."}),"\n",(0,i.jsx)(n.h3,{id:"setting-up-a-grid-container",children:"Setting up a Grid Container"}),"\n",(0,i.jsxs)(n.p,{children:["To create a grid layout, you designate an element as the grid container using the ",(0,i.jsx)(n.code,{children:"display"})," property set to ",(0,i.jsx)(n.code,{children:"grid"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".container {\n  display: grid;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"defining-grid-columns-and-rows",children:"Defining Grid Columns and Rows"}),"\n",(0,i.jsxs)(n.p,{children:["You can define the size and structure of grid columns and rows using the ",(0,i.jsx)(n.code,{children:"grid-template-columns"})," and ",(0,i.jsx)(n.code,{children:"grid-template-rows"})," properties, respectively."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".container {\n  grid-template-columns: 100px 200px 100px;\n  grid-template-rows: 50px 100px;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"grid-gaps",children:"Grid Gaps"}),"\n",(0,i.jsxs)(n.p,{children:["You can add gaps between grid rows and columns using the ",(0,i.jsx)(n.code,{children:"grid-column-gap"})," and ",(0,i.jsx)(n.code,{children:"grid-row-gap"})," properties."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".container {\n  grid-column-gap: 10px;\n  grid-row-gap: 20px;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"named-grid-lines-and-areas",children:"Named Grid Lines and Areas:"}),"\n",(0,i.jsx)(n.p,{children:"CSS Grid allows you to name specific grid lines and areas to make layout definition more intuitive and readable."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-css",children:".grid-container {\n    display: grid;\n    grid-template-columns: [col1] 100px [col2] 200px [col3] 1fr;\n    grid-template-rows: [row1] 50px [row2] 100px;\n    grid-template-areas:\n        'header header header'\n        'sidebar main main'\n        'footer footer footer';\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);