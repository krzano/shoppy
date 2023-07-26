import { styled, keyframes } from 'styled-components';

const rotate = keyframes`
  0%{
    rotate: 0deg;
    opacity:1;
  }
  50%{
    opacity:0.7;
  }
  100%{
    rotate: 360deg;
    opacity:1;
  }
`;

const StyledLoadingSpinner = styled.div`
	padding: 14rem 0;
	.spinner {
		margin: 0 auto;
		width: 100px;
		height: 100px;
		border: 10px solid var(--color-primary-200);
		border-top: 10px solid var(--color-primary-900);
		border-radius: 50%;
		animation: ${rotate} 1s cubic-bezier(0.68, 0.42, 0.34, 0.94) infinite;
	}
`;

const LoadingSpinner = () => {
	return (
		<StyledLoadingSpinner>
			<div className='spinner'></div>
		</StyledLoadingSpinner>
	);
};
export default LoadingSpinner;
