import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';

export const Header = styled.header`
  background-color: rgba(21, 0, 155, 0.75);
  color: white;
  padding: 10px;
  height: 20px;
  text-align: center;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  position: fixed;
  top: 0;
  width: 100%;
  @media (max-width: 3840px) {
    font-size: 100%;
  }
  @media (max-width: 3000px) {
    font-size: 100%;
  }
  @media (max-width: 2300px) {
    font-size: 100%;
    padding:15px;
  }
  @media (max-width: 1300px) {
    font-size: 100%;
    padding:13px;
  }
  @media (max-width: 1000px) {
    font-size: 75%;
    padding: 10px;
  }
  @media (max-width: 550px) {
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
  @media (max-width: 3000px) {
    font-size: 100%;
  }
  @media (max-width: 2300px) {
    font-size: 100%;
  }
  @media (max-width: 1300px) {
    font-size: 100%;
    padding: 15px;
  }
  @media (max-width: 1000px) {
    font-size: 75%;
  }
  @media (max-width: 550px) {
    font-size: 75%;
  }
`;
export const LayoutItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ImgAvatar = styled.img`
  width: 10%;
  height: 10%;
  border: none;
  margin-top: 1%;
  margin-left: 45%;
  object-fit: contain;
`;

export const ImgFriend = styled.img`
  width: 80%;
  height: 50%;
  border: none;
  object-fit: contain;
  margin-left: -20%;
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
`;

export const ButtonStyled = styled(Button)`
  float: right;
  @media (max-width: 3840px) {
    margin-top: -2.2%;
    margin-right: 1%;
  }
  @media (max-width: 3000px) {
    margin-top: -2.2%;
    margin-right: 1%;
  }
  @media (max-width: 2300px) {
    margin-top: -2.1%;
    margin-right: 1%;
  }
  @media (max-width: 1300px) {
    margin-top: -2.7%;
    margin-right: 1%;
  }
  @media (max-width:1150 ){
    margin-top: -2.5%;
    margin-right: 2%;
    font-size: 75%;
    padding: 1%;
  }
  @media (max-width: 1000px) {
    margin-top: -3%;
    margin-right: 2%;
    font-size: 75%;
    padding: 1%;
  }
  @media (max-width: 550px) {
    margin-top: -4.5%;
    margin-right: 2.5%;
    font-size: 50%;
    padding: 2%;
  }
`;

export const ButtonStyledGet = styled(Button)`
  float: left;
  @media (max-width: 3840px) {
    margin-top: -2.2%;
    margin-left: -0.5%;
  }
  @media (max-width: 3000px) {
    margin-top: -2.2%;
    margin-left: -0.5%;
  }
  @media (max-width: 2300px) {
    margin-top: -2.2%;
    margin-left: -0.5%;
  }
  @media (max-width: 1300px) {
    margin-top: -2.7%;
    margin-left: -0.5%;
  }
  @media (max-width:1150 ){
    margin-top: -2.5%;
    margin-left: 1%;
    font-size: 75%;
    padding: 1%;
  }
  @media (max-width: 1000px) {
    margin-top: -3%;
    margin-left: -1%;
    font-size: 75%;
    padding: 1%;
  }
  @media (max-width: 550px) {
    margin-top: -4.5%;
    margin-left: -1.5%;
    font-size: 50%;
    padding: 2%;
  }
`;

export const ContainerInfoUser = styled.div`
  margin-top: 3%;
`;

export const TextStyleHeader = styled.p`
 margin-top: 0%;
 color: white;
`;

export const TableStyled = styled(TableCell)`
    top: 0;
    left: 0;
    z-index: 2;
    position: sticky;
    background-color: white;
`;
