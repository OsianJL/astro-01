// src/types.ts
export interface Frontmatter {
    title: string;
    description: string;
    picture: {
      src: string;
      alt: string;
    };
    tags?: string[];
    // Add other properties if necessary
  }
  