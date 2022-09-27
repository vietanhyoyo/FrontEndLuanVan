import MainCard from "ui-component/cards/MainCard";
import ProfileAvatar from "ui-component/ProfileAvatar";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const LeftCard = () => {

    return (
        <MainCard>
            {/* <Link to="/student/lesson" >
                <Typography
                    className="headerlink-link"
                    variant="button"
                >NỘI DUNG HỌC</Typography>
            </Link> */}
            <ProfileAvatar />
        </MainCard>
    )
}

export default LeftCard;