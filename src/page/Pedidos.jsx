import * as React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';
import FilterListIcon from '@mui/icons-material/FilterList';


function createData(id, productName, customerName, orderDate, quantity, status) {
  return {
    id,
    productName,
    customerName,
    orderDate,
    quantity,
    status,
  };
}

const rows = [
  createData(1, 'Pendientes de plata', 'Juan Pérez', '2024-10-01', 2, 'Enviado'),
  createData(2, 'Anillo de oro', 'María López', '2024-09-30', 1, 'En proceso'),
  createData(3, 'Collar de perlas', 'Luis Fernández', '2024-10-02', 1, 'Entregado'),
  createData(4, 'Pulsera de acero', 'Ana García', '2024-09-29', 3, 'Cancelado'),
  createData(5, 'Reloj de lujo', 'Pedro Sánchez', '2024-10-01', 1, 'Enviado'),
  createData(6, 'Anillo de compromiso', 'Laura Martínez', '2024-09-28', 1, 'En proceso'),
  createData(7, 'Pendientes de diamante', 'José Torres', '2024-09-27', 1, 'Entregado'),
  createData(8, 'Collar de oro', 'Sofía Jiménez', '2024-09-26', 2, 'Enviado'),
  createData(9, 'Anillo de plata', 'Carlos Ruiz', '2024-10-02', 1, 'En proceso'),
  createData(10, 'Pulsera de cuero', 'Elena Cruz', '2024-09-25', 4, 'Cancelado'),
  createData(11, 'Reloj de deporte', 'Miguel Silva', '2024-09-24', 2, 'Entregado'),
  createData(12, 'Collar de plata', 'Patricia Ramírez', '2024-09-23', 1, 'Enviado'),
  createData(13, 'Anillo de esmeralda', 'Fernando Morales', '2024-09-22', 1, 'En proceso'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: 'productName',
    numeric: false,
    disablePadding: true,
    label: 'Nombre del Producto',
  },
  {
    id: 'customerName',
    numeric: false,
    disablePadding: false,
    label: 'Nombre del Cliente',
  },
  {
    id: 'orderDate',
    numeric: false,
    disablePadding: false,
    label: 'Fecha del Pedido',
  },
  {
    id: 'quantity',
    numeric: true,
    disablePadding: false,
    label: 'Cantidad',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Estado',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all orders',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontSize: '1.2rem', padding: '16px' }} // Aumentar tamaño de fuente y padding
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} seleccionados
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Pedidos
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Eliminar">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filtrar lista">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function Pedidos() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('productName');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell component="th" id={labelId} scope="row" padding="none" sx={{ fontSize: '1.1rem', padding: '16px' }}>
                          {row.productName}
                        </TableCell>
                        <TableCell align="left" sx={{ fontSize: '1.1rem', padding: '16px' }}>{row.customerName}</TableCell>
                        <TableCell align="left" sx={{ fontSize: '1.1rem', padding: '16px' }}>{row.orderDate}</TableCell>
                        <TableCell align="right" sx={{ fontSize: '1.1rem', padding: '16px' }}>{row.quantity}</TableCell>
                        <TableCell align="left" sx={{ fontSize: '1.1rem', padding: '16px' }}>{row.status}</TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Box>
  );
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
