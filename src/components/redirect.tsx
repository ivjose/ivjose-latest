import { headers } from "next/headers";
import { redirect } from "next/navigation";

 

const Redirect = async () => {
  const headersList = await headers();
  const hostname = headersList.get('x-forwarded-host');

  if (hostname === "ivjose.com" || hostname === "localhost:3000") return null;
  return redirect('/home')
};

export default Redirect;
