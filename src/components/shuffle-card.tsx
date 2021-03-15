import React, { FC, useState } from 'react';
import { Employee } from '../data/employees';
import { Heading2 } from '../elements/heading-2';
import { Link, LinkButton } from '../elements/link';
import { Portrait, PortraitVariant } from '../elements/portrait';

type Props = {
  employees: Employee[];
};

const getRandomEmployee = (employees: Employee[]) => employees[Math.floor(Math.random() * employees.length)];

export const ShuffleCard: FC<Props> = ({ employees }) => {
  const [currentEmployee, setCurrentEmployee] = useState(getRandomEmployee(employees));

  const setRandomEmployee = () => {
    let randomEmployee = getRandomEmployee(employees);
    while (randomEmployee.email === currentEmployee.email) {
      randomEmployee = getRandomEmployee(employees);
    }
    setCurrentEmployee(randomEmployee);
  };

  return (
    <div className="grid grid-flow-row place-items-center text-center w-full rounded bg-cornflower-500 p-16 font-sans font-normal text-xxs mb-4 lg:text-sm">
      <Heading2 as="p">Alles nur Corporate Blabla und Worthülsen?</Heading2>
      <p className="mb-16">Dann frag einen random Smartie!</p>
      <Portrait image={currentEmployee.portrait} alt="" variant={PortraitVariant.Small} />
      <div className="mt-10">
        <Link href={`mailto:${currentEmployee.email}`} className="mr-8">
          Frag {currentEmployee.firstname}
        </Link>
        <LinkButton onClick={() => setRandomEmployee()}>Shuffle</LinkButton>
      </div>
    </div>
  );
};
