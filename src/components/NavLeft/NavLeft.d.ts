declare const Project: {
  id: string;
  logo: string;
  title: string;
  tags: string[];
  date: string;
  work: string;
  summary: string;
  covers: { src: string; alt: string }[];
  medias: ({ src: string; type: string; alt?: undefined } | { src: string; alt: string; type?: undefined })[];
};

export type { Project };
