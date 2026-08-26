import React from 'react';

import {
    Container,
    Row,
    Col,
    Card,
    Badge,
    ButtonGroup,
    Progress,
    Button,
    ButtonToolbar,
    Nav,
    CustomInput,
    NavItem,
    Input,
    Form,
    InputGroup,
    InputGroupAddon,
    FormGroup,
    Pagination,
    PaginationItem,
    PaginationLink,
    TabPane,
    UncontrolledTabs,
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    CardHeader,
    CardBody,
    CardTitle
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import {
    HeaderDemo
} from "../../components/HeaderDemo";
import { FaIcon } from '../../../components/Icon';
import {
    CardTextDemo
} from "../../components/CardTextDemo";


const Cards = () => (
    <React.Fragment>
        <Container>
            <HeaderMain 
                title="Cards Headers"
            />
            { /* START Header 1 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={1} 
                        title="Cards Headers - Text" 
                        subTitle="Provide contextual feedback messages"
                    />
                </Col>
            </Row>
            { /* END Header 1 */}
            { /* START Section 1 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Default Header
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.01"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header Above Small Text<br />
                                <span className="small">
                                    Small Text
                                </span>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.02"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Default Small Text
                                <Badge className="ms-2" color="primary">
                                    3
                                </Badge>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.03"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="d-flex">
                                Default Small Text
                                <Badge className="ms-2 ms-auto" color="primary">
                                    Updated
                                </Badge>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.04"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                <FaIcon icon="gear" className="me-2" /> Header Left Icon
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.05"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header Right Icon 
                                <FaIcon icon="gear" className="ms-2" />
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.06"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="d-flex">
                                Header Right Icon 
                                <FaIcon icon="gear" className="ms-auto" />
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.07"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="text-center">
                                Header Center
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.08"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                <span className="small">
                                    Small Text
                                </span>
                                <br />
                                Header Above Small Text
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.09"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6" className="d-flex">
                                Header Right Side Pill
                                <Badge className="ms-2 ms-auto" color="primary" pill>
                                    New
                                </Badge>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.10"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h6">
                                Header Left Pill
                                <Badge className="ms-2" color="primary" pill>
                                    4
                                </Badge>
                            </CardTitle>
                            <CardTextDemo 
                                cardNo="1.11"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col>
            </Row>
            { /* END Section 1 */}

            { /* START Header 2 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={2} 
                        title="Cards Headers - Navs" 
                        className="mt-5"
                        subTitle="Provide contextual feedback messages"
                    />
                </Col>
            </Row>
            { /* END Header 2 */}
            { /* START Section 2 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users201a">
                            <CardHeader>
                                <Nav tabs className="card-header-tabs">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users201a">
                                            Users
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings201b">
                                            Settings
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users201a">
                                        <CardTextDemo 
                                            cardNo="2.01a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings201b">
                                        <CardTextDemo 
                                            cardNo="2.01b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users202a">
                            <CardHeader>
                                <Nav tabs className="card-header-tabs">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users202a">
                                            <FaIcon icon="user" className="me-2" /> Users
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings202b">
                                            <FaIcon icon="gear" className="me-2" /> Settings
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users202a">
                                        <CardTextDemo 
                                            cardNo="2.02a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings202b">
                                        <CardTextDemo 
                                            cardNo="2.02b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users203a">
                            <CardHeader>
                                <Nav tabs className="card-header-tabs">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users203a">
                                            <FaIcon icon="user" fixedWidth />
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings203b">
                                            <FaIcon icon="gear" fixedWidth />
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                            </CardHeader>
                            <CardBody>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users203a">
                                        <CardTextDemo 
                                            cardNo="2.03a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings203b">
                                        <CardTextDemo 
                                            cardNo="2.03b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users204a">
                            <CardBody>
                                <Nav pills className="mb-3">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users204a">
                                            Users
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings204b">
                                            Settings
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users204a">
                                        <CardTextDemo 
                                            cardNo="2.04a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings204b">
                                        <CardTextDemo 
                                            cardNo="2.04b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                </Col>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users205a">
                            <CardBody>
                                <Nav pills className="mb-3">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users205a">
                                            <FaIcon icon="user" className="me-2" /> Users
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings205b">
                                            <FaIcon icon="gear" className="me-2" /> Settings
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users205a">
                                        <CardTextDemo 
                                            cardNo="2.05a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings205b">
                                        <CardTextDemo 
                                            cardNo="2.05b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <UncontrolledTabs initialActiveTabId="users206a">
                            <CardBody>
                                <Nav pills className="mb-3">
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="users206a">
                                            <FaIcon icon="user" />
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <UncontrolledTabs.NavLink tabId="settings206b">
                                            <FaIcon icon="gear" />
                                        </UncontrolledTabs.NavLink>
                                    </NavItem>
                                </Nav>
                                <UncontrolledTabs.TabContent>
                                    <TabPane tabId="users206a">
                                        <CardTextDemo 
                                            cardNo="2.06a"
                                        />
                                    </TabPane>
                                    <TabPane tabId="settings206b">
                                        <CardTextDemo 
                                            cardNo="2.06b"
                                        />
                                    </TabPane>
                                </UncontrolledTabs.TabContent>
                            </CardBody>
                        </UncontrolledTabs>
                    </Card>
                    { /* END Card */}
                </Col>
            </Row>
            { /* END Section 2 */}

            { /* START Header 3 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={3} 
                        title="Cards Headers - Buttons" 
                        className="mt-5"
                        subTitle="Provide contextual feedback messages"
                    />
                </Col>
            </Row>
            { /* END Header 3 */}
            { /* START Section 3 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    Pagination
                                </CardTitle>
                                <Pagination size="sm" aria-label="Page navigation example" className="ms-auto">                                    <PaginationItem>
                                    <PaginationLink previous href="#">
                                        <FaIcon icon="angle-left" />
                                    </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink href="#">
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next href="#">
                                            <FaIcon icon="angle-right" />
                                        </PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </div>
                            <CardTextDemo 
                                cardNo="3.01"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Buttons Group
                                </CardTitle>
                                <ButtonGroup className="ms-auto" size="sm">
                                    <Button outline>
                                        <FaIcon icon="angle-left" className="me-2" />
                                        Prev
                                    </Button>
                                    <Button outline>
                                        Next
                                        <FaIcon icon="angle-right" className="ms-2" />
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <CardTextDemo 
                                cardNo="3.02"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Buttons Left
                                </CardTitle>
                                <Button outline size="sm" className="ms-2">
                                    Add
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.03"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Buttons Right
                                </CardTitle>
                                <Button outline size="sm" className="ms-auto">
                                    Button
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.04"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Buttons Right
                                </CardTitle>
                                <Button outline size="sm" className="ms-auto">
                                    <FaIcon icon="gear" />
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.05"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Link Right Icon
                                </CardTitle>
                                <Button color="link" size="sm" className="ms-auto pt-0">
                                    <FaIcon icon="pencil" />
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.06"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Vertical Button Group
                                </CardTitle>
                                <ButtonGroup vertical size="sm" className="ms-auto">
                                    <Button outline>
                                        <FaIcon icon="angle-up" />
                                    </Button>
                                    <Button outline>
                                        <FaIcon icon="angle-down" />
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <CardTextDemo 
                                cardNo="3.07"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Buttons Checkbox
                                </CardTitle>
                                <ButtonGroup className="ms-auto" size="sm">
                                    <Button outline>
                                        All
                                    </Button>
                                    <Button outline>
                                        Videos
                                    </Button>
                                    <Button outline>
                                        Docs
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <CardTextDemo 
                                cardNo="3.08"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Buttons Radio
                                </CardTitle>
                                <ButtonGroup className="ms-auto" size="sm">
                                    <Button outline>
                                        <FaIcon icon="star-o" />
                                    </Button>
                                    <Button outline>
                                        <FaIcon icon="star-half-o" />
                                    </Button>
                                    <Button outline>
                                        <FaIcon icon="star" />
                                    </Button>
                                </ButtonGroup>
                            </div>
                            <CardTextDemo 
                                cardNo="3.09"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Buttons Nesting
                                </CardTitle>
                                <ButtonGroup className="ms-auto" size="sm">
                                    <Button outline>
                                        Prev
                                    </Button>
                                    <Button outline>
                                        Next
                                    </Button>
                                    <UncontrolledButtonDropdown>
                                        <DropdownToggle size="sm" outline caret>
                                           More
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem header>Jump to:</DropdownItem>
                                            <DropdownItem>First</DropdownItem>
                                            <DropdownItem>End</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Custom...</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledButtonDropdown>
                                </ButtonGroup>
                            </div>
                            <CardTextDemo 
                                cardNo="3.10"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Right Icon-Left
                                </CardTitle>
                                <Button outline size="sm" className="ms-auto">
                                    <FaIcon icon="plus" className="me-2" />Button
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.11"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Right Icon-Right
                                </CardTitle>
                                <Button outline size="sm" className="ms-auto">
                                    Button<FaIcon icon="copy" className="ms-2" />
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.12"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Right Toolbar
                                </CardTitle>
                                <ButtonToolbar className="ms-auto">
                                    <Button color="primary" size="sm" className="me-2">
                                        Save
                                    </Button>
                                    <Button color="primary" outline size="sm">
                                        Cancel
                                    </Button>
                                </ButtonToolbar>
                            </div>
                            <CardTextDemo 
                                cardNo="3.13"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Right Toolbar Icons Only
                                </CardTitle>
                                <ButtonToolbar className="ms-auto">
                                    <Button color="primary" size="sm" className="me-2">
                                        <FaIcon icon="check" fixedWidth />
                                    </Button>
                                    <Button color="primary" outline size="sm">
                                        <FaIcon icon="close" fixedWidth />
                                    </Button>
                                </ButtonToolbar>
                            </div>
                            <CardTextDemo 
                                cardNo="3.14"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Button Icon-Left
                                </CardTitle>
                                <Button outline size="sm" className="ms-3">
                                    <FaIcon icon="gear" fixedWidth />
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.15"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Button Left Icon-Left
                                </CardTitle>
                                <Button color="link" size="sm" className="ms-3">
                                    Link
                                </Button>
                            </div>
                            <CardTextDemo 
                                cardNo="3.16"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Dropdown
                                </CardTitle>
                                <UncontrolledButtonDropdown className="ms-auto">
                                    <DropdownToggle size="sm" outline caret>
                                       Menu
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem header>Menu</DropdownItem>
                                        <DropdownItem>
                                            <FaIcon icon="user" fixedWidth className="me-2" />
                                            Profile
                                        </DropdownItem>
                                        <DropdownItem>
                                            <FaIcon icon="gear" fixedWidth className="me-2" />
                                            Settings
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <FaIcon icon="sign-out" fixedWidth className="me-2" />
                                            Log Out
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </div>
                            <CardTextDemo 
                                cardNo="3.17"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Dropdown Icon
                                </CardTitle>
                                <UncontrolledButtonDropdown className="ms-auto">
                                    <DropdownToggle size="sm" outline caret>
                                        <FaIcon icon="bars" className="me-1" />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem header>Menu</DropdownItem>
                                        <DropdownItem>
                                            <FaIcon icon="user" fixedWidth className="me-2" />
                                            Profile
                                        </DropdownItem>
                                        <DropdownItem>
                                            <FaIcon icon="gear" fixedWidth className="me-2" />
                                            Settings
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <FaIcon icon="sign-out" fixedWidth className="me-2" />
                                            Log Out
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
                            </div>
                            <CardTextDemo 
                                cardNo="3.18"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Button Toolbar
                                </CardTitle>
                                <ButtonToolbar className="ms-auto">
                                    <ButtonGroup size="sm" className="me-2">
                                        <Button outline>
                                            <FaIcon icon="bold" fixedWidth />
                                        </Button>
                                        <Button outline>
                                            <FaIcon icon="underline" fixedWidth />
                                        </Button>
                                        <Button outline>
                                            <FaIcon icon="eraser" fixedWidth />
                                        </Button>
                                    </ButtonGroup>
                                    <ButtonGroup size="sm">
                                        <Button outline>
                                            <FaIcon icon="link" fixedWidth />
                                        </Button>
                                        <Button outline>
                                            <FaIcon icon="image" fixedWidth />
                                        </Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </div>
                            <CardTextDemo 
                                cardNo="3.19"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col>
            </Row>
            { /* END Section 3 */}

            { /* START Header 4 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={4} 
                        title="Cards Headers - Forms" 
                        className="mt-5"
                        subTitle="Provide contextual feedback messages"
                    />
                </Col>
            </Row>
            { /* END Header 4 */}
            { /* START Section 4 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    Right Checkbox
                                </CardTitle>
                                <CustomInput type="checkbox" className="ms-auto" id="rightCheckbox" label="On/Off" />
                            </div>
                            <CardTextDemo 
                                cardNo="4.01"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    Right Checkbox Inline
                                </CardTitle>
                                <div className="ms-auto d-flex">
                                    <CustomInput type="checkbox" className="me-3" id="rightCheckbox1" label="1" />
                                    <CustomInput type="checkbox" id="rightCheckbox2" label="2" />
                                </div>
                            </div>
                            <CardTextDemo 
                                cardNo="4.02"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    Right Checkbox Empty
                                </CardTitle>
                                <CustomInput type="checkbox" className="ms-auto" id="rightCheckboxEmpty" label="" />
                            </div>
                            <CardTextDemo 
                                cardNo="4.03"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    <CustomInput type="checkbox" className="ms-auto" id="leftCheckbox" label="Left Checkbox" inline />
                                </CardTitle>
                            </div>
                            <CardTextDemo 
                                cardNo="4.04"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    Right Radio
                                </CardTitle>
                                <CustomInput type="radio" className="ms-auto" id="rightRadio" label="Select" />
                            </div>
                            <CardTextDemo 
                                cardNo="4.05"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    <CustomInput type="radio" className="ms-auto" id="leftRadio" label="Left Radio" />
                                </CardTitle>
                            </div>
                            <CardTextDemo 
                                cardNo="4.06"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex">
                                <CardTitle tag="h6">
                                    Right Radio Inline
                                </CardTitle>
                                <div className="ms-auto d-flex">
                                    <CustomInput type="radio" className="me-3" name="rightRadioInline" id="rightRadioYes" label="Yes" />
                                    <CustomInput type="radio" name="rightRadioInline" id="rightRadioNo" label="No" />
                                </div>
                            </div>
                            <CardTextDemo 
                                cardNo="4.07"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="flex-grow-1">
                                    Right Custom Select
                                </CardTitle>
                                <Form inline className="ms-auto">
                                    <FormGroup>
                                        <CustomInput type="select" id="exampleCustomSelect" name="customSelect" bsSize="sm" className="ms-auto">
                                            <option value="">Select...</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </CustomInput>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.07"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col> 
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Right Input
                                </CardTitle>
                                <Form inline className="ms-auto">
                                    <FormGroup>
                                        <Input type="text" bsSize="sm" name="text" id="text" className="ms-auto" placeholder="Search..." />
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.09"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Right Input Addon
                                </CardTitle>
                                <Form inline className="ms-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                            <Input type="text" name="text" id="text" className="ms-auto" placeholder="Enter Price..." />
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.10"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6">
                                    Right Input Addon
                                </CardTitle>
                                <Form inline className="ms-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">
                                                <FaIcon icon="user" fixedWidth />
                                            </InputGroupAddon>
                                            <Input type="text" name="text" id="text" className="ms-auto" placeholder="Enter Nick..." />
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.11"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Input Addon
                                </CardTitle>
                                <Form inline className="ms-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">
                                                <FaIcon icon="envelope-o" fixedWidth className="me-1" />
                                                Email
                                            </InputGroupAddon>
                                            <Input type="text" name="text" id="text" className="ms-auto" placeholder="Enter..." />
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.12"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Radio Addon
                                </CardTitle>
                                <Form inline className="ms-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">
                                                <Input type="radio" id="leftRadioAddon" label="" />
                                            </InputGroupAddon>
                                            <Input placeholder="Addon Radio Custom..." id="leftRadio" />
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.13"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Checkbox Addon
                                </CardTitle>
                                <Form inline className="ms-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">
                                                <Input type="checkbox" id="leftCheckboxAddon" label="" />
                                            </InputGroupAddon>
                                            <Input placeholder="Addon Checkbox Custom..." id="leftCheckbox" />
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.14"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Input Button
                                </CardTitle>
                                <Form inline className="ms-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <Input type="text" name="text" id="text" className="ms-auto" placeholder="Enter..." />
                                            <InputGroupAddon addonType="append">
                                                <Button color="primary">
                                                    Search
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.15"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Input Button
                                </CardTitle>
                                <Form inline className="ms-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <Input type="text" name="text" id="text" className="ms-auto" placeholder="Enter..." />
                                            <InputGroupAddon addonType="append">
                                                <Button color="primary">
                                                    <FaIcon icon="search" fixedWidth />
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.16"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Input Button
                                </CardTitle>
                                <Form inline className="ms-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <Input placeholder="Left Folders..." id="rightSegmentedDropdown" />
                                            { /* START Button Dropdown */}
                                            <UncontrolledButtonDropdown tag={ InputGroupAddon } addonType="append">
                                                <DropdownToggle color="primary" caret>
                                                    <FaIcon icon="folder-open" fixedWidth />
                                                </DropdownToggle>
                                                <DropdownMenu persist right>
                                                    { /* START Dropdown Content */}
                                                    <DropdownItem header>Select Folder:</DropdownItem>
                                                    <DropdownItem>
                                                        <FaIcon icon="folder-o" className="me-2" />
                                                        Content
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <FaIcon icon="folder-o" className="me-2" />
                                                        My Movies
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <FaIcon icon="folder-o" className="me-2" />
                                                        My Documents
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <FaIcon icon="folder-o" className="me-2" />
                                                        My Pictures
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <FaIcon icon="folder-o" className="me-2" />
                                                        My Music
                                                    </DropdownItem>
                                                { /* END Dropdown Content */}
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                            { /* END Button Dropdown */}
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.17"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <div className="d-flex mb-3">
                                <CardTitle tag="h6" className="mb-0 align-self-center">
                                    Right Addon & Button
                                </CardTitle>
                                <Form inline className="ms-auto">
                                    <FormGroup>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">
                                                $
                                            </InputGroupAddon>
                                            <Input type="text" name="text" id="text" className="ms-auto" placeholder="0.00" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="primary">
                                                    Add
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Form>
                            </div>
                            <CardTextDemo 
                                cardNo="4.18"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col>
            </Row>
            { /* END Section 4 */}
            { /* START Header 5 */}
            <Row>
                <Col lg={ 12 }>
                    <HeaderDemo 
                        no={5} 
                        title="Cards Headers - Various" 
                        className="mt-5"
                        subTitle="Provide contextual feedback messages"
                    />
                </Col>
            </Row>
            { /* END Header 5 */}
            { /* START Section 5 */}
            <Row>
                <Col lg={ 6 }>
                    { /* START Card */}
                    <Card className="mb-3">
                        <CardBody>
                            <Row className="mb-2">
                                <Col lg={ 6 }>
                                    <CardTitle tag="h6">
                                        Right Progressbar
                                    </CardTitle>
                                </Col>
                                <Col lg={ 6 } className="text-end">
                                    <Progress value={25}>25%</Progress>
                                </Col>
                            </Row>
                            <CardTextDemo 
                                cardNo="5.01"
                            />
                        </CardBody>
                    </Card>
                    { /* END Card */}
                </Col> 
                <Col lg={ 6 }>
                   
                </Col>
            </Row>
            { /* END Section 4 */}
        </Container>
    </React.Fragment>
);

export default Cards;
