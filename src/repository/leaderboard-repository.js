const CrudRepository = require('./crud-repository');
const Leaderboard = require('../models/leaderboard-model');

class LeaderboardRepository extends CrudRepository {
    constructor() {
        super(Leaderboard);
    }

    async getLeaderboard(filter) {
        try {
            return await this.model.find(filter)
                .sort({ score: -1 })
                .populate('user')
                .populate('event');
        } catch (error) {
            throw new Error(`Error getting leaderboard: ${error.message}`);
        }
    }
}

module.exports = LeaderboardRepository;
