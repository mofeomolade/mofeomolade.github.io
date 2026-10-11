// Prefixes public/ asset paths with Vite's base so they work both at
// username.github.io/ and username.github.io/repo-name/
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
