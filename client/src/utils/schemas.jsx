
import { z } from "zod";
 
export const campingSchema = z.object({
    title: z.string().min(2, "Title must be more than 2 charactor"),
    price: z.coerce.number(),
    description: z.string().max(50, "Description must be less than 50 charactor"),
    category: z.string(),
    lat: z.coerce.number(),
    lng: z.coerce.number(),
    image:z.any()
})
export const profileSchema = z.object({
    firstname: z.string()
    .min(2,"firstname must be mores than 2 charactor")
    .max(30,"firstname must be less than 30 charactor")
    ,
    lastname: z.string()
    .min(2,"lastname must be mores than 2 charactor")
    .max(30,"lastname must be less than 30 charactor")
})