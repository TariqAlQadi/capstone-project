import React from "react";
import { StyledLink } from "../StyledLink/Link.styled";
import SVGIcon from "../SVGIcon";

export default function ProfilSection({ tutorials }) {
  return (
    <section>
      <ul>
        {tutorials.map((tutorial) => {
          return (
            <li key={tutorial.id}>
              <StyledLink href={`/details/${tutorial.id}`}>
                <h3>{tutorial.snippet.title}</h3>
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
