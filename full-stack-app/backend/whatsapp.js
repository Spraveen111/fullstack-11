import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

const accountSid = "AC2ee2eb51382a0072df9c4b64f416fc47";
const authToken = "ec8f9bad44c757aabfb273a32479354a";

const client = new twilio(accountSid, authToken);

export default async function whatsappSms(messageBody, phoneNumber) {
  try {
    const message = await client.messages.create({
      body: messageBody,
      from: "whatsapp:+14155238886",
      to: `whatsapp:${phoneNumber}`,
    });
    console.log(`Message sent successfully with SID: ${message.sid}`);
    return message.sid; // or any other meaningful response
  } catch (error) {
    console.error(`Failed to send WhatsApp message: ${error.message}`);
    throw error;
  }
}
