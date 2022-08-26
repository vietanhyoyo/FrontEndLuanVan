const { default: BaseService } = require("../base.service")

class StudentService extends BaseService {

    add = async (obj) => {
        const result = await this.api.post('/student/add-student', obj);
        return result;
    }

    getAll = async (id) => {
        const result = await this.api.post('/student/get-class-student', { class: id });
        return result;
    }

}

export default StudentService;