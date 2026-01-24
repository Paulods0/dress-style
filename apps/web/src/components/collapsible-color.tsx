import clsx from 'clsx';
import React from 'react';

export default function CollapsibleColor({ className }: { className: string }) {
  const [Collapsible, setCollapsible] = React.useState(false);

  return (
    <div
      onClick={() => setCollapsible((prev) => !prev)}
      className={clsx('size-6 cursor-pointer', className, {
        'border-2 border-black shadow-[0_0_0_2px_white]': Collapsible,
      })}
    />
  );
}
