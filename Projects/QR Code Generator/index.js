import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// taking url as input from user.
inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter a URL:",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const { url } = answers;

    // qr part

    let qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr_image.png"));
    console.log("QR Saved!");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log(error);
    }
  });
