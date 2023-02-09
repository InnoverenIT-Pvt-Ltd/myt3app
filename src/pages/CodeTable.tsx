import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { api } from '../utils/api';
// import { Code } from '@prisma/client'

function createData(
  name: string,
  id: number,
  active: boolean,
 
) {
  return { name, id, active };
}
//const [items, setItems] = React.useState([])
const hello = api.example.hello.useQuery({ text: "from tRPC" });
console.log(hello)

export default function BasicTable( ) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Active</TableCell>
           
          </TableRow>
        </TableHead>
        {/* <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.active}</TableCell>
              
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}