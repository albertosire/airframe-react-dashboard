import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup,
  CardBody,
  CardFooter,
  ButtonToolbar,
  Badge,
  Media,
  Avatar,
  AvatarAddOn,
  UncontrolledTooltip,
} from "./../../../components";
import { randomAvatar } from "./../../../utilities";
import { HeaderMain } from "../../components/HeaderMain";
import { MailboxLeftNav } from "../../components/Mailbox/MailboxLeftNav";
import { Attachment } from "../../components/Attachment";
import { FaIcon } from '../../../components/Icon';

const EmailDetails = () => (
  <React.Fragment>
    <Container>
      <HeaderMain title="Email Details" className="mb-5 mt-4" />
      {/* START Content */}
      <Row>
        <Col lg={3}>
          <MailboxLeftNav />
        </Col>
        <Col lg={9}>
          <Card className="mb-3">
            <CardBody>
              {/* START Header */}
              <div className="d-lg-flex justify-content-end mb-4">
                <div className="me-auto d-flex align-items-center mb-3 mb-xl-0">
                  <Button
                    color="link"
                    tag={Link}
                    to="/apps/inbox"
                    className="text-decoration-none"
                  >
                    <FaIcon icon="angle-left" className="me-2" /> Inbox
                  </Button>
                </div>
                <ButtonToolbar>
                  <ButtonGroup className="me-2 mb-3 mb-sm-0">
                    <Button
                      color="link"
                      className="text-decoration-none align-self-center"
                      id="tooltipPrev"
                    >
                      <FaIcon icon="angle-left" fixedWidth />
                    </Button>
                    <UncontrolledTooltip
                      placement="bottom"
                      target="tooltipPrev"
                    >
                      Prev Message
                    </UncontrolledTooltip>
                    <Button
                      color="link"
                      className="text-decoration-none align-self-center"
                      id="tooltipNext"
                    >
                      <FaIcon icon="angle-right" fixedWidth />
                    </Button>
                    <UncontrolledTooltip
                      placement="bottom"
                      target="tooltipNext"
                    >
                      Next Message
                    </UncontrolledTooltip>
                  </ButtonGroup>
                  <ButtonGroup className="me-2">
                    <Button
                      color="link"
                      className="text-decoration-none align-self-center"
                      id="tooltipForward"
                    >
                      <FaIcon icon="mail-forward" fixedWidth />
                    </Button>
                    <UncontrolledTooltip
                      placement="bottom"
                      target="tooltipForward"
                    >
                      Forward
                    </UncontrolledTooltip>
                    <Button
                      color="link"
                      className="text-decoration-none align-self-center"
                      id="tooltipFav"
                    >
                      <FaIcon icon="star" fixedWidth />
                    </Button>
                    <UncontrolledTooltip placement="bottom" target="tooltipFav">
                      Add to Favorites
                    </UncontrolledTooltip>
                    <Button
                      color="link"
                      className="text-decoration-none align-self-center"
                      id="tooltipPrint"
                    >
                      <FaIcon icon="print" fixedWidth />
                    </Button>
                    <UncontrolledTooltip
                      placement="bottom"
                      target="tooltipPrint"
                    >
                      Print
                    </UncontrolledTooltip>
                    <Button
                      color="link"
                      className="text-decoration-none align-self-center"
                      id="tooltipDelete"
                    >
                      <FaIcon icon="trash" fixedWidth />
                    </Button>
                    <UncontrolledTooltip
                      placement="bottom"
                      target="tooltipDelete"
                    >
                      Delete
                    </UncontrolledTooltip>
                  </ButtonGroup>
                  <ButtonGroup className="ms-auto ml-lg-0">
                    <Button
                      color="primary"
                      className="align-self-center"
                      tag={Link}
                      to="/apps/inbox"
                      id="tooltipReply"
                    >
                      <FaIcon icon="reply" fixedWidth />
                    </Button>
                    <UncontrolledTooltip
                      placement="bottom"
                      target="tooltipReply"
                    >
                      Reply
                    </UncontrolledTooltip>
                  </ButtonGroup>
                </ButtonToolbar>
              </div>
              {/* END Header */}
              {/* START Message */}
              <div className="mb-4">
                <div className="d-flex flex-column flex-md-row">
                  <Media>
                    <Media left className="align-self-center me-4">
                      <Avatar.Image
                        size="md"
                        src={randomAvatar()}
                        addOns={[
                          <AvatarAddOn.Icon
                            icon="circle"
                            color="white"
                            key="avatar-icon-bg"
                          />,
                          <AvatarAddOn.Icon
                            icon="circle"
                            color="danger"
                            key="avatar-icon-fg"
                          />,
                        ]}
                      />
                    </Media>
                    <Media body>
                      <a className="mt-0 text-decoration-none d-flex" href="#">
                        {faker.person.firstName()} {faker.person.lastName()}
                      </a>
                      <samp className="small">{faker.internet.email()}</samp>
                    </Media>
                  </Media>
                  <div className="ml-md-auto align-self-start text-start text-md-right mt-2 mt-md-0">
                    18-Jun-2012
                    <br />
                    08:43 PM
                  </div>
                </div>
                <hr />
                <div className="d-flex mb-3">
                  <h5>Secured Asynchronous Capacity</h5>
                  <Badge
                    pill
                    color="primary"
                    className="ms-auto align-self-start"
                  >
                    Work
                  </Badge>
                </div>
                <p className="lead">{faker.lorem.sentences()}</p>
                <p>{faker.lorem.paragraphs()}</p>
              </div>
              {/* END Message */}
              {/* START Attachments */}
              <div>
                <div className="mb-3">
                  <span className="small me-2">Attachments</span>
                  <Badge pill color="secondary">
                    3
                  </Badge>
                </div>
                <Attachment
                  BgIconClassName="text-primary"
                  icon="file-word-o"
                  mediaClassName="mb-3"
                />
                <Attachment
                  BgIconClassName="text-success"
                  icon="file-excel-o"
                  mediaClassName="mb-3"
                />
                <Attachment
                  BgIconClassName="text-warning"
                  icon="file-powerpoint-o"
                />
              </div>
            </CardBody>
            <CardFooter>
              <ButtonToolbar className="flex-column flex-lg-row">
                <ButtonGroup className="mb-2 mb-lg-0">
                  <Button
                    color="link"
                    className="text-decoration-none align-self-center"
                    id="tooltipPrevBtm"
                  >
                    <FaIcon icon="angle-left" fixedWidth />
                  </Button>
                  <UncontrolledTooltip placement="top" target="tooltipPrevBtm">
                    Prev Message
                  </UncontrolledTooltip>
                  <Button
                    color="link"
                    className="text-decoration-none align-self-center"
                    id="tooltipNextBtm"
                  >
                    <FaIcon icon="angle-right" fixedWidth />
                  </Button>
                  <UncontrolledTooltip placement="top" target="tooltipNextBtm">
                    Next Message
                  </UncontrolledTooltip>
                </ButtonGroup>
                <ButtonToolbar className="flex-column flex-sm-row ms-0 ml-lg-auto">
                  <ButtonGroup className="me-2 mb-2 mb-sm-0">
                    <Button
                      color="link"
                      className="text-decoration-none align-self-center"
                      id="tooltipForwardBtm"
                    >
                      <FaIcon icon="mail-forward" fixedWidth />
                    </Button>
                    <UncontrolledTooltip
                      placement="top"
                      target="tooltipForwardBtm"
                    >
                      Forward
                    </UncontrolledTooltip>
                    <Button
                      color="link"
                      className="text-decoration-none align-self-center"
                      id="tooltipFavBtm"
                    >
                      <FaIcon icon="star" fixedWidth />
                    </Button>
                    <UncontrolledTooltip placement="top" target="tooltipFavBtm">
                      Add to Favorites
                    </UncontrolledTooltip>
                    <Button
                      color="link"
                      className="text-decoration-none align-self-center"
                      id="tooltipPrintBtm"
                    >
                      <FaIcon icon="print" fixedWidth />
                    </Button>
                    <UncontrolledTooltip
                      placement="top"
                      target="tooltipPrintBtm"
                    >
                      Print
                    </UncontrolledTooltip>
                    <Button
                      color="link"
                      className="text-decoration-none align-self-center"
                      id="tooltipDeleteBtm"
                    >
                      <FaIcon icon="trash" fixedWidth />
                    </Button>
                    <UncontrolledTooltip
                      placement="top"
                      target="tooltipDeleteBtm"
                    >
                      Delete
                    </UncontrolledTooltip>
                  </ButtonGroup>
                  <ButtonGroup className="ms-0 ml-md-auto m-lg-0">
                    <Button
                      color="primary"
                      className="align-self-center"
                      tag={Link}
                      to="/apps/inbox"
                      id="tooltipReplyBtm"
                    >
                      <FaIcon icon="reply" fixedWidth />
                    </Button>
                    <UncontrolledTooltip
                      placement="top"
                      target="tooltipReplyBtm"
                    >
                      Reply
                    </UncontrolledTooltip>
                  </ButtonGroup>
                </ButtonToolbar>
              </ButtonToolbar>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      {/* END Content */}
    </Container>
  </React.Fragment>
);

export default EmailDetails;
