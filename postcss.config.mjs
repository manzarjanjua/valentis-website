// Tailwind CSS v4 via PostCSS. Used instead of @tailwindcss/vite because Astro
// 6 bundles rolldown-vite, whose native resolve binding is incompatible with
// the Tailwind Vite plugin. The PostCSS plugin is the same Tailwind engine
// (@theme, @utility, etc. all work).
import tailwindcss from '@tailwindcss/postcss';

export default {
  plugins: [tailwindcss()],
};
