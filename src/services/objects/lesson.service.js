const { default: BaseService } = require("../base.service")

class LessonService extends BaseService {

    getAll = async (semester) => {
        const result = await this.api.post('/lesson/get-all', { semester });
        return result;
    }

    add = async (lesson) => {
        const result = await this.api.post('/lesson/add-lesson', lesson);
        return result;
    }

    getSubjectInWeek = async (grade, week) => {
        const result = await this.api.post('/lesson/get-subject-lesson', { grade, week });
        return result;
    }
}

export default LessonService;