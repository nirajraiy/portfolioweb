// Type declarations for plain CSS side-effect imports
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

// Type declarations for CSS Modules
declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}
