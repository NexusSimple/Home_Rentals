"use client";

import Modal from "@/app/components/modals/modal";
import useRentModalStore from "@/app/hooks/useRentModalStore";
import { useMemo, useState } from "react";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const rentModalStore = useRentModalStore();

  const [step, setStep] = useState(STEPS.CATEGORY);

  const onBack = () => {
    setStep((currentValue) => currentValue - 1);
  };

  const onNext = () => {
    setStep((currentValue) => currentValue + 1);
  };

  const actionLabel = useMemo(() => {
    // If the user is on the last step
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    // If the user is on the first step
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);

  return (
    <Modal
      title="Rent out your home!"
      isOpen={rentModalStore.isOpen}
      onClose={rentModalStore.onClose}
      onSubmit={() => {}}
      actionLabel="Submit"
    />
  );
};

export default RentModal;
