
import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
    Button, Dialog, ListItemText, ListItem, List, Box,
    Divider, AppBar, Toolbar, IconButton, Typography, Slide
} from '@mui/material'
import { IconPlus } from '@tabler/icons'
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EditContent = () => {
    const [text, setText] = useState(null);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        console.log(text);
        handleClose();
    }
    return (<>
        <div>
            <Button
                startIcon={<IconPlus />}
                onClick={handleClickOpen}
            >Thêm nội dung bài học</Button>
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
                    <Box sx={{ margin: "3rem", height: "700px" }}>
                        <CKEditor
                            editor={ClassicEditor}
                            data={text}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setText(data)
                            }}
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

export default EditContent;
