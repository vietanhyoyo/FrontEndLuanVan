import { Box } from '@mui/material'
import { Link } from 'react-router-dom';
import TeacherService from "services/objects/teacher.service";
import SiteService from "services/objects/site.service";
import { useEffect, useState } from "react";
import ClassCard from "./teacher-class/ClassCard";

const teacherService = new TeacherService();

const SubjectTeacherClass = () => {

    const [classList, setClassList] = useState([])

    const getClassInCharge = async () => {
        try {
            const result = await teacherService.getClassInCharge();
            setClassList(result.data.classInCharge);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getClassInCharge();
    }, [])

    return <div>
        {
            classList.length === 0 ? <div>Chưa tìm thấy</div> :
                classList.map((row, index) => {
                    return <Box mb={3} key={index}>
                        <Link to={`/teacher/class/${row._id}`}>
                            <ClassCard isLoading={false} classInCharge={row} />
                        </Link>
                    </Box>
                })
        }
    </div>
}

export default SubjectTeacherClass;