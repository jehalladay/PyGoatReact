import React from 'react';
import {SVGLogo} from './components/logo.jsx'
import {GoatHeader} from './components/header.jsx'
import {SiteNavigator} from './components/siteNav.jsx'
import {SiteNavItem} from './components/siteNavItem.jsx'
import {LessonNavigator} from './components/lessonNavigator.jsx'
import {LessonGroup} from './components/lessonGroup.jsx';

import {LessonArea} from './components/lessonArea.jsx'

function App(props) {

	const model = props.model
	
	const format = {}
	format.header = {
		height: '120px',
		width: '100%'
	}

	format.sidebar = {
		minHeight: '20rem',
		width: '300px'
	}

	const navItems = ['Logout', 'Record', 'Contact Us', 'About']

	const navItemsLength = navItems.length

	const lessonNavItems = [
		{group: 'Lesson Group', lessons: [{title: 'Lesson Title', current: false}, {title: 'Lesson Title', current: false}, {title: 'Lesson Title', current: false},]},
		{group: 'Lesson Group', lessons: [{title: 'Lesson Title', current: false}, {title: 'Lesson Title', current: false}, {title: 'Lesson Title', current: false},]},
		{group: 'Lesson Group', lessons: [{title: 'Lesson Title', current: true}, {title: 'Lesson Title', current: false}, {title: 'Lesson Title', current: false},]},
		{group: 'Lesson Group', lessons: [{title: 'Lesson Title', current: false}, {title: 'Lesson Title', current: false}, {title: 'Lesson Title', current: false},]},
	]
	return (
		<div >
			{/* This is the Header */}
			<GoatHeader height={format.header.height} >
				<SVGLogo height={format.header.height} width={format.sidebar.width}/>
				<SiteNavigator height={format.header.height}>
					{navItems.map((x, i)=><SiteNavItem key={`${x}_${i}`} height={`${100/navItemsLength}%`} title={x} />)}
				</SiteNavigator>
			</GoatHeader> 

			<main>
				{/* This is the Side Panel */}
				<div className='lesson-navigator' style={{width: format.sidebar.width}}>
					<LessonNavigator width={format.sidebar.width} groups={lessonNavItems} />
				</div>


				{/* This is Page Contents */}
				<div className='lesson-area'>
					<LessonArea />
				</div>
			</main>
		</div>
	);
}

export default App;
