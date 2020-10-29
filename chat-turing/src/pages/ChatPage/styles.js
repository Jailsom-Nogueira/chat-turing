import styled from 'styled-components';
import { ImageAdd } from '@styled-icons/boxicons-regular/ImageAdd';
import { Chat } from '@styled-icons/boxicons-regular/Chat';

// ChatPageContainer
export const ChatPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
`;

// ChatPageWrapper
export const ChatPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 4px 8px;
  color: white;
  font-weight: 600;
`;
export const HeaderBox = styled.div`
  background-color: hsl(236, 32%, 26%);
  flex-grow: 1;
  padding-left: 14px;
  height: 50px;
  display: flex;
  align-items: center;
`;
export const Messages = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  padding-left: 14px;
  overflow: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 14px;
    height: 14px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #2d3058;
    border: 0px none #ffffff;
    border-radius: 0px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #3cefff;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #3cefff;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
    border: 0px none #ffffff;
    border-radius: 0px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-track:active {
    background: #ffffff;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
export const MessageForm = styled.form`
  display: flex;
  height: 50px;
  border-top: 1px solid lightgray;
  padding: 8px;
  position: relative;
`;
export const FileInput = styled.input`
  display: none;
`;
export const IconInput = styled(ImageAdd)`
  width: 3rem;
  color: hsl(236, 32%, 26%);
  cursor: pointer;

  &:hover {
    color: #3cefff;
  }
`;
export const ImgContainer = styled.img`
  width: 20vw;
`;

// UsersListWrapper
export const UsersListWrapper = styled.div`
  padding: 0 16px;
  background-color: hsl(236, 32%, 26%);
  color: white;

  h4 {
    margin: 2rem 0 1rem 0;
  }
`;
export const UsersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.85rem;
`;
export const ChatUserName = styled.div`
  color: white;
  padding: 8px 8px;
  margin-bottom: 1rem;
  border-bottom: 1px solid white;
  font-weight: bolder;

  &:hover {
    color: hsl(236, 32%, 26%);
    cursor: pointer;
    background-color: white;
    opacity: 50%;
  }
`;

//Empty Messages Chat
export const ChatIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ChatIconPlaceholder = styled(Chat)`
  width: 30vw;
  color: hsl(236, 32%, 26%);
`;
