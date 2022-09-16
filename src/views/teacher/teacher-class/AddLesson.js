import { useState, useEffect } from 'react';
// material-ui
import {
    Grid, Box, Typography, FormControl, DialogActions, DialogTitle, DialogContent,
    MenuItem, Select, IconButton, Dialog, Button, TextField, InputLabel
} from '@mui/material';

import { IconSquarePlus } from '@tabler/icons';
import SubjectService from 'services/objects/subject.service';
import moment from 'moment';
import LessonService from 'services/objects/lesson.service';

const subjectService = new SubjectService();
const lessonService = new LessonService();


function formatInputDate(dateString) {
    let date = new Date(Date.now());
    if (dateString !== '')
        date = new Date(dateString);
    return moment(date).format('YYYY-MM-DD');
}

const AddLesson = (props) => {
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
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async () => {
        const postData = {
            ...lesson,
            subject: subjectList[subjectSelect]._id,
            week: props.week._id,
            grade: props.grade
        };

        try {
            const result = await lessonService.add(postData);
            const docs = result.data;
            console.log(docs);
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
                            value={lesson.title}
                            onChange={(event) => setLesson(prev => ({
                                ...prev,
                                title: event.target.value
                            }))}
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
                            value={lesson.note}
                            onChange={(event) => setLesson(prev => ({
                                ...prev,
                                note: event.target.value
                            }))}
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
                <Button autoFocus onClick={handleSubmit}>
                    Thêm
                </Button>
            </DialogActions>
        </Dialog>
    </>
    )
}

export default AddLesson;