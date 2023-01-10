import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Table from "@mui/material/Table";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {tokenPageTokenomicsData} from "./tokenPageItems";
import {Icon} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';



export default function TokenomicsTable({}) {

    return (
            <TableContainer className="background-color-black" component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    </TableHead>
                    <TableBody>
                        {tokenPageTokenomicsData.chart.map((item) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell  className="tableCellIcon" component="th" scope="row">
                                    <IconButton><Brightness1RoundedIcon  style={{color:`${item.color}`}}/> </IconButton>
                                </TableCell>

                                <TableCell className="tableType" component="th" scope="row">
                                    {item.type}
                                </TableCell>
                                <TableCell className="tableValue"  align="right">{item.value} {item.type === 'Public Sale' ? '($2.4M)' : 'M'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    )
}
