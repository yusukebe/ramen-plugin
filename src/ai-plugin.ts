export const aiPluginJson = (baseURL: string) => {
  return {
    schema_version: 'v1',
    name_for_human: 'ramen_plugin',
    name_for_model: 'ramen_plugin',
    description_for_human: 'Ramen Plugin',
    description_for_model: 'Plug-in that displays ramen images if the user is hungry or talking about ramen',
    auth: {
      type: 'none'
    },
    api: {
      type: 'openapi',
      url: `${baseURL}/openapi.json`
    },
    logo_url: 'https://ss.yusukebe.com/be99585132e5a56b354b04ada30b3910dc08b2e29bc95fe6b5f18f066de62b44_800x785.png',
    contact_email: 'support@example.com',
    legal_info_url: 'https://example.com/legal'
  }
}
