import { h as defineCollection } from './content-utils_C_m-R6rd.mjs';
import { o as objectType, s as stringType, h as arrayType, i as booleanType, j as dateType } from './astro/server_b2Tgnq0S.mjs';

defineCollection({
  schema: objectType({
    title: stringType(),
    published: dateType(),
    updated: dateType().optional(),
    draft: booleanType().optional().default(false),
    description: stringType().optional().default(""),
    image: stringType().optional().default(""),
    tags: arrayType(stringType()).optional().default([]),
    category: stringType().optional().nullable().default(""),
    lang: stringType().optional().default(""),
    /* For internal use */
    prevTitle: stringType().default(""),
    prevSlug: stringType().default(""),
    nextTitle: stringType().default(""),
    nextSlug: stringType().default("")
  })
});
defineCollection({
  schema: objectType({})
});
