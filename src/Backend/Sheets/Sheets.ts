import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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

  res.setHeader("Allow", ["GET"]);
  res.status(405).end("Method Not Allowed");
}
