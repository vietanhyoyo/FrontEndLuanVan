
import React, { useState } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';
import {
    Button, Dialog, Box, Popper,
    Fade, Paper,
    Divider, AppBar, Toolbar, IconButton, Typography, Slide
} from '@mui/material'
import { IconPlus } from '@tabler/icons'
import CloseIcon from '@mui/icons-material/Close';
import LessonService from 'services/objects/lesson.service';
import EditLink from './EditLink';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'

// import 'draft-js/dist/Draft.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const lessonService = new LessonService();

const EditContent = (props) => {
    const [text, setText] = useState("");
    const [open, setOpen] = React.useState(false);
    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = async () => {
        try {
            const result = await lessonService.addLessonContent(text, props.lesson._id);
            // props.reLoad();
        } catch (error) {
            console.log(error)
        }
        handleClose();
    }

    return (<>
        <div>
            <Button
                startIcon={<IconPlus />}
                onClick={handleClickOpen}
            >Thêm nội dung bài học</Button>
            {/* <ReactQuill
                theme='snow'
                value={convertedText}
                onChange={setConvertedText}
                style={{ minHeight: '300px' }}
            />{convertedText} */}
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Sound
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleSave}>
                            Lưu
                        </Button>
                    </Toolbar>
                </AppBar>
                <Box>
                    {/* <EditLink /> */}
                    <Box sx={{ margin: "3rem", height: "400px" }}>
                        {/* <CKEditor
                            editor={ClassicEditor}
                            data={text}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setText(data)
                            }}
                        /> */}
                        {/* <Editor editorState={editorState} onChange={setEditorState} /> */}
                        <ReactQuill
                            theme='snow'
                            value={text}
                            onChange={setText}
                            style={{ minHeight: '300px' }}
                            modules={modules}
                            formats={formats}
                            placeholder={propTypes.placeholder}
                        />
                    </Box>
                    <Box>
                        {text}
                    </Box>
                </Box>
            </Dialog>
        </div>
    </>
    )

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
