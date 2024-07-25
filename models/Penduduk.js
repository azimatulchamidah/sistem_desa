const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const pendudukSchema = new mongoose.Schema({
  id_penduduk: {
    type: Number,
    unique: true,
  },
  id_admin: {
    type: Number,
    ref: 'Admin',
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  alamat: {
    type: String,
    required: true
  },
  tgl_lahir: {
    type: Date,
    required: true
  },
  jenis_kelamin: {
    type: String,
    required: true,
    enum: ['Laki-laki', 'Perempuan']
  },
  no_telepon: {
    type: String,
    required: true
  }
});

pendudukSchema.plugin(AutoIncrement, { inc_field: 'id_penduduk', start_seq: 1 });

module.exports = mongoose.model('Penduduk', pendudukSchema);
