import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema({
  trainer_name: {
    type: String,
    required: true,
  },
  team_name: String,
  pokemons: {
    type: [{ _id: false, id: Number, name: String }],
    required: true,
  },
});

export default TeamSchema;