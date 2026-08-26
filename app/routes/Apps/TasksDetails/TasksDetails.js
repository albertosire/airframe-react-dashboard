import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Table,
  Button,
  Card,
  CardBody,
  CardFooter,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media,
  Input,
  InputGroup,
  CustomInput,
  InputGroupAddon,
  Badge,
  Avatar,
} from "./../../../components";
import { randomAvatar } from "./../../../utilities";
import { HeaderMain } from "../../components/HeaderMain";
import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";
import { Attachment } from "../../components/Attachment";
import { Comment } from "../../components/Comment";
import { FaIcon } from '../../../components/Icon';

const TasksDetails = () => (
  <React.Fragment>
    <Container>
      <HeaderMain title="Tasks Details" className="mb-5 mt-4" />
      {/* START Header 1 */}
      <Row>
        <Col lg={3}>
          {/* START Left Nav  */}
          <div className="mb-5">
            <div className="small mb-3">Task Details</div>
            <Table size="sm">
              <tbody>
                <tr>
                  <td className="align-middle">Project</td>
                  <td className="text-end">
                    <a href="#" className="text-decoration-none">
                      Analytics Redo
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">Assigned by</td>
                  <td className="text-end">
                    <a href="#" className="text-decoration-none">
                      {faker.person.firstName()} {faker.person.lastName()}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">Start Date</td>
                  <td className="text-end">Thu 12 May 2016</td>
                </tr>
                <tr>
                  <td className="align-middle">End Date</td>
                  <td className="text-end">Wed 18 May 2016</td>
                </tr>
                <tr>
                  <td className="align-middle">Priority</td>
                  <td className="text-end">
                    <UncontrolledButtonDropdown>
                      <DropdownToggle
                        color="link"
                        className="p-0 text-decoration-none"
                      >
                        <FaIcon icon="circle" className="text-success me-2" />
                        Small
                        <FaIcon icon="angle-down" className="ms-2" />
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem header>Select Priority</DropdownItem>
                        <DropdownItem>
                          <FaIcon icon="circle" className="text-danger me-2" />
                          Big
                        </DropdownItem>
                        <DropdownItem>
                          <FaIcon icon="circle" className="text-warning me-2" />
                          High
                        </DropdownItem>
                        <DropdownItem>
                          <FaIcon icon="circle" className="text-primary me-2" />
                          Normal
                        </DropdownItem>
                        <DropdownItem active>
                          <FaIcon icon="circle" className="text-success me-2" />
                          Small
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledButtonDropdown>
                  </td>
                </tr>
                <tr>
                  <td className="align-middle">Progress</td>
                  <td className="align-middle text-end">30%</td>
                </tr>
                <tr>
                  <td className="align-middle">Task ID</td>
                  <td className="align-middle text-end"># 6726746</td>
                </tr>
                <tr>
                  <td className="align-middle">Date Assigned</td>
                  <td className="align-middle text-end">
                    Wed, 16 Dec 2015, 12:17 PM
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          {/* END Left Nav  */}
          {/* START Left Nav  */}
          <div className="mb-4">
            <div className="small mb-3">Assigned to</div>
            <Nav pills vertical>
              <NavItem>
                <NavLink href="#" className="d-flex">
                  <Media>
                    <Media left middle className="me-3 align-self-center">
                      <Avatar.Image size="md" src={randomAvatar()} />
                    </Media>
                    <Media body>
                      <div className="mt-0">
                        {faker.person.firstName()} {faker.person.lastName()}
                      </div>
                      <span className="small">
                        {faker.location.state()}, {faker.location.stateAbbr()}
                      </span>
                    </Media>
                  </Media>
                  <FaIcon icon="circle" fixedWidth className="text-success ms-auto align-self-center ms-2" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="d-flex">
                  <Media>
                    <Media left middle className="me-3 align-self-center">
                      <Avatar.Image size="md" src={randomAvatar()} />
                    </Media>
                    <Media body>
                      <div className="mt-0">
                        {faker.person.firstName()} {faker.person.lastName()}
                      </div>
                      <span className="small">
                        {faker.location.state()}, {faker.location.stateAbbr()}
                      </span>
                    </Media>
                  </Media>
                  <FaIcon icon="circle" fixedWidth className="text-warning ms-auto align-self-center ms-2" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="d-flex">
                  <Media>
                    <Media left middle className="me-3 align-self-center">
                      <Avatar.Image size="md" src={randomAvatar()} />
                    </Media>
                    <Media body>
                      <div className="mt-0">
                        {faker.person.firstName()} {faker.person.lastName()}
                      </div>
                      <span className="small">
                        {faker.location.state()}, {faker.location.stateAbbr()}
                      </span>
                    </Media>
                  </Media>
                  <FaIcon icon="circle" fixedWidth className="text-danger ms-auto align-self-center ms-2" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <FaIcon icon="plus" fixedWidth className="me-2" />
                  Add New People
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          {/* END Left Nav  */}
        </Col>
        <Col lg={9}>
          <ProjectsSmHeader
            subTitle="Tasks"
            subTitleLink="/apps/tasks/grid"
            title="Task Details"
          />
          {/* START Right Content */}
          <Card>
            <CardBody>
              <Media>
                <Media left href="#">
                  <CustomInput
                    type="checkbox"
                    id="checkboxTaskDetails"
                    label=""
                    inline
                  />
                </Media>
                <Media body>
                  <div className="mb-3">
                    <h5>
                      <span className="me-2">#{faker.number.int()}</span>
                      {faker.hacker.phrase()}
                    </h5>
                    <Badge pill color="primary" className="me-1">
                      {faker.commerce.department()}
                    </Badge>
                    <Badge pill color="secondary" className="me-1">
                      {faker.commerce.department()}
                    </Badge>
                    <Badge pill color="secondary" className="me-1">
                      {faker.commerce.department()}
                    </Badge>
                  </div>
                </Media>
              </Media>
              <p className="lead">
                Animi ea magni voluptates accusamus laboriosam. Unde repellat
                hic id et aliquam ut qui dignissimos.
              </p>
              <p className="mb-4">{faker.lorem.paragraphs()}</p>
              {/* START Atachemnts */}
              <div className="mb-4">
                <div className="mb-3">
                  <span className="small me-3">Attachments</span>
                  <Badge pill color="secondary">
                    3
                  </Badge>
                </div>
                <div className="mb-3">
                  <Attachment
                    icon="file-word-o"
                    iconClassName="text-white"
                    BgIconClassName="text-primary"
                  />
                </div>
                <div className="mb-3">
                  <Attachment
                    icon="file-excel-o"
                    iconClassName="text-white"
                    BgIconClassName="text-success"
                  />
                </div>
                <div className="mb-3">
                  <Attachment
                    icon="file-powerpoint-o"
                    iconClassName="text-white"
                    BgIconClassName="text-warning"
                  />
                </div>
                <div className="mb-5">
                  <a href="#">
                    <FaIcon icon="plus" className="me-2" />
                    Add More Files to this Task
                  </a>
                </div>
              </div>
              {/* END Atachemnts */}
              <div className="mb-3">
                <span className="small me-3">Comments</span>
                <Badge pill color="secondary">
                  3
                </Badge>
              </div>
              <Comment />
              <Comment />
              {/* END Comment Media */}
            </CardBody>
            <CardFooter>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button color="secondary" outline>
                    <FaIcon icon="paperclip" />
                  </Button>
                </InputGroupAddon>
                <Input placeholder="Your message..." />
                <InputGroupAddon addonType="append">
                  <Button color="primary">
                    <FaIcon icon="send" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </CardFooter>
          </Card>
          {/* END Right Content */}
        </Col>
      </Row>
      {/* END Header 1 */}
    </Container>
  </React.Fragment>
);

export default TasksDetails;
