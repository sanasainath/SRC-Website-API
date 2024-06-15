const {Project} = require('../models/index');
const CrudRepository = require('./crud-repository');

class ProjectRepository extends CrudRepository {
    constructor() {
        super(Project);
    }

    async findByDomain(domainId) {
        try {
            const projects = await Project.find({ domain: domainId }).populate('domain');
            return projects;
        } catch (error) {
            console.error('Error finding projects by domain:', error.message);
            throw new Error('Could not fetch projects for the specified domain.');
        }
    }
}

module.exports = ProjectRepository;
