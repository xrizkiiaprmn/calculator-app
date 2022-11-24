export default (req, res) => {
  res.status(200).json({ nama: req.query.nama });
};
