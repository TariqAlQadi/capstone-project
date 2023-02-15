import StyledButton from "./Button.styled";
import Link from "next/link";

//LINK & BUTTON COMPONENT
export default function Button(props) {
  return (
    <StyledButton as={props.href && Link} {...props}>
      {props.children}
    </StyledButton>
  );
}
