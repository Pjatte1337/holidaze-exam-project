import styled from "styled-components";

const Input = styled.input`
  border: solid 1px #495b70;
  height: 2.5rem;
  border-radius: 8px;
  font-size: 1.1em;

  :focus {
    outline: solid 2px #32de84;
  }
`;

const Error = styled.div`
  color: #FF0000;
  min-height: 1.1rem;
`;

const Radio = styled.input`
  accent-color: #495b70;
  transform: scale(1.32);
  height: 1.1rem;
`;

const Check = styled.input`
  accent-color: #495b70;
  transform: scale(1.32);
  height: 1.1rem;
`;

const Input2 = styled.input`
  font-size: 1.1rem;
  border: solid 1px #495b70;
  height: 2.5rem;
  padding: 0 0.1rem 0 0;
  border-radius: 8px;
  border: solid 2px #495b70;

  :focus {
    outline: solid 2px #32de84;
  }
`;

const TextArea = styled.textarea`
  font-size: 1.1rem;
  border: solid 1px #495b70;
  height: 10rem;
  padding: 0 0.1rem 0 0;
  border-radius: 8px;
  border: solid 2px #495b70;

  :focus {
    outline: solid 2px #32de84;
  }
`;

export { Input, Error, Radio, Check, Input2, TextArea };
