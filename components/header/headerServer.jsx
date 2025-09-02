import HeaderClient from "./headerClient";
import { checkUser } from "@/lib/checkUser";

export default async function HeaderServer() {
 await checkUser();
  return <HeaderClient />;
}