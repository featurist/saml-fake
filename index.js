const {create} = require('fake-sso-idp')
const app = create({
  serviceProvider: {
    metadata: 'http://indigo-slp.herokuapp.com/clients/testsamlclient/auth/saml/metadata',
    destination: 'http://indigo-slp.herokuapp.com/clients/testsamlclient/auth/saml/acs'
  },
      users: [
        {
          id: 'test1',
          name: 'susan@email.com',
          username: 'test1',
          password: 'pwd',
          attributes: {
            emailAddress: {
              format: 'urn:oasis:names:tc:SAML:2.0:attrname-format:uri',
              value: 'susan@email.com',
              type: 'xs:string'
            },
            firstName: {
              format: 'urn:oasis:names:tc:SAML:2.0:attrname-format:uri',
              value: 'Sue',
              type: 'xs:string'
            },
            lastName: {
              format: 'urn:oasis:names:tc:SAML:2.0:attrname-format:uri',
              value: 'Sueson',
              type: 'xs:string'
            },
            employeeIdentifier: {
              format: 'urn:oasis:names:tc:SAML:2.0:attrname-format:uri',
              value: 'employee-666',
              type: 'xs:string'
            }
          }
        },
        {
          id: 'fubar',
          name: 'Test user 2',
          username: 'fubar',
          password: 'pwd',
          attributes: {
            pisa_id: {
              format: 'urn:oasis:names:tc:SAML:2.0:attrname-format:uri',
              value: 'fubar',
              type: 'xs:string'
            }
          }
        }
      ]
})

const port = Number(process.env.PORT || 7000)
app.options.audience = 'http://indigo-slp.herokuapp.com//clients/testsamlclient/auth/saml/metadata'
console.log(`Started on port ${port}...`)
app.listen(port)
