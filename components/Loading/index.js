import { StyledImageContainer } from "./Loading.styled";
import Image from "next/image";

export default function Loading() {
  return (
    <StyledImageContainer>
      <Image src="/loading.gif" alt="loading" width={200} height={200} />
    </StyledImageContainer>
  );
}
