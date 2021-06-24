import Employees from './employees.json';
import { getPlaceholder, ImageWithPlaceholder } from '../utils/image-placeholders';

export type Employee = {
  firstname: string;
  lastname: string;
  portrait: ImageWithPlaceholder;
  image: ImageWithPlaceholder;
  closeup: ImageWithPlaceholder;
  tel: string;
  email: string;
  job: string;
  bio: string;
  links: { label: string; url: string }[];
};

export const transformEmployee = async (employee: typeof Employees.thilo): Promise<Employee> => ({
  ...employee,
  image: await getPlaceholder(employee.image || getFallbackImage()),
  portrait: await getPlaceholder(employee.portrait || getFallbackImage()),
  closeup: await getPlaceholder(employee.closeup || getFallbackImage()),
});

const getFallbackImage = () =>
  `/images/portrait-fallback-${['apricot', 'mint', 'cornflower'][Math.floor(Math.random() * 3)]}.svg`;
