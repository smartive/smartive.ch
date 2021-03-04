export type Employee = {
  firstname: string;
  lastname: string;
  portrait?: string;
  image?: string;
  tel: string;
  email: string;
  job: string;
  bio: string;
  links: { label: string; url: string }[];
};
