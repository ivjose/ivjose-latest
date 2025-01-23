import { headers } from "next/headers";
import { redirect } from "next/navigation";
const Redirect = async () => {
  const headersList = await headers();
  const domain = headersList.get("host") || "";

  if (domain !== "ivjose.com") return redirect("/home");
  return null;
};

export default Redirect;
