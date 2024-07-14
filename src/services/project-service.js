const {ProjectRepository} = require('../repository/index');
const {Domain}=require('../models/index');

class ProjectService {
    constructor() {
        this.projectRepository = new ProjectRepository();
    }

    async createProject(data) {
        try {
            const project=await this.projectRepository.create(data);

            const domain = await Domain.findById(data.domainId);
            if (!domain) {
                throw new Error('Domain not found');
            }
            domain.projects.push(newResource._id);
            await domain.save();
            return project;
        } catch (error) {
            console.error('Service: Error creating project:', error.message);
            throw new Error('Failed to create project.');
        }
    }

    async getAllProjects() {
        try {
            return await this.projectRepository.getAll();
        } catch (error) {
            console.error('Service: Error fetching all projects:', error.message);
            throw new Error('Failed to fetch projects.');
        }
    }

    async getProjectById(id) {
        try {
            return await this.projectRepository.get(id);
        } catch (error) {
            console.error('Service: Error fetching project by ID:', error.message);
            throw new Error('Failed to fetch project.');
        }
    }

    async updateProject(id, data) {
        try {
            return await this.projectRepository.update(id, data);
        } catch (error) {
            console.error('Service: Error updating project:', error.message);
            throw new Error('Failed to update project.');
        }
    }

    async deleteProject(id) {
        try {
            return await this.projectRepository.destroy(id);
        } catch (error) {
            console.error('Service: Error deleting project:', error.message);
            throw new Error('Failed to delete project.');
        }
    }

    async findProjectsByDomain(domainId) {
        try {
            return await this.projectRepository.findByDomain(domainId);
        } catch (error) {
            console.error('Service: Error finding projects by domain:', error.message);
            throw new Error('Failed to find projects by domain.');
        }
    }
}

module.exports = ProjectService;
