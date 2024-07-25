const DataPenduduk = require('../models/DataPenduduk');

exports.createDataPenduduk = async (req, res) => {
  try {
    const dataPenduduk = new DataPenduduk(req.body);
    await dataPenduduk.save();
    res.status(201).send(dataPenduduk);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getDataPenduduks = async (req, res) => {
  try {
    const dataPenduduks = await DataPenduduk.find();
    res.status(200).send(dataPenduduks);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDataPendudukById = async (req, res) => {
  try {
    const dataPenduduk = await DataPenduduk.findById(req.params.id);
    if (!dataPenduduk) {
      return res.status(404).send();
    }
    res.status(200).send(dataPenduduk);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateDataPenduduk = async (req, res) => {
  try {
    const dataPenduduk = await DataPenduduk.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!dataPenduduk) {
      return res.status(404).send();
    }
    res.status(200).send(dataPenduduk);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteDataPenduduk = async (req, res) => {
  try {
    const dataPenduduk = await DataPenduduk.findByIdAndDelete(req.params.id);
    if (!dataPenduduk) {
      return res.status(404).send();
    }
    res.status(200).send(dataPenduduk);
  } catch (error) {
    res.status(500).send(error);
  }
};
