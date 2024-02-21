import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'Entities/Currency';
import { Country, CountrySelect } from 'Entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
   className?: string;
   data?: Profile;
   isLoading?: boolean;
   error?: string;
   readonly?: boolean;
   onChangeFirstname?: (value?: string) => void | undefined;
   onChangeLastname?: (value?: string) => void | undefined;
   onChangeAge?: (value?: string) => void | undefined;
   onChangeCity?: (value?: string) => void | undefined;
   onChangeUsername?: (value?: string) => void | undefined;
   onChangeAvatar?: (value?: string) => void | undefined;
   onChangeCurrency?: (currency: Currency) => void;
   onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
   const {
      className,
      data,
      isLoading,
      error,
      readonly,
      onChangeFirstname,
      onChangeLastname,
      onChangeAge,
      onChangeCity,
      onChangeUsername,
      onChangeAvatar,
      onChangeCountry,
      onChangeCurrency,
   } = props;
   const { t } = useTranslation('profile');

   const mods: Mods = {
      [cls.editing]: !readonly,
   };

   if (isLoading) {
      return (
         <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
               className,
            ])}
         >
            <Loader />
         </HStack>
      );
   }
   if (error) {
      return (
         <HStack
            justify="center"
            max
            className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
               className,
               cls.error,
            ])}
         >
            <Text
               theme={TextTheme.ERROR}
               title={t('Error loading the profile')}
               text={t('Try refreshing the page')}
               align={TextAlign.CENTER}
            />
         </HStack>
      );
   }

   return (
      <VStack
         gap="8"
         max
         className={classNames(cls.ProfileCard, mods, [className])}
      >
         {data?.avatar && (
            <HStack className={cls.avatarWrapper}>
               <Avatar src={data?.avatar} />
            </HStack>
         )}
         <Input
            value={data?.first}
            placeholder={t('Your name')}
            className={cls.input}
            onChange={onChangeFirstname}
            readonly={readonly}
         />
         <Input
            value={data?.lastname}
            placeholder={t('Your lastname')}
            className={cls.input}
            onChange={onChangeLastname}
            readonly={readonly}
         />
         <Input
            value={data?.age}
            placeholder={t('Your age')}
            className={cls.input}
            onChange={onChangeAge}
            readonly={readonly}
         />
         <Input
            value={data?.city}
            placeholder={t('Your city')}
            className={cls.input}
            onChange={onChangeCity}
            readonly={readonly}
         />
         <Input
            value={data?.username}
            placeholder={t('Your username')}
            className={cls.input}
            onChange={onChangeUsername}
            readonly={readonly}
         />
         <Input
            value={data?.avatar}
            placeholder={t('Your avatar')}
            className={cls.input}
            onChange={onChangeAvatar}
            readonly={readonly}
         />
         <CurrencySelect
            value={data?.currency}
            onChange={onChangeCurrency}
            readonly={readonly}
            className={cls.input}
         />
         <CountrySelect
            value={data?.country}
            onChange={onChangeCountry}
            readonly={readonly}
            className={cls.input}
         />
      </VStack>
   );
};
