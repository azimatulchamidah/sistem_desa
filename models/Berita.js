const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const beritaSchema = new mongoose.Schema({
  id_berita: {
    type: Number,
    unique: true,
    
  },
  id_admin: {
    type: Number,
    ref: 'Admin',
    required: true
  },
  judul: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  konten: {
    type: String,
    required: true
  },
  tanggal_unggah: {
    type: Date,
    required: true
  }
});
beritaSchema.plugin(AutoIncrement, { inc_field: 'id_berita', start_seq: 1 });

module.exports = mongoose.model('Berita', beritaSchema);
