

// material-ui
import { Typography, Grid, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import AddIcon from '@mui/icons-material/Add';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import * as React from 'react';

import {
    Table, TableBody, TableCell, TableContainer, TextField, Box,
    TableHead, TableRow, Paper, Button, DialogContent, InputLabel,
    Dialog, DialogTitle, DialogActions, Select, MenuItem, FormControl
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

const ClassManager = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <MainCard title={<Button variant="contained" startIcon={<AddIcon />} onClick={handleClickOpen}>
            Thêm lớp học
        </Button>}>
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
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Thêm mới một lớp học"}
                </DialogTitle>
                <DialogContent sx={{ width: 400 }}>
                    <Box mt={3} sx={{ width: '100%' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={''}
                                label="Age"
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box mt={3}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={''}
                                label="Age"
                            // onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box mt={3}>
                        <TextField sx={{ width: '100%' }} label="Tên lớp học" variant="outlined" />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button onClick={handleClose} autoFocus>
                        Thêm
                    </Button>
                </DialogActions>
            </Dialog>
        </MainCard>
    )
};

export default ClassManager;
