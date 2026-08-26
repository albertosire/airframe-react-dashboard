import React from 'react';
import { useParams } from 'react-router-dom';

import { 
    Container,
    Row,
    Col
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

import ProjectsList from './ProjectsList';
import ProjectsGrid from './ProjectsGrid';
import { ProjectsLeftNav } from "../../components/Projects/ProjectsLeftNav";
import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";

const Projects = () => {
    const { type } = useParams();
    const isList = type === "list";

    return (
        <React.Fragment>
            <Container>
                <HeaderMain 
                    title="Projects"
                    className="mb-5 mt-4"
                />
                <Row>
                    <Col lg={ 3 }>
                        <ProjectsLeftNav />
                    </Col>
                    <Col lg={ 9 }>
                        <ProjectsSmHeader 
                            subTitle={isList ? "Projects List" : "Projects Grid"}
                            linkList="/apps/projects/list"
                            linkGrid="/apps/projects/grid"
                        />

                        {isList ? <ProjectsList /> : <ProjectsGrid />}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Projects;
