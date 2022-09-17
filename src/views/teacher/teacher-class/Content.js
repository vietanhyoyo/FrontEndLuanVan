
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Button } from "@mui/material";
import ListContainer from "./ListContainer";
import Text from "ui-component/Text";
import Link from "ui-component/Link";
import EditContent from "./EditContent";
import moment from "moment";

function formatInputDate(dateString) {
    let date = new Date(Date.now());
    if (dateString !== '')
        date = new Date(dateString);
    return moment(date).format('DD-MM-YYYY');
}

const Content = (props) => {

    const theme = useTheme();

    const topStyle = {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        borderBottom: "1px solid",
        borderColor: theme.palette.grey[200],
        paddingBottom: "0px"
    }

    const contentStyle = {
        marginTop: "10px",
        paddingRight: "0px",
        paddingLeft: "0px"
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
                    <Text>{props.lesson.note}</Text>
                    <EditContent lesson={props.lesson} />
                </Box>
            </Box>
        </>)
}

export default Content;