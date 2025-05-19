import React, { useState } from "react";
import Img1 from "../../../assets/Service_1.png";
import Logo from "../../../assets/1.png";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });

  const handleSubmit = async () => {
    try {
      await axios.post("/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        requirement: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  const labelStyle = {
    color: "#1e293b",
    fontWeight: 600,
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${Img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
          zIndex: -0.5,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: -1,
        },
      }}
    >
      <Box
        sx={{
    background: "rgba(255, 255, 255, 0.25)",
    borderRadius: "25px",
    backdropFilter: "blur(4px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
    width: { xs: "100%", sm: 600 }, // Increased width here
    p: 4,
    boxSizing: "border-box",
  }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          textAlign="center"
          color="#1e3a8a"
          mb={2}
        >
          Send Us a Message
        </Typography>

        <Box textAlign="center" mb={3}>
          <img src={Logo} alt="Logo" style={{ height: 65 }} />
        </Box>

        {/* Full Name */}
        <TextField
          label="Full Name"
          variant="filled"
          fullWidth
          required
          sx={{
            mb: 3,
            "& .MuiInputLabel-root": labelStyle,
          }}
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />

        {/* Phone and Email side by side */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
            flexWrap: "wrap",
          }}
        >
          <TextField
            label="Phone Number"
            variant="filled"
            required
            sx={{ flex: "1 1 45%", "& .MuiInputLabel-root": labelStyle }}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <TextField
            label="Email Address"
            variant="filled"
            required
            sx={{ flex: "1 1 45%", "& .MuiInputLabel-root": labelStyle }}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </Box>

        {/* Requirement Select */}
        <FormControl
          variant="filled"
          fullWidth
          required
          sx={{ mb: 3, "& .MuiInputLabel-root": labelStyle }}
        >
          <InputLabel id="requirement-label">Requirement</InputLabel>
          <Select
            labelId="requirement-label"
            value={formData.requirement}
            onChange={(e) =>
              setFormData({ ...formData, requirement: e.target.value })
            }
            label="Requirement"
            sx={{ color: "#1e293b", fontWeight: 600 }}
          >
            <MenuItem value="Installation">Installation</MenuItem>
            <MenuItem value="Maintenance">Maintenance</MenuItem>
            <MenuItem value="Consultation">Consultation</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>

        {/* Message */}
        <TextField
          label="Message"
          variant="filled"
          multiline
          rows={4}
          fullWidth
          sx={{ mb: 3, "& .MuiInputLabel-root": labelStyle }}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            background: "#1e3a8a",
            textTransform: "none",
            fontWeight: "bold",
            ":hover": {
              background: "#1e40af",
            },
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
