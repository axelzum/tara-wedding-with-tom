import {NextApiRequest, NextApiResponse} from 'next';
import {RESPONSE_NOT_FOUND, RESPONSE_OK} from '../../constants/status-codes';
import prisma from '../../lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const body = req.body;
    console.log(body.name);

    try {
        const {rsvpId} = await prisma.guest.findFirst({
            where: {
                name: body.name
            },
            select: {
                rsvpId: true
            }
        });
        console.log(rsvpId);
        const rsvp = await prisma.rSVP.findUnique({
            where: {
                id: rsvpId
            }
        });
        console.log(rsvp);

        res.status(RESPONSE_OK).json(rsvp);
    } catch (e) {
        console.log(e);
        res.status(RESPONSE_NOT_FOUND).json(e);
    }
};

export default handler;
