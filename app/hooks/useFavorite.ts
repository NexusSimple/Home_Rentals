import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import { SafeUser } from "@/app/types";
import useLoginModalStore from "@/app/hooks/useLoginModalStore";



interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();

  const loginModal = useLoginModalStore();


  // Check the currentUser model's  "favoriteIds" field , which is an array , to see if "listingId" passed to this hook as a parameter is present in it. And return the Boolean value of it ->  if present or not.
  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  // If user is not Logged in, open the modal , when the user clicks on the Heart Button.
  // Else if user is logged in: do either of 2 things
  // If the lisiting is already present in the currentUser's favorites , Make a DELETE request to delete the listing from the currentUser's favorites.
  // OR if the listing is not present in the currentUser's favorites, Make a POST reques to add the listing to the currentUser's favorites.
  const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (hasFavorited) {
        request = () => axios.delete(`/api/favorites/${listingId}`);
      } else {
        request = () => axios.post(`/api/favorites/${listingId}`);
      }

      await request();
      router.refresh();
      toast.success('Success');
    } catch (error) {
      toast.error('Something went wrong.');
    }
  }, 
  [
    currentUser, 
    hasFavorited, 
    listingId, 
    loginModal,
    router
  ]);

  return {
    hasFavorited,
    toggleFavorite,
  }
}

export default useFavorite;