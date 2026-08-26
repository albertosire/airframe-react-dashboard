import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import moment from "moment";
import _ from "lodash";
import { placeholder as faker } from '../../../../data/placeholders';
import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Row,
  Col,
} from "./../../../../components";
import { CustomExportCSV } from "./CustomExportButton";
import { CustomSearch } from "./CustomSearch";
import { randomArray, randomAvatar } from "./../../../../utilities";
import { FaIcon } from '../../../../components/Icon';

const generateRow = (id) => ({
  id,
  photo: randomAvatar(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  role: faker.person.jobType(),
  status: randomArray(["Active", "Suspended", "Waiting", "Unknown"]),
  region: randomArray(["North", "South", "East", "West"]),
  earnings: 500 + Math.random() * 1000,
  earningsCurrencyIcon: randomArray([
    <FaIcon icon="euro" fixedWidth className="text-muted" />,
    <FaIcon icon="dollar" fixedWidth className="text-muted" />,
  ]),
  lastLoginDate: faker.date.recent(),
  ipAddress: faker.internet.ip(),
  browser: "Safari 9.1.1(11601.6.17)",
  os: "OS X El Capitan",
  planSelected: randomArray(["Basic", "Premium", "Enterprise"]),
  planEnd: faker.date.future(),
});

const sortCaret = (order) => {
  if (!order) return <FaIcon icon="sort" fixedWidth className="text-muted" />;
  if (order) return <FaIcon icon={`sort-${order}`} fixedWidth className="text-muted" />;
};

export class AdvancedTableB extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: _.times(10, generateRow),
    };
  }

  handleAddRow() {
    const usersLength = this.state.users.length;

    this.setState({
      users: [generateRow(usersLength + 1), ...this.state.users],
    });
  }

  createColumnDefinitions() {
    return [
      {
        dataField: "photo",
        text: "Photo",
        formatter: (cell) => <Avatar.Image src={cell} />,
      },
      {
        dataField: "firstName",
        text: "First Name",
        sort: true,
        sortCaret,
      },
      {
        dataField: "lastName",
        text: "Last Name",
        sort: true,
        sortCaret,
      },
      {
        dataField: "role",
        text: "Role",
        sort: true,
        sortCaret,
      },
      {
        dataField: "status",
        text: "Status",
        sort: true,
        sortCaret,
        formatter: (cell) => {
          const color = (status) => {
            const map = {
              Active: "success",
              Suspended: "danger",
              Waiting: "info",
              Unknown: "secondary",
            };
            return map[status];
          };

          return <Badge color={color(cell)}>{cell}</Badge>;
        },
      },
      {
        dataField: "region",
        text: "Region",
        sort: true,
        sortCaret,
      },
      {
        dataField: "earnings",
        text: "Earnings",
        sort: true,
        sortCaret,
        formatter: (cell, row) => (
          <span>
            {row.earningsCurrencyIcon}
            {_.isNumber(cell) && cell.toFixed(2)}
          </span>
        ),
      },
    ];
  }

  render() {
    const columnDefs = this.createColumnDefinitions();

    const expandRow = {
      renderer: (row) => (
        <Row>
          <Col md={6}>
            <dl className="row">
              <dt className="col-sm-6 text-end">Last Login</dt>
              <dd className="col-sm-6">
                {moment(row.lastLoginDate).format("DD-MMM-YYYY")}
              </dd>

              <dt className="col-sm-6 text-end">IP Address</dt>
              <dd className="col-sm-6">{row.ipAddress}</dd>

              <dt className="col-sm-6 text-end">Browser</dt>
              <dd className="col-sm-6">{row.browser}</dd>
            </dl>
          </Col>
          <Col md={6}>
            <dl className="row">
              <dt className="col-sm-6 text-end">Operating System</dt>
              <dd className="col-sm-6">{row.os}</dd>

              <dt className="col-sm-6 text-end">Selected Plan</dt>
              <dd className="col-sm-6">{row.planSelected}</dd>

              <dt className="col-sm-6 text-end">Plan Expiriation</dt>
              <dd className="col-sm-6">
                {moment(row.planEnd).format("DD-MMM-YYYY")}
              </dd>
            </dl>
          </Col>
        </Row>
      ),
      showExpandColumn: true,
      expandHeaderColumnRenderer: ({ isAnyExpands }) =>
        isAnyExpands ? (
          <FaIcon icon="angle-down" fixedWidth size="lg" className="text-muted" />
        ) : (
          <FaIcon icon="angle-right" fixedWidth size="lg" className="text-muted" />
        ),
      expandColumnRenderer: ({ expanded }) =>
        expanded ? (
          <FaIcon icon="angle-down" fixedWidth size="lg" className="text-muted" />
        ) : (
          <FaIcon icon="angle-right" fixedWidth size="lg" className="text-muted" />
        ),
    };

    return (
      <ToolkitProvider
        keyField="id"
        data={this.state.users}
        columns={columnDefs}
        search
        exportCSV
      >
        {(props) => (
          <React.Fragment>
            <div className="d-flex justify-content-end align-items-center mb-2">
              <h6 className="my-0">AdvancedTable B</h6>
              <div className="d-flex ms-auto">
                <CustomSearch className="me-2" {...props.searchProps} />
                <ButtonGroup>
                  <CustomExportCSV {...props.csvProps}>Export</CustomExportCSV>
                  <Button
                    size="sm"
                    outline
                    onClick={this.handleAddRow.bind(this)}
                  >
                    Add <FaIcon icon="plus" fixedWidth />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            <BootstrapTable
              classes="table-responsive-lg"
              bordered={false}
              expandRow={expandRow}
              responsive
              hover
              {...props.baseProps}
            />
          </React.Fragment>
        )}
      </ToolkitProvider>
    );
  }
}
