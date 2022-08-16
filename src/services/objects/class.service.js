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
}

export default ClassService;