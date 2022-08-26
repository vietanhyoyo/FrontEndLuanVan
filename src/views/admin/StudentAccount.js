

// material-ui
import {
    Grid, IconButton, Select, Button,
    MenuItem, FormControl, InputLabel
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useEffect, useState } from 'react';
import ClassService from 'services/objects/class.service';
import StudentService from 'services/objects/student.service';
import { useNavigate } from 'react-router-dom';

const classService = new ClassService();
const studentService = new StudentService();

const StudentAccount = () => {
    const navigate = useNavigate();

    const [classList, setClassList] = useState([])
    const [selectClass, setSelectClass] = useState(-1);

    const getNowClassList = async () => {
        try {
            const result = await classService.getNowClasses();
            setClassList(result.data);
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getStudentList = async (id) => {
        try {
            const result = await studentService.getAll(id);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (classList.length === 0)
            getNowClassList();
        if (selectClass === -1)
            getStudentList(null);
        else getStudentList(classList[selectClass]._id);
    }, [selectClass])

    return <>
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
                <MainCard>
                    <FormControl variant="standard" sx={{ minWidth: 120, marginRight: '14px' }}>
                        <InputLabel id="year-filter-select-label">Lớp</InputLabel>
                        <Select
                            labelId="homeroomClass-select-label"
                            id="homeroomClass-select"
                            value={selectClass}
                            label="Class"
                            onChange={(event) => {
                                setSelectClass(event.target.value);
                            }}
                        >
                            <MenuItem value={-1}>Chưa có lớp</MenuItem>
                            {

                                classList.length > 0 &&
                                classList.map((row, index) => {
                                    return <MenuItem key={index} value={index}>{row.name}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                    <Button variant='contained' onClick={() => {
                        navigate('/manager/add-student');
                    }}>Thêm học sinh</Button>
                </MainCard>
            </Grid>
            <Grid item xs={12}>
                <MainCard title="Tài khoản học sinh">

                </MainCard>
            </Grid>
        </Grid>
    </>
};

export default StudentAccount;
