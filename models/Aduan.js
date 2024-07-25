const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);


const aduanSchema = new mongoose.Schema({
  id_aduan: {
    type: Number,
    unique: true,
  },
  id_penduduk: {
    type: Number,
    ref: 'Penduduk',
    required: true
  },
  judul: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    required: true
  },
  tgl_aduan: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});
aduanSchema.plugin(AutoIncrement, { inc_field: 'id_aduan', start_seq: 1 });
module.exports = mongoose.model('Aduan', aduanSchema);
