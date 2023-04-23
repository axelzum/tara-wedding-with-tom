import {NextApiRequest, NextApiResponse} from 'next';
import {
    RESPONSE_BAD_REQUEST,
    RESPONSE_INTERNAL_SERVER_ERROR,
    RESPONSE_NOT_FOUND,
    RESPONSE_NOT_IMPLEMENTED,
    RESPONSE_OK
} from '../../constants/status-codes';
import prisma from '../../lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    if (req.method === 'POST') {
        console.log('post', req);
    }
    else if (req.method === 'GET') {
        const {name} = req.query;

        if (typeof name !== 'string') {
            res.status(RESPONSE_BAD_REQUEST).json({error: 'Request does not have a valid name query param'});
            return;
        }

        try {
            const guest = await prisma.guest.findFirst({
                where: {name},
                select: {
                    rsvpId: true
                }
            });
            if (!guest) {
                res.status(RESPONSE_NOT_FOUND).json({error: `We could not find a RSVP for "${name}".`});
                return;
            }
            const rsvp = await prisma.rSVP.findUnique({
                where: {
                    id: guest.rsvpId
                }
            });
            if (!rsvp) {
                res.status(RESPONSE_NOT_FOUND).json({error: `We could not find a RSVP for "${name}"`});
                return;
            }
            const guests = await prisma.guest.findMany({
                where: {
                    rsvpId: rsvp.id
                }
            });
            res.status(RESPONSE_OK).json({rsvp, guests});
        } catch (e) {
            res.status(RESPONSE_INTERNAL_SERVER_ERROR).json({error: e});
        }
    } else {
        res.status(RESPONSE_NOT_IMPLEMENTED).json({error: 'HTTP method not supported'});
    }
};

export default handler;
