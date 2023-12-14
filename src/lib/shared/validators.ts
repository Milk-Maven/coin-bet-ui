import * as zod from 'zod';

import { z } from 'zod';

export const offeringCreateValidation = z.object({
  event_description: z.string().min(10).refine((data) => data !== '', { message: 'Event description is required' }),
  outcomes: z
    .array(z.string().min(1))
    .refine((data) => data.length >= 2, { message: 'At least two outcomes are required' }),
  startDate: z.string().min(1).refine((data) => data !== '', { message: 'Start date is required' }),
  endDate: z.string().min(1).refine((data) => data !== '', { message: 'End date is required' }),
});

// Example usage

export const offeringGetValidation = zod.z.object({
  PostHashHex: zod.z.string(),
  OptionPostHashHex: zod.z.array(zod.z.string()),
  PosterPublicKeyBase58Check: zod.z.string()

});

export type OfferringCreateRequest = zod.TypeOf<typeof offeringCreateValidation>;
export type OfferingGetRequest = zod.TypeOf<typeof offeringGetValidation>;

export const endpoints = {
  betNew: 'bet/new',
  betGet: 'bet/get'
}
