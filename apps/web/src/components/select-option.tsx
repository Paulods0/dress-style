import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

type SelctOptionProps = {
  label: string;
  value: string;
};

type Props = {
  items: Array<SelctOptionProps>;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export default function SelectOption({ items, onChange, placeholder, className }: Props) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className={cn(className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem value={item.value}>{item.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
