export const prerender = true;
import { performGraphqlQuery } from '$lib/utils/query.js'
export async function load({}) {
  // retrieve the articles to show on the homepage
  const responseData = await performGraphqlQuery({
    query: `
    {
        allEvents(filter: {datum: {}}, orderBy: datum_ASC) {
          id
          titel
          datum
          omschrijving
          locatie
          toegang
          soort
        }
        homepage {
          introTekst
          ramayanSatsang
          hindiLes
          seminar
        }
      }
    `
  })

  return responseData.data;
  
}