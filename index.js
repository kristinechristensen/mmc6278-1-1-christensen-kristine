const { program } = require("commander");
const fs = require("fs/promises");
const chalk = require("chalk");
const QUOTE_FILE = "quotes.txt";

program
  .name("quotes")
  .description("CLI tool for inspiration")
  .version("0.1.0");

program
  .command("getQuote")
  .description("Retrieves a random quote")
  .action(async () => {
    // TODO: Pull a random quote from the quotes.txt file
    // console log the quote and author
    // You may style the text with chalk as you wish
    const data = await fs.readFile(QUOTE_FILE, 'utf-8')
    const quoteArray = data.split("\n")
    const random = Math.floor(Math.random()* quoteArray.length)
    console.log(chalk.bgGreen.white.bold(quoteArray[random]));
  });

program
  .command("addQuote <quote> [author]")
  .description("adds a quote to the quote file")
  .action(async (quote, author) => {
    // TODO: Add the quote and author to the quotes.txt file
    // If no author is provided,
    // save the author as "Anonymous".
    // After the quote/author is saved,
    // alert the user that the quote was added.
    // You may style the text with chalk as you wish
    // HINT: You can store both author and quote on the same line using
    // a separator like pipe | and then using .split() when retrieving

    //check to see if author was included; if not, save as "Anonymous"
    if (author == null) {
      author = "Anonymous"
    }

    //store new quote and append it to the Quote.txt file
    const newQuote = quote + "|" + author
    fs.appendFile(QUOTE_FILE, "\n" + newQuote)

    //output
   console.log(chalk.bgMagenta("Your Quote of") + "\n '" + newQuote + "' \n"+ chalk.bgMagenta("Was Successfully Added!"))

  //console.log("Your Quote of\n'" + newQuote + "' \nWas Successfully Added!")
    
  });

program.parse();
