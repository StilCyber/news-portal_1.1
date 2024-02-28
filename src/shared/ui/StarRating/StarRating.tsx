import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg?react';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
   className?: string;
   onSelect?: (starsCount: number) => void;
   size?: number;
   selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
   const { className, size = 30, selectedStars = 0, onSelect } = props;
   const [currentStarsCount, setCurrentStarsCount] = useState({
      starsCount: selectedStars,
   });
   const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

   const onHover = (starsCount: number) => () => {
      setCurrentStarsCount({ starsCount });
   };

   const onLeave = () => {
      setCurrentStarsCount({ starsCount: selectedStars });
   };

   const onClick = (starsCount: number) => () => {
      onSelect?.(starsCount);
      setCurrentStarsCount({ starsCount });
      setIsSelected(true);
   };

   return (
      <div className={classNames(cls.StarRating, {}, [className])}>
         {stars.map((starNumber) => (
            <Icon
               className={classNames(
                  cls.starIcon,
                  { [cls.selected]: isSelected },
                  [
                     currentStarsCount.starsCount >= starNumber
                        ? cls.hovered
                        : cls.normal,
                  ],
               )}
               Svg={StarIcon}
               key={starNumber}
               width={size}
               height={size}
               onMouseLeave={onLeave}
               onMouseEnter={onHover(starNumber)}
               onClick={onClick(starNumber)}
            />
         ))}
      </div>
   );
});
