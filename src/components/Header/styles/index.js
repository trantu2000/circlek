import styled from "@emotion/styled";

export const LogoImageNavbar = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "6rem",
  height: "2.5rem",
  // background: Colors.light_gray,
}));
