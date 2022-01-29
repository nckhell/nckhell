import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  if (method === 'POST') {
    const { body } = req

    fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts?hapikey=${process.env.HUBSPOT_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ properties: body }),
      }
    )
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          res
            .status(400)
            .json({ message: 'NOK' })
        }
        res.status(200).json({ message: 'OK' })
      })
      .catch((error) => {
        res.status(400).json({ error })
      })
  }
}
