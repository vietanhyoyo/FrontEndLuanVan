

// material-ui
import { Typography, Grid, IconButton, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useState, useEffect, forwardRef } from 'react';

import ClassService from 'services/objects/class.service';

import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Snackbar, LinearProgress
} from '@mui/material';

import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const classService = new ClassService();

const Schedule = () => {

    const [classList, setClassList] = useState([]);
    const days = ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu'];

    const getAllClass = async () => {
        try {
            const result = await classService.getNowClasses();
            console.log(result);
            setClassList(result.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllClass();
    }, []);

    return (
        <MainCard title={'Quản lý thời khóa biểu'}>
            <TableContainer component={Paper} sx={{ margin: "0px", borderRadius: '0px' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            {classList.length === 0
                                ?
                                <TableCell width={"100%"}>
                                    <LinearProgress />
                                </TableCell>
                                :
                                classList.map((row, index) =>
                                    <TableCell key={index} align="center">Lớp {row.name}</TableCell>
                                )}
                        </TableRow>
                    </TableHead>
                    <TableBody>{
                        days.map((row, index) => (
                            <StyledTableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell width="90px" align="left">{row}</TableCell>
                                <TableCell>
                                    <TableContainer sx={{ padding: "0px", borderRadius: '0px' }}>
                                        <Table aria-label="simple table" size="small">
                                            <TableBody>{
                                                days.map((row, index) => (
                                                    <TableRow
                                                        key={index}
                                                    >
                                                        <TableCell width="90px" align="center">{row}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </TableCell>
                                <TableCell>
                                    <TableContainer sx={{ padding: "0px", borderRadius: '0px' }}>
                                        <Table aria-label="simple table" size="small">
                                            <TableBody>{
                                                days.map((row, index) => (
                                                    <TableRow
                                                        key={index}
                                                    >
                                                        <TableCell width="90px" align="center">{row}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </MainCard>
    )
};

export default Schedule;
