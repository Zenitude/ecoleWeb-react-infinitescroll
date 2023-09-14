import { useRef } from "react";
import { FieldContainer, Label, Input } from "./Field.style";
import { FieldProps } from "../../utils/types/types";

export default function Field({setQuery, setPage}: FieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitField = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputRef.current && inputRef.current.value !== "") {
      setQuery(inputRef.current.value);
      setPage(1);
    } else if(inputRef.current && inputRef.current.value === "") {
      setQuery("random");
      setPage(1);
    }
  }

  return (
    <FieldContainer onSubmit={(e) => submitField(e)}>
      <Label>Recherchez des images...</Label>
      <Input ref={inputRef} type={"text"} placeholder={"Chercher quelque chose..."} />
    </FieldContainer>
  )
}