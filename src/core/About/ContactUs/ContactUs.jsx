import styled from 'styled-components';
import { PiPhone, PiEnvelopeLight } from 'react-icons/pi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';

const ContactUs = ({ contactInfo }) => {
	return (
		<StyledContactUs>
			{contactInfo.map(
				({
					id,
					region,
					phoneNumber,
					email,
					address: { street, city, postalCode, country },
				}) => {
					return (
						<StyledContactBox key={id}>
							<h3>{region}</h3>
							<p className='info-row'>
								<PiPhone />
								{phoneNumber}
							</p>
							<p className='info-row'>
								<PiEnvelopeLight />
								{email}
							</p>
							<div className='address'>
								<div className='address-icon'>
									<HiOutlineBuildingOffice />
								</div>
								<div className='address-text'>
									<p>{street}</p>
									<p>
										{city}, {postalCode}
									</p>
									<p>{country}</p>
								</div>
							</div>
						</StyledContactBox>
					);
				}
			)}
		</StyledContactUs>
	);
};

const StyledContactUs = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(25rem, 30rem));
	gap: 4rem 2rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
`;

const StyledContactBox = styled.address`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	width: 100%;
	max-width: 300px;
	font-style: normal;
	h3 {
		margin-bottom: 1rem;
	}
	svg {
		font-size: 3rem;
		color: var(--color-primary-800);
	}
	.info-row,
	.address {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1rem 2rem 1rem 1rem;
		border-left: 2px solid var(--color-primary-800);
		background-color: var(--color-primary-50);
		border-top-right-radius: var(--border-radius-lg);
		border-bottom-right-radius: var(--border-radius-lg);
		box-shadow: var(--shadow-sm);
	}
`;

export default ContactUs;
