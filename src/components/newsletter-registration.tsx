import { FC } from 'react';
import { Button } from '../elements/button';
import { Input } from '../elements/input';
import { Label } from '../elements/label';

type Props = {
  className?: string;
};

export const NewsletterRegistration: FC<Props> = ({ className = '' }) => (
  <div className={`grid grid-rows-2 grid-cols-form w-full ${className}`}>
    <Label className="col-span-2">Newsletter abonnieren</Label>
    <Input placeholder="E-Mail-Adresse" className="mr-2" />
    <Button>Go!</Button>
  </div>
);
