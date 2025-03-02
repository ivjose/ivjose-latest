import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { baseUrl } from "../app/sitemap";

const Redirect = async () => {
  const headersList = await headers();
  const hostname = headersList.get('x-forwarded-host');
console.log(hostname, redirect);

  if (hostname === "ivjose.com" || hostname === "localhost:3000") return null;
  return redirect(baseUrl)
};

export default Redirect;
