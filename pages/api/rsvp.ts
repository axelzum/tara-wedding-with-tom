import {NextApiRequest, NextApiResponse} from 'next';
import {RESPONSE_OK} from '../../constants/status-codes';
import prisma from '../../lib/prisma';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const body = req.body;
    console.log(body.name);

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


    res.status(RESPONSE_OK).json({name: `${body.name}`});
};

export default handler;
