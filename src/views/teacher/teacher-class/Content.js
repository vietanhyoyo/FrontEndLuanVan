
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Button } from "@mui/material";
import Text from "ui-component/Text";
import EditContent from "./EditContent";
import moment from "moment";
import { useState, useEffect, useRef } from 'react'
import LessonService from "services/objects/lesson.service";
// import ReactPlayer from 'react-player'

function formatInputDate(dateString) {
    let date = new Date(Date.now());
    if (dateString !== '')
        date = new Date(dateString);
    return moment(date).format('DD-MM-YYYY');
}

const contentStyle = {
    marginTop: "10px",
    paddingRight: "0px",
    paddingLeft: "0px"
}

const lessonService = new LessonService();

const Content = (props) => {

    const theme = useTheme();
    const [lessonContent, setLessonContent] = useState({
        _id: '',
        text: ''
    });
    const divRender = useRef();

    const getAPI = async () => {
        try {
            const result = await lessonService.getLessonContent(props.lesson._id);
            const data = result.data;
            if (data !== "") {
                setLessonContent(data);
            } else {
                console.log("Nodata")
                setLessonContent({
                    _id: '',
                    text: '- - - - - - Chưa có nội dung - - - - - -'
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAPI()
        return () => {
            setLessonContent({
                _id: '',
                text: ''
            })
        }
    }, [props.lesson])

    const topStyle = {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        borderBottom: "1px solid",
        borderColor: theme.palette.grey[200],
        paddingBottom: "0px"
    }

    const titleStyle = {
        borderLeft: "2px solid",
        borderColor: theme.palette.primary.main,
        paddingLeft: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "10px",
        paddingTop: "10px"
    }

    const convertHtml = (xmlString) => {
        if (!xmlString) return <div></div>
        // const str = `<div class="video-reactiv>`
        if (xmlString === "") return <div></div>

        // const firstIndex = xmlString.indexOf("<oembed url=");
        const firstIndex = xmlString.indexOf("<iframe ");
        if (firstIndex === -1) {
            divRender.current.innerHTML = xmlString
            return <div></div>
        } else {
            divRender.current.innerHTML = xmlString

            // const endIndex = xmlString.indexOf("></oembed></figure>") + 19;
            /*const endIndex = xmlString.indexOf("></iframe>") + 10;

            let videoString = xmlString.substring(firstIndex, endIndex);
            const first = videoString.indexOf('"');
            const end = videoString.lastIndexOf('"');
            videoString = videoString.substring(first + 1, end);*/

            // return <ReactPlayer width="100%" height="400px" controls={true} url={videoString} />;
            return <div></div>
        }
    }

    return (
        <>
            <Box marginBottom={"16px"}>
                <Box sx={topStyle}>
                    <Typography sx={titleStyle} variant="h5">{props.lesson.title}</Typography>
                    <Typography variant="caption" paddingTop="8px">{
                        props.lesson.date ? formatInputDate(props.lesson.date) : formatInputDate('')
                    }</Typography>
                </Box>
                <Box sx={contentStyle}>
                    <Text
                        sx={noteText}
                    >
                        {props.lesson.note}
                    </Text>
                    <div ref={divRender}></div>
                    {convertHtml(lessonContent.text)}
                    <EditContent lesson={props.lesson} reLoad={getAPI} />
                </Box>
            </Box>
        </>)
}

const noteText = {
    display: "block",
    textAlign: "right",
    width: "100%",
    fontStyle: 'italic',
    m: 1,
    color: "gray"
}

export default Content;