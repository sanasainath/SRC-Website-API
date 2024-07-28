const ProjectService = require('../services/project-service');

class ProjectController {
    constructor() {
        this.projectService = new ProjectService();
    }

    createProject = async (req, res) => {
        try {
            const projectData = req.body;
            console.log("Req file", req.file);

            if (req.file) {
                const filePath = req.file.path;
                const fileBuffer = fs.readFileSync(filePath);
                const fileBase64 = fileBuffer.toString('base64');
                console.log("in controller:", filePath, fileBuffer, fileBase64);
                // Add the Base64 image to testimonialData
                projectData.image = fileBase64;

                // Delete the file after converting to Base64
                fs.unlinkSync(filePath);
            }
            const project = await this.projectService.createProject(projectData);
            res.status(201).json({
                success:true,
                message:'Successfully Created'
            });
        } catch (error) {
            console.error('Controller: Error creating project:', error.message);
            res.status(500).json({ message: 'Failed to create project', error: error.message });
        }
    };

    getAllProjects = async (req, res) => {
        try {
            const projects = await this.projectService.getAllProjects();
            res.status(200).json(projects);
        } catch (error) {
            console.error('Controller: Error fetching all projects:', error.message);
            res.status(500).json({ message: 'Failed to fetch projects', error: error.message });
        }
    };

    getProjectById = async (req, res) => {
        try {
            const project = await this.projectService.getProjectById(req.params.id);
            res.status(200).json(project);
        } catch (error) {
            console.error('Controller: Error fetching project by ID:', error.message);
            res.status(500).json({ message: 'Failed to fetch project', error: error.message });
        }
    };

    updateProject = async (req, res) => {
        try {
            const project = await this.projectService.updateProject(req.params.id, req.body);
            res.status(200).json(project);
        } catch (error) {
            console.error('Controller: Error updating project:', error.message);
            res.status(500).json({ message: 'Failed to update project', error: error.message });
        }
    };

    deleteProject = async (req, res) => {
        try {
            await this.projectService.deleteProject(req.params.id);
            res.status(204).json({
                success:true,
                message:'Deleted'
            });
        } catch (error) {
            console.error('Controller: Error deleting project:', error.message);
            res.status(500).json({ message: 'Failed to delete project', error: error.message });
        }
    };

    findProjectsByDomain = async (req, res) => {
        try {
            const projects = await this.projectService.findProjectsByDomain(req.params.domainId);
            res.status(200).json(projects);
        } catch (error) {
            console.error('Controller: Error finding projects by domain:', error.message);
            res.status(500).json({ message: 'Failed to find projects by domain', error: error.message });
        }
    };
}

module.exports = new ProjectController();

