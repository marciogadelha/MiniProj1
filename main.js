var menu = ['Quem sou eu?', 'O que faço?', 'Hobbies']
var description = [
    'Eu sou Márcio Gadelha. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet commodo felis. Mauris congue bibendum tortor, a finibus quam eleifend vel. Aliquam blandit rhoncus ornare. Ut maximus in nulla at feugiat. Aenean dapibus pulvinar eros eget dapibus. Donec lorem arcu, sodales sed feugiat non, tristique sed massa. In efficitur tortor augue, quis congue magna dignissim egestas. Quisque vel neque quis tellus dapibus porta. Vestibulum tempor rhoncus metus vitae molestie. Nam metus dolor, aliquet non condimentum ut, tempus id mauris. Mauris pretium orci vitae nisi ornare, vel condimentum libero egestas. Morbi sit amet tincidunt ex.',
    'Trabalho com Tecnologia da Informação. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    'Gosto de jogar futebol e viajar. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
]

var app = new Vue({
    el: '#app',
    data: {
        title: 'Márcio Gadelha CV',
        profile_img: 'profile_square.png',
        menu: menu,
        description: description,
        item_title: menu[0],
        item_description: description[0],
        footer: ['Github', 'Linkedin', 'Gmail'],
        footer_links: [
            'https://github.com/marciogadelha',
            'https://www.linkedin.com/in/marcio-gadelha/',
            'mailto:marciogadelha89@gmail.com'
        ],
        footer_images: [
            'https://camo.githubusercontent.com/a72e38e927efe04e6f600b1596e7ff2974f4f15bd7537996c5408635b7674700/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4769746875622d3030303f7374796c653d666c61742d737175617265266c6f676f3d476974687562266c6f676f436f6c6f723d7768697465266c696e6b3d68747470733a2f2f6769746875622e636f6d2f6d617263696f676164656c6861',
            'https://camo.githubusercontent.com/0c2441f95e7a020fac64076a4eacd8f8cb534f43dd6687a73a2bcfa364afaf2b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4c696e6b6564496e2d626c75653f7374796c653d666c61742d737175617265266c6f676f3d4c696e6b6564696e266c6f676f436f6c6f723d7768697465266c696e6b3d68747470733a2f2f7777772e6c696e6b6564696e2e636f6d2f696e2f6d617263696f2d676164656c68612f',
            'https://camo.githubusercontent.com/0e2542f7e3ab6aeaee8068ea039044c322499d9361b7291c2fdc565bcf6a4035/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d476d61696c2d6331343433383f7374796c653d666c61742d737175617265266c6f676f3d476d61696c266c6f676f436f6c6f723d7768697465266c696e6b3d6d61696c746f3a6d617263696f676164656c6861383940676d61696c2e636f6d'
        ]
    }
})
