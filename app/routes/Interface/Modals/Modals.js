import React from "react";
import { placeholder as faker } from '../../../data/placeholders';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  UncontrolledModal,
  ModalHeader,
  CardBody,
  CardTitle,
  CardGroup,
  ModalBody,
  ModalFooter,
} from "./../../../components";
import { HeaderMain } from "../../components/HeaderMain";
import { HeaderDemo } from "../../components/HeaderDemo";
import { FaIcon } from '../../../components/Icon';

export const Modals = () => (
  <Container>
    <HeaderMain title="Modals" className="mb-5 mt-4" />
    {/* START Header 1 */}
    <Row>
      <Col lg={12}>
        <HeaderDemo
          no={1}
          title="Modal Default"
          subTitle={
            <React.Fragment>
              Use modal plugin to add dialogs to your site for lightboxes, user
              notifications, or completely custom content.
            </React.Fragment>
          }
        />
      </Col>
    </Row>
    {/* END Header 1 */}
    {/* START Section 1 */}
    <Row>
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody>
            <CardTitle tag="h6" className="mb-3">
              Modal: Default
              <span className="small ms-1 text-muted">#1.01</span>
            </CardTitle>
            <Button id="modalDefault101" color="secondary" outline>
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal target="modalDefault101">
              <ModalHeader tag="h6">
                Modal: Default
                <span className="small ms-1 text-muted">#1.01</span>
              </ModalHeader>
              <ModalBody>{faker.lorem.paragraph()}</ModalBody>
              <ModalFooter>
                <UncontrolledModal.Close color="link" className="text-primary">
                  Close
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="primary">
                  Save
                </UncontrolledModal.Close>
              </ModalFooter>
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody>
            <CardTitle tag="h6" className="mb-3">
              Modal: Icons
              <span className="small ms-1 text-muted">#1.02</span>
            </CardTitle>
            <Button id="modalDefault102" color="secondary" outline>
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal target="modalDefault102">
              <ModalHeader tag="h6">
                <FaIcon icon="envelope-o" className="me-2" /> Modal: Icons
                <span className="small ms-1 text-muted">#1.02</span>
              </ModalHeader>
              <ModalBody>{faker.lorem.paragraph()}</ModalBody>
              <ModalFooter>
                <UncontrolledModal.Close color="link" className="text-primary">
                  <FaIcon icon="close" className="me-2" />
                  Close
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="primary">
                  <FaIcon icon="check" className="me-2" />
                  Save
                </UncontrolledModal.Close>
              </ModalFooter>
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
    </Row>
    {/* START Section 1 */}

    {/* START Header 2 */}
    <Row>
      <Col lg={12}>
        <HeaderDemo
          no={2}
          title="Modal Sizes"
          className="mt-5"
          subTitle={
            <React.Fragment>
              There are three sizes of modals in the application.
            </React.Fragment>
          }
        />
      </Col>
    </Row>
    {/* END Header 2 */}
    {/* START Section 2 */}
    <CardGroup>
      {/* START Card Modal */}
      <Card className="mb-3 text-center">
        <CardBody>
          <CardTitle tag="h6" className="mb-3">
            Modal: Small Size
            <span className="small ms-1 text-muted">#2.01</span>
          </CardTitle>
          <Button id="modalDefault201" color="secondary" outline size="sm">
            See Modal <FaIcon icon="angle-right" className="ms-1" />
          </Button>
          {/* START Example Modal */}
          <UncontrolledModal target="modalDefault201" size="sm">
            <ModalHeader tag="h6">
              Modal: Small Size
              <span className="small ms-1 text-muted">#2.01</span>
            </ModalHeader>
            <ModalBody>{faker.lorem.paragraph()}</ModalBody>
            <ModalFooter>
              <UncontrolledModal.Close
                color="link"
                className="text-primary"
                size="sm"
              >
                Close
              </UncontrolledModal.Close>
              <UncontrolledModal.Close color="primary" size="sm">
                Save
              </UncontrolledModal.Close>
            </ModalFooter>
          </UncontrolledModal>
          {/* END Example Modal */}
        </CardBody>
      </Card>
      {/* START Card Modal */}
      {/* START Card Modal */}
      <Card className="mb-3 text-center">
        <CardBody>
          <CardTitle tag="h6" className="mb-3">
            Modal: Default Size
            <span className="small ms-1 text-muted">#2.02</span>
          </CardTitle>
          <Button id="modalDefault202" color="secondary" outline>
            See Modal <FaIcon icon="angle-right" className="ms-1" />
          </Button>
          {/* START Example Modal */}
          <UncontrolledModal target="modalDefault202">
            <ModalHeader tag="h6">
              Modal: Default Size
              <span className="small ms-1 text-muted">#2.02</span>
            </ModalHeader>
            <ModalBody>{faker.lorem.paragraph()}</ModalBody>
            <ModalFooter>
              <UncontrolledModal.Close color="link" className="text-primary">
                Close
              </UncontrolledModal.Close>
              <UncontrolledModal.Close color="primary">
                Save
              </UncontrolledModal.Close>
            </ModalFooter>
          </UncontrolledModal>
          {/* END Example Modal */}
        </CardBody>
      </Card>
      {/* START Card Modal */}
      {/* START Card Modal */}
      <Card className="mb-3 text-center">
        <CardBody>
          <CardTitle tag="h6" className="mb-3">
            Modal: Large Size
            <span className="small ms-1 text-muted">#2.03</span>
          </CardTitle>
          <Button id="modalDefault203" color="secondary" outline size="lg">
            See Modal <FaIcon icon="angle-right" className="ms-1" />
          </Button>
          {/* START Example Modal */}
          <UncontrolledModal target="modalDefault203" size="lg">
            <ModalHeader tag="h5">
              Modal: Large Size
              <span className="small ms-1 text-muted">#2.03</span>
            </ModalHeader>
            <ModalBody>{faker.lorem.paragraph()}</ModalBody>
            <ModalFooter>
              <UncontrolledModal.Close
                color="link"
                className="text-primary"
                size="lg"
              >
                Close
              </UncontrolledModal.Close>
              <UncontrolledModal.Close color="primary" size="lg">
                Save
              </UncontrolledModal.Close>
            </ModalFooter>
          </UncontrolledModal>
          {/* END Example Modal */}
        </CardBody>
      </Card>
      {/* START Card Modal */}
    </CardGroup>
    {/* START Section 2 */}

    {/* START Header 3 */}
    <Row>
      <Col lg={12}>
        <HeaderDemo
          no={3}
          title="Modal Colors"
          className="mt-5"
          subTitle={
            <React.Fragment>
              You can apply colors to make them easier to see for users. All
              colors work from the section
              <a href="/colors">Colors</a>.
            </React.Fragment>
          }
        />
      </Col>
    </Row>
    {/* END Header 3 */}
    {/* START Section 3 */}
    <Row>
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody>
            <CardTitle tag="h6" className="mb-3">
              <span className="text-primary">Modal: Primary</span>
              <span className="small ms-1 text-muted">#3.01</span>
            </CardTitle>
            <Button id="modalDefault301" color="primary" outline>
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal
              target="modalDefault301"
              className="modal-outline-primary"
            >
              <ModalHeader tag="h6">
                Modal: Primary
                <span className="small ms-1 text-muted">#3.01</span>
              </ModalHeader>
              <ModalBody>{faker.lorem.paragraph()}</ModalBody>
              <ModalFooter>
                <UncontrolledModal.Close color="link">
                  Close
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="primary">
                  Save
                </UncontrolledModal.Close>
              </ModalFooter>
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody>
            <CardTitle tag="h6" className="mb-3">
              Modal: Danger
              <span className="small ms-1 text-muted">#3.02</span>
            </CardTitle>
            <Button id="modalDefault302" color="danger" outline>
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal
              target="modalDefault302"
              className="modal-outline-danger"
            >
              <ModalHeader tag="h6">
                <span className="text-danger">Modal: Danger</span>
                <span className="small ms-1 text-muted">#3.02</span>
              </ModalHeader>
              <ModalBody>{faker.lorem.paragraph()}</ModalBody>
              <ModalFooter>
                <UncontrolledModal.Close color="link" className="text-danger">
                  Close
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="danger">
                  Save
                </UncontrolledModal.Close>
              </ModalFooter>
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody>
            <CardTitle tag="h6" className="mb-3">
              Modal: Info
              <span className="small ms-1 text-muted">#3.03</span>
            </CardTitle>
            <Button id="modalDefault303" color="info" outline>
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal
              target="modalDefault303"
              className="modal-outline-info"
            >
              <ModalHeader tag="h6">
                <span className="text-info">Modal: Info</span>
                <span className="small ms-1 text-muted">#3.03</span>
              </ModalHeader>
              <ModalBody>{faker.lorem.paragraph()}</ModalBody>
              <ModalFooter>
                <UncontrolledModal.Close color="link" className="text-info">
                  Close
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="info">
                  Save
                </UncontrolledModal.Close>
              </ModalFooter>
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody>
            <CardTitle tag="h6" className="mb-3">
              Modal: Warning
              <span className="small ms-1 text-muted">#3.04</span>
            </CardTitle>
            <Button id="modalDefault304" color="warning" outline>
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal
              target="modalDefault304"
              className="modal-outline-warning"
            >
              <ModalHeader tag="h6">
                <span className="text-warning">Modal: Warning</span>
                <span className="small ms-1 text-muted">#3.04</span>
              </ModalHeader>
              <ModalBody>{faker.lorem.paragraph()}</ModalBody>
              <ModalFooter>
                <UncontrolledModal.Close color="link" className="text-warning">
                  Close
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="warning">
                  Save
                </UncontrolledModal.Close>
              </ModalFooter>
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody>
            <CardTitle tag="h6" className="mb-3">
              Modal: Success
              <span className="small ms-1 text-muted">#3.05</span>
            </CardTitle>
            <Button id="modalDefault305" color="success" outline>
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal
              target="modalDefault305"
              className="modal-outline-success"
            >
              <ModalHeader tag="h6">
                <span className="text-success">Modal: Success</span>
                <span className="small ms-1 text-muted">#3.04</span>
              </ModalHeader>
              <ModalBody>{faker.lorem.paragraph()}</ModalBody>
              <ModalFooter>
                <UncontrolledModal.Close color="link" className="text-success">
                  Close
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="success">
                  Save
                </UncontrolledModal.Close>
              </ModalFooter>
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody>
            <CardTitle tag="h6" className="mb-3">
              Modal: Dark
              <span className="small ms-1 text-muted">#3.06</span>
            </CardTitle>
            <Button id="modalDefault306" color="dark" outline>
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal
              target="modalDefault306"
              className="modal-outline-dark"
            >
              <ModalHeader tag="h6">
                <span className="text-dark">Modal: Dark</span>
                <span className="small ms-1 text-muted">#3.06</span>
              </ModalHeader>
              <ModalBody>{faker.lorem.paragraph()}</ModalBody>
              <ModalFooter>
                <UncontrolledModal.Close color="link" className="text-dark">
                  Close
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="dark">
                  Save
                </UncontrolledModal.Close>
              </ModalFooter>
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
    </Row>
    {/* START Section 3 */}

    {/* START Header 4 */}
    <Row>
      <Col lg={12}>
        <HeaderDemo
          no={4}
          title="Modal Alerts"
          className="mt-5"
          subTitle={<React.Fragment>Six types of alerts below.</React.Fragment>}
        />
      </Col>
    </Row>
    {/* END Header 4 */}
    {/* START Section 3 */}
    <Row>
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody className="table-primary">
            <CardTitle tag="h6" className="mb-3">
              Modal Alerts: Primary
              <span className="small ms-1 text-muted">#4.01</span>
            </CardTitle>
            <Button id="modalDefault401" color="primary">
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal
              target="modalDefault401"
              className="modal-primary"
            >
              <ModalHeader className="py-3" />
              <ModalBody className="text-center px-5">
                <FaIcon icon="play" size="5x" fixedWidth className="mb-3 modal-icon" />
                <h6>Welcome</h6>
                <p className="modal-text">
                  We're glad to see you again and wish you a nice day.
                </p>
                <UncontrolledModal.Close color="primary" className="me-2">
                  Save
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="link" className="text-primary">
                  Close
                </UncontrolledModal.Close>
              </ModalBody>
              <ModalFooter className="py-3" />
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody className="table-danger">
            <CardTitle tag="h6" className="mb-3">
              Modal Alerts: Danger
              <span className="small ms-1 text-muted">#4.02</span>
            </CardTitle>
            <Button id="modalDefault402" color="danger">
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal
              target="modalDefault402"
              className="modal-danger"
            >
              <ModalHeader className="py-3" />
              <ModalBody className="table-danger text-center px-5">
                <FaIcon icon="close" size="5x" fixedWidth className="modal-icon mb-3" />
                <h6>Danger</h6>
                <p className="modal-text">
                  Change a few things up and try submitting.
                </p>
                <UncontrolledModal.Close color="danger" className="me-2">
                  Save
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="link" className="text-danger">
                  Close
                </UncontrolledModal.Close>
              </ModalBody>
              <ModalFooter className="py-3" />
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody className="table-info">
            <CardTitle tag="h6" className="mb-3">
              Modal Alerts: Info
              <span className="small ms-1 text-muted">#4.03</span>
            </CardTitle>
            <Button id="modalDefault403" color="info">
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal target="modalDefault403" className="modal-info">
              <ModalHeader className="py-3" />
              <ModalBody className="table-info text-center px-5">
                <FaIcon icon="info" size="5x" fixedWidth className="modal-icon mb-3" />
                <h6>Information</h6>
                <p className="modal-text">
                  This alert needs your attention, but it's not important.
                </p>
                <UncontrolledModal.Close color="info" className="me-2">
                  Save
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="link" className="text-info">
                  Close
                </UncontrolledModal.Close>
              </ModalBody>
              <ModalFooter className="py-3" />
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody className="table-warning">
            <CardTitle tag="h6" className="mb-3">
              Modal Alerts: Warning
              <span className="small ms-1 text-muted">#4.04</span>
            </CardTitle>
            <Button id="modalDefault404" color="warning">
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal
              target="modalDefault404"
              className="modal-warning"
            >
              <ModalHeader className="py-3" />
              <ModalBody className="table-warning text-center px-5">
                <FaIcon icon="exclamation" size="5x" fixedWidth className="modal-icon mb-3" />
                <h6>Warning</h6>
                <p className="modal-text">
                  Better check yourself, you're not looking too good.
                </p>
                <UncontrolledModal.Close color="warning" className="me-2">
                  Save
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="link" className="text-warning">
                  Close
                </UncontrolledModal.Close>
              </ModalBody>
              <ModalFooter className="py-3" />
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody className="table-success">
            <CardTitle tag="h6" className="mb-3">
              Modal Alerts: Success
              <span className="small ms-1 text-muted">#4.05</span>
            </CardTitle>
            <Button id="modalDefault405" color="success">
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal
              target="modalDefault405"
              className="modal-success"
            >
              <ModalHeader className="py-3" />
              <ModalBody className="table-success text-center px-5">
                <FaIcon icon="check" size="5x" fixedWidth className="modal-icon mb-3" />
                <h6>Success</h6>
                <p className="modal-text">
                  Better check yourself, you're not looking too good.
                </p>
                <UncontrolledModal.Close color="success" className="me-2">
                  Save
                </UncontrolledModal.Close>
                <UncontrolledModal.Close color="link" className="text-success">
                  Close
                </UncontrolledModal.Close>
              </ModalBody>
              <ModalFooter className="py-3" />
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
      {/* START Col6 1 */}
      <Col lg={6}>
        {/* START Card Modal */}
        <Card className="mb-3 text-center">
          <CardBody className="table-light">
            <CardTitle tag="h6" className="mb-3">
              Modal Alerts: Attention
              <span className="small ms-1 text-muted">#4.06</span>
            </CardTitle>
            <Button id="modalDefault406" color="secondary">
              See Modal <FaIcon icon="angle-right" className="ms-1" />
            </Button>
            {/* START Example Modal */}
            <UncontrolledModal target="modalDefault406" className="modal-dark">
              <ModalHeader className="py-3" />
              <ModalBody className="table-light text-center px-5">
                <FaIcon icon="exclamation" size="5x" fixedWidth className="modal-icon mb-3" />
                <h6>Attention</h6>
                <p className="modal-text">
                  This alert needs your attention, but it's not important.
                </p>
                <UncontrolledModal.Close color="secondary" className="me-2">
                  Save
                </UncontrolledModal.Close>
                <UncontrolledModal.Close
                  color="link"
                  className="text-secondary"
                >
                  Close
                </UncontrolledModal.Close>
              </ModalBody>
              <ModalFooter className="py-3" />
            </UncontrolledModal>
            {/* END Example Modal */}
          </CardBody>
        </Card>
        {/* START Card Modal */}
      </Col>
      {/* END Col6 1 */}
    </Row>
    {/* START Section 3 */}
  </Container>
);
