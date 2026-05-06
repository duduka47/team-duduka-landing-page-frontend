import Input from './Input.js';
import { Form as RouterForm, useActionData } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function ContactForm({
  translations,
}: {
  translations: Record<string, string | string[]>;
}) {
  const { t } = useTranslation();
  const actionData = useActionData<{ errors?: Record<string, string> }>();
  const errors = actionData?.errors;
  const options = translations.service_options as string[];

  return (
    <RouterForm method="post" className="flex w-full max-w-lg flex-col gap-4">
      <Input
        label={translations.name as string}
        name="name"
        error={errors?.name}
      />
      <Input
        label={translations.email as string}
        name="email"
        error={errors?.email}
      />
      <Input
        label={translations.whatsapp as string}
        name="whatsapp"
        mask="phone"
        error={errors?.whatsapp}
      />
      <div className="flex flex-col gap-1">
        <label className="text-sm font-semibold text-neutral-300">
          {translations.service_type}
        </label>
        <select
          name="service_type"
          defaultValue=""
          className="w-full appearance-none rounded-lg border border-neutral-900 bg-[#07070A] p-2 text-neutral-300 duration-300 focus:ring-1 focus:ring-blue-600 focus:outline-none"
        >
          <option value="" disabled>
            {translations.select_service as string}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors?.service_type && (
          <p className="text-xs text-red-500">{t(errors.service_type)}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-neutral-300"
        >
          {translations.message}
        </label>
        <textarea
          id="message"
          name="message"
          className="bg-secondary-background min-h-48 w-full resize-none rounded-lg border border-neutral-900 p-2 text-neutral-300 duration-300 focus:ring-1 focus:ring-blue-600 focus:outline-none"
        />
        {errors?.message && (
          <p className="text-xs text-red-500">{t(errors.message)}</p>
        )}
      </div>
      <button
        type="submit"
        className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-opacity duration-300 hover:opacity-80"
      >
        {translations.submit}
      </button>
    </RouterForm>
  );
}
