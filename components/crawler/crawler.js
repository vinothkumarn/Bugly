let request = require('request')

class Crawler {
	fetchData(url) {
  	return new Promise((resolve, reject) => {
  		request(url, (error, response, body) => {
  			resolve(body)
  		})
  	})
	}
  async getContent(url) {
  	let result = await this.fetchData(url)
  	return result
  }
}

module.exports = Crawler