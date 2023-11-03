import styled from 'styled-components';
import { PiPhone, PiEnvelopeLight } from 'react-icons/pi';
import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import ContactInfoRow from '../ContactInfoRow/ContactInfoRow';

const ContactUs = ({ contactInfo }) => {
	return (
		<StyledContactUs>
			{contactInfo.map(
				({
					id,
					region,
					phoneNumber,
					email,
					address: { name, street, city, postalCode, country },
				}) => {
					return (
						<StyledContactBox key={id}>
							<h3>{region}</h3>
							<ContactInfoRow icon={<PiPhone />}>
								<p>{phoneNumber}</p>
							</ContactInfoRow>
							<ContactInfoRow icon={<PiEnvelopeLight />}>
								<p>{email}</p>
							</ContactInfoRow>
							<ContactInfoRow icon={<HiOutlineBuildingOffice />}>
								<p>{name}</p>
								<p>{street},</p>
								<p>
									{city}, {postalCode}
								</p>
								<p>{country}</p>
							</ContactInfoRow>
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
	/* gap: 1rem; */
	padding: 1rem;
	width: 100%;
	max-width: 300px;
	font-style: normal;
	h3 {
		margin-bottom: 1rem;
		color: var(--color-primary-800);
	}
`;

export default ContactUs;
