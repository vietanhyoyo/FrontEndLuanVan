const { default: BaseService } = require("../base.service")

class AdminService extends BaseService {

    addAdmin = async (obj) => {
        const result = await this.api.post('/admin/add-admin', obj);
        return result;
    }

    getAdminAccount = async () => {
        const result = await this.api.get('/admin/admin-account');
        return result;
    }
}

export default AdminService;