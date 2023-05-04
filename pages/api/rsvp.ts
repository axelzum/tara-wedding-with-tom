import {NextApiRequest, NextApiResponse} from 'next';
import {
    RESPONSE_BAD_REQUEST,
    RESPONSE_INTERNAL_SERVER_ERROR,
    RESPONSE_NOT_FOUND,
    RESPONSE_NOT_IMPLEMENTED,
    RESPONSE_OK
} from '../../constants/status-codes';
import prisma from '../../lib/prisma';
import moment from 'moment-timezone';

/* eslint-disable @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    if (req.method === 'POST') {
        const rsvp = req.body.rsvp;
        rsvp.completed = true;
        rsvp.last_updated = moment().tz('America/Chicago');
        try {
            console.log(`Updating RSVPID=${rsvp.id} with`, rsvp);
            const updateRsvpResult = await prisma.rSVP.update({
                where: {
                    id: rsvp.id
                },
                data: rsvp
            });
            console.log('RSVP result:', updateRsvpResult);
            const guests = req.body.guests;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            await Promise.all(guests.map(async (guest: any) => {
                console.log(`Updating guestId=${guest.id} with`, guest);
                const guestResponse = await prisma.guest.update({
                    where: {
                        id: guest.id
                    },
                    data: guest
                });
                console.log('Guest result:', guestResponse);
                // return guestResponse
            }));
            res.status(RESPONSE_OK).json('Success');
        } catch (e) {
            res.status(RESPONSE_INTERNAL_SERVER_ERROR).json({error: e});
        }
    } else if (req.method === 'GET') {
        const {name} = req.query;

        if (typeof name !== 'string') {
            res.status(RESPONSE_BAD_REQUEST).json({error: 'Request does not have a valid name query param'});
            return;
        }

        try {
            const guest = await prisma.guest.findFirst({
                where: {
                    name: {
                        equals: name,
                        mode: 'insensitive'
                    }
                },
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
            guests.sort((a, b) => a.id - b.id);
            res.status(RESPONSE_OK).json({rsvp, guests});
        } catch (e) {
            console.log(e);
            res.status(RESPONSE_INTERNAL_SERVER_ERROR).json({error: e});
        }
    } else {
        res.status(RESPONSE_NOT_IMPLEMENTED).json({error: 'HTTP method not supported'});
    }
};

export default handler;
