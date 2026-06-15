import { useState } from "react";

export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const changeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setValues((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const reset = () => setValues(initialValues);
  return { values, changeHandler, reset };
}
