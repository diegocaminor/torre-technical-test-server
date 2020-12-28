const axios = require("axios").default;
const { config } = require("../config/index");

class BiosService {
  async getBioByUsername({ username }) {
    console.log("get bio by username");
    let userData = {};
    userData.bio = await axios
      .get(`${config.torreBioUrl}${username}`)
      .then(function (response) {
        console.log("User found!!!!");
        console.log(response.data);
        console.log("User found!!!!");
        return response.data;
      })
      .catch(function (error) {
        console.log("User not found");
        return "";
      });
    userData.bio
      ? (userData.message = "User found")
      : (userData.message = "User not found");
    return userData || "";
  }
}

module.exports = BiosService;
