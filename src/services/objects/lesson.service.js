const { default: BaseService } = require("../base.service")

class LessonService extends BaseService {

    getAll = async (semester) => {
        const result = await this.api.post('/lesson/get-all', { semester });
        return result;
    }
}

export default LessonService;