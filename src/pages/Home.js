import {
  StyledTitle,
  StyledSubTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
} from "../components/Styles";
import Logo from "./../assets/logo.jpg";

const Dashboard = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo} />
      </div>
      <StyledTitle size={65}>Welcome to Authentication System</StyledTitle>
      <StyledSubTitle size={27}>Feel free to explore</StyledSubTitle>

      <ButtonGroup>
        <StyledButton to="/login">Login</StyledButton>
        <StyledButton to="/signup">Sign Up</StyledButton>
      </ButtonGroup>
    </div>
  );
};

export default Dashboard;
