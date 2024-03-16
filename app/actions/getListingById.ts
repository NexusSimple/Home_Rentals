import prisma from "@/app/libs/prismadb";

interface IParams {
  listingId?: string;
}

export default async function getListingById(params: IParams) {
  try {
    const { listingId } = params;

    // Fetch the Individual listing from the DB 🛢️ ( matching the listing in the URL params ) and also attach the related user row in relation to the listing i.e. the user who OWNS the listing.
    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    });

    if (!listing) {
      return null;
    }

    // 👇 We could just return the listing fetched from the DB 🛢️ , but since createdAt, updatedAt & emailVerified are Date type , so we need to convert them into string , present both in the Listing Table & User Table.
    // This conversion from Date to string is not needed in
    return {
      ...listing,
      createdAt: listing.createdAt.toISOString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt?.toISOString(),
        updatedAt: listing.user.updatedAt?.toISOString(),
        emailVerified: listing.user.emailVerified?.toISOString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
