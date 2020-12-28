const axios = require("axios").default;
const { config } = require("../config/index");

class BiosService {
  async getBioByUsername({ username }) {
    let userData = {};
    userData.bio = await axios
      .get(`${config.torreBioUrl}${username}`)
      .then(function (response) {
        console.log(response.data);
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

  async getSkillsByUsername({ username }) {
    let userData = {};
    userData.skills = await axios
      .get(`${config.torreBioUrl}${username}`)
      .then(function (response) {
        let skills = response.data.strengths.map((strength) => strength.name);
        return skills;
      })
      .catch(function (error) {
        console.log("User not found");
        return "";
      });
    userData.skills
      ? (userData.message = "User found")
      : (userData.message = "User not found");
    return userData || "";
  }
}

module.exports = BiosService;
