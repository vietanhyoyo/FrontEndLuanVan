import axios from "axios"

const APIProcessor = {

    post: (path, data) => {

        const token = sessionStorage.getItem('ACCESS_TOKEN');

        axios({
            method: 'post',
            url: process.env.REACT_APP_BASE_URL + path,
            data: data,
            headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
                "Authorization": "Beaer" + token
            }
        });
    },

    get: async (path) => {

        const token = sessionStorage.getItem('ACCESS_TOKEN');

        try {
            const result = await axios({
                method: 'get',
                url: process.env.REACT_APP_BASE_URL + path,
                headers: {
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/json",
                    "Authorization": "Beaer " + token
                }
            })
            return result;
        }
        catch (err) {
            return err;
        }
    }

}

export default APIProcessor;