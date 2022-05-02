import {
  StyledTitle,
  Avatar,
  StyledButton,
  ButtonGroup,
  StyledFormArea,
  colors,
} from "../components/Styles";
import Logo from "./../assets/logo.jpg";

const Home = () => {
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

      <StyledFormArea bg={colors.dark2}>
        <StyledTitle size={65}>Welcome User</StyledTitle>

        <ButtonGroup>
          <StyledButton to="#">Logout</StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </div>
  );
};

export default Home;
