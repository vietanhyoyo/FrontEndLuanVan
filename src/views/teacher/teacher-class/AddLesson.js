import { useState, useEffect } from 'react';
// material-ui
import {
    Grid, Box, Typography, FormControl, DialogActions, DialogTitle, DialogContent,
    MenuItem, Select, IconButton, Dialog, Button, TextField, InputLabel
} from '@mui/material';

import { IconSquarePlus } from '@tabler/icons';
import SubjectService from 'services/objects/subject.service';
import moment from 'moment';

const subjectService = new SubjectService();


function formatInputDate(dateString) {
    let date = new Date(Date.now());
    if (dateString !== '')
        date = new Date(dateString);
    return moment(date).format('YYYY-MM-DD');
}

const AddLesson = () => {
    const [openAddLesson, setOpenAddLesson] = useState(false);
    const [subjectList, setSubjectList] = useState([]);
    const [subjectSelect, setSubjectSelect] = useState(-1);
    const [lesson, setLesson] = useState({
        title: "",
        note: "",
        date: null,
        subject: "",
    });

    const getAPISubjectList = async () => {
        try {
            const result = await subjectService.getAll();
            const docs = result.data;
            setSubjectList(docs);
            console.log(docs)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAPISubjectList();
    }, [])

    return (<>
        <IconButton color="primary" onClick={() => setOpenAddLesson(true)}>
            <IconSquarePlus />
        </IconButton>
        <Dialog
            open={openAddLesson}
            onClose={() => setOpenAddLesson(false)}
        >
            <DialogTitle>
                {"Thêm mới một lớp học"}
            </DialogTitle>
            <DialogContent sx={{}}>
                <Box sx={{ paddingTop: '20px', width: 400 }}>
                    <Box sx={{ padding: '14px 0' }}>
                        <TextField
                            required
                            label="Tiêu đề"
                            variant="outlined"
                            type="text"
                            sx={{ width: '100%' }}
                            InputLabelProps={{ shrink: true, }}
                        // value={week.name}
                        // onChange={(event) => handleChangeNameWeek(event.target.value)}
                        />
                    </Box>
                    <Box sx={{ padding: '14px 0' }}>
                        <TextField
                            label="Ghi chú nội dung"
                            variant="outlined"
                            multiline
                            rows={4}
                            type="text"
                            sx={{ width: '100%' }}
                            InputLabelProps={{ shrink: true, }}
                        // value={week.name}
                        // onChange={(event) => handleChangeNameWeek(event.target.value)}
                        />
                    </Box>
                    <Box sx={{ padding: '14px 0', display: "flex", justifyContent: "space-between" }}>
                        <TextField
                            label="Ngày dạy"
                            variant="outlined"
                            type="date"
                            sx={{ width: '48%' }}
                            InputLabelProps={{ shrink: true, }}
                            value={lesson.date ? formatInputDate(lesson.date) : formatInputDate('')}
                            onChange={(event) => setLesson(prev => ({
                                ...prev,
                                date: event.target.value
                            }))}
                        />
                        <FormControl sx={{ width: '48%' }}>
                            <InputLabel id="monhoc">Môn</InputLabel>
                            <Select
                                labelId="monhoc"
                                value={subjectSelect}
                                label="Môn"
                                onChange={event => setSubjectSelect(event.target.value)}
                            >
                                <MenuItem value={-1}>---</MenuItem>
                                {
                                    subjectList.length < 0 ? <MenuItem value={0}>---</MenuItem> :
                                        subjectList.map((row, index) => {
                                            return <MenuItem value={index} key={index}>{row.name}</MenuItem>
                                        })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenAddLesson(false)}>Hủy</Button>
                <Button autoFocus onClick={() => setOpenAddLesson(false)}>
                    Thêm
                </Button>
            </DialogActions>
        </Dialog>
    </>
    )
}

export default AddLesson;