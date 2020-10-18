import React, { Component } from 'react';
import styled from 'styled-components';
import { LinkGroup } from '../components/Links';
import colors from '../colors/colors';
import { Card } from '../components/Cards';
import { Button, ColorDial } from '../components';
import 'aos/dist/aos.css';

const Home = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	overflow: hidden;
	@media (min-width: 320px) and (max-width: 967px) {
		height: 100%;
		overflow: auto;
		background-position: center;
		background-size: cover;
		background-image: url(${({ src }) => src});
	}
`;

const LeftMain = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	min-width: 200px;
	width: 50%;
	transition: width .25s ease;
	${({ mount }) => mount && `
		width: 25%;
	`};
	flex-direction: column;
	background-color: ${({ background }) => background};
	@media (min-width: 320px) and (max-width: 967px) {
		position:absolute;
		z-index: 5;
		left: ${({ showLinks }) => showLinks ? 0 : -200}px;
	}
	@media (min-width: 967px) {
		position: relative;
	}
`;

const OpenButton = styled(Button)`
	position: relative;
	border-radius: 0px;
	width: 50px;
	height: 50px;
	background-image: 	linear-gradient(to bottom, ${({ background }) => background} 0%, white 90%);
	left: ${({ showLinks }) => showLinks ? 200 : 0}px;
	z-index: 2;
	transform: rotate(${({ showLinks }) => showLinks ? 90 : -90}deg);
	@media (min-width: 967px) {
		display: none;
	}
`;


const RightMain = styled.div`
	position: relative;
	padding-top: 32px;
	width: 50%;
	transition: width .25s ease;
	${({ mount }) => mount && `
		width: 75%;
	`};
	height: 100%;
	overflow: auto;
	background-position: center;
	background-size: cover;
	background-image: url(${({ src }) => src});
	&::after {
	  content: "";
	  position: absolute;
	  z-index: 1;
	  top: 0;
	  left: 0;
	  pointer-events: none;
	  background-image: linear-gradient(to top, 
	                    rgba(255,255,255, 0), 
	                    rgba(255,255,255, 1) 90%);
	  width: 100%;
	  height: 4em;
	}
	@media (min-width: 320px) and (max-width: 967px) {
		background-image: none;
		overflow: visible;
		width: 100%;
	}
`;

const Content = styled.div`
	padding: 0 44px;
	height: 100%;
	@media (min-width: 320px) and (max-width: 767px) {
		padding: 0px;
		width: 100%;
	}
`;

const CardWrapper = styled.span`
	display: flex;
	padding-bottom: 224px;
`;

const LinkGroupContainer = styled.span`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	padding-bottom: 50px;
`;

class TestPersonalPage extends Component {
	state = {
		mounted: false,
		showLinks: false
	}
	componentDidMount() {
		setTimeout(() => this.setState({ mounted: true }), 10);
	}

	_onClickColor = (background) => {
		this.props.onClickColor(background);
	}

	render() {
		const { cards, src } = this.props;

		return(
				<Home src={src}>
					<LeftMain showLinks={this.state.showLinks} mount={this.state.mounted} background={this.props.background}>
						<LinkGroupContainer>
							<LinkGroup activeRoute="about" links={this.props.links} />
						</LinkGroupContainer>
						<ColorDial background={this.props.background} colorDial={this.props.colors} onClick={this._onClickColor}/>
					</LeftMain>
				<OpenButton onClick={() => this.setState({ showLinks: !this.state.showLinks})} showLinks={this.state.showLinks} textColor={colors.darkGray} background={this.props.background}/> 
					<RightMain mount={this.state.mounted} src={src}>
						<Content 
						    data-aos="fade-up"
						    data-aos-offset="200"
						    data-aos-delay="50"
						    data-aos-duration="500"
						    data-aos-easing="ease-in-out"
						    data-aos-mirror="true"
						    data-aos-once="false"
						    data-aos-anchor-placement="top-center">
							{cards && cards.map((card, index) => {
								return(
								<CardWrapper key={card.title}>
									<Card title={card.title} content={card.content} image={card.image} background={this.props.cardBackground}/>
								</CardWrapper>
								)
							})}
						</Content>
					</RightMain>
				</Home>
		)
	}
};


export default TestPersonalPage;