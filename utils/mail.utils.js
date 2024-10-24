import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.NODE_ENV !== 'development',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendEmail = async (dto) => {
  const { sender, recipients, subject, htmlMessage } = dto;

  // Generate a plain text version for the email
  const textMessage = htmlMessage.replace(/<\/?[^>]+(>|$)/g, "");

  return await transport.sendMail({
    from: sender,
    to: recipients,
    subject,
    html: htmlMessage,
    text: textMessage,
  });
};
