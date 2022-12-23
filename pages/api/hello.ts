// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';

const STATUS_SUCCESS = 200;

type Data = {
    name: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
): void {
    res.status(STATUS_SUCCESS).json({name: 'John Doe'});
}
