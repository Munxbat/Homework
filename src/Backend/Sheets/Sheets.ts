import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

async function getProductByName(name: string) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: "Products!A:H",
  });

  const rows = res.data.values || [];
  const data = rows.slice(1);

  for (const row of data) {
    if (row[0] === name) {
      return {
        name: row[0],
        description: row[1],
        length: row[2],
        diameter: row[3],
        quantity: row[4],
        stock: row[5],
        category: row[6],
        supplier: row[7],
      };
    }
  }

  return null;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { customerName, email, phone, productName, quantity } = req.body;

    const product = await getProductByName(productName);

    if (!product) {
      return res.status(404).json({ error: "Бүтээгдэхүүн олдсонгүй" });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Orders!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            Date.now(),
            customerName,
            email,
            phone,
            productName,
            quantity,
            product.supplier,
            new Date().toISOString().slice(0, 10),
          ],
        ],
      },
    });

    return res.status(200).json({ message: "Захиалга амжилттай үүслээ" });
  }

  if (req.method === "GET") {
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "Products!A:H",
    });

    const rows = result.data.values || [];
    const products = rows.slice(1).map((row) => ({
      name: row[0],
      description: row[1],
      length: row[2],
      diameter: row[3],
      quantity: row[4],
      stock: row[5],
      category: row[6],
      supplier: row[7],
    }));

    return res.status(200).json(products);
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end("Method Not Allowed");
}
