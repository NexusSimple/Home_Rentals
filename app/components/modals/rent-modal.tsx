"use client";

import Heading from "@/app/components/heading";
import CategoryInput from "@/app/components/inputs/category-input";
import Modal from "@/app/components/modals/modal";
import { categories } from "@/app/components/navbar/categories";
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

  // Dynamic bodyContent so let instead of const
  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
            />
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <Modal
      title="Rent out your home!"
      isOpen={rentModalStore.isOpen}
      onClose={rentModalStore.onClose}
      onSubmit={() => {}}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      body={bodyContent}
    />
  );
};

export default RentModal;
