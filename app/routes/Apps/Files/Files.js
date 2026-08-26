import React from 'react';
import { useParams } from 'react-router-dom';

import { 
    Container,
    Row,
    Col
} from './../../../components';

import { HeaderMain } from "../../components/HeaderMain";

import FilesList from './FilesList';
import FilesGrid from './FilesGrid';
import { FilesLeftNav } from "../../components/Files/FilesLeftNav";
import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";

const Files = () => {
    const { type } = useParams();
    const isList = type === "list";

    return (
        <React.Fragment>
            <Container>
                <HeaderMain 
                    title="Files"
                    className="mb-5 mt-4"
                />
                <Row>
                    <Col lg={ 3 }>
                        <FilesLeftNav />
                    </Col>
                    <Col lg={ 9 }>
                        <ProjectsSmHeader
                            subTitle={isList ? "Files List" : "Files Grid"} 
                            linkList="/apps/files/list"
                            linkGrid="/apps/files/grid"
                        />

                        {isList ? <FilesList /> : <FilesGrid />}
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Files;
