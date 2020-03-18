export default {
	ordenarPor: 'prioridade',
	tarefa: {},
	tarefas: {},
	atribuidores: {},
	procurar: ''
	// tarefas: {
	//   'ABC0001': {
	//     id: 'ABC0001',
	//     titulo: 'Incluir um controle de tarefas no Meu Indicador',
	//     data_criacao: '2020/02/20',
	//     data_vencimento: '2020/02/22',
	//     completa: true,
	//     prioridade: 'Alta',
	//     arquivado: false,
	//     bloqueado: false,
	//     demanda: false,
	//     solicitantes: [
	//       {
	//         nome: 'Pandora',
	//         avatar: 'https://api.adorable.io/avatars/400/10f4fd977221d26598c4d53e70602dca.png'
	//       }
	//     ],
	//     evidencias: [
	//       'https://i.pinimg.com/originals/5c/ea/2e/5cea2ecbc496602eb3648c4c7db624fa.jpg',
	//       'https://static.collectui.com/shots/3714250/task-manager-ver-2-large'
	//     ],
	//     comentarios: [
	//       {
	//         nome: 'Pandora',
	//         avatar: 'https://api.adorable.io/avatars/400/10f4fd977221d26598c4d53e70602dca.png',
	//         data_criacao: '2020/02/20',
	//         texto: 'Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus'
	//       }
	//     ]
	//   },
	//   'ABC0002': {
	//     id: 'ABC0002',
	//     titulo: 'Procurar modelos de Layout de controle de tarefas',
	//     data_criacao: '2020/02/21',
	//     data_vencimento: '2020/02/22',
	//     completa: true,
	//     prioridade: 'Alta',
	//     arquivado: false,
	//     bloqueado: false,
	//     demanda: false,
	//     solicitantes: [
	//       {
	//         nome: 'Mika',
	//         avatar: 'https://api.adorable.io/avatars/400/383de7b5785128a7313131f38dcddaa3.png'
	//       }
	//     ],
	//     evidencias: [
	//       'https://static.collectui.com/shots/3335173/getting-started-large',
	//       'https://www.uipixels.com/wp-content/uploads/2017/06/Kanban-Task-Management-App.png'
	//     ],
	//     comentarios: [
	//       {
	//         nome: 'Mika',
	//         avatar: 'https://api.adorable.io/avatars/400/10f4fd977221d26598c4d53e70602dca.png',
	//         data_criacao: '2020/02/21',
	//         texto: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim.'
	//       }
	//     ]
	//   },
	//   'ABC0003': {
	//     id: 'ABC0003',
	//     titulo: 'Mesclar os modelos de layout de controle de tarefas escolhidos',
	//     data_criacao: '2020/02/19',
	//     data_vencimento: '2020/02/22',
	//     completa: false,
	//     prioridade: 'Baixa',
	//     arquivado: false,
	//     bloqueado: false,
	//     demanda: false,
	//     solicitantes: [
	//       {
	//         nome: 'Pandora',
	//         avatar: 'https://api.adorable.io/avatars/400/10f4fd977221d26598c4d53e70602dca.png'
	//       }
	//     ],
	//     evidencias: [
	//       'https://help.scoro.com/img///Screen%20Shot%202018-09-18%20at%2015.49.55.png',
	//       'https://luna1.co/8ec3ef.png',
	//     ],
	//     comentarios: []
	//   },
	//   'ABC0004': {
	//     id: 'ABC0004',
	//     titulo: 'Estilizar com SCSS o seguindo as imagens salvas',
	//     data_criacao: '2020/02/21',
	//     data_vencimento: '2020/02/23',
	//     completa: false,
	//     prioridade: 'Alta',
	//     arquivado: false,
	//     bloqueado: false,
	//     demanda: false,
	//     solicitantes: [
	//       {
	//         nome: 'Mika',
	//         avatar: 'https://api.adorable.io/avatars/400/383de7b5785128a7313131f38dcddaa3.png'
	//       }
	//     ],
	//     evidencias: [
	//       'https://res.cloudinary.com/dapulse/image/upload/f_auto/remote_mondaycom_static/img/s/task-management-software/team%20tasks.png',
	//     ],
	//     comentarios: []
	//   },
	//   'ABC0005': {
	//     id: 'ABC0005',
	//     titulo: 'Criar o layout de Painel à Direta para detalhes da tarefa',
	//     data_criacao: '2020/02/22',
	//     data_vencimento: '2020/02/24',
	//     completa: false,
	//     prioridade: 'Alta',
	//     arquivado: false,
	//     bloqueado: false,
	//     demanda: false,
	//     solicitantes: [
	//       {
	//         nome: 'Mika',
	//         avatar: 'https://api.adorable.io/avatars/400/383de7b5785128a7313131f38dcddaa3.png'
	//       }
	//     ],
	//     evidencias: [
	//       'https://blog.hubstaff.com/wp-content/uploads/2019/05/hubstaff_tasks_promotion@2x.png',
	//     ],
	//     comentarios: [
	//       {
	//         nome: 'Mika',
	//         avatar: 'https://api.adorable.io/avatars/400/10f4fd977221d26598c4d53e70602dca.png',
	//         data_criacao: '2020/02/22',
	//         texto: 'Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.'
	//       }
	//     ]
	//   },
	//   'ABC0006': {
	//     id: 'ABC0006',
	//     titulo: 'Adicionar ao painel à direta campo para adicionar comentários na tarefa',
	//     data_criacao: '2020/02/22',
	//     data_vencimento: '2020/02/25',
	//     completa: false,
	//     prioridade: 'Baixa',
	//     arquivado: false,
	//     bloqueado: false,
	//     demanda: false,
	//     solicitantes: [
	//       {
	//         nome: 'Mika',
	//         avatar: 'https://api.adorable.io/avatars/400/383de7b5785128a7313131f38dcddaa3.png'
	//       }
	//     ],
	//     evidencias: [
	//       'https://www.taskpigeon.co/zimgz/features/personal-tasks-management/task-pigeon-list-view-my-tasks.PNG'
	//     ],
	//     comentarios: []
	//   }
	// }
};
