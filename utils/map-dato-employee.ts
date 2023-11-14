import { EmployeeFragment } from '../graphql/generated';
import { Employee } from '../src/data/employees';

export const mapDatoContactToEmployee = (contact: EmployeeFragment): Employee => {
  const { name, job, bio, email, tel, booking, github, linkedin, twitter, image, closeup, portrait, start } = contact;
  const splittedName = name.split(/\s+/);

  return {
    name,
    firstname: splittedName[0],
    lastname: splittedName.pop() || '',
    job: job ?? '',
    bio,
    email,
    tel: tel ?? '',
    booking: booking ?? '',
    github: github ?? '',
    linkedin: linkedin ?? '',
    twitter: twitter ?? '',
    image: image?.responsiveImage?.src ?? '',
    closeup: closeup?.responsiveImage?.src ?? '',
    portrait: portrait?.responsiveImage?.src ?? '',
    start: start ?? 0,
  };
};
