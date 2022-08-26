
import moment from 'moment';
// material-ui
import {
    Typography, Button, InputLabel, FormControl, LinearProgress,
    CardContent, TextField, Box, FormControlLabel, Checkbox,
    MenuItem, Select
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useEffect, useState } from 'react';
import TeacherService from 'services/objects/teacher.service';
import ClassService from 'services/objects/class.service';
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const offAutoComplete = {
    autoComplete: 'new-password',
    form: {
        autoComplete: 'off',
    },
}

const teacherService = new TeacherService();
const classService = new ClassService();

function formatInputDate(dateString) {
    let date = new Date(Date.now());
    if (dateString !== '')
        date = new Date(dateString);
    return moment(date).format('YYYY-MM-DD');
}

const inputStyle = { marginRight: '14px', marginBottom: '14px' };

const UpdateTeacher = () => {

    const { id } = useParams();

    const [showPassword, setShowPassword] = useState(false);
    const [warning, setWarning] = useState({
        name: null,
        username: null,
        password: null,
        ethnic: null,
        identityCard: null,
        homeTown: null,
        phone: null,
        email: null,
        avatar: null,
        socialInsurance: null
    })
    const [teacher, setTeacher] = useState({
        account: {
            name: " ",
            password: " ",
            refreshToken: null,
            role: 1,
            updatedAt: " ",
            username: " ",
            _id: " "
        },
        avatar: "",
        birthday: " ",
        createdAt: " ",
        email: " ",
        ethnic: " ",
        homeTown: " ",
        homeroomClass: null,
        homeroomTeacher: false,
        identityCard: " ",
        isDelete: false,
        phone: " ",
        residence: " ",
        socialInsurance: " ",
        _id: " "
    })
    const [account, setAccount] = useState({
        name: " ",
        password: " ",
        refreshToken: null,
        role: 1,
        updatedAt: " ",
        username: " ",
        _id: " "
    })
    const [classList, setClassList] = useState([]);
    const [selectClass, setSelectClass] = useState(0);

    const getNowClassList = async () => {
        try {
            const result = await classService.getNowClasses();
            setClassList(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const getAPI = async () => {
        try {
            const result = await teacherService.getOneTeacher(id);
            setTeacher(result.data.data);
            setAccount(result.data.data.account);
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAPI();
        getNowClassList();
    }, [])

    const navigate = useNavigate();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSave = async () => {
        const postData = teacher;
        const postAccount = account;

        postData.homeroomClass = teacher.homeroomTeacher ? classList[selectClass]._id : null;
        postData.account = account._id;

        try {
            const result = await teacherService.update(postAccount, postData);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCancel = () => {
        navigate('/manager/teacher');
    }

    return teacher._id === " "
        ?
        <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
        :
        <MainCard title="Cập nhật tài khoản giáo viên">
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    Thông tin tài khoản
                </Typography>
                <Box mt={3}>
                    <TextField
                        label="Họ và tên"
                        required
                        variant="standard"
                        value={account.name}
                        onChange={(event) => setAccount(prev => ({
                            ...prev,
                            name: event.target.value
                        }))}
                        sx={inputStyle}
                        error={warning.name ? true : false}
                        helpertext={warning.name}
                        onBlur={(event) => {
                            if (event.target.value === '') {
                                setWarning(prev => ({ ...prev, name: 'Chưa nhập tên.' }))
                            }
                        }}
                        onFocus={() => setWarning(prev => ({ ...prev, name: null }))}
                        inputProps={offAutoComplete} />
                    <TextField label="Tài khoản đăng nhập"
                        required
                        value={account.username}
                        error={warning.username ? true : false}
                        helpertext={warning.username}
                        onBlur={(event) => {
                            if (event.target.value === '') {
                                setWarning(prev => ({ ...prev, username: 'Chưa nhập tài khoản.' }))
                            }
                        }}
                        onFocus={() => setWarning(prev => ({ ...prev, username: null }))}
                        onChange={(event) => setAccount(prev => ({
                            ...prev,
                            username: event.target.value
                        }))}
                        variant="standard"
                        sx={inputStyle}
                        inputProps={offAutoComplete} />
                </Box>
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    Thông tin cá nhân
                </Typography>
                <Box mt={2}>
                    <TextField label="Dân tộc"
                        required
                        variant="standard"
                        error={warning.ethnic ? true : false}
                        helpertext={warning.ethnic}
                        onBlur={(event) => {
                            if (event.target.value === '') {
                                setWarning(prev => ({ ...prev, ethnic: 'Cần bổ xung' }))
                            }
                        }}
                        onFocus={() => setWarning(prev => ({ ...prev, ethnic: null }))}
                        sx={inputStyle}
                        value={teacher.ethnic}
                        onChange={(event) => setTeacher(prev => ({
                            ...prev,
                            ethnic: event.target.value
                        }))}
                        inputProps={offAutoComplete} />
                    <TextField label="Số CMND/CCCD"
                        required
                        variant="standard"
                        value={teacher.identityCard}
                        onChange={(event) => setTeacher(prev => ({
                            ...prev,
                            identityCard: event.target.value
                        }))}
                        error={warning.identityCard ? true : false}
                        helpertext={warning.identityCard}
                        onBlur={(event) => {
                            if (event.target.value === '') {
                                setWarning(prev => ({ ...prev, identityCard: 'Chưa điền thông tin' }))
                            }
                        }}
                        onFocus={() => setWarning(prev => ({ ...prev, identityCard: null }))}
                        sx={inputStyle}
                        inputProps={offAutoComplete} />
                    <TextField label="Số điện thoại"
                        required
                        variant="standard"
                        value={teacher.phone}
                        onChange={(event) => setTeacher(prev => ({
                            ...prev,
                            phone: event.target.value
                        }))}
                        error={warning.phone ? true : false}
                        helpertext={warning.phone}
                        onBlur={(event) => {
                            if (event.target.value === '') {
                                setWarning(prev => ({ ...prev, phone: 'Bạn cần nhập số điện thoại' }))
                            }
                        }}
                        onFocus={() => setWarning(prev => ({ ...prev, phone: null }))}
                        sx={inputStyle}
                        inputProps={offAutoComplete} />
                    <TextField label="Email"
                        required
                        type="email"
                        value={teacher.email}
                        error={warning.email ? true : false}
                        helpertext={warning.email}
                        onBlur={(event) => {
                            if (event.target.value === '') {
                                setWarning(prev => ({ ...prev, email: 'Nhập vào email' }))
                            }
                        }}
                        onFocus={() => setWarning(prev => ({ ...prev, email: null }))}
                        onChange={(event) => setTeacher(prev => ({
                            ...prev,
                            email: event.target.value
                        }))}
                        variant="standard"
                        sx={inputStyle}
                        inputProps={offAutoComplete} />
                </Box>
                <Box mt={2}>
                    <TextField label="Số bảo hiểm y tế"
                        required
                        variant="standard"
                        value={teacher.socialInsurance}
                        onChange={(event) => setTeacher(prev => ({
                            ...prev,
                            socialInsurance: event.target.value
                        }))}
                        error={warning.socialInsurance ? true : false}
                        helpertext={warning.socialInsurance}
                        onBlur={(event) => {
                            if (event.target.value === '') {
                                setWarning(prev => ({ ...prev, socialInsurance: 'Cần bổ xung' }))
                            }
                        }}
                        onFocus={() => setWarning(prev => ({ ...prev, socialInsurance: null }))}
                        sx={inputStyle}
                        inputProps={offAutoComplete} />
                    <TextField
                        id="date"
                        required
                        label="Ngày sinh"
                        variant="standard"
                        type="date"
                        sx={inputStyle}
                        InputLabelProps={{ shrink: true, }}
                        value={teacher.birthday ? formatInputDate(teacher.birthday) : formatInputDate('')}
                        onChange={(event) => setTeacher(prev => ({
                            ...prev,
                            birthday: event.target.value
                        }))}
                    />
                    <TextField label="Quê quán"
                        variant="standard"
                        value={teacher.homeTown}
                        onChange={(event) => setTeacher(prev => ({
                            ...prev,
                            homeTown: event.target.value
                        }))}
                        sx={[inputStyle, { width: '280px' }]}
                        inputProps={offAutoComplete} />
                    <TextField label="Nơi ở thường trú"
                        required
                        value={teacher.residence}
                        onChange={(event) => setTeacher(prev => ({
                            ...prev,
                            residence: event.target.value
                        }))}
                        variant="standard"
                        error={warning.residence ? true : false}
                        helpertext={warning.residence}
                        onBlur={(event) => {
                            if (event.target.value === '') {
                                setWarning(prev => ({ ...prev, residence: 'Bổ xung nơi ở' }))
                            }
                        }}
                        onFocus={() => setWarning(prev => ({ ...prev, residence: null }))}
                        sx={[inputStyle, { width: '280px' }]}
                        inputProps={offAutoComplete} />
                </Box>
                <Box mt={2}>
                    <FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={teacher.homeroomTeacher}
                                    onChange={(event) => setTeacher(prev => ({
                                        ...prev,
                                        homeroomTeacher: event.target.checked
                                    }))}
                                />
                            }
                            label="Giáo viên chủ nhiệm" />
                    </FormControl>
                    <FormControl variant="standard" sx={{ minWidth: 120 }}>
                        <InputLabel id="year-filter-select-label">Lớp của nhiệm</InputLabel>
                        <Select
                            labelId="homeroomClass-select-label"
                            id="homeroomClass-select"
                            value={selectClass}
                            label="Class"
                            onChange={(event) => {
                                setSelectClass(event.target.value);
                            }}
                            disabled={!teacher.homeroomTeacher}
                        >
                            {
                                classList.length > 0 &&
                                classList.map((row, index) => {
                                    return <MenuItem key={index} value={index}>{row.name}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Box>
            </CardContent>
            <CardContent sx={{display: 'flex'}}>
                <Box mr={2}>
                    <Button variant="outlined" onClick={handleCancel}>Hủy</Button>
                </Box>
                <Box>
                    <Button variant="contained" onClick={handleSave}>Lưu thay đổi</Button>
                </Box>
            </CardContent>
        </MainCard>

}

export default UpdateTeacher;
