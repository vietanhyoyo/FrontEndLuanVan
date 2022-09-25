import {
    Grid, Box, Typography, FormControl, DialogActions, DialogTitle, DialogContent,
    MenuItem, Select, IconButton, Dialog, Button, TextField, InputLabel, Stack,
    Snackbar
} from '@mui/material';
import ReactQuill from "react-quill";
import { IconEditCircle } from '@tabler/icons';
import { useState, useEffect } from 'react';
import ClassContentService from 'services/objects/classContent.service';

const classContentService = new ClassContentService();

const EditContent = (props) => {

    const [openEdit, setEdit] = useState(false);
    const [content, setContent] = useState({});

    const closeDialog = () => {
        setEdit(false)
    }

    const handleSubmit = async () => {
        try {
            const result = await classContentService.update(content);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        setContent(props.content)
    }, [props.content]);

    return <>
        <IconButton
            size='small'
            color="primary"
            onClick={() => setEdit(true)}
        >
            <IconEditCircle />
        </IconButton>
        <Dialog
            open={openEdit}
        // onClose={() => setOpenAddLesson(false)}
        >
            <DialogTitle>
                {"Thêm mới một lớp học"}
            </DialogTitle>
            <DialogContent>
                <Box sx={{ paddingTop: '20px', minWidth: 400 }}>
                    <Box sx={{ padding: '14px 0' }}>
                        <TextField
                            required
                            label="Tiêu đề"
                            variant="outlined"
                            type="text"
                            sx={{ width: '100%' }}
                            value={content.title}
                            onChange={event => setContent(prev => ({
                                ...prev,
                                title: event.target.value
                            }))}
                        />
                    </Box>
                    <ReactQuill
                        theme='snow'
                        value={content.text}
                        onChange={(value) => setContent(prev => ({
                            ...prev,
                            text: value
                        }))}
                        style={{ minHeight: '380px', height: 'auto' }}
                        modules={modules}
                        formats={formats}
                        placeholder={propTypes.placeholder}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>Hủy</Button>
                <Button autoFocus onClick={handleSubmit}>
                    Thêm
                </Button>
            </DialogActions>
        </Dialog>
    </>
}
const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

/* 
 * PropType validation
 */
const propTypes = {
    placeholder: "Place holder",
}
export default EditContent;