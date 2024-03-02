import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Text } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

interface RatingProps {
   className?: string;
   title?: string;
   feedbackTitle?: string;
   hasFeedback?: boolean;
   onCancel?: (starsCount: number) => void;
   onAccept?: (starsCount: number, feedback?: string) => void;
   rate?: number;
}

export const Rating = memo((props: RatingProps) => {
   const {
      className,
      onAccept,
      feedbackTitle,
      hasFeedback,
      onCancel,
      title,
      rate = 0,
   } = props;
   const { t } = useTranslation();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [starsCount, setStarsCount] = useState(rate);
   const [feedback, setFeedback] = useState('');

   const onSelectStars = useCallback(
      (selectedStarsCount: number) => {
         setStarsCount(selectedStarsCount);
         if (hasFeedback) {
            setIsModalOpen(true);
         } else {
            onAccept?.(selectedStarsCount);
         }
      },
      [hasFeedback, onAccept],
   );

   const acceptHandle = useCallback(() => {
      setIsModalOpen(false);
      onAccept?.(starsCount, feedback);
   }, [feedback, onAccept, starsCount]);

   const cancelHandle = useCallback(() => {
      setIsModalOpen(false);
      onCancel?.(starsCount);
   }, [onCancel, starsCount]);

   const modalContent = (
      <>
         <Text title={feedbackTitle} />
         <Input
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
            data-testid="Rating.Input"
         />
      </>
   );

   return (
      <Card
         className={classNames('', {}, [className])}
         max
         data-testid="Rating"
      >
         <VStack align="center" gap="8" max>
            <Text title={title} />
            <StarRating
               size={40}
               onSelect={onSelectStars}
               selectedStars={starsCount}
            />
         </VStack>
         <BrowserView>
            <Modal isOpen={isModalOpen} lazy>
               <VStack max gap="32">
                  {modalContent}
                  <HStack max gap="16" justify="end">
                     <Button
                        onClick={cancelHandle}
                        theme={ButtonTheme.OUTLINE_RED}
                        data-testid="Rating.Close"
                     >
                        {t('Закрыть')}
                     </Button>
                     <Button onClick={acceptHandle} data-testid="Rating.Send">
                        {t('Отправить')}
                     </Button>
                  </HStack>
               </VStack>
            </Modal>
         </BrowserView>
         <MobileView>
            <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
               <VStack gap="32">
                  {modalContent}
                  <Button
                     fullWidth
                     onClick={acceptHandle}
                     size={ButtonSize.L}
                     data-testid="Rating.Send"
                  >
                     {t('Отправить')}
                  </Button>
               </VStack>
            </Drawer>
         </MobileView>
      </Card>
   );
});
