import styled from 'styled-components';

const StyledPage = styled.div`
	background-color: ${({ theme }) => theme.backgroundColor };
	color: ${({ theme }) => theme.fontColor };
`;

export default StyledPage;