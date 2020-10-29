import styled from 'styled-components';

export const Gap = styled.div``;

export const InputText = styled.input`
  flex-grow: 1;
  color: white;
  font-size: inherit;
  font-family: inherit;
  background-color: hsl(236, 32%, 26%);
  padding: 0.35em 0.45em;
  border: none;
  transition: background-color 0.3s ease-in-out;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: hsla(0, 0%, 100%, 0.6);
  }

  span {
    position: absolute;
    background-color: #3cefff;
    transition: transform 0.5s ease;
  }

  .bottom,
  .top {
    height: 1px;
    left: 0;
    right: 0;
    transform: scaleX(0);
  }

  .left,
  .right {
    width: 1px;
    top: 0;
    bottom: 0;
    transform: scaleY(0);
  }

  .bottom {
    bottom: 0;
    transform-origin: bottom right;
  }

  :focus ~ .bottom {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  .right {
    right: 0;
    transform-origin: top right;
  }

  :focus ~ .right {
    transform-origin: bottom right;
    transform: scaleY(1);
  }

  .top {
    top: 0;
    transform-origin: top left;
  }

  :focus ~ .top {
    transform-origin: top right;
    transform: scaleX(1);
  }

  .left {
    left: 0;
    transform-origin: bottom left;
  }

  :focus ~ .left {
    transform-origin: top left;
    transform: scaleY(1);
  }
`;

export const StyledButton = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;

  ::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 100%;
    right: 100%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

  :hover {
    cursor: pointer;
    color: #161616;
  }

  :hover::before {
    transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
  }
`;
