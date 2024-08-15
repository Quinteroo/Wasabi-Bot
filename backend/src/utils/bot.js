const puppeteer = require("puppeteer")
const xlsx = require('xlsx');
const path = require('path');
const { log } = require("console");



const bot = async (phoneNumber, message) => {
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

  try {
    await page.waitForSelector('span._akav');
    await page.click('span._akav');
  } catch (error) {
    console.log("❌ Error al acceder al elemento Vincular con teléfono", error)
  }

  try {
    await page.waitForSelector('button.x889kno')
    await page.click('button.x889kno');

    await page.waitForSelector('.x1hx0egp.x6ikm8r.x1odjw0f.x6prxxf.x1k6rcq7.xh8yej3')
    await page.type('.x1hx0egp.x6ikm8r.x1odjw0f.x6prxxf.x1k6rcq7.xh8yej3', "spain")

    await page.waitForSelector('.x1f6kntn.x16h55sf.x1fcty0u.x1rw0npd')
    await page.click('.x1f6kntn.x16h55sf.x1fcty0u.x1rw0npd')

    await page.waitForSelector(".x1n2onr6.xy9n6vp.x1n327nk.xh8yej3.x972fbf.xcfux6l.x1qhh985.xm0m39n.xjbqb8w.x1uvtmcs.x1jchvi3.xss6m8b.xexx8yu.x4uap5.x18d9i69.xkhd6sd")
    await page.type(".x1n2onr6.xy9n6vp.x1n327nk.xh8yej3.x972fbf.xcfux6l.x1qhh985.xm0m39n.xjbqb8w.x1uvtmcs.x1jchvi3.xss6m8b.xexx8yu.x4uap5.x18d9i69.xkhd6sd", `${phoneNumber}`)

    await page.waitForSelector('button.x14v0smp')
    await page.click('button.x14v0smp')

  } catch (error) {
    console.log("❌ Error al acceder con el número al link code", error)
  }



  //! OBTENEMOS Y ENVIAMOS CÓDIGO DE VINCULACIÓN
  try {
    await page.waitForSelector('div[aria-details="link-device-phone-number-code-screen-instructions"]')
    const linkCode = await page.$eval('div[aria-details="link-device-phone-number-code-screen-instructions"]', el => el.getAttribute('data-link-code'));
    console.log(linkCode);

    return linkCode;

    // await page.waitForTimeout(60000);
  } catch (error) {
    console.log("❌ Error al capturar el link code", error);
  }


  //! ACCEDEMOS AL GRUPO + input mensaje

  //! AÑADIMOS TLFN CLIENTE Y MANDAMOS MENSAJE
  // for (const contact of jsonData) {
  //   const customerPhone = contact['teléfono'];
  //   const customerName = contact['nombre'];
  //   const message = `Hola, su número de pedido es: ${order}`;


  //   //! ELIMINAMOS TLF CLIENTE
  // }


  // //! CERRAMOS NAVEGADOR

}



module.exports = { bot }