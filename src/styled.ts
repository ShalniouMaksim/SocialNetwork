import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';

export const Header = styled.header`
  background-color: rgba(21, 0, 155, 0.75);
  color: white;
  padding: 10px;
  height: 20px;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;

  @media (max-width: 3840px) {
    font-size: 100%;
  }

  @media (max-width: 2300px) {
    font-size: 100%;
    padding: 15px;
  }

  @media (max-width: 1300px) {
    font-size: 100%;
    padding: 13px;
  }

  @media (max-width: 1000px) {
    font-size: 75%;
    padding: 10px;
  }
`;
export const Footer = styled.footer`
  background-color: rgba(21, 0, 155, 0.75);
  display: fixed;
  color: white;
  padding: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: fixed;
  height: 20px;
  bottom: 0;
  left: 0;
  width: 100%;

  @media (max-width: 3840px) {
    font-size: 100%;
  }

  @media (max-width: 1300px) {
    font-size: 100%;
    padding: 15px;
  }

  @media (max-width: 1000px) {
    font-size: 75%;
  }
`;

export const ImgAvatar = styled(Avatar)`
  width: 10%;
  height: 10%;
  border: none;
  margin-top: 1%;
  margin-left: 49%;
  object-fit: contain;
`;

export const ImgFriend = styled(Avatar)`
  border: none;
  object-fit: contain;
  margin-left: 0%;
  margin-top: 5%;
`;

export const TableStyle = styled.div`
  margin-top: 3%;
  width: 100%;
  height: 300px;
  overflow-x: auto;
`;

export const TextColorRed = styled.p`
  color: red;
`;

export const TextCenter = styled.p`
  text-align: center;
  margin: 0%;
  margin-left: 1%;
  color: black;
  font-size: 100%;

  @media (max-width: 3000px) {
    margin-top: 4%;
  }

  @media (max-width: 1300px) {
    margin-top: 6%;
  }

  @media (max-width: 1000px) {
    margin-top: 6%;
  }

  @media (max-width: 550px) {
    margin-top: 8%;
  }
`;
export const ButtonStyled = styled(Button)`
  float: right;

  @media (max-width: 3840px) {
    margin-top: 0% !important;
    margin-right: 0.5% !important;
  }

  @media (max-width: 2300px) {
    margin-top: 0.5% !important;
  }

  @media (max-width: 1300px) {
    margin-top: 0.5% !important;
    margin-right: 0% !important;
  }

  @media (max-width: 1150) {
    margin-top: 0% !important;
  }

  @media (max-width: 1000px) {
    margin-top: 0% !important;
    margin-right: 0.5% !important;
    font-size: 75%;
    padding: 1%;
  }

  @media (max-width: 550px) {
    margin-top: 0% !important;
    margin-right: 1% !important;
    font-size: 50%;
    padding: 2%;
  }
`;

export const ButtonStyledGet = styled(Button)`
  float: left;

  @media (max-width: 3840px) {
    margin-top: 0% !important;
  }

  @media (max-width: 2300px) {
    margin-top: 0.5% !important;
  }

  @media (max-width: 1300px) {
    margin-top: 0.5% !important;
    margin-left: -0.5% !important;
  }

  @media (max-width: 1150) {
    margin-top: 0% !important;
  }

  @media (max-width: 1000px) {
    margin-top: 0% !important;
    margin-left: -1% !important;
    font-size: 75%;
    padding: 1% ;
  }

  @media (max-width: 550px) {
    margin-top: 0% !important;
    margin-left: -1.5% !important;
    font-size: 50%;
    padding: 2%;
  }
`;

export const ContainerInfoUser = styled.div`
  @media (max-width: 3840px) {
    margin-top: -3%;
  }

  @media (max-width: 2300px) {
    margin-top: -3%;
  }

  @media (max-width: 1300px) {
    margin-top: -5%;
  }
`;

export const TextStyledHeader = styled.p`
  margin-top: 0%;
  color: white;
`;

export const BorderItem = styled.div`
  border: 2px solid blue;
  border-radius: 10%;
`;

export const TableStyled = styled(TableCell)`
  top: 0;
  left: 0;
  z-index: 2;
  position: sticky;
  background-color: white;
`;

export const StyledInputForm = styled(Grid)`
  margin-top: 15%;
  margin-left: 43%;
`;

export const StyledInputDivs = styled.div`
  margin: 15%;
`;

export const StyledInputButton = styled.div`
  margin: 15%;
  margin-left: 30%;
`;
