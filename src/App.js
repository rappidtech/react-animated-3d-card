import React from 'react';
import './App.css';
import AnimatedCard from './components/AnimatedCard';
import styled from 'styled-components';

import imagen1 from './static/imagen1.jpg';
import imagen2 from './static/imagen2.jpg';
import imagen3 from './static/imagen3.jpg';
import imagen4 from './static/imagen4.jpg';
import imagen5 from './static/imagen5.jpg';

const contanierStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100vh',
	gap: '20px',
	margin: '0 auto',
	maxWidth: '1000px',
	width: '80%',
};

const line1Style = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	gap: '20px',
};

const StyledCard = styled.div`
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #f6f6f6;
	text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
	justify-content: space-around;
	padding: 20px;
`;

function App() {
	return (
		<div style={contanierStyle}>
			<div style={line1Style} className="responsive-line">
				<AnimatedCard style={{heigth:'100%'}}>
					<StyledCard image={imagen1}>
						<h2>Escape into Nature</h2>
						<p
							style={{
								padding: '5px',
								backgroundColor: 'rgba(0,0,0,0.3)',
							}}
						>Discover the ultimate retreat from the hustle and bustle of daily life with our exclusive camping experience.</p>
					</StyledCard>
				</AnimatedCard>
				<AnimatedCard>
					<StyledCard image={imagen2}>
					<h2 style={{textAlign:'center'}}>MaxFit Gym</h2>
						<p>Unlock Your Potential with State-of-the-Art Facilities and Personalized Training Programs</p>
						<button 
							style={{
								backgroundColor: '#4CAF50',
								color: '#FFFFFF',
								border: 'none',
								padding: '10px 20px',
								fontSize: '16px',
								fontWeight: 'bold',
								borderRadius: '30px',
							}}		
						>Learn More</button>
					</StyledCard>
				</AnimatedCard>
				<AnimatedCard>
					<StyledCard image={imagen3}>
						<h2 style={{color:'#000', fontWeight:'bold', fontSize:'24px'}}>Embark on an Unforgettable Trekking Adventure</h2>
						<p style={{
								backgroundColor: 'rgba(92,64,51,0.7)',
								padding: '10px'
							}}>Step into a world of adventure with our guided trekking expeditions, designed for those who crave the thrill of exploration</p>
					</StyledCard>
				</AnimatedCard>
				<AnimatedCard>
					<StyledCard image={imagen4}>
						<h2 style={{color:'#C83108', fontWeigth:'bold'}} >UltraBoost Running Shoes</h2>
						<p style={{marginTop:'150px'}}>Experience the Perfect Performance </p>
						<button 
							style={{
								backgroundColor: '#ffffff',
								color: '#e65100',
								border: '2px solid #e65100',
								padding: '10px 20px',
								fontSize: '16px',
								fontWeight: 'bold',
								borderRadius: '30px',
							}}		
						>Buy Now!</button>
					</StyledCard>
				</AnimatedCard>
			</div>
			<div style={{width:'100%'}}>
				<AnimatedCard maxWidth={'100%'}>
					<StyledCard image={imagen5}>
						<h2 style={{color:'#3B5998', fontWeigth:'bold'}}>Tranquil Dawn: A Serene Escape by the Lakeside</h2>
						<p 
							style={{
								border: '1px solid white',
								padding: '20px',
								borderRadius: '10px',
								backgroundColor: 'rgba(0,0,0,0.3)',
								margin:'50px'
							}}
						>Encapsulates the essence of peace and solitude at the break of dawn. As the first rays of sunlight gently kiss the calm waters, the wooden dock stands as a silent invitation to immerse oneself in the beauty of nature. Surrounded by verdant foliage and under a sky painted in soft hues of blue, this idyllic scene offers a momentary escape into tranquility. The reflection of the sky on the lake's surface blurs the line between water and air, creating a harmonious symphony of nature's elements. It's a perfect retreat for the soul, offering solace and a sense of connection to the natural world.</p>
					</StyledCard>
				</AnimatedCard>
			</div>
		</div>
	);
}



export default App;
