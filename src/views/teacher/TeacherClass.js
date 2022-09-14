// material-ui
import {
    Grid, Box, Typography, FormControl, DialogActions, DialogTitle, DialogContent,
    MenuItem, Select, IconButton, Dialog, Button, TextField, InputLabel
} from '@mui/material';
import { IconSquarePlus } from '@tabler/icons';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import LabelCard from 'ui-component/class/LabelCard';
// material-ui
import New from './teacher-class/New';
import { useState } from 'react'
import { gridSpacing } from 'store/constant';
import Content from './teacher-class/Content';
import WeekList from './teacher-week-list/WeekList';
import AddLesson from './teacher-class/AddLesson';

const TeacherClass = () => {
    return (
        <>
            <Grid container spacing={gridSpacing} >
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={10} md={12} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={12} xs={12} md={12} lg={12}>
                                    <LabelCard isLoading={false} />
                                </Grid>
                                <Grid item sm={12} xs={12} md={12} lg={12}>
                                    <MainCard title={
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            width: "100%"
                                        }}>
                                            <Typography variant="h3">Thông tin tuần học</Typography>
                                            <Box>
                                                <AddLesson />
                                                <FormControl>
                                                    <Select
                                                        labelId="mon"
                                                        value={1}
                                                        size="small"
                                                    // onChange={event => setSemester(event.target.value)}
                                                    >
                                                        <MenuItem value={1}>Toán</MenuItem>
                                                        <MenuItem value={2}>Tập đọc</MenuItem>
                                                        <MenuItem value={3}>Chính tả</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Box>
                                    }>
                                        <Content />
                                        <Content />
                                    </MainCard>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={2} md={12} sm={12} xs={12}>
                            <WeekList />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default TeacherClass;