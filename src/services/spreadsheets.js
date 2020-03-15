/* * */
/* IMPORTS */
import { GoogleSpreadsheet } from "google-spreadsheet";
import settings from "../settings/general";

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

async function listRows() {
  const doc = new GoogleSpreadsheet(settings["google-sheets-document-id"]);
  // await doc.useServiceAccountAuth({
  //   client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
  //   private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY
  // });

  await doc.useServiceAccountAuth({
    client_email: "kiosk-terminal@chefpoint.iam.gserviceaccount.com",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrzNVDmo7WN8io\n1Xs+EZvBIg3F6Kyak12crq5Cx+1NQZ7NuM57rl7/hRHvGsy7ZcpY0h7hdND+Cq44\n2WlSjSdBDRbuBFipn0e2hB5uojGxZNBFXUHhHpTLQVUgGSpXss4btKx5wE6AQgKq\nVvFS/2DP8dSnUxImyEAZrRIaeRkoseOYqxPQWW+BAhhExH89GYYQhZp6R1KJx/kz\nby4sFFaSFAPfG5cQM+sr0ijh6lWkY9K4ybt5aGjlgwxyjHQkV9Af6cgT+an8FUHa\nh8TeV6TELr05C6TSXDy7AaFkShmGXhCiPaYeH3QuLgVkcA5ATg3ykpn7+TIJShp8\nrcM00ojvAgMBAAECggEAJsD4dJ0HToRb49XwTJKNR3ZGlBfF48KNUdxHm/Hcclp0\nl6RyE41EibA7WOv7NeSizgFsDOCciknffhxw+Tm1GqP4wa1CUNUIyL+p27wDqKf8\noUEFrOIIn4b3zFtQ5WKEwtQxOe+q5Zy+XC1rl5TbAl1jYnFHPW9bok8br9QUXEzR\noMgYjRGhSdd6YeCe8KZrFawP53IZIln46oxjmtBihpdGKlyEvJFP0nH/8QAXPZCr\n+h5VJ7W3FB3CnqcHqwKLeD43/DuTsIMyBRjHbMjWbYx/4+Aj4eddjogj2mkjuWqD\n7UHzINIr0CCmcyPIgO+WkVGQHDdc6KjTmTEVZ3emNQKBgQDf4aDDyhU/WUc9bqKG\nufnHjfepiktDx+SMSvvR5Xg/nMoyp8fB2r/CHzM2SC3V20GaqnaZBv3Vhq6uER2n\nNdb1T+Qobfar8lZNPP8lEpeBoEUzkAWm+phTamzcEuz+zs2J7rzu2EvwKY7+kCcQ\nmnVkzw7hzPaf9xlmdXMELc4/2wKBgQDEcnIB3y39nf9oSiUtb4qXm05WAXLHZYLY\nmX+7Au2O9DfbAZ3pXSR/SknUcZQc2DWUBPfqJCoyOioZXeXLbt4dGHZ0ZHee+h6j\nSqJJeu3tZnGjfXi8TrEAmUXX+/eMfqzku/kGZXMntyOBic+f+oFv2S5FnLYQTM/A\nc9yuRdCBfQKBgQDHxh4el4S+MnxPZRnB/tHUL+p/btgac5SNW5u5gHn8yXvkF7M4\nWGokXpLkLSQ5YJz51oJdqs92aegVi1BalMBrxg5hxT4H0QcRhQxnmF95W/pkOG/S\nwGqMhLr+5iR0ezUNj+sndfrNI0hl/1vchPecLOeqtaqcs3IG62bmo7kXYQKBgQC4\n8VG5x2Yh5ZRll6BGlUMyFcl7GOP5Ku0zg9eHtWr28Z6ANZZ38/N/Tu4Q7ljViwtt\n7fuEWEXNgYrO1OKZUigT1kr2qvsfFTSw4HvGl8/Vd2O22lJHXgIvoRzrCND2WO/m\na703M11lX3oy4w4v+4POS/XPHYkd8WKJOcrh2uJAdQKBgGqP8zEKPCrrbCpyUush\n12UwdAeyxSniGzrHtfmy2/hBdqQk4sTQpp74bL1kIukLLZtmmknCiP8a1LimkPrb\n8twOJIZO5h487qYFOpA43aYuYA2Gdufp8JblXh3M+P/VBE/MfjY29fRt7j4heuep\n43nWDHLbD4i5sv+jXxbOKFYB\n-----END PRIVATE KEY-----"
  });
  await doc.loadInfo();
  const sheet = doc.sheetsById[settings["google-sheets-sheet-id"]];
  return await sheet.getRows();
}

async function updateRows(index, key, value) {
  const doc = new GoogleSpreadsheet(settings["google-sheets-document-id"]);
  // await doc.useServiceAccountAuth({
  //   client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
  //   private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY
  // });

  await doc.useServiceAccountAuth({
    client_email: "kiosk-terminal@chefpoint.iam.gserviceaccount.com",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCrzNVDmo7WN8io\n1Xs+EZvBIg3F6Kyak12crq5Cx+1NQZ7NuM57rl7/hRHvGsy7ZcpY0h7hdND+Cq44\n2WlSjSdBDRbuBFipn0e2hB5uojGxZNBFXUHhHpTLQVUgGSpXss4btKx5wE6AQgKq\nVvFS/2DP8dSnUxImyEAZrRIaeRkoseOYqxPQWW+BAhhExH89GYYQhZp6R1KJx/kz\nby4sFFaSFAPfG5cQM+sr0ijh6lWkY9K4ybt5aGjlgwxyjHQkV9Af6cgT+an8FUHa\nh8TeV6TELr05C6TSXDy7AaFkShmGXhCiPaYeH3QuLgVkcA5ATg3ykpn7+TIJShp8\nrcM00ojvAgMBAAECggEAJsD4dJ0HToRb49XwTJKNR3ZGlBfF48KNUdxHm/Hcclp0\nl6RyE41EibA7WOv7NeSizgFsDOCciknffhxw+Tm1GqP4wa1CUNUIyL+p27wDqKf8\noUEFrOIIn4b3zFtQ5WKEwtQxOe+q5Zy+XC1rl5TbAl1jYnFHPW9bok8br9QUXEzR\noMgYjRGhSdd6YeCe8KZrFawP53IZIln46oxjmtBihpdGKlyEvJFP0nH/8QAXPZCr\n+h5VJ7W3FB3CnqcHqwKLeD43/DuTsIMyBRjHbMjWbYx/4+Aj4eddjogj2mkjuWqD\n7UHzINIr0CCmcyPIgO+WkVGQHDdc6KjTmTEVZ3emNQKBgQDf4aDDyhU/WUc9bqKG\nufnHjfepiktDx+SMSvvR5Xg/nMoyp8fB2r/CHzM2SC3V20GaqnaZBv3Vhq6uER2n\nNdb1T+Qobfar8lZNPP8lEpeBoEUzkAWm+phTamzcEuz+zs2J7rzu2EvwKY7+kCcQ\nmnVkzw7hzPaf9xlmdXMELc4/2wKBgQDEcnIB3y39nf9oSiUtb4qXm05WAXLHZYLY\nmX+7Au2O9DfbAZ3pXSR/SknUcZQc2DWUBPfqJCoyOioZXeXLbt4dGHZ0ZHee+h6j\nSqJJeu3tZnGjfXi8TrEAmUXX+/eMfqzku/kGZXMntyOBic+f+oFv2S5FnLYQTM/A\nc9yuRdCBfQKBgQDHxh4el4S+MnxPZRnB/tHUL+p/btgac5SNW5u5gHn8yXvkF7M4\nWGokXpLkLSQ5YJz51oJdqs92aegVi1BalMBrxg5hxT4H0QcRhQxnmF95W/pkOG/S\nwGqMhLr+5iR0ezUNj+sndfrNI0hl/1vchPecLOeqtaqcs3IG62bmo7kXYQKBgQC4\n8VG5x2Yh5ZRll6BGlUMyFcl7GOP5Ku0zg9eHtWr28Z6ANZZ38/N/Tu4Q7ljViwtt\n7fuEWEXNgYrO1OKZUigT1kr2qvsfFTSw4HvGl8/Vd2O22lJHXgIvoRzrCND2WO/m\na703M11lX3oy4w4v+4POS/XPHYkd8WKJOcrh2uJAdQKBgGqP8zEKPCrrbCpyUush\n12UwdAeyxSniGzrHtfmy2/hBdqQk4sTQpp74bL1kIukLLZtmmknCiP8a1LimkPrb\n8twOJIZO5h487qYFOpA43aYuYA2Gdufp8JblXh3M+P/VBE/MfjY29fRt7j4heuep\n43nWDHLbD4i5sv+jXxbOKFYB\n-----END PRIVATE KEY-----"
  });
  await doc.loadInfo();
  const sheet = doc.sheetsById[settings["google-sheets-sheet-id"]];
  const rows = await sheet.getRows();
  console.log(rows);
  rows[index - 2][key] = value;
  await rows[index - 2].save(); // save changes
}

export default { listRows, updateRows, addNewRow };
