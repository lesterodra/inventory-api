class BaseController {
  constructor(model) {
    this.model = model;
  }

  async list() {
    return await this.model.findAll({ raw: true });
  }

  async find(id) {
    const resource = await this.model.findByPk(id);
    if (!resource) { throw 'NOT_FOUND'}
    return resource;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async update(id, data) {
    const resource = await this.model.findByPk(id);
    if (!resource) { throw 'NOT_FOUND'}
    return await resource.update(data);
  }

  async delete(id) {
    const resource =  await this.model.findByPk(id);
    if (!resource) { throw 'NOT_FOUND'}
    return await resource.destroy();
  }
}

module.exports = BaseController;