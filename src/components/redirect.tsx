
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { baseUrl } from "@/app/sitemap";
const Redirect = async () => {
  const headersList = await headers();
  const domain = headersList.get("host") || "";

  if (domain !== "ivjose.com") return redirect(baseUrl);
};

export default Redirect;
