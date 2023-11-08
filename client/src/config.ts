// Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '936dve4enj'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: 'dev-rw75mtumkwli6y6h.us.auth0.com',            // Auth0 domain
  clientId: '3p6LwBRFacSaiV6fMDD2BnoThEl45EKI',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
