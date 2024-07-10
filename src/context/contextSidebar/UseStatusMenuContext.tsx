import { useContext } from "react";
import { StatusMenuContext } from "./StatusMenu";

export default function UseStatusMenuCOntext() {
  const context = useContext(StatusMenuContext);
  return context;
}
