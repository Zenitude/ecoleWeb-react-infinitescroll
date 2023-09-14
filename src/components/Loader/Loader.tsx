import { LoaderContainer } from "./Loader.style";
import spinner from "../../assets/spinner.svg";

export default function Loader() {
  return (
    <LoaderContainer src={spinner} alt="loading"/>
  )
}
