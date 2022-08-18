const { default: BaseService } = require("../base.service")

class ClassService extends BaseService {

    getAllSchoolYear = async () => {
        const result = await this.api.get('/class/school-year');
        return result;
    }

    addSchoolYear = async (text) => {
        const result = await this.api.post('/class/add-school-year', { name: text });
        return result;
    }

    deleteSchoolYear = async (id) => {
        const result = await this.api.post('/class/delete-school-year', { id });
        return result;
    }

    addClass = async (obj) => {
        const result = await this.api.post('/class/add-new-class', obj);
        return result;
    }

    getClassListByYear = async (year) => {
        const result = await this.api.post('/class/class-list-by-year', { schoolYear: year });
        return result;
    }

    deleteClass = async (id) => {
        const result = await this.api.post('/class/delete-class', { id });
        return result;
    }

    editClass = async (obj) => {
        const result = await this.api.post('/class/change-class', obj);
        return result;
    }
}

export default ClassService;