const puppeteer = require("puppeteer")
const xlsx = require('xlsx');
const path = require('path')



const postMessage = async (req, res, next) => {
  try {
    const { phoneNumber, message } = req.body
    //! LEE ARCHIVO EXCELL
    // const workbook = xlsx.readFile(req.file.path);
    // const sheet_name_list = workbook.SheetNames;
    // const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    //! Eliminar el archivo después de leerlo
    // fs.unlinkSync(req.file.path);


    //! ABRE NAVEGADOR Y ACCEDE A WHT
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--start-maximized']
    });

    const page = await browser.newPage();
    await page.goto('https://web.whatsapp.com/');



    //! ACCESO VINVULACIÓN CON TELÉFONO
    await page.type("#twotabsearchtextbox", `${phoneNumber}`)
    await page.click("#nav-search-submit-button")




    //! ENVIAMOS CÓDIGO DE VINCULACIÓN
    await page.waitForSelector('.link-code')
    const linkCode = await page.$eval('.link-code', el => el.textContent);

    // Enviar el código al frontend
    res.json({ linkCode });

    await page.waitForTimeout(60000);

    //! ACCEDEMOS AL GRUPO + input mensaje

    //! AÑADIMOS TLFN CLIENTE Y MANDAMOS MENSAJE
    for (const contact of jsonData) {
      const customerPhone = contact['teléfono'];
      const customerName = contact['nombre'];
      const message = `Hola, su número de pedido es: ${order}`;


      //! ELIMINAMOS TLF CLIENTE
    }


    //! CERRAMOS NAVEGADOR



  } catch (error) {
    return res.status(400).json(error)
  }

}

module.exports = { postMessage }