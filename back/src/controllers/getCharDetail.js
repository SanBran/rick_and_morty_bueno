const axios = require("axios");

const API_KEY = "38b46775c56b.528d02f3101c89a5c099";
const URL = "https://be-a-rym.up.railway.app/api";

const getCharDetail = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL}/character/${id}?key=${API_KEY}`)
    .then((response) => {
      const { id, name, species, image, gender, origin } = response.data;
      res.status(200).json({ id, name, species, image, gender, origin });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// const getCharDetail = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const result = await axios.get(`${URL}/character/${id}?key=${API_KEY}`);
//     const { id, name, species, image, gender, origin } = response.data;
//     res.status(200).json({ id, name, species, image, gender, origin });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

module.exports = getCharDetail;
