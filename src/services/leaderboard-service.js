const LeaderboardRepository = require('../repository/leaderboard-repository');
const moment = require('moment');

class LeaderboardService {
    constructor() {
        this.leaderboardRepository = new LeaderboardRepository();
    }

    async createLeaderboardEntry(data) {
        return await this.leaderboardRepository.create(data);
    }

    async getWeeklyLeaderboard() {
        const startOfWeek = moment().startOf('isoWeek').toDate();
        return await this.leaderboardRepository.getLeaderboard({ createdAt: { $gte: startOfWeek } });
    }

    async getMonthlyLeaderboard() {
        const startOfMonth = moment().startOf('month').toDate();
        return await this.leaderboardRepository.getLeaderboard({ createdAt: { $gte: startOfMonth } });
    }

    async getOverallLeaderboard() {
        return await this.leaderboardRepository.getLeaderboard({});
    }

    async updateLeaderboardEntry(id, data) {
        return await this.leaderboardRepository.update(id, data);
    }

    async deleteLeaderboardEntry(id) {
        return await this.leaderboardRepository.destroy(id);
    }
}

module.exports = LeaderboardService;
