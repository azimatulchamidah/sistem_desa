const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const dataPendudukSchema = new mongoose.Schema({
  id_datapenduduk: {
    type: Number,
    unique: true,
  },
  id_penduduk: {
    type: Number,
    ref: 'Penduduk',
    required: true
  },
  tgl_input: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

dataPendudukSchema.plugin(AutoIncrement, { inc_field: 'id_datapenduduk', start_seq: 1 });

module.exports = mongoose.model('DataPenduduk', dataPendudukSchema);
