import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 20px;
  padding: 0;
  list-style: none;
  width: 500px;
 
`;


export const Item = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;
border-bottom: 1px solid #ccc;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
transition: all 0.2s ease;

&:last-of-type {
  border-bottom: none;
}

&:hover {
  transform: scale(1.05);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
`;

export const Name = styled.span`
font-size: 30px;
font-weight: bold;
// margin-right: 15px;
;`
export const Number = styled.span`
// margin-right: 15px;
font-size: 30px;
`;

export const Delete = styled.button`
padding: 5px;
border: none;
background-color: transparent;
color: #999;
cursor: pointer;
transition: color 0.2s ease;

&:hover {
  color: #000;
}
`
