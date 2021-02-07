import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const emailjsAccount = process.env.REACT_APP_EMAILJS_ACCOUNT;
const emailjsTemplate = process.env.REACT_APP_EMAILJS_TEMPLATE;
const emailjsUserKey = process.env.REACT_APP_EMAILJS_USERKEY;

const Mail = ({selectedComics}) => {
    const [mail, setMail] = useState('')

    const sendEmail = async (mail) => {
        const mailTemplate = await templateBuilder(mail, selectedComics)
        emailjs.send(emailjsAccount, emailjsTemplate, mailTemplate, emailjsUserKey)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    const templateBuilder = (mail, comicList) => {
        const template = `
            <table style="border-collapse: collapse; width: 81.9629%; height: 20px; border-style: none;" border="1">
                <tbody>
                ${comicList.map(comic => {
                    return `
                    <tr style="height: 10px; border-style: none;">
                        <td style="width: 10%; height: 20px; border-style: none;" rowspan="2">
                            <img src="${comic.thumbnail.path + "/portrait_medium.jpg"}"/>
                        </td>
                        <td style="width: 90%; height: 5px; border-style: none; padding: 3px 5px;">
                            <span style="font-family: arial, helvetica, sans-serif;">
                                <strong>Título:</strong> ${comic.title}
                            </span>
                        </td>
                    </tr>
                        <tr style="height: 10px; border-style: none;">
                        <td style="width: 90%; height: 80%; text-align: justify; vertical-align: top; border-style: none; padding: 3px 6px;">  
                            <span style="font-family: arial, helvetica, sans-serif;">
                                <strong>Descrição:</strong> ${comic.description !== null ? comic.description : "Descrição Indisponível"}
                            </span>
                        </td>
                    </tr>
                    `
                }).join('')}
                </tbody>
            </table>
        `
        return {
            mailTo: mail,
            mailContent: template
        }
    }

    return (
        <section className="mail">
            <form className="container">
                <span>Envie os quadrinhos selecionados para seu email</span>
                <div className="send-mail">
                    <input type="text" className="input" placeholder="Email" onChange={e => setMail(e.target.value)}/>
                    <button onClick={()=> sendEmail(mail)}>Enviar</button>
                </div>
            </form>
        </section>
    )
}

export default Mail


