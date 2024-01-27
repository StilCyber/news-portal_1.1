import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/county';

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

export const CountrySelect = memo((props: CountrySelectProps) => {
   const { className, value, onChange, readonly } = props;
   const { t } = useTranslation('profile');

   const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Country);
   }, [onChange]);

   return (
      <Select
         className={classNames('', {}, [className])}
         label={t('Select a country')}
         options={options}
         value={value}
         onChange={onChangeHandler}
         readonly={readonly}
      />
   );
});
