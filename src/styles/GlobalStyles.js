import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {

  /* Primary (violet) */
  --color-primary: #2e1065;
	--color-primary-50: #f5f3ff;
	--color-primary-100: #ede9fe;
	--color-primary-200: #ddd6fe;
	--color-primary-300: #c4b5fd;
	--color-primary-400: #a78bfa;
	--color-primary-500: #8b5cf6;
	--color-primary-600: #7c3aed;
	--color-primary-700: #6d28d9;
	--color-primary-800: #5b21b6;
	--color-primary-900: #4c1d95;
	--color-primary-950: #2e1065;

  /* Neutral */
  --color-neutral-0: #fff;
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f2f2f2;
  --color-neutral-200: #e5e5e5;
  --color-neutral-300: #d4d4d4;
  --color-neutral-400: #a3a3a3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  --color-neutral-950: #0a0a0a;

  /* Accents */
  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.10);

  --border-radius-pill: 10rem;
  --border-radius-sm: 0.5rem;
  --border-radius-md: 0.7rem;
  --border-radius-lg: 1rem;

  --transition: color 0.3s, background-color 0.3s;

  --height-navbar:8rem;
}

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
  font-family: sans-serif;
}

body{
  font-size: 1.6rem;
  font-family: 'Poppins', sans-serif;
  /* font-family: 'Raleway', sans-serif; */
  /* font-weight: 300; */
  line-height: 1.5;
  color: var(--color-neutral-900);
  background-color: var(--color-neutral-0) ;
}

/* img, picture, video, canvas, svg { */
img, picture, video, canvas {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

ol, ul {
	list-style: none;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`;

export default GlobalStyles;
