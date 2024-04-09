"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useFormStore } from "../store/formStore";

function FormPage() {
  const saveForm = useFormStore((state) => state.saveForm);
  const name = useFormStore((state) => state.formname);
  const age = useFormStore((state) => state.formage);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const { formName, formAge } = Object.fromEntries(formData);
    const numberAge = Number(formAge);

    if (typeof formName !== "string") return;

    saveForm(formName, numberAge);
  };

  return (
    <form className="max-w-4xl my-12 space-y-4 mx-auto w-full" onSubmit={handleSubmit}>
      <Input defaultValue={name ? name : ''} name="formName" />
      <Input defaultValue={age ? age : ''} type="number" name="formAge" />
      <Button>Send</Button>
    </form>
  );
}

export default FormPage;
