"use client";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const RegisterModal = () => {
  // Get the state from the Register Store
  const registerModal = useRegisterModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return <div></div>;
};

export default RegisterModal;
