const { default: BaseService } = require("../base.service")

class TeacherService extends BaseService {

    add = async (obj) => {
        const result = await this.api.post('/teacher/add-teacher', obj);
        return result;
    }

    getAll = async () => {
        const result = await this.api.get('/teacher/get-teachers');
        return result;
    }

    delete = async (accountID, teacherID) => {
        const result = await this.api.post('/teacher/delete-teacher', {
            idAccount: accountID,
            idTeacher: teacherID
        });
        return result;
    }
}

export default TeacherService;