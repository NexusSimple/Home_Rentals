import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
    // OR ->>>>    return new NextResponse("Unauthorized to access", { status: 401 });
  }

  const body = await req.json();

  const {
    category,
    location,
    guestCount,
    roomCount,
    bathroomCount,
    imageSrc,
    price,
    title,
    description,
  } = body; // Can be obtained from "defaultValues" in RentModal component.

  // Iterate over all the items from the body and check whether one of these is missing ( because all of them are required).
  // The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
  //   const object1 = {
  //             a: 'somestring',
  //             b: 42,
  //             c: false,
  //   };

  //   console.log(Object.keys(object1));
  //   // Expected output: Array ["a", "b", "c"]

  //   Object.keys(body).forEach((value: any) => {
  //     if (!body[value]) {
  //       return NextResponse.error();
  //     }
  //   });

  // Create the listing
  const listing = await prisma?.listing.create({
    data: {
      category,
      locationValue: location.value,
      guestCount,
      roomCount,
      bathroomCount,
      imageSrc,
      price: parseInt(price, 10),
      title,
      description,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
