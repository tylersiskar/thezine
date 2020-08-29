import React from 'react';
import { Route,
         Switch,
         Redirect }             from "react-router-dom";
import styled from 'styled-components';
import colors from './colors/colors';
import TestHomePage from './pages/TestHomePage';
import TestPersonalPage from './pages/TestPersonalPage';
import TestHobbiesPage from './pages/TestHobbiesPage';
import TestDevelopmentPage from './pages/TestDevelopmentPage';
import ContactPage from './pages/ContactPage';
import { TestHeader } from './components';

const HomeContactPage = styled.body`
	background-image: linear-gradient(to right, ${colors.forestGreen} 50%, white 50%);
	position: absolute;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
`;
const OtherPage = styled.body`
	background-image: linear-gradient(to right, ${colors.forestGreen} 25%, white 25%);
	position: absolute;
	bottom: 0;
	top: 0;
	left: 0;
	right: 0;
`;

const links = [ 
	{
		route: 'about',
		to: '/personal'
	},
	{
		route: 'development',
		to: '/development'
	},
	{
		route: 'hobbies',
		to: '/hobbies'
	},
	{
		route: 'contact',
		to: '/contact'
	}
];

class App extends React.Component {

 _renderScreen = (route) => {
    switch(route) {
      case 'personal':
        return( <OtherPage>
					<TestHeader active={route} />
					<TestPersonalPage {...this.props} links={links}/>
				</OtherPage>);
      case 'development':
        return( <OtherPage>
					<TestHeader active={route}/>
					<TestDevelopmentPage {...this.props} links={links}/>
				</OtherPage>);
      case 'hobbies':
        return( <OtherPage>
					<TestHeader  active={route}/>
					<TestHobbiesPage {...this.props} links={links}/>
				</OtherPage>);
      case 'contact':
        return( <HomeContactPage>
					<TestHeader  active={route}/>
					<ContactPage {...this.props} links={links}/>
				</HomeContactPage>);
      case 'homepage':
      default:
        return( <HomeContactPage>
					<TestHeader  active={route}/>
					<TestHomePage {...this.props} links={links}/>
				</HomeContactPage>);
		}

  }

		render() {
			  return (
		        <Switch>
		          <Route 
		            path="/homepage" 
		            component={() => this._renderScreen('homepage')}/>
		          <Route 
		            path="/personal" 
		            component={() => this._renderScreen('personal')}/>
		          <Route 
		            path="/development" 
		            component={() => this._renderScreen('development')}/>
		          <Route 
		            path="/hobbies" 
		            component={() => this._renderScreen('hobbies')}/>
		          <Route 
		            path="/contact" 
		            component={() => this._renderScreen('contact')}/>
		   		  <Redirect to="/homepage"/>
		        </Switch>

	  );
	}
}


export default App;
