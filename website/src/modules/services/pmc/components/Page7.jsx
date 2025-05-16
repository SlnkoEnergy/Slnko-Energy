import { Box } from "@mui/material";
import { styled } from "@mui/system";
import img1 from "../../../../assets/PMC.JPG";
import mouseCursor from "../../../../assets/download.svg"; // add your SVG here

const ButtonWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  border: "2px solid black",
  borderRadius: "50px",
  padding: "14px 30px",
  display: "inline-block",
  fontWeight: "bold",
  fontSize: "1.2rem",
  color: "#0a2b66",
  cursor: "pointer",
  overflow: "hidden",
  textAlign: "center",
  backgroundColor: "transparent",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "30px",
    height: "30px",
    bottom: "-2px",
    right: "-2px",
    backgroundColor: "white", // or match background
    zIndex: 1,
  },
}));

const CursorIcon = styled("img")({
  position: "absolute",
  bottom: "-10px",
  right: "-5px",
  width: "28px",
  zIndex: 2,
});

const Page7 = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ButtonWrapper>
        Start your Project Now
        <CursorIcon src={mouseCursor} alt="cursor" />
      </ButtonWrapper>
    </Box>
  );
};

export default Page7;
