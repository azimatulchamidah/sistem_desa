const Penduduk = require('../models/Penduduk');

exports.createPenduduk = async (req, res) => {
  try {
    const penduduk = new Penduduk(req.body);
    await penduduk.save();
    res.status(201).send(penduduk);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPenduduks = async (req, res) => {
  try {
    const penduduks = await Penduduk.find();
    res.status(200).send(penduduks);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPendudukById = async (req, res) => {
  try {
    const penduduk = await Penduduk.findById(req.params.id);
    if (!penduduk) {
      return res.status(404).send();
    }
    res.status(200).send(penduduk);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatePenduduk = async (req, res) => {
  try {
    const penduduk = await Penduduk.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!penduduk) {
      return res.status(404).send();
    }
    res.status(200).send(penduduk);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deletePenduduk = async (req, res) => {
  try {
    const penduduk = await Penduduk.findByIdAndDelete(req.params.id);
    if (!penduduk) {
      return res.status(404).send();
    }
    res.status(200).send(penduduk);
  } catch (error) {
    res.status(500).send(error);
  }
};
