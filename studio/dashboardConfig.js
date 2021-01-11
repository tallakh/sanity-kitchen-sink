export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffc672420fc871b0481ce42',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-79bidx5a',
                  apiId: 'e21226ac-5a57-45f6-875b-3d0c1211b373'
                },
                {
                  buildHookId: '5ffc67250b762927b2030caa',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-z5ft969c',
                  apiId: 'a26d7f72-df6f-4cd7-933c-e33ed45d6b42'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tallakh/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-z5ft969c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
