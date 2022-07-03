

// material-ui
import {
    Grid, IconButton, Select,
    MenuItem, FormControl, InputLabel
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import * as React from 'react';

import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper
} from '@mui/material';

function createData(name, role, date) {
    return { name, role, date };
}

const rows = [
    createData('Tai khoan 1', 'all', '20/12/2020'),
    createData('Admin 2', 'all', '28/5/2020'),
    createData('Admin 3', 'class', '30/6/2022'),
    createData('Cap quyen', 'class', '20/3/2022')
];
// ==============================|| SAMPLE PAGE ||============================== //

const TeacherAccount = () => {

    return <>
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
                <MainCard>
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Lớp</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Lớp"
                            defaultValue={10}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>1A</MenuItem>
                            <MenuItem value={20}>2A</MenuItem>
                            <MenuItem value={30}>3A</MenuItem>
                            <MenuItem value={40}>3B</MenuItem>
                            <MenuItem value={50}>4A</MenuItem>
                            <MenuItem value={60}>5A</MenuItem>
                        </Select>
                    </FormControl>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <MainCard title="Tài khoản học sinh">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell align="left">Tên đăng nhập</TableCell>
                                    <TableCell align="left">Quyền</TableCell>
                                    <TableCell align="left">Ngày tạo</TableCell>
                                    <TableCell align="right"> </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell width={"30px"}>{index}</TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.role}</TableCell>
                                        <TableCell align="left">{row.date}</TableCell>
                                        <TableCell align="right">
                                            <IconButton color="primary" component="span">
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton color="error" component="span">
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </MainCard>
            </Grid>
        </Grid>
    </>
};

export default TeacherAccount;
