import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

export default function Footer() {
 return (
      <Box

      component="footer"
      sx={{
        bottom: 0,
        left: 0,
        width: "100%",
        py: 2,
        textAlign: "center",
        mt: "auto",
        backgroundColor: `#44195b !important`,

      }}
    >
      <Typography variant="body1" color="white">
        © {new Date().getFullYear()} Illusia RY
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
       {/*  <Link href="/contact" underline="hover">
          Contact Us
        </Link>
        <Link href="/terms" underline="hover">
          Terms & Conditions
        </Link>
        <Link href="/privacy" underline="hover">
          Privacy Policy
        </Link> */}

        <Link to="/contact" style={{ color: 'white', textDecoration:"none" }}> {/* Use React Router Link */}
          Contact Us
        </Link>
        <Link to="/terms" style={{ color: 'white', textDecoration:"none" }}> {/* Use React Router Link */}
          Terms & Conditions
        </Link>
        <Link to="/privacy" style={{ color: 'white', textDecoration:"none"  }}> {/* Use React Router Link */}
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
}
