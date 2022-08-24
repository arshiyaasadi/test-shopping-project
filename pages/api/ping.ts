import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    ping: string | 'pong'
    version: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({ping: 'pong', version: '0.2.0'})
}
