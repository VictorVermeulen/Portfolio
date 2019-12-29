import React from 'react';
import projects from './projects';
import Typography from '@material-ui/core/Typography';

//components
import ButtonAppBar from './components/NavBar';
import Project from './components/Project';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
	return (
		<div>
			<ButtonAppBar />
			<Introduction />
			<Education />
			<Typography variant="h4" gutterBottom className="projects">
				Projects
			</Typography>
			<div className="flex-container">
				{projects.map((project) => (
					<Project
						key={project.key}
						img={project.image}
						title={project.title}
						description={project.description}
						code={project.code}
						site={project.website}
					/>
				))}
			</div>
			<Footer />
		</div>
	);
}

export default App;
