import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  data: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: process.env.MY_SECRET || '' });
}
