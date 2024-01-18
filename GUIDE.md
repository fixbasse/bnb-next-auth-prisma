<!-- UI -->
Button loading & disabled
Skeleton loading
Some modal have animation in-out
Click outside to closed

<!-- Navbar -->
Filter
show user image

<!-- become-a-host Page -->
-Progress Bar
Selected (location) 
    -Input background still blue

<!-- hosting dashboard -->
show result when someone make a reservation
chatApp

<!-- Wishlist -->
-schema

<!-- SingleListing -->
show icon
calender date disable


<!-- Auth -->
Google & Github login need other function
middleware

<!-- Map -->
not zoom

<!-- Git Push -->
git add .
git commit -m "new files and folders"
git push



// import { NextRequest, NextResponse } from "next/server";
// import { isAuthenticated } from "./utils/Auth";

// const protectedRoutes = ['/become-a-host'];

// export default function middleware(req: NextRequest) {
//     if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
//         const absoluteURL = new URL('/', req.nextUrl.origin);
//         return NextResponse.redirect(absoluteURL.toString());
//     }
// }