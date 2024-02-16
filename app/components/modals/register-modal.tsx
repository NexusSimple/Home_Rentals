"use client";

import Modal from "@/app/components/modals/modal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const RegisterModal = () => {
  // Get the state from the Register Store
  const registerModalStore = useRegisterModal();

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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);
      await axios.post(`/api/register`, data);
      registerModalStore.onClose();
    } catch (error) {
      console.log("[REGISTER_MODAL]", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModalStore.isOpen}
      title="Sign Up"
      actionLabel="Continue"
      onClose={registerModalStore.onClose}
      onSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default RegisterModal;
