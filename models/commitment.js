var ObjectId = mongoose.Schema.Types.ObjectId;

var commitmentSchema = new mongoose.Schema({
  _user: { type: ObjectId, red: 'User', index: true },
  handler: { type: String, required: true },
  last_seen_at: { type: Date, required: true, default: Date.now },
  frequency: { type: String, required: true }
})

var Commitment = mongoose.model('Commitment', commitmentSchema);
module.exports = Commitment;
