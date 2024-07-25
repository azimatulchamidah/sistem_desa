const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const adminSchema = new mongoose.Schema({
  id_admin: {
    type: Number,
    unique: true,
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

adminSchema.plugin(AutoIncrement, { inc_field: 'id_admin', start_seq: 1 });

module.exports = mongoose.model('Admin', adminSchema);
