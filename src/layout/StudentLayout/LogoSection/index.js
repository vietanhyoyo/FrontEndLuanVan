import { Link } from 'react-router-dom';
import { useTheme } from '@mui/system';

// material-ui
import { ButtonBase, Typography } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const theme = useTheme()
    return (
        <ButtonBase disableRipple component={Link} to={config.defaultPath}>
            <Logo />
            <Typography
                sx={{ marginLeft: 1, display: { xs: 'none', md: 'block' } }}
                variant={"h4"}
                color={theme.palette.primary.main}
            >
                Trường Tiểu Học Lê Quý Đôn
            </Typography>
        </ButtonBase>)
};

export default LogoSection;
