import ClassCard from "./teacher-week-lesson/ClassCard";
import TeacherService from "services/objects/teacher.service";
import { Box } from "@mui/material";
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

const teacherService = new TeacherService();

const TeacherHome = () => {
    const [teacher, setTeacher] = useState({});
    const [classList, setClassList] = useState([])

    const getClassInCharge = async () => {
        try {
            const result = await teacherService.getClassInCharge();
            setClassList(result.data.classInCharge);
        } catch (error) {
            console.log(error);
        }
    }

    const getTeacherInformation = async () => {
        try {
            const result = await teacherService.getInformation();
            const data = result.data;
            setTeacher(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (teacher !== {})
            getClassInCharge();
        else
            getTeacherInformation();
    }, [teacher])

    console.log(teacher)

    return <>
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
    </>
}

export default TeacherHome;