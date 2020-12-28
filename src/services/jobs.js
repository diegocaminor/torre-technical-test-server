const axios = require("axios").default;
const { config } = require("../config/index");

class JobsService {
  async getMatchJobs(skills) {
    let conditions = [];
    for (var i in skills) {
      conditions.push({
        "skill/role": {
          text: skills[i],
          experience: "potential-to-develop",
        },
      });
    }
    const body = {
      or: conditions,
    };
    const jobs = {};
    jobs.matchedJobs = await axios
      .post(
        `${config.torreSearchUrl}opportunities/_search/?currency=USD%24&page=0&periodicity=hourly&lang=es&size=20&aggregate=true&offset=0`,
        body
      )
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log("No match :( Try updating your skills");
        return "";
      });
    jobs.matchedJobs
      ? (jobs.message = "Jobs matched found :D")
      : (jobs.message = "No matched jobs :( Try updating your skills");
    return jobs || "";
  }
}

module.exports = JobsService;
