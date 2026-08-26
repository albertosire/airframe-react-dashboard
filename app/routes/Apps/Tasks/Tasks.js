import React from 'react';
import { useParams } from 'react-router-dom';

import { 
    Container,
    Row,
    Col
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

import TasksList from './TasksList';
import TasksGrid from './TasksGrid';
import { ProjectsLeftNav } from "../../components/Projects/ProjectsLeftNav";
import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";

const Tasks = () => {
    const { type } = useParams();
    const isList = type === "list";

    return (
        <React.Fragment>
            <Container>
                <HeaderMain 
                    title="Tasks"
                    className="mb-5 mt-4"
                />
                <Row>
                    <Col lg={ 3 }>
                        <ProjectsLeftNav />
                    </Col>
                    <Col lg={ 9 }>
                        <ProjectsSmHeader
                            subTitle="Projects"
                            subTitleLink="/apps/projects/list"
                            title={isList ? "Tasks List" : "Tasks Grid"} 
                            linkList="/apps/tasks/list"
                            linkGrid="/apps/tasks/grid"
                            btnShowKanban
                        />

                        {isList ? <TasksList /> : <TasksGrid />}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Tasks;
