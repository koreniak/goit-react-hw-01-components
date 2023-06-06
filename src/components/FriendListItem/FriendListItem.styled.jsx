import styled from '@emotion/styled'

const setColorStatus = props => {
  if (props.status) {
    return "green"
  }
  return "red"
};

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 4px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  gap: 8px;
  svg {
    color: ${setColorStatus};
  }
`;

export const Avatar = styled.img`
  border-radius: 8px;
  border: 1px solid #b4afaf;
  object-fit: cover;
  width: 48px;
`;

export const Name = styled.p`
  font-weight: 700;
  line-height: 1.12;
`;