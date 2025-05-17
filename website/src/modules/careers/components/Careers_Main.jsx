import { Box, Typography } from "@mui/material";

const Careers_Main = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        mt: 3,
        textAlign: "center",
      }}
    >
      <Typography
        fontSize={"3rem"}
        fontWeight="bold"
        color="#1d3f79"
        mb={8}
        gutterBottom
      >
        Careers
      </Typography>
      <Typography fontSize={"1.5rem"} fontWeight="400" mb={2} color="#1d3f79">
        JOIN SLNKO ENERGY NOW
      </Typography>
      <Typography variant="body1" maxWidth="70%" color="#1d3f79" mb={5}>
        At Slnko Energy, we are always looking for talented and passionate
        individuals to join our team. We believe that our success is driven by
        the collective talent, creativity, and commitment of our employees. We
        provide an inclusive and supportive work environment that encourages
        growth and development.
      </Typography>
    </Box>
  );
};

export default Careers_Main;
