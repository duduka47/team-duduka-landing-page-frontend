import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 15);
  if (digits.length > 11) return '+' + digits;
  if (digits.length <= 10)
    return digits.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  return digits.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
}

export default function Input({
  label,
  name,
  error,
  mask,
  placeholder,
}: {
  label: string;
  name: string;
  error?: string;
  mask?: 'phone';
  placeholder?: string;
}) {
  const { t } = useTranslation();
  const [display, setDisplay] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDisplay(mask === 'phone' ? formatPhone(e.target.value) : e.target.value);
  }

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-neutral-300">{label}</label>
      <input
        name={name}
        value={display}
        onChange={handleChange}
        placeholder={placeholder}
        className="rounded-lg border border-neutral-900 bg-[#07070A] p-2 text-neutral-300 focus:ring-1 focus:ring-blue-600 focus:outline-none"
      />
      {error && <p className="text-xs text-red-500">{t(error)}</p>}
    </div>
  );
}
