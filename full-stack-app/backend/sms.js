import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();
const accountSid = "AC2ee2eb51382a0072df9c4b64f416fc47";
const authToken = "ec8f9bad44c757aabfb273a32479354a";

export default async function sendSMS(messageBody, toPhoneNumber) {
  const client = new twilio(accountSid, authToken);

  try {
    const message = await client.messages.create({
      body: messageBody,
      to: toPhoneNumber,
      from: "+17087264376",
    });
    console.log(`Message sent with SID: ${message.sid}`);
    return message.sid; // Return SID or any other meaningful response
  } catch (error) {
    console.error(`Failed to send message: ${error.message}`);
    throw error;
  }
}
