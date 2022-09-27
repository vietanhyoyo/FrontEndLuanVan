const { default: BaseService } = require("../base.service")

class LinkService extends BaseService {

    addLink = async (link) => {
        const result = await this.api.post('/link/add-link', { link });
        return result;
    }

}

export default LinkService;