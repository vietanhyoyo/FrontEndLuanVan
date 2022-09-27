import MainCard from "ui-component/cards/MainCard";
import {
    Button, TextField, Dialog, DialogTitle,
    DialogContent, DialogActions, Box
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react'
import LinkService from "services/objects/link.service";
import TeacherService from "services/objects/teacher.service";

const linkService = new LinkService();
const teacherService = new TeacherService();

const LinkEdit = () => {

    const [open, setOpen] = useState(false);
    const [link, setLink] = useState("");
    const [teacher, setTeacher] = useState({})

    const getTeacherInformation = async () => {
        try {
            const result = await teacherService.getInformation();
            const data = result.data;
            setTeacher(data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        getTeacherInformation();
    }, [])

    const submit = async () => {
        try {
            const data = {
                link: link,
                teacher: teacher._id
            }
            const result = await linkService.addLink(data);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <MainCard title="Quản lý đường link học">
                <Button
                    onClick={handleClickOpen}
                    variant="outlined"
                    startIcon={<AddIcon />}>
                    Thêm đường link
                </Button>
            </MainCard>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Thêm một đường link mới"}
                </DialogTitle>
                <DialogContent sx={{ width: 400 }}>
                    <Box sx={{ width: "100%", marginTop: "26px" }}>
                        <TextField 
                        sx={{ width: "100%" }} 
                        onChange={event => setLink(event.target.value)}
                        label="Nhập link vào đây" 
                        variant="outlined" />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button onClick={submit} autoFocus>
                        Thêm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default LinkEdit;