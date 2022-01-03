export type Award = {
  short: string;
  full: string;
};

export type Teaser = {
  label: string;
  title: string;
  link: { label: string; href: string };
  image: { src: string; alt: string };
  awards?: Award[];
};
