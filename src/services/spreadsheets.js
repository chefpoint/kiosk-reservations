/* * */
/* IMPORTS */
import { GoogleSpreadsheet } from "google-spreadsheet";
import settings from "../settings/general";

async function listRows() {
  const doc = new GoogleSpreadsheet(settings["google-sheets-document-id"]);
  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY
  });
  await doc.loadInfo();
  const sheet = doc.sheetsById[settings["google-sheets-sheet-id"]];
  return await sheet.getRows();
}

async function updateRows(index, key, value) {
  const doc = new GoogleSpreadsheet(settings["google-sheets-document-id"]);
  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY
  });
  await doc.loadInfo();
  const sheet = doc.sheetsById[settings["google-sheets-sheet-id"]];
  const rows = await sheet.getRows();
  rows[index - 2][key] = value;
  await rows[index - 2].save();
}

async function addNewRow(row) {
  const doc = new GoogleSpreadsheet(settings["google-sheets-document-id"]);
  await doc.useServiceAccountAuth({
    client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY
  });
  await doc.loadInfo();
  const sheet = doc.sheetsById[settings["google-sheets-sheet-id"]];
  await sheet.addRow(row);
}

export default { listRows, updateRows, addNewRow };
