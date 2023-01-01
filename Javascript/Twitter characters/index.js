var tweet = prompt("Enter your string: ")
const length = tweet.length
const current = 280-length // max character limits is 280
alert("You have entered " + length + " characters. The limit is 280 and now you have only " + current + " characters remaining")
alert("You can only tweet this: \n\n" + tweet.slice(0, 280))
alert("The extra characters are: \n\n" + tweet.slice(280, length))