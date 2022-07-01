// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import LabelCard from './student-elements/LabelCard';
import Schedule from './student-elements/Schedule';
import New from './student-elements/New'
// material-ui
import { styled, useTheme } from '@mui/material/styles';

import { gridSpacing } from 'store/constant';
import Content from './student-elements/Content';

// ==============================|| SAMPLE PAGE ||============================== //

// styles
const HiddenMiddle = styled('main')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const StudentHome = () => (
    <Grid container spacing={gridSpacing} justifyContent="center">
        <Grid item lg={10} md={10} sm={12} xs={12}>
            <Grid container spacing={gridSpacing} justifyContent={"center"}>
                <Grid item lg={8} md={12} sm={12} xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item sm={12} xs={12} md={12} lg={12}>
                            <LabelCard isLoading={false} />
                        </Grid>
                        <Grid item sm={12} xs={12} md={12} lg={12}>
                            <Schedule />
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
);

export default StudentHome;