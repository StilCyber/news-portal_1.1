import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox, ListBoxItem } from 'shared/ui/ListBox/ListBox';
import { Currency } from 'Entities/Currency/model/consts/constsCurrency';

interface CurrencySelectProps {
   className?: string;
   value?: Currency;
   onChange?: (value: Currency) => void;
   readonly?: boolean;
}

const options = [
   { value: Currency.RUB, content: Currency.RUB },
   { value: Currency.EUR, content: Currency.EUR },
   { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
   ({ className, value, onChange, readonly }: CurrencySelectProps) => {
      const { t } = useTranslation('profile');

      const onChangeHandler = useCallback(
         (value: string) => {
            onChange?.(value as Currency);
         },
         [onChange],
      );

      return (
         <ListBox
            className={className}
            value={value}
            defaultValue={t('Select a currency')}
            label={t('Select a currency')}
            items={options}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
         />
      );
   },
);
