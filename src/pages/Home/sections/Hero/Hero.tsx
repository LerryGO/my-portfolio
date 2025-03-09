import { styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Avatar from "../../../../assets/images/avatar.jpeg";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
  }));

  const StyledImage = styled("img")(() => ({
    width: "30%",
    border: "30%",
  }));

  return (
    <>
      <StyledHero>
        <Grid container spacing={2}>
          <Grid size={4}>
            <StyledImage src={Avatar} />
          </Grid>
          <Grid size={8}></Grid>
        </Grid>
      </StyledHero>
    </>
  );
};

export default Hero;
