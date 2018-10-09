const cheerio = require('cheerio')

class Evaluate {

	processHtml(url, content) {
		let result = ''
		result += this.processInlineScript(url, content)
		return result
	}

	processInlineScript(url, content) {
		const parser = cheerio.load(content)
		let con = {}
		con[url] = []
		parser('script').each((index, element) => {
			//con += parser(element).html()
			con[url].push(parser(element).html())
		})
		return JSON.stringify(con)
	}

}
module.exports = Evaluate