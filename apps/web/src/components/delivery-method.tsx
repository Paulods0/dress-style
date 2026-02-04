import clsx from 'clsx';

type DeliveryMethodProps = {
  label: string;
  isFree?: boolean;
  handleSelect: () => void;
  selected: boolean;
};

export function DeliveryMethod({ label, isFree = false, handleSelect, selected }: DeliveryMethodProps) {
  return (
    <div
      onClick={handleSelect}
      className={clsx(
        'h-20 border-border cursor-pointer hover:border-neutral-700 transition-colors ease-in-out duration-200 border flex px-4 w-full items-center justify-between uppercase',
        {
          'border-black border-2 outline-2 outline-black': selected,
        }
      )}>
      <p>{label}</p>
      {isFree && <p>grátis</p>}
    </div>
  );
}
