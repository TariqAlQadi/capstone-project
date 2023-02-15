import styled from "styled-components";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import Image from "next/image";
import Button from "@/components/Button";

const onlineShops = [
  {
    name: "Murphsy Magic",
    href: "https://www.murphysmagic.com",
    src: "https://media.licdn.com/dms/image/C4D0BAQGOs0q_klylxg/company-logo_200_200/0/1519913768323?e=2147483647&v=beta&t=cap0HZqTz2aRKJjExKzqXHayrYezGxYEuynmD0GmVl0",
  },
  {
    name: "Ellusionist",
    href: "https://ellusionist.com",
    src: "https://storage.googleapis.com/tapcart-150607.appspot.com/5fc252012f2b94bd91a34f0a38bbe3c8_NewElogoonEblack1024png.png",
  },
  {
    name: "Theory11",
    href: "https://www.theory11.com",
    src: "https://www.theory11.com/forums/attachments/upload_2019-11-28_9-57-57-jpeg.3937/",
  },
  {
    name: "Anyone",
    href: "https://anyoneworldwide.com",
    src: "https://www.justplaycards.com/img/cms/anyone-logo.jpg",
  },
  {
    name: "Plainsight",
    href: "https://plainsightmagic.com",
    src: "https://cdn.shopify.com/s/files/1/0262/1053/3424/products/Pendant-Individual-Silver_2249x.png?v=1665020942",
  },
  {
    name: "Vanishing Inc.",
    href: "https://www.vanishingincmagic.com",
    src: "https://i.pinimg.com/280x280_RS/cc/40/9f/cc409f8c25e8d8728c7790e54a2e46a0.jpg",
  },
  {
    name: "Penguin",
    href: "https://www.penguinmagic.com",
    src: "https://i.pinimg.com/originals/9f/79/69/9f796926e2b902e6a0f1584a971a3e52.jpg",
  },
  {
    name: "ProMystic",
    href: "https://promystic.com",
    src: "https://pbs.twimg.com/profile_images/483867006857252864/qZeZwwaH_400x400.jpeg",
  },
  {
    name: "PK Magic",
    href: "https://www.pk-magic.com",
    src: "https://images.squarespace-cdn.com/content/v1/559cb418e4b041328d041a5a/1615266674850-N8VIJQ5YJFWISAL73QS0/Floating%2BPen%2BWEB.jpg?format=750w",
  },
  {
    name: "Alakazam",
    href: "https://alakazam.co.uk",
    src: "https://www.rnt2.com/images/feature_variant/6/alakazam.jpg",
  },
  {
    name: "Henry Harrius",
    href: "https://hhpresents.com/",
    src: "https://images.squarespace-cdn.com/content/v1/5d50d8cb02321b000195de02/1567074866637-PBEXK6V4LQTCV0AGJVN3/logo.jpg?format=1500w",
  },
  {
    name: "Calen Morelli",
    href: "https://calenmorelli.com/",
    src: "https://cdn.shopify.com/s/files/1/0224/3189/1530/products/ScreenShot2021-05-02at1.56.27PM.png?v=1629852735",
  },
];

export default function Shop() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <StyledSection>
          <StyledHeading>Online Shops</StyledHeading>
          <StyledList>
            {onlineShops.map((shop) => {
              return (
                <li key={shop.href}>
                  <Button href={shop.href} aria-label={shop.name}>
                    <StyledImage
                      src={shop.src}
                      alt={shop.name}
                      width={110}
                      height={110}
                    />
                  </Button>
                </li>
              );
            })}
          </StyledList>
          <StyledHeading>Free Resources</StyledHeading>
          <StyledResources>
            <Button
              href="https://askalexander.org"
              aria-label="ask alexander search engine"
            >
              <StyledImage
                src={
                  "https://149455961.v2.pressablecdn.com/wp-content/uploads/2013/03/askalexander.png"
                }
                alt="ask alexander"
                width={100}
                height={140}
              />
            </Button>
            <Button
              href="https://www.themagiccafe.com/forums/index.php"
              aria-label="magic cafe forum"
            >
              <StyledImage
                src={"https://themagiccafe.com/forums/images/header2.gif"}
                alt="magic cafe"
                width={200}
                height={100}
              />
            </Button>
          </StyledResources>
        </StyledSection>
      ) : (
        <Login />
      )}
    </>
  );
}

//styling
const StyledSection = styled.section`
  margin-top: 70px;
  padding: 0.7em 0.2em;
  margin-bottom: 80px;
  margin-left: 0.5em;
  margin-right: 0.5em;
  border: 1px solid var(--passive-color);
  border-radius: 5px;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-bottom: 15px;
`;

const StyledImage = styled(Image)`
  border-radius: 5px;
  box-shadow: 2px 1px 4px black;
`;

const StyledResources = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const StyledHeading = styled.h2`
  text-align: center;
  margin-bottom: 0.5em;
`;
