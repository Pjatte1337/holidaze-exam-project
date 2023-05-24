import styled from "styled-components";



const ProfileImgStyle = styled.div`
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    object-fit: cover;
    min-height: 100%;
    min-width: 100%;
    max-width: 100%;
  }

  @media (max-width: 575px) {
    height: 5rem;
    width: 5rem;
  }
`;

const EditIconStyle = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
`;

export {ProfileImgStyle, EditIconStyle };
