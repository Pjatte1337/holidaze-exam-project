import styled from "styled-components";
import { Link } from "react-router-dom";

export const VenueCard = styled(Link)`
  background: #f1f7ff;
  border-radius: 10px;
  color: black;
  text-decoration: none;
  width: 16rem;
  font-size: 1.1rem;
  filter: drop-shadow(1px 1px 2px grey);

  &:hover {
    transform: scale(1.02);
    color: black;
    box-shadow: 0px 0px 4px 2px black;
    font-weight: bold;
  }

  .card-img-wrap {
    width: 100%;
    height: 10rem;
    overflow: hidden;
    border-radius: 10px 10px 0 0;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .person-icon {
    height: 1.3rem;
  }

  .card-icons {
    height: 1.5rem;
  }
`;
