"use client";

import Modal from "@/app/components/modals/modal";
import useRentModalStore from "@/app/hooks/useRentModalStore";

const RentModal = () => {
  const rentModalStore = useRentModalStore();
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
