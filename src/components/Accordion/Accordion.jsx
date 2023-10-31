import { useState } from 'react';
import styled from 'styled-components';

const Accordion = ({ accordionList }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggle = (index) => {
		if (index === activeIndex) {
			setActiveIndex(null);
			return;
		}
		setActiveIndex(index);
	};

	return (
		<StyledAccordion>
			{accordionList.map(({ id, title, content }, index) => {
				const isActive = activeIndex === index;
				return (
					<StyledAccordionItem
						key={id}
						onClick={() => {
							toggle(index);
						}}>
						<div className='title'>
							<h3>{title}</h3>
							<span className='icon'>{isActive ? '-' : '+'}</span>
						</div>
						<p className={isActive ? 'content show' : 'content'}>{content}</p>
					</StyledAccordionItem>
				);
			})}
		</StyledAccordion>
	);
};

const StyledAccordion = styled.div`
	background-color: var(--color-primary-50);
	border: 1px solid var(--color-primary-200);
	border-bottom: 2px solid var(--color-primary-200);
	border-radius: var(--border-radius-lg);
	box-shadow: var(--shadow-lg);
`;

const StyledAccordionItem = styled.div`
	padding: 2rem;
	cursor: pointer;
	&:not(:last-child) {
		border-bottom: 1px solid var(--color-primary-200);
	}
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
	}
	.icon {
		font-size: 2rem;
		font-weight: 500;
	}
	.content {
		padding-right: 3rem;
		max-height: 0;
		overflow: hidden;
		opacity: 0;
		transition: max-height 0.6s ease-out, margin-top 0.6s ease, opacity 0.6s;
		/* transition: max-height 0.6s cubic-bezier(0, 1, 0, 1), margin-top 0.6s ease; */
	}
	.content.show {
		margin-top: 1rem;
		max-height: 100rem;
		opacity: 1;
		/* transition: max-height 0.6s cubic-bezier(1, 0, 1, 0), margin-top 0.6s ease; */
	}
	@media (min-width: 576px) {
		padding: 3rem 6rem;
		.content {
			padding-right: 6rem;
		}
	}
`;

export default Accordion;
