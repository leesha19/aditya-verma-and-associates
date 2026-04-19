import { useState } from "react";

export function useForm(initialValues, onSubmit) {
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(values);
    setLoading(false);
    setSubmitted(true);
  };

  const reset = () => { setValues(initialValues); setSubmitted(false); };

  return { values, handleChange, handleSubmit, submitted, loading, reset };
}
