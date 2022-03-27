import classNames from "classnames";
import styles from "./Table.module.scss";
import { TableCellPropsI, ParentsBaseT, HeadCol, BodyCol } from "../../types";

export const Table = (props: ParentsBaseT) => {
  const { children, className, style } = props;

  return (
    <div className={classNames(styles.table, className)} style={style}>
      {children}
    </div>
  );
};

function TableHead(props: ParentsBaseT) {
  const { children, className, style } = props;

  return (
    <>
      <div className={classNames(styles.head, className)} style={style}>
        {children}
      </div>
    </>
  );
}

function TableBody(props: ParentsBaseT) {
  const { children, className, style } = props;
  return (
    <div className={classNames(styles.body, className)} style={style}>
      {children}
    </div>
  );
}

function TableRow(props: ParentsBaseT) {
  const { children, className, style } = props;
  return (
    <div className={classNames(styles.row, className)} style={style}>
      {children}
    </div>
  );
}

function TableCell(props: TableCellPropsI) {
  const { children, className, style, onClick } = props;

  return (
    <div
      className={classNames(styles.cell, className)}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

const columns: HeadCol[] = [
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "username",
    headerName: "USER NAME",
  },
  {
    field: "email",
    headerName: "EMAIL",
  },
  {
    field: "status",
    headerName: "STATUS",
  },
];

const rows: BodyCol[] = [
  { id: 1, username: "Wabow", email: "hello@wabow.com", status: false },
  { id: 2, username: "Flydove", email: "flydove@wabow.com", status: true },
  { id: 3, username: "Waca", email: "waca@wabow.com", status: false },
  { id: 4, username: "Flydove", email: "flydove@wabow.com", status: true },
  { id: 5, username: "Waca", email: "waca@wabow.com", status: false },
];

export function UserTable() {
  return (
    <div className={styles.desktopTable}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col: HeadCol) => (
              <TableCell key={col.field}>{col.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((item: BodyCol) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.username}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell
                className={classNames({
                  [styles.success]: item.status,
                  [styles.fail]: !item.status,
                })}
              >
                {item.status ? "Approved" : "Denied"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function MobileTable() {
  return (
    <div className={styles.mobileTable}>
      {rows.map((item: BodyCol) => (
        <Table key={item.id}>
          <TableHead>
            <TableRow>
              {columns.map((col: HeadCol) => (
                <TableCell key={col.field}>{col.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.username}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell
                className={classNames({
                  [styles.success]: item.status,
                  [styles.fail]: !item.status,
                })}
              >
                {item.status ? "Approved" : "Denied"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ))}
    </div>
  );
}

export default UserTable;
