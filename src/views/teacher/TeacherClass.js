// material-ui
import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import LabelCard from 'ui-component/class/LabelCard';
// material-ui
import New from './teacher-class/New';

import { gridSpacing } from 'store/constant';
import Content from './teacher-class/Content';

const TeacherClass = () => {
    return (
        <>
            <Grid container spacing={gridSpacing} >
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item lg={8} md={12} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={12} xs={12} md={12} lg={12}>
                                    <LabelCard isLoading={false} />
                                </Grid>
                                <Grid item sm={12} xs={12} md={12} lg={12}>
                                    <MainCard title="Trang tin lớp học">
                                        <Content />
                                        <Content />
                                    </MainCard>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                            <MainCard title="Thông báo">
                                <New />
                                <New />
                            </MainCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default TeacherClass;