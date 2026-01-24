import React from 'react';
import { Bookmark } from 'lucide-react';
import { formatPrice } from '@/utils/price';
import { useNavigate } from '@tanstack/react-router';

interface Props {
  suit: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

export default function SuitCard({ suit }: Props) {
  const [isSaved, setIsSaved] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate({ to: '/man/$id', params: { id: suit.id.toString() } })}
      className='w-full cursor-pointer min-h-[497px] flex flex-col gap-2'>
      <img src={suit.image} alt='card-image' className='h-full w-full object-cover' />

      <div className='flex items-start w-full justify-between'>
        <div className='flex flex-col gap-2'>
          <span className='capitalize'>{suit.title}</span>
          <span>{formatPrice(suit.price)}</span>
        </div>
        <Bookmark
          size={18}
          strokeWidth={1}
          fill={isSaved ? '#000' : '#fff'}
          onClick={(e) => {
            e.stopPropagation();
            setIsSaved((prev) => !prev);
          }}
        />
      </div>
    </div>
  );
}
