import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from 'Entities/Country/model/consts/constsCountry';

interface CountrySelectProps {
   className?: string;
   value?: Country;
   onChange?: (value: Country) => void;
   readonly?: boolean;
}

const options = [
   { value: Country.USA, content: Country.USA },
   { value: Country.Netherlands, content: Country.Netherlands },
   { value: Country.Ukraine, content: Country.Ukraine },
   { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export const CountrySelect = memo(
   ({ className, value, onChange, readonly }: CountrySelectProps) => {
      const { t } = useTranslation('profile');

      const onChangeHandler = useCallback(
         (value: string) => {
            onChange?.(value as Country);
         },
         [onChange],
      );

      return (
         <ListBox
            onChange={onChangeHandler}
            value={value}
            defaultValue={t('Select a country')}
            label={t('Select a country')}
            items={options}
            readonly={readonly}
            direction="top right"
         />
      );
   },
);
