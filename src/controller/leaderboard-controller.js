const LeaderboardService = require('../services/leaderboard-service');

class LeaderboardController {
    constructor() {
        this.leaderboardService = new LeaderboardService();
    }

    async createLeaderboardEntry(req, res) {
        try {
            const data = req.body;
            const newEntry = await this.leaderboardService.createLeaderboardEntry(data);
            res.status(201).json(newEntry);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getWeeklyLeaderboard(req, res) {
        try {
            const leaderboard = await this.leaderboardService.getWeeklyLeaderboard();
            res.json(leaderboard);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getMonthlyLeaderboard(req, res) {
        try {
            const leaderboard = await this.leaderboardService.getMonthlyLeaderboard();
            res.json(leaderboard);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getOverallLeaderboard(req, res) {
        try {
            const leaderboard = await this.leaderboardService.getOverallLeaderboard();
            res.json(leaderboard);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateLeaderboardEntry(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            const updatedEntry = await this.leaderboardService.updateLeaderboardEntry(id, data);
            res.json(updatedEntry);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteLeaderboardEntry(req, res) {
        try {
            const { id } = req.params;
            await this.leaderboardService.deleteLeaderboardEntry(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new LeaderboardController();
