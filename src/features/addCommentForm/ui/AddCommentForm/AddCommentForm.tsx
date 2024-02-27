import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
   DynamicModuleLoader,
   ReducersList,
} from '@/shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import {
   getAddCommentFormError,
   getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelector';
import cls from './AddCommentForm.module.scss';
import {
   addCommentFormActions,
   addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';

export interface AddCommentFormProps {
   className?: string;
   onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
   addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
   const { className, onSendComment } = props;
   const { t } = useTranslation();
   const dispatch = useAppDispatch();
   const text = useSelector(getAddCommentFormText);
   const error = useSelector(getAddCommentFormError);

   const onCommentTextChange = useCallback(
      (value: string) => {
         dispatch(addCommentFormActions.setText(value));
      },
      [dispatch],
   );
   const onSendHandler = useCallback(() => {
      onSendComment(text || '');
      onCommentTextChange('');
   }, [onCommentTextChange, onSendComment, text]);

   return (
      <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
         <HStack
            justify="between"
            max
            className={classNames(cls.AddCommentForm, {}, [className])}
         >
            <Input
               placeholder={t('Enter the comment text')}
               value={text}
               onChange={onCommentTextChange}
               className={cls.input}
            />
            <Button theme={ThemeButton.OUTLINE} onClick={onSendHandler}>
               {t('Send')}
            </Button>
         </HStack>
      </DynamicModuleLoader>
   );
});

export default AddCommentForm;
